# Legal Practice Management API

## 📌 Overview
The **Legal Practice Management API** is a NestJS-based application that provides functionalities for managing cases, documents, users, and time tracking for a legal practice. It features authentication, role-based access control, CRUD operations, and in-memory data storage.

---

## 🚀 API Design
This API is designed following best RESTful practices, with structured responses and proper error handling. It includes:

- **Authentication & Authorization** (JWT-based)
- **Users Management**
- **Case Management**
- **Document Management**
- **Time Tracking**
- **Role-Based Access Control**
- **Pagination, Filtering & Sorting**

---

## 🛠 Setup & Installation
### Prerequisites
- Node.js (>= 16.x)
- npm or yarn

### Installation
```sh
# Clone the repository
git clone https://github.com/your-repo/legal-practice-management-api.git
cd legal-practice-management-api

# Install dependencies
npm install
```

### Environment Setup
Create a `.env` file in the root directory and define the following variables:
```env
JWT_SECRET=your_jwt_secret
PORT=3000
```

### Running the Application
```sh
# Start the application
npm run start

# Start in watch mode (development)
npm run start:dev
```

---

## 🔑 Authentication
This API uses **JWT authentication**. You must obtain a token to access protected routes.

### Obtain Token
```http
POST /auth/login
```
#### Request Body:
```json
{
  "email": "admin@legaltech.com",
  "password": "admin123"
}
```
#### Response:
```json
{
  "access_token": "your_jwt_token"
}
```

Use this token in the `Authorization` header:
```
Authorization: Bearer <JWT_TOKEN>
```

---

## 📌 API Endpoints

### **Users**
| Method | Endpoint            | Description                |
|--------|---------------------|----------------------------|
| GET    | `/users`            | Get all users              |
| GET    | `/users/:email`     | Get user by email          |

### **Cases**
| Method | Endpoint     | Description          |
|--------|-------------|----------------------|
| GET    | `/cases`    | Get all cases        |
| POST   | `/cases`    | Create a new case    |
| PUT    | `/cases/:id` | Update a case       |
| DELETE | `/cases/:id` | Delete a case       |

### **Documents**
| Method | Endpoint       | Description          |
|--------|---------------|----------------------|
| GET    | `/documents`  | Get all documents    |
| POST   | `/documents`  | Upload a document    |
| DELETE | `/documents/:id` | Delete a document  |

---

## 🧪 Running Tests (Jest)
```sh
# Run unit tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run e2e tests
npm run test:e2e
```

---

## 🛠 Code Explanation
### `AuthService`
Handles authentication and token generation.
```ts
async login(user: any) {
  const payload = { email: user.email, sub: user.id, role: user.role };
  return {
    access_token: this.jwtService.sign(payload, {
      secret: this.configService.get<string>('JWT_SECRET'),
      expiresIn: '1h',
    }),
  };
}
```

### `CasesService`
Stores and manages cases using in-memory data.
```ts
create(createCaseDto: any) {
  const newCase = { id: cases.length + 1, ...createCaseDto };
  cases.push(newCase);
  return newCase;
}
```

---

## 📜 License
This project is licensed under the MIT License.

