# taponit
Coding challenge for TapOnIt's Software Engineer position


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
