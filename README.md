# PopX App

A React JS project built as part of an internship assignment. The goal was to convert a given Adobe XD design into a fully functional React application with smooth navigation between screens.

---

## About the Project

PopX is a simple account management interface with four screens — a welcome page, login, account creation, and account settings. The layout is designed to look like a mobile app, centered on the screen with a clean white card on a grey background.

The form data entered during account creation (name and email) is carried over to the account settings page using localStorage, so the profile actually reflects what the user typed in.

---

## Screens

- **Welcome** — Landing page with two options: Create Account or Login
- **Login** — Sign in with email and password
- **Create Account** — Registration form with name, phone, email, password, company name, and agency selection
- **Account Settings** — Displays the user's name and email pulled from the form they filled out

---

## Tech Stack

- React JS (with Vite)
- React Router DOM v6
- CSS (per-page stylesheets)
- Google Fonts — Poppins
- localStorage for passing data between pages

---

## Getting Started

Clone the repo and run it locally:

```bash
git clone https://github.com/YOUR_USERNAME/popx-app.git
cd popx-app
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## Folder Structure

```
popx-app/
├── public/
│   └── index.html
├── src/
│   ├── pages/
│   │   ├── Welcome.jsx
│   │   ├── Welcome.css
│   │   ├── Login.jsx
│   │   ├── Login.css
│   │   ├── CreateAccount.jsx
│   │   ├── CreateAccount.css
│   │   ├── AccountSettings.jsx
│   │   └── AccountSettings.css
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
└── package.json
```

---

## Live Demo

Hosted on Vercel: [https://popx-app.vercel.app](https://popx-app.vercel.app)

GitHub Repository: [https://github.com/YOUR_USERNAME/popx-app](https://github.com/YOUR_USERNAME/popx-app)

---

## Design Reference

The UI was built based on this Adobe XD design:
[https://xd.adobe.com/view/b68eea25-003d-4a5d-8fdd-d463eeb20b32-e3dd](https://xd.adobe.com/view/b68eea25-003d-4a5d-8fdd-d463eeb20b32-e3dd)

---

## Notes

- The app is fully responsive — on smaller screens it stretches to full width
- Navigation between all four pages works seamlessly using React Router
- Code is kept clean and organized with each page having its own JS and CSS file