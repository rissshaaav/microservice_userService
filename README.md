# User Service

This repository contains the User Service for a social media backend system. The service handles user registration, login, profile management, and password reset functionalities.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
- [Running the Service](#running-the-service)
- [Running Tests](#running-tests)
- [API Endpoints](#api-endpoints)
  - [User Registration](#user-registration)
  - [User Login](#user-login)
  - [Access User Profile](#access-user-profile)
  - [Update User Profile](#update-user-profile)
  - [Reset Password](#reset-password)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/download/)
- [MongoDB](https://www.mongodb.com/try/download/community)

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd userService


## API Endpoints

### User Registration
- **URL:** `/api/users/register`
- **Method:** `POST`
- **Description:** Registers a new user.
- **Body Parameters:**
  - `username` (string, required)
  - `email` (string, required)
  - `password` (string, required)
- **Response:**
  - `201 Created` on success with the user object
  - `400 Bad Request` on validation error

### User Login
- **URL:** `/api/users/login`
- **Method:** `POST`
- **Description:** Logs in a user and returns a JWT token.
- **Body Parameters:**
  - `email` (string, required)
  - `password` (string, required)
- **Response:**
  - `200 OK` on success with the JWT token
  - `401 Unauthorized` on invalid credentials

### Access User Profile
- **URL:** `/api/users/profile`
- **Method:** `GET`
- **Description:** Retrieves the profile of the logged-in user.
- **Headers:**
  - `Authorization: Bearer <token>`
- **Response:**
  - `200 OK` on success with the user profile
  - `401 Unauthorized` on invalid or missing token

### Update User Profile
- **URL:** `/api/users/profile`
- **Method:** `PUT`
- **Description:** Updates the profile of the logged-in user.
- **Headers:**
  - `Authorization: Bearer <token>`
- **Body Parameters:**
  - `username` (string, optional)
  - `email` (string, optional)
  - `password` (string, optional)
- **Response:**
  - `200 OK` on success with the updated user profile
  - `401 Unauthorized` on invalid or missing token
  - `400 Bad Request` on validation error

### Reset Password
- **URL:** `/api/users/reset-password`
- **Method:** `POST`
- **Description:** Resets the password for a user.
- **Body Parameters:**
  - `email` (string, required)
  - `newPassword` (string, required)
- **Response:**
  - `200 OK` on success with a message indicating password reset
  - `404 Not Found` on non-existent email