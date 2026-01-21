import { CareerHero } from "@/components/career/CareerHero";
import { CareerMetrics } from "@/components/career/CareerMetrics";
import { CareerValues } from "@/components/career/CareerValues";
import { CareerTeam } from "@/components/career/CareerTeam";
import { CareerCTA } from "@/components/career/CareerCTA";

export default function CareerPage() {
    return (
        <>
            <CareerHero />
            <CareerMetrics />
            <CareerValues />
            <CareerTeam />
            <CareerCTA />
        </>
    );
}
