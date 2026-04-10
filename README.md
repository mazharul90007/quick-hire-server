<p align="center">
  <a href="https://quick-hire-server.onrender.com" target="blank"><img src="https://res.cloudinary.com/dp6urj3gj/image/upload/v1772487956/quick-hire-logo_kfga0x.png" width="160" alt="QuickHire Logo" /></a>
</p>

<p align="center">A professional and scalable recruitment platform backend with role-based access, applicant pipelines, and Stripe-powered course purchases.</p>

# QUICK HIRE SERVER

**QUICK HIRE SERVER** is a full-featured backend API for a modern hiring platform. It supports applicant and recruiter onboarding, job posting and application flows, admin moderation, industry taxonomy, and paid learning courses.

🌐 **Frontend Live URL:** [https://quick-hire-client-chi.vercel.app](https://quick-hire-client-chi.vercel.app)  
🌐 **Backend Live URL:** [https://quick-hire-server.onrender.com](https://quick-hire-server.onrender.com)  
🌐 **Frontend Github URL:** [https://github.com/mazharul90007/quick-hire](https://github.com/mazharul90007/quick-hire)  
📚 **API Documentation:** [Postman Documentation](https://documenter.getpostman.com/view/40157327/2sBXcKAcnk)

---

## 🚀 Features

### Role Based Authorization

[APPLICANT, RECRUITER, ADMIN, SUPER_ADMIN]

### Authentication and Account Security

- **Better-Auth integration** with cookie-based sessions.
- **Email verification required** for email/password login flows.
- **Forgot/reset password** workflow via email.
- **Role and status aware access control** (ACTIVE/BLOCKED/DELETED).

### Job Management

- **Create Job** (RECRUITER)
- **Update Job** (RECRUITER, ADMIN, SUPER_ADMIN)
- **Get all Jobs** (PUBLIC)
- **Get a Specific Job by Id** (PUBLIC)
- Supports fields like employment type, job type, tags, salary, deadline, and featured flag.

### Application Management

- **Apply to Job** with CV upload (APPLICANT)
- **Get Applications List** (APPLICANT, RECRUITER, ADMIN, SUPER_ADMIN)
- **Get Single Application** (APPLICANT, RECRUITER, ADMIN, SUPER_ADMIN)

### Profile Management

- **Applicant Profile** (`GET/PATCH /applicants/me`)
- **Recruiter Profile** (`GET/PATCH /recruiters/me`)
- **Admin Profile** (`GET/PATCH /admin/me`)
- Multipart profile update support for image/logo assets.

### Taxonomy Management

- **Industry CRUD (partial)** - create, list, update.
- **Sub-industry CRUD (partial)** - create, list, update.
- Used by recruiter profiles and job posts.

### Admin Control Panel APIs

- Manage applicants, recruiters, and admin profiles.
- Manage user status and soft delete users.
- Filterable list endpoints for operational moderation.

### Course and Payments

- **Public course catalog** for published courses.
- **Admin course CRUD** under `/admin/courses`.
- **Applicant checkout with Stripe**.
- **Stripe webhook processing** for payment confirmation.
- **Receipt PDF download** for completed purchases.

---

## 🗂️ Entity Relationship Diagram (ERD)

<p align="center">
  <img src="https://res.cloudinary.com/dp6urj3gj/image/upload/v1772487037/quick-hire-erd_zvfrbo.png" alt="QuickHire ER Diagram" width="700"/>
</p>

---

## 🛠 Technology Stack

### Backend Framework

- **Node.js** - Runtime environment
- **Express.js** (v5.2.1) - Web framework
- **TypeScript** - Type-safe JavaScript development

### Database and ORM

- **PostgreSQL** (Neon/local)
- **Prisma** (v7.x) with modular schema files

### Authentication and Security

- **Better-Auth** - Session and identity handling
- **JWT verification middleware** for protected APIs
- **Zod** - Request payload validation
- **CORS + Cookie Parser** - Browser security and session support

### Storage and Integrations

- **Cloudinary** - Profile assets, logos, and uploaded files
- **Stripe** - Course checkout and payment webhook
- **Nodemailer** - Verification and password reset emails
- **PDFKit** - Purchase receipt generation

### Utilities

- **Dotenv** - Environment configuration
- **Http-status** - Standard HTTP status handling
- **Multer** - Multipart uploads

---

## 📋 Prerequisites

Before setup, ensure you have:

- **Node.js** (v18+ recommended)
- **npm** (or pnpm)
- **PostgreSQL** database
- **Cloudinary account** (for media upload)
- **Stripe account** (for course payment flow)
- **Git**

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
```

### 3. Environment Configuration

Create `.env` at the project root and set:

```env
PORT=4000
DATABASE_URL="postgresql://user:password@localhost:5432/quickhire"

BETTER_AUTH_SECRET="your_better_auth_secret"
BETTER_AUTH_URL="http://localhost:4000"
APP_URL="http://localhost:3000"

APP_USER="your-smtp-email@example.com"
APP_PASS="your-smtp-app-password"

CLOUDINARY_CLOUD_NAME="your_cloudinary_cloud_name"
CLOUDINARY_API_KEY="your_cloudinary_api_key"
CLOUDINARY_API_SECRET="your_cloudinary_api_secret"

STRIPE_SECRET_KEY="your_stripe_secret_key"
STRIPE_WEBHOOK_SECRET="your_stripe_webhook_secret"
STRIPE_SUCCESS_URL="http://localhost:3000/applicant/payment-success"
STRIPE_CANCEL_URL="http://localhost:3000/applicant/payment-failed"
```

### 4. Database Setup

```bash
npx prisma generate
npx prisma migrate dev --name init
```

### 5. Run the Server

Development:

```bash
npm run dev
```

Build:

```bash
npm run build
```

Start:

```bash
npm run start
```

Server default URL: `http://localhost:4000`

---

## 🎯 Usage Notes

- Base REST prefix: `/api/v1`
- Better-Auth base prefix: `/api/auth/*`
- Stripe webhook endpoint must receive raw JSON body:
  - `POST /api/v1/courses/stripe/webhook`
- Most protected endpoints require authentication cookie/session plus role checks.

---

## 🛣️ API Endpoints

All endpoints below are relative to your server URL.

### 🔐 Better-Auth Core (`/api/auth/*`)

QuickHire mounts Better-Auth directly at:

- `ALL /api/auth/*`

This includes built-in auth routes (for example sign-in, sign-up, sign-out, session, email verification, and password reset internals) managed by Better-Auth.

---

### 👤 Custom Auth (`/api/v1/auth`)

- `POST /register-applicant` - Register applicant account + applicant profile (PUBLIC)
- `POST /register-recruiter` - Register recruiter account + recruiter profile (PUBLIC)
- `POST /create-admin` - Create admin account/profile (SUPER_ADMIN)
- `POST /forget-password` - Send reset link (PUBLIC)
- `POST /reset-password` - Reset password by token (PUBLIC)

---

### 💼 Jobs (`/api/v1/jobs`)

- `POST /` - Create job (RECRUITER)
- `PATCH /:id` - Update job (RECRUITER, ADMIN, SUPER_ADMIN)
- `GET /` - Get all jobs (PUBLIC)
- `GET /:id` - Get single job (PUBLIC)

---

### 📝 Applications (`/api/v1/applications`)

- `POST /` - Create application with CV upload (APPLICANT)
- `GET /` - Get application list (APPLICANT, RECRUITER, ADMIN, SUPER_ADMIN)
- `GET /:id` - Get single application (APPLICANT, RECRUITER, ADMIN, SUPER_ADMIN)

---

### 🏭 Industries (`/api/v1/industries`)

- `POST /create-industry` - Create industry with optional logo upload (ADMIN, SUPER_ADMIN)
- `GET /` - Get all industries (PUBLIC)
- `PATCH /:id` - Update industry data/logo (ADMIN, SUPER_ADMIN)

---

### 🧩 Sub-Industries (`/api/v1/sub-industries`)

- `POST /create-sub-industry` - Create sub-industry (ADMIN, SUPER_ADMIN)
- `GET /` - Get all sub-industries (PUBLIC)
- `PATCH /:id` - Update sub-industry (ADMIN, SUPER_ADMIN)

---

### 🧑‍💼 Recruiter Profile (`/api/v1/recruiters`)

- `GET /me` - Get current recruiter profile (RECRUITER)
- `PATCH /me` - Update recruiter profile (RECRUITER)

---

### 🧑 Applicant Profile and Course Purchase (`/api/v1/applicants`)

- `GET /me` - Get current applicant profile (APPLICANT)
- `PATCH /me` - Update applicant profile (APPLICANT)
- `POST /me/course-checkout` - Start Stripe checkout for a course (APPLICANT)
- `GET /me/course-purchases` - Get my purchased courses (APPLICANT)
- `GET /me/course-purchases/:purchaseId/receipt` - Download receipt PDF (APPLICANT)

---

### 🎓 Public Courses (`/api/v1/courses`)

- `GET /` - List published courses (PUBLIC)
- `GET /:idOrSlug` - Get one published course by id or slug (PUBLIC)
- `POST /stripe/webhook` - Stripe payment webhook (STRIPE)

---

### 🛡️ Admin (`/api/v1/admin`)

#### Profile

- `GET /me` - Get my admin profile (ADMIN, SUPER_ADMIN)
- `PATCH /me` - Update my admin profile (ADMIN, SUPER_ADMIN)

#### Applicant management

- `GET /applicants` - List applicants (ADMIN, SUPER_ADMIN)
- `GET /applicants/:id` - Get single applicant (ADMIN, SUPER_ADMIN)
- `PATCH /applicants/:id` - Update applicant profile (ADMIN, SUPER_ADMIN)

#### Recruiter management

- `GET /recruiters` - List recruiters (ADMIN, SUPER_ADMIN)
- `GET /recruiters/:id` - Get single recruiter (ADMIN, SUPER_ADMIN)
- `PATCH /recruiters/:id` - Update recruiter profile (ADMIN, SUPER_ADMIN)

#### Admin staff management

- `GET /admins` - List admins (ADMIN, SUPER_ADMIN)
- `GET /admins/:id` - Get single admin (ADMIN, SUPER_ADMIN)
- `PATCH /admins/:id` - Update admin profile (ADMIN, SUPER_ADMIN)

#### User moderation

- `GET /users/:userId` - Get user by id (ADMIN, SUPER_ADMIN)
- `DELETE /users/:userId` - Soft delete user (ADMIN, SUPER_ADMIN)
- `PATCH /users/:userId/status` - Update user status (ADMIN, SUPER_ADMIN)

#### Course administration (mounted under same `/admin` prefix)

- `GET /courses` - List all courses including unpublished (ADMIN, SUPER_ADMIN)
- `POST /courses` - Create a course (ADMIN, SUPER_ADMIN)
- `PATCH /courses/:courseId` - Update a course (ADMIN, SUPER_ADMIN)
- `DELETE /courses/:courseId` - Delete/unpublish a course (ADMIN, SUPER_ADMIN)

---

## 📖 Data Model Overview

Core entities in this project:

- **User/Auth**: `User`, `Session`, `Account`, `Verification`
- **Profiles**: `Applicant`, `Recruiter`, `Admin`
- **Hiring**: `Industry`, `SubIndustry`, `Job`, `Application`
- **Learning/Payments**: `Course`, `CoursePurchase`

---

## 📝 License

ISC

---

## 👤 Author

Mazharul Islam Sourabh

---

## 🤝 Contributing

Feel free to fork the project and submit pull requests. For major changes, open an issue first so implementation scope can be discussed.

---

## 📞 Support

For support, contact the project maintainer or create an issue in the repository.
