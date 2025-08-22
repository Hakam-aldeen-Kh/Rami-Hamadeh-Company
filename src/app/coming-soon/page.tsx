// app/coming-soon/page.tsx
import type { Metadata } from "next";
import ComingSoonPage from "@/components/pages/coming-soon";

const SITE_URL = "https://rami-hamadeh.com";
const COMPANY_NAME = "Rami Hamadeh Company";
const DESCRIPTION =
  "We’re crafting innovative digital solutions. Be the first to know when we launch.";
const OG_IMAGE = "/images/rami-hamadeh-logo.png";
const LAUNCH_ISO = "2025-09-18T00:00:00Z";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const launched = Date.now() >= new Date(LAUNCH_ISO).getTime();
  const base: Metadata = {
    title: `Coming Soon – ${COMPANY_NAME}`,
    description: DESCRIPTION,
    alternates: { canonical: "/coming-soon" },
    openGraph: {
      type: "website",
      url: `${SITE_URL}/coming-soon`,
      siteName: COMPANY_NAME,
      title: `Coming Soon – ${COMPANY_NAME}`,
      description: DESCRIPTION,
      images: [
        {
          url: OG_IMAGE,
          width: 1200,
          height: 630,
          alt: `${COMPANY_NAME} – Coming Soon`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `Coming Soon – ${COMPANY_NAME}`,
      description: DESCRIPTION,
      images: [OG_IMAGE],
    },
    robots: {
      index: launched, // noindex before launch; index after
      follow: true,
      googleBot: {
        index: launched,
        follow: true,
      },
    },
  };
  return base;
}

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: `${COMPANY_NAME} Website Launch`,
    eventStatus: "https://schema.org/EventScheduled",
    startDate: LAUNCH_ISO,
    eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
    location: { "@type": "VirtualLocation", url: `${SITE_URL}/coming-soon` },
    organizer: { "@type": "Organization", name: COMPANY_NAME, url: SITE_URL },
    description: DESCRIPTION,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ComingSoonPage />
    </>
  );
}
