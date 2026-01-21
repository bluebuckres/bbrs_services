import { AboutHero } from "@/components/about/AboutHero";
import { AboutStory } from "@/components/about/AboutStory";
import { AboutMetrics } from "@/components/about/AboutMetrics";
import { AboutWhy } from "@/components/about/AboutWhy";
import { AboutTeam } from "@/components/about/AboutTeam";
import { AboutCTA } from "@/components/about/AboutCTA";

export default function AboutPage() {
    return (
        <>
            <AboutHero />
            <AboutStory />
            <AboutMetrics />
            <AboutWhy />
            <AboutTeam />
            <AboutCTA />
        </>
    );
}
