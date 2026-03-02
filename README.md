<p align="center">
  <a href="https://quick-hire-server.onrender.com" target="blank"><img src="https://res.cloudinary.com/dp6urj3gj/image/upload/v1772487956/quick-hire-logo_kfga0x.png" width="160" alt="QuickHire Logo" /></a>
</p>

<p align="center">A professional and scalable job portal server-side application built with modern technologies.</p>

# QUICK HIRE SERVER

**QUICK HIRE SERVER** is a robust backend API designed for a modern job recruitment platform. It manages job postings, applicant tracking, and category organization with high performance and security.

🌐 **Frontend Live URL:** [https://quick-hire-client-chi.vercel.app](https://quick-hire-client-chi.vercel.app)  
🌐 **Backend Live URL:** [https://quick-hire-server.onrender.com](https://quick-hire-server.onrender.com)  
🌐 **Frontend Github URL:** [https://github.com/mazharul90007/quick-hire](https://github.com/mazharul90007/quick-hire)  
📚 **API Documentation:** [Postman Documentation](https://documenter.getpostman.com/view/40157327/2sBXcKAcnk)

---

## 🚀 Features

### Role Based Authorization

[APPLICANT, ADMIN, SUPER_ADMIN]

### Authentication with Better-Auth

- **Signup & Login** (PUBLIC)
- **Email Verification** (APPLICANT, ADMIN) - Secure verification via Nodemailer.
- **Session Management** - Persistent sessions with secure cookie handling.
- **Role-based Middleware** - Fine-grained access control for sensitive operations.

### Job Management

- **Create Job** (ADMIN, SUPER_ADMIN) - Post new job openings with detailed requirements.
- **Get All Jobs** (PUBLIC) - Advanced filtering by title, district, and job type.
- **Get Single Job** (PUBLIC) - Detailed view of a job posting.
- **Featured Jobs** - Specialized endpoint for highlighting priority positions.

### Application Management

- **Apply for Job** (PUBLIC/APPLICANT) - Seamless application submission.
- **Get All Applications** (ADMIN, SUPER_ADMIN) - Centralized tracking of all candidates.
- **Get Single Application** (ADMIN, SUPER_ADMIN) - Deep dive into applicant details.

### Category Management

- **Create Category** (ADMIN, SUPER_ADMIN) - Organize jobs into logical segments.
- **Get All Categories** (PUBLIC) - Instant access to all available job sectors.

---

## 🗂️ Entity Relationship Diagram (ERD)

<p align="center">
  <img src="https://res.cloudinary.com/dp6urj3gj/image/upload/v1772487037/quick-hire-erd_zvfrbo.png" alt="ChemistBD ER Diagram" width="700"/>
</p>

---

## 🛠 Technology Stack

### Backend Framework

- **Node.js** - Runtime environment.
- **Express.js** (v5.2.1) - Latest features of the reliable web framework.
- **TypeScript** - Enforcing type safety and improving developer experience.

### Database

- **PostgreSQL** (Neon) - High-performance relational database.
- **Prisma** (v7.4.2) - Modern ORM for schema-driven data management.

### Authentication & Security

- **Better-Auth** (v1.4.19) - Specialized authentication and session management.
- **Zod** - Robust schema-based validation for all incoming requests.
- **Cors & Cookie-parser** - Industry-standard security middleware.

### Utilities

- **Nodemailer** - For transactional emails (verification, notifications).
- **Http-status** - Clean and readable HTTP status code management.
- **Dotenv** - Secure environment variable management.

---

## 📋 Prerequisites

Ensure you have the following installed:

- **Node.js** (v18 or higher)
- **pnpm** or **npm**
- **Git**
- **PostgreSQL** instance (Local or Cloud-based like Neon)

---

## 🔧 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/mazharul90007/quick-hire-server.git
cd quick-hire-server
```

### 2. Install Dependencies

```bash
npm install
# or
pnpm install
```

### 3. Environment Configuration

Create a `.env` file in the root directory:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/quickhire"
BETTER_AUTH_SECRET="your_secret_key"
BETTER_AUTH_URL="http://localhost:4000"
APP_URL="http://localhost:3000"
APP_USER="your-email@gmail.com"
APP_PASS="your-gmail-app-password"
```

### 4. Database Setup

```bash
npx prisma generate
npx prisma migrate dev --name init
```

### 5. Start the Project

**Development Mode:**

```bash
npm run dev
```

**Production Mode:**

```bash
npm run build
npm run start
```

---

## 🛣️ API Endpoints

### 🔑 Authentication (`/api/auth`)

- `POST /sign-up` - Register a new user.
- `POST /sign-in` - Authenticate user.
- `GET /me` - Get current user profile.

### 💼 Jobs (`/api/v1/jobs`)

- `GET /` - Browse all jobs.
- `POST /` - Post a new job (Admin only).
- `GET /:id` - Get job details.

### 🏷️ Categories (`/api/v1/categories`)

- `GET /` - List all job categories.
- `POST /` - Create a new category (Admin only).

### 📝 Applications (`/api/v1/applications`)

- `POST /` - Submit a job application.
- `GET /` - View all applications (Admin only).
- `GET /:id` - View specific application (Admin only).

---

## 📝 License

ISC

---

## 👤 Author

Mazharul Islam Sourabh

---

## 🤝 Contributing

Contributions are welcome. Please open an issue first to discuss any major changes.
