# 🛒 Freelancing Marketplace Web Application

A full-stack **Freelancing Marketplace Web App** built using the **MERN stack** that allows users to register as freelancers or clients, post gigs, place orders, and manage conversations. The platform features secure authentication, messaging, dashboards, gig management for both buyers and sellers.

---

## 📸 Project Demo

![image](https://github.com/user-attachments/assets/94e0a187-c908-4ade-8f0c-34ca516dbeff)
![image](https://github.com/user-attachments/assets/54f1cc58-b706-4f80-83a5-46d2d51c3336)
![image](https://github.com/user-attachments/assets/762c9fe6-890c-4c92-93af-891958ca8053)


---

## 🚀 Features

- User authentication with **JWT** (login, signup)
- Dynamic gig listing, search, and management
- Buyers can place orders and track order status
- Conversations and messaging system
- Protected routes and access control based on user roles
- Clean, responsive, and modern UI using **React** and **SCSS**
- RESTful API integration using **Axios** and **TanStack React Query**
- Backend middleware for authentication, error handling, and CORS setup

---

## 🛠️ Tech Stack

**Frontend:**
- React.js
- React Router DOM
- TanStack React Query
- Axios
- SCSS (Sass)

**Backend:**
- Node.js
- Express.js
- MongoDB (via Mongoose)
- JSON Web Token (JWT)
- Bcrypt for password hashing
- Middleware for authentication and error handling

**Tools & Utilities:**
- Postman for API testing
- Dotenv for environment variable management

---

## 📂 Project Structure
![image](https://github.com/user-attachments/assets/fdd28ae8-7b91-4148-ae01-4e40fffd0806)


---

## 📝 Run this on your own PC

### 📦 Clone the Repository
```bash
git clone https://github.com/Suj4LB/Freelancing-Marketplace.git
cd Freelancing-Marketplace
```

## Install Dependencies
Install both server-side and client-side dependencies:

For backend:

```bash
cd api
npm install
```

For frontend:

```bash
cd client
npm install
```

⚙️ Configure Environment Variables
Create a .env file in the api/ directory with the following content:

JWT_KEY=<your-secret-jwt-key>

MONGO_URL=<your-mongodb-connection-uri>

▶️ Run the Application
Start the backend server:

```bash
cd api
yarn run
```

Start the frontend:

```bash
cd client
yarn run dev
```

The app will run at: http://localhost:5173/








