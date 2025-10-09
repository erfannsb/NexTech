# Database Project 🔍

  

![Alt text](./thumbnail.png)

  
  

A full-stack database management system built with **Django** (Python) on the backend and a frontend (JS) interface.

The system handles user accounts, CRUD operations, and interacts with a MySQL database.

  

---

  

## 🛠️ What the Project Does

  

High-level features:

  

* **User Authentication / Management**

Register, login, logout, profile editing, password handling.

  

* **CRUD Functionality**

Create, Read, Update, Delete operations on one or more domain models (e.g. “profiles”, “transactions”, etc.).

  

* **Frontend-Backend Integration**

The frontend interacts with the backend via HTTP requests (probably REST endpoints) for fetching data, submitting changes, etc.

  
  

* **Database Layer using MySQL**

Django ORM is configured to talk to a MySQL database. All data is persisted there.

  

* **Admin / Dashboard (optional)**

Uses Django’s built-in admin to manage data for debugging or administrative use.

  

---

  

## 🧭 Key Technologies & Concepts

  

* **Django Framework** — for models, views, URL routing, templates, middleware, etc.

* **Django ORM** — to translate Python objects to database rows.

* **MySQL** — relational database for persistence.

* **Frontend (JavaScript / HTML / CSS / React / Tailwind)** — UI to show data, accept input, send API requests.

* **User Auth** — Using Django’s `User` model or a customized version.

* **Routing & API Endpoints** — URLs in Django map to view functions views which respond with HTML or JSON.

  

---

  

## 🚀 Setup & Running (for Developers)

  

Here’s how to set it up:

  

### 1. Clone the repo

  

```bash

git clone https://github.com/erfannsb/Database.git

cd Database/Backend

```

  

### 2. Create a Python virtual environment

  

```bash

python3 -m venv venv

source venv/bin/activate

```

  

### 3. Install dependencies

  

```bash

pip install -r requirements.txt

```

  

(You may need system-level dependencies for `mysqlclient`)

  

### 4. Configure MySQL

  

* Create a MySQL database (e.g. `database_project`)

* Update `backend/settings.py` (or whatever settings file) to point to your DB:

  

```python

DATABASES = {

'default': {

'ENGINE': 'django.db.backends.mysql',

'NAME': 'your_db_name',

'USER': 'your_user',

'PASSWORD': 'your_password',

'HOST': 'localhost',

'PORT': '3306',

}

}

```

  

### 5. Run migrations

  

```bash

python manage.py makemigrations

python manage.py migrate

```

  

### 6. Create a superuser/admin

  

```bash

python manage.py createsuperuser

```

  

### 7. Start the development server

  

```bash

python manage.py runserver

```

  

Then go to `http://127.0.0.1:8000/` (or whatever your host:port) to view.

  

### 8. Frontend

  

* Start the frontend (if it has a build / dev server)

  

```bash

cd Frontend

npm install

npm run dev

```

* The frontend will make calls (GET, POST, PUT, DELETE) to the Django backend endpoints to fetch/update data.

  
> ⚠️ **Caution / Disclaimer**  
> This project is a **prototype** and is by no means a production-ready application.  
> - Some API endpoints may expose sensitive information.  
> - Permissions management is incomplete and may be incorrect.  
> - The app is intended **only as a showcase** of what this project could be; it is not secure or fully tested for real-world deployment.  
> - Do **not** use this for production or with real user data.  
> 
> This is purely for learning, development, and demonstration purposes.
