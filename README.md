# taponit
Coding challenge for TapOnIt's Software Engineer position

## Getting Started
To run the local environment environment, please:
1. <code>cd</code> into the project directory and run <code>npm install</code>
2. Create a <code>.env</code> file in the <code>backend</code> directory. An example is provided for you. 
3. Run <code>npx dotenv sequelize db:create</code> to setup the database for you. 
4. In the <code>backend</code> directory, run <code>npm start</code>
5. <code>cd</code> into the <code>frontend</code> directory and run <code>npm start</code>


## PostgreSQL Schema
### Products
id | title | description | img | price | num_likes
---| ----- | ----------- | --- | ----- | ---------

## Backend API Routes
HTTP Verb | Endpoint | Description
--------- | -------- | -----------
GET | /api/products | List of all products
GET | /api/products/:id | Single page view
POST | /api/likes/:id | "Like" a specific product
DELETE | /api/likes/:id | "Unlike" a specific product

## Storing User Likes
This application uses localStorage to track whether a user has already "liked" a product (and therefore prevent them from "unliking" a product they have already "liked"). I made this decision based on the requirements for the project asking for the SQL schema to only contain a single "Products" table. If the requirements for this project had not contained this constraint, I would have created a separate "users" table in PostgreSQL (or another DB) to store this information. 
