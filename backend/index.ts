import express from 'express';
import type { Express, Request, Response } from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const PORT = 8000;
const app: Express = express();

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const texts = {
    "hu": {
        emailSubject: 'Köszönöm a kapcsolatfelvételt!',
        emailText: (name: string, email: string, message: string) => 
            `Kedves ${name}!\n\nKöszönöm, hogy felvetted velem a kapcsolatot!\n\nÜzeneted: "${message}"\n\nHamarosan visszaírok az ${email} címre.\n\nÜdvözlettel,\nMilkovics Szebasztián!`
    },
    "en": {
        emailSubject: 'Thank you for contacting me!',
        emailText: (name: string, email: string, message: string) => 
            `Dear ${name}!\n\nThank you for contacting me!\n\nYour message: "${message}"\n\nI will reply soon to ${email}.\n\nBest regards,\nMilkovics Szebasztián!`
    }
};

app.post('/api/contact', async (req: Request, res: Response) => {
  const { name, email, message, lang = 'en' } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'Missing data: name, email or message.' });
  }

  const selectedLang = texts[lang as keyof typeof texts] ? lang : 'hu';
  const t = texts[selectedLang as keyof typeof texts];

  const userMailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: t.emailSubject,
    text: t.emailText(name, email, message),
  };

  const notificationMailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: 'New contact from your portfolio!',
    text: `New contact!\nName: ${name}\nEmail: ${email}\nMessage: ${message}\nLang: ${lang}`,
  };

  try {
    await transporter.sendMail(userMailOptions);
    await transporter.sendMail(notificationMailOptions);
    res.json({ success: true, message: 'Message sent!' });
  } catch (error) {
    console.error('Email send error:', error);
    res.status(500).json({ success: false, error: 'An error occurred while sending the email.' });
  }
});

app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'OK' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}.`);
});