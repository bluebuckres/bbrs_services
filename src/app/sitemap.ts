import type { MetadataRoute } from "next";

const BASE_URL = "https://bluebuckresearch.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Core pages
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${BASE_URL}/services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/projects`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/about-us`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.8 },
    { url: `${BASE_URL}/insights`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/privacy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/terms`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },

    // Individual service pages
    { url: `${BASE_URL}/services/artificial-intelligence`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/services/data-engineering`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/services/cybersecurity`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE_URL}/services/cloud-strategy`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE_URL}/services/product-design`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE_URL}/services/devops`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE_URL}/services/automation`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/services/data-science`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.75 },

    // Project case studies
    { url: `${BASE_URL}/projects/mrmed`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE_URL}/projects/trademade`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE_URL}/projects/gleo-ai`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE_URL}/projects/briventa`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.6 },
    { url: `${BASE_URL}/projects/seat-cupra`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.6 },
    { url: `${BASE_URL}/projects/zipto`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.6 },
    { url: `${BASE_URL}/projects/asteride`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.6 },
    { url: `${BASE_URL}/projects/estay`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.6 },
    { url: `${BASE_URL}/projects/cartin`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.65 },
    { url: `${BASE_URL}/projects/makeugc`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.65 },

    // Insights articles
    { url: `${BASE_URL}/insights/rag-pipeline-case-study`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.65 },
    { url: `${BASE_URL}/insights/data-pipeline-migration`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.65 },
    { url: `${BASE_URL}/insights/fintech-mvp-architecture`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.65 },
    { url: `${BASE_URL}/insights/llm-fine-tuning-vs-rag`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.6 },
    { url: `${BASE_URL}/insights/data-pipeline-rewrite`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.6 },
    { url: `${BASE_URL}/insights/boutique-vs-consultancy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.6 },
    { url: `${BASE_URL}/insights/zero-downtime-deployments`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.6 },
    { url: `${BASE_URL}/insights/build-vs-buy-ai`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.6 },
    { url: `${BASE_URL}/insights/async-remote-engineering`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.6 },
  ];
}
