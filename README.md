## 1. Project Overview

I built this repository to provide a RESTful API for managing refrigerator and freezer inventory, including user authentication and CRUD operations for items. The API supports item categorization, search, and secure access using JWT, all backed by Firebase. Perfect for developers or teams who need a simple, secure backend for tracking perishable goods.

## 2. Tech Stack

Built with JavaScript, Firebase

## 3. Installation & Setup

**Prerequisites**  
- Node.js  
- npm  

**Quick Start**     
1. Clone the repository  
2. Install dependencies  
   $ npm install  
3. Start the application  
   $ npm start  
4. Example environment variable setup:  
   $ export NODE_ENV=development  

## 4. Project Structure

/controller/geladeiraController.js: Handles CRUD for refrigerator items  
/controller/freezerController.js: Handles CRUD for freezer items  
/middlewares/authMiddleware.js: JWT authentication middleware  
/regraNeg/regraNeg.js: Business logic and input validation  
/routes/freezerRouter.js: Freezer item API routes  
/routes/geladeiraRouter.js: Refrigerator item API routes  
/routes/indexRouter.js: Main API router  
/routes/user.js: User registration, login, and user routes  
/services/authenticator.js: User authentication with Firebase  
/services/servicoFreezer.js: Freezer item database operations  
/services/servicoGeladeira.js: Refrigerator item database operations  
/services/firebaseCredenciais.js: Firebase and JWT configuration  
/views/error.jade: Error page template  
/views/index.jade: Home page template  
/views/layout.jade: Base HTML layout  

## 5. License

License: Not currently specified

## 6. Contributors  
- [Nicolas35ti](https://github.com/Nicolas35ti)