# 🚀 TaskFlow – Node.js Deployment on AWS EC2 using GitHub Actions

## 📌 Project Overview

TaskFlow is a simple Node.js web application deployed on an AWS EC2 instance using GitHub Actions for Continuous Integration and Continuous Deployment (CI/CD). Whenever changes are pushed to the GitHub repository, the application is automatically deployed to the EC2 server.

---

## 🎯 Objectives

* Build a Node.js web application.
* Host the application on AWS EC2.
* Automate deployment using GitHub Actions.
* Demonstrate a complete CI/CD pipeline.

---

## 🛠️ Technologies Used

* Node.js
* Express.js
* HTML & CSS
* Git & GitHub
* GitHub Actions
* AWS EC2
* SSH

---

## 📂 Project Structure

```text
taskflow-nodejs-ec2/
│── .github/
│   └── workflows/
│       └── deploy.yml
│── public/
│   ├── index.html
│   └── style.css
│── app.js
│── package.json
│── package-lock.json
└── README.md
```

---

## ⚙️ Workflow

1. Develop the application locally.
2. Push code to GitHub.
3. GitHub Actions workflow is triggered.
4. GitHub connects securely to AWS EC2 using SSH.
5. Latest code is deployed to the EC2 instance.
6. Application is updated automatically.

---

## ✨ Features

* Automated deployment using GitHub Actions
* Node.js and Express.js web server
* Hosted on AWS EC2
* Continuous Integration & Continuous Deployment (CI/CD)
* Easy to update by pushing code to GitHub

---

## 🚀 How to Run Locally

```bash
git clone https://github.com/umasreeg1/taskflow-nodejs-ec2.git
cd taskflow-nodejs-ec2
npm install
node app.js
```

Open:

```text
http://localhost:3000
```

---

## ☁️ Deployment

The application is deployed on an AWS EC2 instance.

Deployment process:

* Push code to GitHub
* GitHub Actions executes the workflow
* SSH connects to EC2
* Latest code is deployed
* Website is updated automatically

