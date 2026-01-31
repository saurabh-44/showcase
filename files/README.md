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

Step 1: Install Dependencies

npm install

Step 2: Setup Environment Variables

Create a .env file in root directory:

MONGO_URL=mongodb://127.0.0.1:27017/leadApp
PORT=3000

If you are using MongoDB Atlas, replace the URL with your Atlas connection string.

Step 4: Start MongoDB

node app.js

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