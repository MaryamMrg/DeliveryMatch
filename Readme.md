# 🚚 DeliveryMatch

**DeliveryMatch** is a collaborative web application that connects **drivers** with **package senders** to optimize transportation routes, reduce costs, and minimize environmental impact through co-transport.

---

## 📌 Project Objective

To develop a secure, responsive web platform that enables users to send packages by leveraging drivers' available space on existing routes, with tailored features for senders, drivers, and administrators.

---

## 👥 User Roles & Features

### 👤 General User
- Create an account (first name, last name, email, password)
- Secure login
- Edit personal profile information
- Logout securely

### 🚗 Driver
- Post a travel announcement (departure, stops, destination, max dimensions, type of goods, available capacity)
- View incoming transport requests
- Accept or reject requests based on preferences and availability
- Access history of past trips and transported packages

### 📦 Sender
- Search for available routes (filter by destination, date, package type)
- Send transport requests with package details (dimensions, weight, type)
- View request history and previously sent packages

### 🛠️ Administrator
- Access a management dashboard (users, ads, requests)
- Approve or suspend user accounts, assign a "Verified" badge
- View, edit, or delete driver announcements
- Monitor platform performance using **Chart.js** visualizations (e.g., number of ads, acceptance rate, active users)

### ⭐ Bonus Features
- Notifications for important events (request accepted/rejected, delivery confirmation)
- Driver and sender rating system after delivery

---
## UML Diagrams
### Use case Diagram

![Use case Diagram](/UmlDiagrams/usecasediagram.png)

### Class Diagram 
![Class Diagram](/UmlDiagrams/ClassDiagram.png)

### Sequence Diagram

![Sequence Diagram](/UmlDiagrams/sequenceDiagram.png)
## 🛠️ Technologies Used


### Backend
- Spring Boot
- Spring Data JPA
- Spring Security

### Frontend
- Angular 16+
- Angular Material / Bootstrap / Tailwind
- Chart.js for data visualization

### Database
- PostgreSQL / MySQL

### Others
- Docker (Containerization)
- JUnit (Unit Testing)
- Swagger & Postman (API Documentation)

---

