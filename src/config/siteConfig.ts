export interface SiteConfig {
  trainer: {
    name: string;
    title: string;
    location: string;
    profileImage: string;
  };
  contact: {
    email: string;
    phone: string;
    whatsapp: string;
  };
  social: {
    linkedin: string;
    github: string;
    youtube: string;
    website: string;
  };
  registration: {
    googleFormUrl: string;
  };
  features: {
    enableWhatsapp: boolean;
    enableEmail: boolean;
    enablePhone: boolean;
    enableRegistration: boolean;
    enableBlog: boolean;
    enableTestimonials: boolean;
    enableCorporateTraining: boolean;
  };
}

export const siteConfig: SiteConfig = {
  trainer: {
    name: import.meta.env.VITE_TRAINER_NAME || "Alex Morgan",
    title: import.meta.env.VITE_TRAINER_TITLE || "Full Stack Technology Trainer",
    location: import.meta.env.VITE_LOCATION || "Bengaluru, India (Available Worldwide)",
    profileImage: import.meta.env.VITE_PROFILE_IMAGE || "/images/trainer-profile.jpg",
  },

  contact: {
    email: import.meta.env.VITE_EMAIL || "contact@alexmorgantech.com",
    phone: import.meta.env.VITE_PHONE || "+91-9876543210",
    whatsapp: import.meta.env.VITE_WHATSAPP || "+919876543210",
  },

  social: {
    linkedin: import.meta.env.VITE_LINKEDIN_URL || "https://www.linkedin.com/",
    github: import.meta.env.VITE_GITHUB_URL || "https://github.com/",
    youtube: import.meta.env.VITE_YOUTUBE_URL || "https://youtube.com/",
    website: import.meta.env.VITE_WEBSITE_URL || "https://alexmorgantech.com",
  },

  registration: {
    googleFormUrl:
      import.meta.env.VITE_GOOGLE_FORM_URL || "https://forms.google.com/test-form",
  },

  features: {
    enableWhatsapp: import.meta.env.VITE_ENABLE_WHATSAPP !== "false",
    enableEmail: import.meta.env.VITE_ENABLE_EMAIL !== "false",
    enablePhone: import.meta.env.VITE_ENABLE_PHONE !== "false",
    enableRegistration: import.meta.env.VITE_ENABLE_REGISTRATION !== "false",
    enableBlog: import.meta.env.VITE_ENABLE_BLOG !== "false",
    enableTestimonials: import.meta.env.VITE_ENABLE_TESTIMONIALS !== "false",
    enableCorporateTraining:
      import.meta.env.VITE_ENABLE_CORPORATE_TRAINING !== "false",
  },
};
