# Travel Booking System

Welcome to the Travel Booking System! This web application allows users to book flights, hotels, rental cars, trains, buses, and Rapidos (bike taxis) conveniently. 

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- User registration and authentication
- Book flights, hotels, rental cars, trains, buses
- Responsive design for better user experience on different devices
- Modal for user authentication
- Dynamic and interactive user interface

## Technologies Used

- Frontend: HTML, CSS (Bootstrap), JavaScript, jQuery
- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: Passport.js
- Template Engine: EJS

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository:**

    ```sh
    git clone https://github.com/yourusername/travel-booking-system.git
    cd travel-booking-system
    ```

2. **Install dependencies:**

    ```sh
    npm install
    ```

3. **Set up environment variables:**

    Create a `.env` file in the root directory and add the following variables:

    ```sh
    PORT=3000
    MONGODB_URI=your_mongodb_uri
    SESSION_SECRET=your_secret_key
    ```

4. **Run the application:**

    ```sh
    npm start
    ```

    The application will be running on `http://localhost:3000`.

## Usage

Once the application is up and running, you can:

- Register a new user or log in with existing credentials.
- Navigate through different booking options: flights, hotels, rental cars, trains, buses, and Rapidos.
- Use the booking forms to create and manage your bookings.


