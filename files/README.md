📒 Lead Manager – Node.js + Express + MongoDB + EJS

A simple and clean Lead / Todo Management Application built using Node.js, Express, MongoDB, and EJS.

This project allows users to create, view, edit, and delete leads. It also provides RESTful APIs for external usage.

🚀 Features

Add new leads (Name, Mobile, Email, Note)

View all leads

Edit existing leads

Delete leads

RESTful API support

Clean MVC structure

Simple UI using EJS

MongoDB database integration

🛠 Tech Stack

Node.js

Express.js

MongoDB

Mongoose

EJS

CSS

dotenv

📁 Project Structure

todo-api-app
│
├── models
│ └── Lead.js
│
├── routes
│ ├── apiLeadRoutes.js
│ └── webRoutes.js
│
├── public
│ └── style.css
│
├── views
│ ├── index.ejs
│ └── edit.ejs
│
├── app.js
├── .env
├── package.json
└── README.md

⚙️ Installation & Setup
Step 1: Clone Project

git clone https://github.com/your-username/lead-manager.git

cd lead-manager

Step 2: Install Dependencies

npm install

Step 3: Setup Environment Variables

Create a .env file in root directory:

MONGO_URL=mongodb://127.0.0.1:27017/leadApp
PORT=3000

If you are using MongoDB Atlas, replace the URL with your Atlas connection string.

Step 4: Start MongoDB

Make sure MongoDB is running on your system.

For local MongoDB:

mongod

Or start from MongoDB Compass.

Step 5: Run Application

npm start

For development mode:

npm run dev

Open in browser:

http://localhost:3000

🌐 REST API Endpoints

Base URL:

http://localhost:3000/api/leads

Get All Leads

GET /api/leads

Get Single Lead

GET /api/leads/:id

Create Lead

POST /api/leads

Request Body (JSON):

{
"name": "Saurabh",
"mobile": "9999999999",
"email": "test@gmail.com
",
"note": "Call tomorrow"
}

Update Lead

PUT /api/leads/:id

Delete Lead

DELETE /api/leads/:id

🖥 Web Interface Routes

Home Page → /
Add Lead → /add
Edit Lead → /edit/:id
Delete Lead → /delete/:id

All CRUD operations are available via UI.

📈 Future Improvements

User Authentication (JWT)

User-wise Leads

Search and Filter

Pagination

Admin Dashboard

Cloud Deployment

🤝 Contributing

Contributions are welcome.

Steps:

Fork the repository

Create a new branch

Make your changes

Submit a pull request

📜 License

This project is licensed under the MIT License.

👨‍💻 Author

Saurabh Yadav
MERN Stack Developer

⭐ Support

If you like this project, please give it a star on GitHub.
Your support motivates me to build more projects.