# Environment-Based External Configuration

The website must be designed so that frequently changing information can be updated from environment configuration files instead of modifying React components.

The application is still completely static and does NOT require a backend.

## 1. Environment Variables

Create environment configuration using Vite's environment variable mechanism.

Create:

```text
.env
.env.example
```

All frontend-accessible variables must use the `VITE_` prefix.

Example:

```env
VITE_TRAINER_NAME="Your Name"
VITE_TRAINER_TITLE="Full Stack Technology Trainer"

VITE_EMAIL="trainer@example.com"
VITE_PHONE="+91-XXXXXXXXXX"
VITE_WHATSAPP="+91-XXXXXXXXXX"

VITE_LOCATION="India"

VITE_LINKEDIN_URL="https://www.linkedin.com/"
VITE_GITHUB_URL="https://github.com/"
VITE_YOUTUBE_URL="https://youtube.com/"

VITE_GOOGLE_FORM_URL="https://forms.google.com/"

VITE_WEBSITE_URL="https://example.com"

VITE_PROFILE_IMAGE="/images/trainer-profile.jpg"

VITE_ENABLE_WHATSAPP=true
VITE_ENABLE_EMAIL=true
VITE_ENABLE_PHONE=true
VITE_ENABLE_REGISTRATION=true
```

---

# 2. Central Configuration File

Create:

```text
src/config/siteConfig.ts
```

This file should read environment variables and expose a single configuration object.

Example structure:

```ts
export const siteConfig = {
  trainer: {
    name: import.meta.env.VITE_TRAINER_NAME,
    title: import.meta.env.VITE_TRAINER_TITLE,
    location: import.meta.env.VITE_LOCATION,
    profileImage: import.meta.env.VITE_PROFILE_IMAGE,
  },

  contact: {
    email: import.meta.env.VITE_EMAIL,
    phone: import.meta.env.VITE_PHONE,
    whatsapp: import.meta.env.VITE_WHATSAPP,
  },

  social: {
    linkedin: import.meta.env.VITE_LINKEDIN_URL,
    github: import.meta.env.VITE_GITHUB_URL,
    youtube: import.meta.env.VITE_YOUTUBE_URL,
  },

  registration: {
    googleFormUrl: import.meta.env.VITE_GOOGLE_FORM_URL,
  },

  features: {
    enableWhatsapp: import.meta.env.VITE_ENABLE_WHATSAPP === "true",
    enableEmail: import.meta.env.VITE_ENABLE_EMAIL === "true",
    enablePhone: import.meta.env.VITE_ENABLE_PHONE === "true",
    enableRegistration:
      import.meta.env.VITE_ENABLE_REGISTRATION === "true",
  },
};
```

Components should use `siteConfig` instead of accessing `import.meta.env` directly.

For example:

```tsx
<a href={`mailto:${siteConfig.contact.email}`}>
  Email Me
</a>
```

and:

```tsx
<a href={`tel:${siteConfig.contact.phone}`}>
  Call Me
</a>
```

---

# 3. Google Form Configuration

The Google Form URL must NOT be hardcoded into individual buttons.

Use:

```env
VITE_GOOGLE_FORM_URL="YOUR_GOOGLE_FORM_URL"
```

Every registration button should use:

```tsx
window.open(
  siteConfig.registration.googleFormUrl,
  "_blank"
);
```

Therefore, changing the Google Form later requires changing only:

```text
.env
```

---

# 4. Contact Information

The following information must come from environment variables:

* Trainer name
* Trainer title
* Email
* Phone
* WhatsApp
* Location
* LinkedIn
* GitHub
* YouTube
* Website
* Profile image

Do NOT hardcode these values inside components.

---

# 5. Example .env File

Create a `.env.example` file that can safely be committed to Git.

```env
VITE_TRAINER_NAME="Your Name"
VITE_TRAINER_TITLE="Full Stack Technology Trainer"

VITE_EMAIL="your-email@example.com"
VITE_PHONE="+91-XXXXXXXXXX"
VITE_WHATSAPP="+91-XXXXXXXXXX"

VITE_LOCATION="India"

VITE_LINKEDIN_URL="https://www.linkedin.com/in/your-profile"
VITE_GITHUB_URL="https://github.com/your-profile"
VITE_YOUTUBE_URL="https://youtube.com/@your-channel"

VITE_GOOGLE_FORM_URL="https://docs.google.com/forms/d/e/1FAIpQLSdONktmXpUGVwBhL7f68HQYymzETcrq-2d4O_Oq2OzPNRocMw/viewform?usp=header"

VITE_WEBSITE_URL="https://yourwebsite.com"

VITE_PROFILE_IMAGE="/images/trainer-profile.jpg"

VITE_ENABLE_WHATSAPP=true
VITE_ENABLE_EMAIL=true
VITE_ENABLE_PHONE=true
VITE_ENABLE_REGISTRATION=true
```

---

# 6. Git Configuration

The real `.env` file should NOT be committed if it contains environment-specific values.

Add:

```text
.env
.env.local
.env.production
```

to `.gitignore` where appropriate.

Keep:

```text
.env.example
```

in the repository so that anyone deploying the project knows which variables are required.

