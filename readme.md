# Send emails made with react through your personal gmail account

## Design your email
- [react-email docs](https://react.email/docs/introduction)
- [tailwind docs](https://tailwindcss.com/docs/installation)

First, install the dependencies:

```sh
npm i
```

Then, run the development server:

```sh
npm run dev
```

Open [localhost:3000](http://localhost:3000) with your browser to see the result.

## Sending your email
### Set up a google app password
sending email over googles smtp server requires you to create a special app password just for this app to avoid security issues.

[Official guide](https://support.google.com/mail/answer/185833?hl=en#:~:text=Under%20%22Signing%20in%20to%20Google,Select%20Generate.)

### Setup environment variables
rename .env.example to .env

```env
# gmail user info
GMAIL_EMAIL="example@gmail.com"
GMAIL_SENDER_NAME="Your Name"

# gmail app specific password
GMAIL_PASS=""

# email fields
BACKUP_TEXT="email failed to render"
SUBJECT_LINE="hello, world"
TO_EMAIL="joe@example.com"
TO_NAME="Joe Shmo"
```

### Build and send your email
```bash
npm run export
npm run send
```