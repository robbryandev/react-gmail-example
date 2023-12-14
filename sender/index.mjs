import { SMTPClient } from "emailjs";
import { readFileSync } from "fs";
import { join } from "path";
import "dotenv/config";

const client = new SMTPClient({
  user: process.env.GMAIL_EMAIL,
  password: process.env.GMAIL_PASS,
  host: "smtp.gmail.com",
  tls: true,
});

const emailPath = join("__dirname", "../out/main.html");
const body = readFileSync(emailPath, "utf-8");

client.send(
  {
    text: process.env.BACKUP_TEXT,
    from: `${process.env.GMAIL_SENDER_NAME} <${process.env.GMAIL_EMAIL}>`,
    to: `${process.env.TO_NAME} <${process.env.TO_EMAIL}>`,
    subject: process.env.SUBJECT_LINE,
    attachment: [{ data: body, alternative: true }],
  },
  (err, message) => {
    console.log(err || message);
  }
);
