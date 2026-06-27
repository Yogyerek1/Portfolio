using dotenv.net;
using DTOs;
using RycloonAPI.Shared.Services.Email;

DotEnv.Load(options: new DotEnvOptions(envFilePaths: [ ".env" ])); // load dotenv file

var builder = WebApplication.CreateBuilder(args);

if (string.IsNullOrEmpty(Environment.GetEnvironmentVariable("APP_URL")))
    throw new Exception("[Error] -> APP_URL enviroment variable is not set.");

if (string.IsNullOrEmpty(Environment.GetEnvironmentVariable("EMAIL_USER")))
    throw new Exception("[Error] -> EMAIL enviroment variable is not set.");

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", policy =>
    {
        policy.WithOrigins(Environment.GetEnvironmentVariable("APP_URL")!)
        .AllowAnyHeader()
        .AllowAnyMethod();
    });
});

builder.Services.AddValidation();

builder.Services.AddScoped<MailService>();

var app = builder.Build();

app.UseCors("AllowFrontend");

app.MapGet("/", () => Results.Ok()); // health check

app.MapPost("/contact", async (ContactDto dto, MailService mailService) => // contact
{
    var templateData = new Dictionary<string, string>
    {
        { "NAME", dto.Name },
        { "EMAIL", dto.Email },
        { "DATE", DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss") },
        { "MESSAGE", dto.Message }
    };

    try
    {
        await mailService.SendMailWithTemplateAsync(dto.Email, $"Thank you for contacting me!", "contact", templateData);
        await mailService.SendMailAsync(Environment.GetEnvironmentVariable("EMAIL_USER")!, "[Portfolio] - New contact!", $"You received a new contact from {dto.Email}!");

        return Results.Ok(new { success = true, message = "Thank you! Your message has been sent. We will continue our conversation over email." });
    }
    catch (Exception ex)
    {
        Console.WriteLine($"[BACKEND ERROR] -> {ex.ToString()}");

        return Results.Json(
            data: new {
                success = false,
                message = "Something went wrong while sending the message. Please try again later."
            },
            statusCode: 500
        );
    }



});

app.Run();
