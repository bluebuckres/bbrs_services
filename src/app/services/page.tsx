import { ServicesHero } from "@/components/services/ServicesHero";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { ServicesImpact } from "@/components/services/ServicesImpact";
import { ServicesTestimonials } from "@/components/services/ServicesTestimonials";
import { ServicesFAQ } from "@/components/services/ServicesFAQ";

export default function ServicesPage() {
    return (
        <>
            <ServicesHero />
            <ServicesGrid />
            <ServicesImpact />
            <ServicesTestimonials />
            <ServicesFAQ />
        </>
    );
}
