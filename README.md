
# areness backend assignment

This project is a basic backend API for user registration and login using Node.js, Express, MongoDB, and JWT for secure authentication.
 
 - [Visit my backend home api ](https://areness-assignment-wjeu.onrender.com/home)
 - [Visit my frontEnd ](https://arenessharshitmern.netlify.app/)



## Acknowledgements

- Express.js: For providing a robust framework for building the API.
- Mongoose: For simplifying MongoDB interactions and schema modeling.
- dotenv: For managing environment variables securely.
- jsonwebtoken: For implementing JWT-based authentication.
- Nodemon: For automatic server reloading during development.
- Jest: For providing a framework to write and run tests.
- bcrypt: For enabling secure password hashing and encryption.


## Features

- User Registration: Users can sign up by providing their name, email, phone number, gender, age, and password. Passwords are securely hashed using bcrypt.
- User Login: Users can log in using their email and password. If the credentials are correct, a JWT (JSON Web Token) is generated for authentication.
- Password Hashing: The backend uses bcrypt to hash passwords before storing them in the database.
- JWT Authentication: The login endpoint returns a token that is used to authenticate further requests.
- MongoDB: User data is stored in MongoDB.
- CORS Support: Cross-Origin Resource Sharing (CORS) is enabled to allow requests from any frontend domain.
## 🚀 About Me
I'm Harshit Sharma, a passionate and dedicated full-stack web developer with a strong focus on creating efficient, scalable, and user-friendly applications. With a solid foundation in the MERN stack (MongoDB, Express, React, Node.js), I enjoy building projects that solve real-world problems and enhance user experiences.


## API Reference

To easily test and explore the API, you can use the Postman collection provided:

- [Download Postman Collection for my requests](https://api.postman.com/collections/27708251-33f9cca0-eb2a-4482-9e0e-3946dc5b6020?access_key=PMAT-01JAGFQVHX178N83ZKNG7T9R74)

### How to Import Postman Collection

1. **Download the Postman collection JSON file** from the link above.
2. **Open Postman**.
3. Click on the **"Import"** button.
4. Select the **"Upload Files"** tab and upload the downloaded JSON file.
5. The collection will be imported, and you can use it to test the API endpoints.



## configuration
 

- **PORT**: The port on which the server will run. Default is `3000`.
- **MONGO_URL**: The connection string for MongoDB.
- **TOKEN_KEY**: A secret key used for signing JWT tokens. 

### `.env` File Example

Create a `.env` file in the root of your project with the following content:


PORT=3000
MONGO_URL=mongodb+srv://sharmaharshit295:harshit225044@cluster0.rs4eabk.mongodb.net/Areness?retryWrites=true&w=majority&appName=Cluster0
TOKEN_KEY=masai



## apiendpoint

POST /api/register

  {
  "name": "John Doe",
  "email": "johndoe@example.com",
  "number": "9876543210",
  "gender": "male",
  "age": 25,
  "password": "yourpassword"
}
