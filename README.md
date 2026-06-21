# ConnectThruCampus
 
 CampusThruConnect is a full-stack web application designed to help college students discover opportunities and engage with their campus community through a single platform. The application enables students to share events, internships, study resources, and community posts while receiving personalized recommendations based on their interests.

## Features

* User Registration and Login with JWT Authentication
* Personalized Dashboard with interest-based recommendations
* Create, view, and delete events
* Create, view, and delete internships
* Share and manage educational resources through links
* Create and delete community posts
* Automatic filtering of expired events and internships
* Responsive and user-friendly interface

## Tech Stack

Frontend

* React.js
* React Router DOM
* Axios
* CSS

Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JSON Web Tokens (JWT)

## Project Structure

frontend/

* src/components
* src/pages
* src/services
* src/css

backend/

* controllers
* models
* routes
* middleware
* config

## Installation

Clone the repository:

git clone <repository-url>

Install frontend dependencies:

cd frontend
npm install

Install backend dependencies:

cd ../backend
npm install

## Environment Variables

Create a .env file in the backend folder and add:

PORT=5001
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

## Running the Application

Start the backend server:

cd backend
npm run dev

Start the frontend:

cd frontend
npm run dev

The frontend runs on:
http://localhost:5173

The backend runs on:
http://localhost:5001

## Modules

Authentication

* Register
* Login
* Logout

Dashboard

* Personalized recommendations
* Quick access navigation

Events

* Create events
* View active events
* Delete own events

Internships

* Add internships
* View active internships
* Delete own internships

Resources

* Share resource links
* View resources
* Delete own resources

Community Feed

* Create posts
* View posts
* Delete own posts

## Future Enhancements

* File upload support for resources
* Event registration system
* Like and comment functionality on posts
* Search and filtering options
* Email notifications
* Admin dashboard

## Authors

CHALLAGUNDLA CHARVI
BVRIT Hyderabad College of Engineering for Women
B.Tech Computer Science and Engineering

