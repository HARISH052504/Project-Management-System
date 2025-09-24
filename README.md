*Project Management System*
Overview

The Project Management System (PMS) is a full-stack web application designed to streamline project tracking and collaboration. It helps users monitor project progress, manage tasks, and efficiently communicate within teams. This system aims to improve productivity by organizing project information in a centralized platform.

Features

User Authentication: Sign up, log in, and manage user accounts.

Project Dashboard: View ongoing projects and their progress.

Task Management: Create, assign, and track tasks for each project.

Status Updates: Update project or task status in real-time.

Notifications: Get alerts for project updates and deadlines.

Responsive Design: Works seamlessly on desktop and mobile devices.

Technologies Used

Frontend: React.js, HTML, CSS, JavaScript

Backend: Node.js, Express.js

Database: MongoDB

Authentication: JWT (JSON Web Tokens)

Version Control: Git & GitHub

Installation

Clone the repository

git clone https://github.com/<your-username>/Project-Management-System.git
cd Project-Management-System


Install dependencies

# For backend
cd backend
npm install

# For frontend
cd ../frontend
npm install


Create a .env file in backend

DATABASE=<your MongoDB connection string>
PORT=3000
JWT_SECRET=<your-secret-key>


Run the project

# Backend
cd backend
npm start

# Frontend
cd ../frontend
npm start


Open http://localhost:3000 (backend) and http://localhost:5173 (frontend) in your browser.

Usage

Sign up as a new user or log in with existing credentials.

Create projects and add tasks.

Track progress using the dashboard.

Update task status and receive notifications.
