#  Product Management System

A RESTful API built using **Node.js**, **Express**, and **MongoDB** for managing products in a store. This system allows CRUD operations with proper validation and centralized error handling.
Users can perform operations like- fetching list of all products, fetching a specific product, uploading a product, updating a product, and deleting a product.

---

##  Table of Contents

- [Features](#-features)
- [Technologies Used](#-technologies-used)
- [Installation](#-installation)
- [Environment Variables](#-environment-variables)
- [Running the App](#-running-the-app)
- [API Endpoints](#-api-endpoints)
- [Error Handling](#-error-handling)
- [Contact](#-contact)

---

##  Features

-  Add new products
-  Retrieve all products or a single product by ID
-  Update existing products
-  Delete products
-  Fields:
  - `name` (String, **required**)
  - `description` (String, optional)
  - `price` (Number, **required**)
  - `category` (String, optional)
  - `inStock` (Boolean, defaults to `true`)
-  Centralized error handling:
  - Invalid ID format
  - Product not found
  - Missing required fields

---

##  Technologies Used

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework for Node.js
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **dotenv** - Environment variable management
- **nodemon** - Development tool for auto-restart

---

##  Installation

### 1. Clone the repository

```bash
git clone https://github.com/sp18-pankajkushwaha/PMS/tree/product-apis
cd pms
```        

### 2. Install Dependencies

```bash
npm install 
```

## Environment Variables

Create a .env file in the root directory with the following content:

```bash
MONGO_URI= <Actual Mongo URI of the project>
PORT=<Actual Port number>

```

## Running the app

-For Development:
```bash 
npm run dev
```

## API Endpoints

- **GET/**   (Fetch all products)
- **GET/:id**   (Fetch specific product by ID)
- **POST/products** (Create a new product)
Request Body:
```bash
{
  "name": "Samsung Galaxy S24",
  "description": "Latest Samsung phone",
  "price": 84999,
  "category": "Electronics"
  "inStock":true
}

```
- **PUT/:id** (Update a field)
- **DELETE/:id** (Delete a product)

##  Error Handling

The API handles errors and responds with meaningful messages:

| **Scenario**           | **Message**                          | **Status** |
|------------------------|--------------------------------------|------------|
| Invalid ID format      | Invalid MongoDB ObjectID format      | 400        |
| Product not found      | Product not found                    | 404        |
| Missing name/price     | Name and Price are required          | 400        |
| Invalid Datatype       | Field must be of specified Datatype  | 400        |
 
All errors are processed using a centralized middleware for consistency.

##Contact
For any query, feel free to reach  : pankaj.kushwaha@sparkeighteen.com