---

# 7. No Hardcoded Contact Information

Do NOT write this inside components:

```tsx
<p>+91 9876543210</p>
<p>trainer@gmail.com</p>
```

Instead use:

```tsx
<p>{siteConfig.contact.phone}</p>
<p>{siteConfig.contact.email}</p>
```

Do the same for:

* Footer
* Header
* Contact page
* About page
* CTA sections
* WhatsApp button
* Email button
* Registration buttons
* Social media links

This ensures a single source of truth.

---

# 8. Dynamic CTA Configuration

The following buttons should automatically use configuration:

### Header

```text
Join Upcoming Batch
```

### Home

```text
Join Upcoming Batch
```

### Training Pages

```text
Register Now
```

### Course Pages

```text
Register for This Course
```

### Footer

```text
Join Upcoming Batch
```

All should use:

```text
VITE_GOOGLE_FORM_URL
```

---

# 9. Feature Flags

Allow certain website features to be enabled or disabled through `.env`.

Example:

```env
VITE_ENABLE_WHATSAPP=true
VITE_ENABLE_EMAIL=true
VITE_ENABLE_PHONE=true
VITE_ENABLE_REGISTRATION=true
VITE_ENABLE_BLOG=true
VITE_ENABLE_TESTIMONIALS=true
VITE_ENABLE_CORPORATE_TRAINING=true
```

The UI should automatically hide disabled features.

For example:

```env
VITE_ENABLE_WHATSAPP=false
```

should remove the WhatsApp CTA from the website without requiring code changes.

---

# 10. Environment-Specific Configuration

Support:

```text
.env.development
.env.production
```

Example:

### Development

```env
VITE_GOOGLE_FORM_URL="https://forms.google.com/test-form"
```

### Production

```env
VITE_GOOGLE_FORM_URL="https://forms.google.com/production-form"
```

The application should automatically use the appropriate environment configuration during the build.

---

# 11. Important Security Rule

Because this is a frontend static website, NEVER put secrets in `.env` variables beginning with `VITE_`.

Do NOT put:

```env
VITE_DATABASE_PASSWORD=
VITE_PRIVATE_API_KEY=
VITE_JWT_SECRET=
VITE_ADMIN_PASSWORD=
VITE_AWS_SECRET=
```

Anything beginning with `VITE_` can potentially be exposed to website visitors.

Only use environment variables for public configuration such as:

* Name
* Email
* Phone
* Social links
* Google Form URL
* Website URL
* Public images
* Feature flags
* Public branding information

---

# 12. Future Update Experience

The website should be designed so that common changes require editing only `.env`.

For example, if the phone number changes:

```env
VITE_PHONE="+91-NEW-NUMBER"
```

If the email changes:

```env
VITE_EMAIL="new-email@example.com"
```

If LinkedIn changes:

```env
VITE_LINKEDIN_URL="https://www.linkedin.com/in/new-profile"
```

If the Google Form changes:

```env
VITE_GOOGLE_FORM_URL="https://forms.google.com/new-form"
```

If the trainer name changes:

```env
VITE_TRAINER_NAME="New Trainer Name"
```

No React component should need to be modified.

---

# 13. Architecture

Use this structure:

```text
src/
│
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ContactCTA.tsx
│   ├── RegistrationButton.tsx
│   ├── TechnologyCard.tsx
│   ├── CourseCard.tsx
│   ├── ProjectCard.tsx
│   └── Roadmap.tsx
│
├── config/
│   └── siteConfig.ts
│
├── data/
│   ├── technologies.ts
│   ├── courses.ts
│   ├── projects.ts
│   ├── roadmaps.ts
│   ├── blogs.ts
│   └── resources.ts
│
├── pages/
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Technologies.tsx
│   ├── TechnologyDetails.tsx
│   ├── Training.tsx
│   ├── Roadmaps.tsx
│   ├── Projects.tsx
│   ├── CorporateTraining.tsx
│   ├── Resources.tsx
│   ├── Blog.tsx
│   └── Contact.tsx
│
└── App.tsx
```

---

# 14. Separation of Configuration and Content

Environment variables should contain **configuration**, not large technology descriptions.

For example:

### `.env`

```env
VITE_TRAINER_NAME="Your Name"
VITE_EMAIL="trainer@example.com"
VITE_PHONE="+91-XXXXXXXXXX"
VITE_GOOGLE_FORM_URL="https://forms.google.com/..."
```

### `technologies.ts`

Should contain:

```ts
{
  name: "Java",
  category: "Programming Language",
  description: "...",
  concepts: [...],
  roadmap: [...],
  projects: [...]
}
```

This creates a clean separation:

```text
.env
   ↓
External Configuration

data/
   ↓
Website Content

components/
   ↓
Presentation

pages/
   ↓
Website Structure
```

---

# 15. Final Requirement

Build the website as a **static React + TypeScript application with centralized environment-based configuration**.

There must be:

* No backend
* No database
* No custom registration API
* No authentication
* No admin dashboard
* No student database

Student registration must use:

**Website → Google Form → Google Sheets**

All frequently changing public information must be configurable through `.env`.

The final application should be easy to maintain and deploy.
