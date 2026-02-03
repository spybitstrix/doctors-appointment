# doctors-appointment
A simple doctors appointment system
# 🏥 Doctor Appointment Booking System (MERN Stack)

A full-stack web application that allows patients to book appointments with doctors based on real-time availability. Doctors can manage time slots and view booked appointments. The system is built using the **MERN stack** and deployed online.

---

## 🚀 Live Demo

Frontend (GitHub Pages):  
👉 https://spybitstrix.github.io/doctors-appointment/

Backend (Render):  
👉 https://<your-render-backend-url>.onrender.com

---

## 📌 Features

### 👤 Patient
- Register and login
- View list of doctors
- View available appointment slots
- Book appointments
- View booked appointments
- Cancel appointments

### 👨‍⚕️ Doctor
- Register and login
- Create available time slots
- View booked appointments
- See patient details for each booking

### 🔐 Authentication
- Role-based access (Patient / Doctor)
- Session handled using browser localStorage

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router
- HTML, CSS, JavaScript
- GitHub Pages (Hosting)

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Render (Hosting)

---

## 🗂️ Project Structure

Doctors-Appointment-System/
│
├── frontend/
│ ├── src/
│ │ ├── pages/
│ │ ├── components/
│ │ ├── api.js
│ │ └── App.js
│ └── package.json
│
├── backend/
│ ├── models/
│ ├── routes/
│ ├── server.js
│ └── .env
│
└── README.md


---

## ⚙️ How to Run Locally

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/spybitstrix/doctors-appointment.git
cd doctors-appointment

2️⃣ Backend Setup
cd backend
npm install


Create a .env file:

MONGO_URI=your_mongodb_atlas_connection_string


Run backend:

node server.js


Backend runs on:

http://localhost:5000

3️⃣ Frontend Setup
cd frontend
npm install
npm start


Frontend runs on:

http://localhost:3000

🌐 Deployment
Frontend

Built using react-scripts

Deployed using gh-pages

Hosted on GitHub Pages

Backend

Deployed on Render

MongoDB Atlas used for database hosting

🧠 System Architecture
React (Frontend)
   ↓ REST API
Express + Node (Backend)
   ↓
MongoDB Atlas (Database)

🔮 Future Enhancements

JWT-based authentication

Email/SMS appointment reminders

Admin dashboard

Payment integration

Video consultation support

📚 Viva Explanation (Quick)

This project is a MERN stack based doctor appointment booking system.
Patients can view doctors and book slots, while doctors manage availability.
MongoDB stores data, Express provides APIs, and React handles the UI.

👨‍💻 Author

Name: Altus
Project Type: Academic / Full Stack Web Development
Tech: MERN Stack

📜 License

This project is for educational purposes.


---

## ✅ What to do next

1️⃣ Save this as **`README.md`** in your project root  
2️⃣ Commit & push:
```bash
git add README.md
git commit -m "Added project README"
git push
