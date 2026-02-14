/**
 * JsonLd Component - Reusable structured data for SEO
 * 
 * This component renders JSON-LD structured data for better SEO.
 * Supports Organization, Person, Service, and BlogPosting schemas.
 */

interface JsonLdProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any | any[];
}

/**
 * Base JsonLd component - renders any JSON-LD schema
 */
export function JsonLd({ data }: JsonLdProps) {
  const jsonData = Array.isArray(data) ? data : [data];
  
  return (
    <>
      {jsonData.map((item, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(item),
          }}
        />
      ))}
    </>
  );
}

// Schema type definitions
interface OrganizationSchema {
  "@context": "https://schema.org";
  "@type": "Organization";
  name: string;
  url: string;
  logo?: string;
  description?: string;
  sameAs?: string[];
  contactPoint?: {
    "@type": "ContactPoint";
    telephone?: string;
    contactType: string;
    email?: string;
    availableLanguage?: string[];
  };
}

interface PersonSchema {
  "@context": "https://schema.org";
  "@type": "Person";
  name: string;
  alternateName?: string;
  url: string;
  image?: string;
  jobTitle?: string;
  worksFor?: {
    "@type": "Organization";
    name: string;
  };
  sameAs?: string[];
  knowsAbout?: string[];
  description?: string;
}

interface ServiceSchema {
  "@context": "https://schema.org";
  "@type": "Service";
  name: string;
  description: string;
  url: string;
  provider: {
    "@type": "Person" | "Organization";
    name: string;
    url: string;
  };
  areaServed?: {
    "@type": "Country" | "State" | "City";
    name: string;
  };
  serviceType?: string;
  offers?: {
    "@type": "Offer";
    price?: string;
    priceCurrency?: string;
    availability?: string;
  };
}

interface BlogPostingSchema {
  "@context": "https://schema.org";
  "@type": "BlogPosting";
  headline: string;
  description?: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  author: {
    "@type": "Person";
    name: string;
    url?: string;
  };
  publisher: {
    "@type": "Organization";
    name: string;
    url: string;
    logo?: {
      "@type": "ImageObject";
      url: string;
    };
  };
  mainEntityOfPage?: {
    "@type": "WebPage";
    "@id": string;
  };
  keywords?: string[];
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://prokolarz.pl";

/**
 * Create Organization schema for the business
 */
export function createOrganizationSchema(): OrganizationSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ProKolarz",
    url: siteUrl,
    logo: `${siteUrl}/images/logo.png`,
    description: "Profesjonalne treningi kolarskie i fizjoterapia zdalna. Osiągnij swoje cele sportowe z pomocą doświadczonego trenera i fizjoterapeuty!",
    sameAs: [
      process.env.NEXT_PUBLIC_FACEBOOK_URL || "",
      process.env.NEXT_PUBLIC_INSTAGRAM_URL || "",
      process.env.NEXT_PUBLIC_STRAVA_URL || "",
      process.env.NEXT_PUBLIC_YOUTUBE_URL || "",
    ].filter(Boolean),
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "kontakt@prokolarz.pl",
      availableLanguage: ["Polish", "English"],
    },
  };
}

/**
 * Create Person schema for the site owner
 */
export function createPersonSchema(): PersonSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Krzysztof",
    alternateName: "WielkiKrzych",
    url: `${siteUrl}/o-mnie`,
    jobTitle: "Fizjoterapeuta & Trener Kolarstwa i Biegania",
    worksFor: {
      "@type": "Organization",
      name: "ProKolarz",
    },
    sameAs: [
      process.env.NEXT_PUBLIC_FACEBOOK_URL || "",
      process.env.NEXT_PUBLIC_INSTAGRAM_URL || "",
      process.env.NEXT_PUBLIC_STRAVA_URL || "",
    ].filter(Boolean),
    knowsAbout: [
      "Trening kolarski",
      "Fizjoterapia",
      "Rehabilitacja",
      "Triathlon",
      "Bieganie",
      "Trening funkcjonalny",
      "Analiza wydajności",
    ],
    description: "Fizjoterapeuta i trener kolarstwa z ponad 8-letnim doświadczeniem. Specjalizuję się w treningu kolarskim wszystkich dyscyplin oraz fizjoterapii zdalnej.",
  };
}

/**
 * Create Service schema for training services
 */
export function createTrainingServiceSchema(): ServiceSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Treningi Kolarskie",
    description: "Indywidualne plany treningowe dostosowane do Twoich celów i możliwości. Niezależnie od tego, czy dopiero zaczynasz, czy jesteś doświadczonym kolarzem - pomożemy Ci osiągnąć więcej.",
    url: `${siteUrl}/treningi`,
    provider: {
      "@type": "Person",
      name: "Krzysztof - WielkiKrzych",
      url: `${siteUrl}/o-mnie`,
    },
    areaServed: {
      "@type": "Country",
      name: "Poland",
    },
    serviceType: "Sports Coaching",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "PLN",
    },
  };
}

/**
 * Create Service schema for physiotherapy services
 */
export function createPhysiotherapyServiceSchema(): ServiceSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Fizjoterapia Zdalna",
    description: "Profesjonalna rehabilitacja i konsultacje fizjoterapeutyczne online. Skuteczna pomoc bez wychodzenia z domu, dostępna z każdego miejsca.",
    url: `${siteUrl}/fizjoterapia`,
    provider: {
      "@type": "Person",
      name: "Krzysztof - WielkiKrzych",
      url: `${siteUrl}/o-mnie`,
    },
    areaServed: {
      "@type": "Country",
      name: "Poland",
    },
    serviceType: "Physical Therapy",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "PLN",
    },
  };
}

/**
 * Create BlogPosting schema for blog posts
 */
export function createBlogPostingSchema(post: {
  title: string;
  excerpt?: string;
  date: string;
  slug: string;
  coverImage?: string;
  tags?: string[];
  author?: string;
}): BlogPostingSchema {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage ? `${siteUrl}${post.coverImage}` : `${siteUrl}/images/og-default.jpg`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author || "Krzysztof - WielkiKrzych",
      url: `${siteUrl}/o-mnie`,
    },
    publisher: {
      "@type": "Organization",
      name: "ProKolarz",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/blog/${post.slug}`,
    },
    keywords: post.tags,
  };
}

export type {
  OrganizationSchema,
  PersonSchema,
  ServiceSchema,
  BlogPostingSchema,
};
