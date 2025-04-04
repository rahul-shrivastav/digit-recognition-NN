# Handwritten Digit Recognition

![Python](https://img.shields.io/badge/Python-3.9-blue?style=flat&logo=python) 
![Flask](https://img.shields.io/badge/Flask-2.0.1-black?style=flat&logo=flask) 
![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat&logo=react) 
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.2.0-38B2AC?style=flat&logo=tailwindcss) 
![TensorFlow](https://img.shields.io/badge/TensorFlow-2.14-orange?style=flat&logo=tensorflow)
![Keras](https://img.shields.io/badge/Keras-2.12-D00000?style=flat&logo=keras&logoColor=white)
![Deep Learning](https://img.shields.io/badge/Deep%20Learning-Neural%20Nets-2ECC71?style=flat&logo=brains&logoColor=white)
![NumPy](https://img.shields.io/badge/NumPy-1.21.2-013243?style=flat&logo=numpy)

A simple web application that recognizes handwritten digits using a deep learning model built with TensorFlow and Keras. The backend is powered by Flask, while the interactive frontend is built using React.js and styled with Tailwind CSS. The app demonstrates real-time digit prediction from user-drawn input using a trained neural network.


[![VISIT](https://img.shields.io/badge/-VISIT-blue?style=for-the-badge)](https://recommendation-system-steel.vercel.app/)

## Tech Stack
- ` Python ` : Versatile, high-level, interpreted, easy-to-learn programming language.  
- ` React.js ` : A JavaScript library for building dynamic user interfaces with reusable components.  
- ` Flask ` : A lightweight Python web framework to build APIs.  
- ` TensorFlow ` : An end-to-end open-source framework by Google for machine learning and deep learning applications.  
- ` Keras ` : A user-friendly, high-level neural networks API built on top of TensorFlow for quick experimentation.

## Getting Started

### 1. Clone the Repository
First, clone the repository to your local machine:


```bash
git clone https://github.com/rahul-shrivastav/recommendation-system.git
```
### 2. Install Dependencies
Change the directory and Install the required dependencies by running:

```bash
cd recommendation-system/backend
pip install -r requirements.txt
cd ../frontend
npm install
```

### 3. Setup Environment Variables in Frontend folder

To run this project, you will need to add the following environment variables to your .env file in frontend
```bash
VITE_API
```
A sample .evn file is also provided in the repository.


### 4. Run the application locally

Navigate to `/backend` and run the development backend server :

```bash
python app.py
```
Now navigate to `/frontend` and run the development frontend server :
```bash
npm run dev
```
Open port `5173` on `localhost` with your browser to see the result. 

