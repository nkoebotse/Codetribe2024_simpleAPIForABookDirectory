# Book Directory API

## Overview
The Book Directory API is a simple RESTful API that allows users to manage a collection of books. It supports various HTTP methods to create, read, update, and delete book records, and it handles data in JSON format.

## Requirements
This API manages the following book attributes:
- **Title**: The title of the book
- **Author**: The author of the book
- **Publisher**: The publisher of the book
- **Published Date**: The date the book was published
- **ISBN**: The International Standard Book Number

## Endpoints

### 1. Get All Books
- **Method**: `GET`
- **Endpoint**: `/books`
- **Description**: Retrieves a list of all books.

### 2. Get a Single Book
- **Method**: `GET`
- **Endpoint**: `/books/:id`
- **Description**: Retrieves a specific book by its ID.

### 3. Create a New Book
- **Method**: `POST`
- **Endpoint**: `/books`
- **Description**: Creates a new book record.
- **Request Body**: 
  ```json
  {
    "title": "Book Title",
    "author": "Author Name",
    "publisher": "Publisher Name",
    "publishedDate": "YYYY-MM-DD",
    "isbn": "ISBN-Number"
  }
  ```

### 4. Update an Existing Book
- **Method**: `PUT` or `PATCH`
- **Endpoint**: `/books/:id`
- **Description**: Updates an existing book record by its ID.
- **Request Body**: (Partial update is allowed)
  ```json
  {
    "title": "Updated Book Title",
    "author": "Updated Author Name",
    "publisher": "Updated Publisher Name",
    "publishedDate": "YYYY-MM-DD",
    "isbn": "Updated-ISBN-Number"
  }
  ```

### 5. Delete a Book
- **Method**: `DELETE`
- **Endpoint**: `/books/:id`
- **Description**: Deletes a book record by its ID.

## Data Exchange
- The API handles JSON data exchange.
- All requests and responses will be in JSON format.

## Error Handling
- Basic validation will be implemented for each endpoint.
- Ensure proper error messages are returned for invalid requests.

## Setup Instructions

1. **Clone the Repository**
   
   git clone <repository-url>
   cd <repository-directory>
  

2. Install Dependencies**
  
   npm install
 

3. **Run the Server**
   
   node server.js
  

4. Use Postman to Test the API**
   - Open Postman and enter the appropriate URL for each endpoint.
   - Set the request method (GET, POST, PUT/PATCH, DELETE) according to the endpoint.
   - For POST and PUT requests, add the JSON body as required.

Objective
The objective of this project is to test trainees' understanding of:
- Express framework
- HTTP methods and endpoint creation
- Handling data sent to endpoints and responding appropriately with JSON.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgements
- Thanks to the trainees for their hard work and dedication in creating this API!
