# अ-Devo - Hotel Guest Management System

## Description
अ-Devo is an interactive hotel guest management system designed to streamline hotel operations with an intuitive user interface and powerful features. Built using React, Styled Components, Supabase, and JavaScript, it provides a seamless experience for both hotel staff and administrators.

## **Table of Contents**
1. [Project Overview](#project-overview)
2. [System Architecture](#system-architecture)
3. [Core Features](#core-features)
4. [Technology Stack](#technology-stack)
5. [Usage Instructions](#usage-instructions)
6. [UI Walkthrough](#screenshots-and-ui-walkthrough)
7. [Database Schema](#database-schema)
8. [Performance Optimizations](#performance-optimizations)

## **Project Overview**
अ-Devo is a comprehensive hotel guest management system designed to optimize hotel operations through an intuitive and user-friendly interface. The system enables hotel staff to efficiently manage guest information, room bookings, and overall hotel administration. Key features include guest management, booking management, room details management, and an interactive dashboard with visual analytics. The system is built using modern web technologies to ensure a seamless and responsive user experience.

## **System Architecture**
The architecture of अ-Devo is based on a client-server model, where the frontend is developed using React and the backend is managed by Supabase. The system follows a modular architecture, allowing for easy scalability and maintainability.

### **Architecture Diagram**

- **Frontend**: Built with React, featuring Styled Components for styling, React Query for data fetching, and React Router for navigation.
- **Backend**: Managed by Supabase, which handles the database and authentication.
- **Database**: A PostgreSQL database managed by Supabase, storing guest details, room information, bookings, and user data.
- **APIs**: RESTful APIs for communication between the frontend and backend.

## **Core Features**
- **Guest Management**: Manage guest check-ins, check-outs, and guest details efficiently. Allows for quick access and modification of guest records.
- **Booking System**: Seamless room booking process with the ability to manage room details such as price, images, and discounts.
- **Room Management**: Easily add and manage room categories, prices, images, and other relevant details.
- **Interactive Dashboard**: Real-time analytics and visualizations of key metrics like sales, bookings, and occupancy rates, all presented in a responsive dashboard.
- **Dark Mode**: Provides an accessible and user-friendly interface with dark mode for better usability in low-light conditions.

## **Technology Stack**
- **Frontend**: 
  - React
  - Styled Components
  - React Query
  - React Router
- **Backend**:
  - Supabase (PostgreSQL Database
- **Languages**:
  - JavaScript (ES6+)
- **Tools**:
  - Git & GitHub for version control
  - NPM/Yarn for package management

## **Usage Instructions**
New User can only create by the logged-in staff
if you want to access the website use :- Email -  ajeet123@gmail.com,pass  -  987654321
- **User Authentication**:
  - log in to access the dashboard.
  - Manage user sessions securely with Supabase's authentication features.
- **Navigating the Dashboard**:
  - Access various sections of the dashboard via the sidebar.
  - Toggle dark mode using the theme switcher.
- **Managing Guests**:
   -Add, view, edit, or delete guest records through the Guest Management interface.
   -Quickly search for guests using the search functionality.
- **Booking Rooms**:
   - Navigate to the Booking section to view available rooms and make bookings.
   - Manage booking details such as dates, prices, and guest information.
- **Room Management:
   - Add new rooms, update room details, and manage room images in the Room Management section

## **UI Walkthrough**
"With the motto **अतिथि देवो भव**, I focused on creating a UI that is simple and easy to understand, ensuring our guests have a seamless experience with the management side." 
  - ## **Login Page**
    
   ![loginPage](https://github.com/user-attachments/assets/bf54d536-de28-4c92-9e02-ac809653fada)

  - ## **Landing Page**
    
   ![Landing Page](https://github.com/user-attachments/assets/e301fa04-694f-44aa-988f-6855fe58b401)

  - ## **Darkmode**

  ![Darkmode](https://github.com/user-attachments/assets/a3b2014c-77ac-41f9-adcc-ba6a579e73a3)

  - ## **Interactive Dashboard**

   ![Full dashboard](https://github.com/user-attachments/assets/093b7e81-34ea-4a14-907d-3f0d3fca4bdd)

   ![Dashboad_dark](https://github.com/user-attachments/assets/f9793996-108a-48c7-ba37-c5236e564736)

  - ## **Booking's Details and management**

   ![booking page](https://github.com/user-attachments/assets/dd4aeac6-985e-4256-9f0e-d7f5d176d87c)

   ![unpaid charges](https://github.com/user-attachments/assets/17440d2f-4f8e-4210-8d33-c58ebb7b996a)

   ![Booking Details](https://github.com/user-attachments/assets/1bcaea3e-3e33-43f5-9fc9-077077e15f1b)


  - ## **Rooms Details and management**

   ![cabins](https://github.com/user-attachments/assets/5a9c7193-06d3-4c58-9ace-8674e0d7e2af)

  ![cabin managment](https://github.com/user-attachments/assets/982db81b-5cda-476e-b956-6406918bcf57)

  - **User Profile management**

    ![User profile](https://github.com/user-attachments/assets/6d8ce7e4-64d4-45d4-9c9c-ae851b744b28)

## **Database Schema**
  - Users: Manages user authentication and roles.
  - Guests: Stores guest information.
  - Rooms: Contains room details including prices, images, and availability.
  - Bookings: Manages booking records, linking guests and rooms.
  - **ER Diagram**
    ![Database Schecma](https://github.com/user-attachments/assets/ffa44e41-0cdb-437e-903d-edf58aeb89e5)

## **Performance Optimization**
  - Lazy Loading: Implemented lazy loading for large components to reduce initial load times.
  - Prefetching Data: Used React Query to prefetch data, reducing the wait time when navigating between pages.
  - Code Splitting: Split code into smaller bundles to improve load times.
## **Thank you for visiting the project. Feedback is always welcome. Feel free to connect with me** :- https://linkedin.com/in/ajeet-rana-110885288
