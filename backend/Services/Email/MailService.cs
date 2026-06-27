using MailKit.Net.Smtp;
using MailKit.Security;
using MimeKit;
using MimeKit.Text;

namespace RycloonAPI.Shared.Services.Email;

public interface IMailService
{
    Task SendMailAsync(string to, string subject, string body);
    Task SendMailWithTemplateAsync(string to, string subject, string templateName, Dictionary<string, string> data);
}

public class MailService : IMailService
{
    private readonly string _host;
    private readonly string _email;
    private readonly string _password;
    private readonly int _port;

    public MailService()
    {
        _host = Environment.GetEnvironmentVariable("EMAIL_HOST") ?? throw new InvalidOperationException("[Error] -> EMAIL_HOST environment variable is not set.");
        _email = Environment.GetEnvironmentVariable("EMAIL_USER") ?? throw new InvalidOperationException("[Error] -> EMAIL_USER environment variable is not set.");
        _password = Environment.GetEnvironmentVariable("EMAIL_PASS") ?? throw new InvalidOperationException("[Error] -> EMAIL_PASS environment variable is not set.");
        _port = int.Parse(Environment.GetEnvironmentVariable("EMAIL_PORT") ?? "587");
    }

    private static async Task<string> GetTemplateAsync(string templateName, Dictionary<string, string> placeholders)
    {
        var path = Path.Combine(Directory.GetCurrentDirectory(), "Services", "Email", "Templates", $"{templateName}.html");
        if (!System.IO.File.Exists(path)) throw new FileNotFoundException($"[Error] -> Email '{templateName}' not found.");

        var html = await System.IO.File.ReadAllTextAsync(path);
        foreach (var item in placeholders)
            html = html.Replace($"{{{{{item.Key}}}}}", item.Value);
        
        return html;
    }

    public async Task SendMailWithTemplateAsync(string to, string subject, string templateName, Dictionary<string, string> data)
    {
        var htmlBody = await GetTemplateAsync(templateName, data);
        await SendMailAsync(to, subject, htmlBody);
    }

    public async Task SendMailAsync(string to, string subject, string body)
    {
        var email = new MimeMessage();
        email.From.Add(new MailboxAddress(_email, _email));
        email.To.Add(MailboxAddress.Parse(to));
        email.Subject = subject;
        email.Body = new TextPart(TextFormat.Html) { Text = body };

        using var smtp = new SmtpClient();
        try
        {
            await smtp.ConnectAsync(_host, _port, SecureSocketOptions.SslOnConnect);
            await smtp.AuthenticateAsync(_email, _password);
            await smtp.SendAsync(email);
        }
        finally
        {
            await smtp.DisconnectAsync(true);
        }
    }
}