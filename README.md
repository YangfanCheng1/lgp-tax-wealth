# LGP Tax & Wealth Management

Professional business website — Next.js 14 frontend + Spring Boot backend, deployable to Google Cloud Run.

---

## Prerequisites

| Tool | Version | Install |
|---|---|---|
| Node.js | 20+ | https://nodejs.org |
| Java (JDK) | 21 | https://adoptium.net |
| Docker Desktop | latest | https://docker.com |
| gcloud CLI | latest | https://cloud.google.com/sdk |

---

## Local Development (no Docker)

### 1. Start the backend
```bash
cd backend
./mvnw spring-boot:run        # macOS / Linux
mvnw.cmd spring-boot:run      # Windows
```
Backend runs at http://localhost:8080

### 2. Start the frontend
```bash
cd frontend
npm install
npm run dev
```
Site runs at http://localhost:3000

---

## Local Docker Compose (integration test)

```bash
# From the project root
docker compose up --build
```
- Frontend: http://localhost:3000
- Backend health: http://localhost:8080/api/health

---

## Deploy to Google Cloud Run

### One-time GCloud setup
```bash
gcloud auth login
gcloud config set project YOUR_PROJECT_ID
gcloud services enable run.googleapis.com artifactregistry.googleapis.com
gcloud artifacts repositories create lgp-images \
  --repository-format=docker --location=us-central1
```

### Deploy (backend first, then frontend)
```bash
# Step 1 — deploy backend
export GCLOUD_PROJECT_ID=your-project-id
export FRONTEND_URL=https://lgp-frontend-placeholder.a.run.app   # update after step 2
bash deploy/deploy-backend.sh

# Step 2 — deploy frontend (paste the backend URL from step 1)
export BACKEND_URL=https://lgp-backend-HASH-uc.a.run.app
bash deploy/deploy-frontend.sh

# Step 3 — update backend CORS with the real frontend URL
export FRONTEND_URL=https://lgp-frontend-HASH-uc.a.run.app
bash deploy/deploy-backend.sh
```

**Cost**: Both services scale to zero (min-instances=0). Well within the Cloud Run free tier for a small business site.

---

## Project Structure

```
lgp-tax-wealth/
├── frontend/        Next.js 14 (App Router) + Tailwind CSS
│   └── src/
│       ├── app/     pages: /, /services, /contact
│       └── components/
│           ├── layout/   Navbar, Footer
│           ├── about/    HeroSection, WhoWeAre, Certifications, Experience
│           ├── services/ ServicesHero, ServiceCard
│           ├── contact/  ContactHero, ContactForm
│           └── ui/       SectionWrapper, GoldDivider
├── backend/         Spring Boot 3.2 + Java 21
│   └── src/main/java/com/lgp/taxwealth/
│       ├── controller/   ContactController (POST /api/contact, GET /api/health)
│       ├── model/        ContactMessage (Java record)
│       └── config/       CorsConfig
├── docker-compose.yml
└── deploy/
    ├── deploy-backend.sh
    └── deploy-frontend.sh
```

---

## Customizing Content

All stub content lives directly in the component files — no CMS or database needed at this stage:

| Content | File |
|---|---|
| Bio / Who We Are | `frontend/src/components/about/WhoWeAreSection.tsx` |
| Certifications | `frontend/src/components/about/CertificationsSection.tsx` |
| Career timeline | `frontend/src/components/about/ExperienceSection.tsx` |
| Stats (years, clients) | `frontend/src/components/about/HeroSection.tsx` |
| Services list | `frontend/src/app/services/page.tsx` |
| Contact details | `frontend/src/app/contact/page.tsx` |
| Footer contact info | `frontend/src/components/layout/Footer.tsx` |
