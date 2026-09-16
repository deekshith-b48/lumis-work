import { faqs } from "@/data/faqs";
import { services } from "@/data/services";
import { site } from "@/data/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: site.name,
        url: site.url,
        email: site.email,
        telephone: site.phone,
        description: site.description,
        slogan: site.brandLine,
      },
      ...services.map((service) => ({
        "@type": "Service",
        name: service.title,
        description: service.description,
        provider: { "@type": "Organization", name: site.name },
        areaServed: "IN",
        offers: {
          "@type": "Offer",
          priceCurrency: "INR",
          price: service.startingAmount,
        },
      })),
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
