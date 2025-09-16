import HeaderTop from "@/components/layout/headers/HeaderTop";
import SectionAbout from "@/components/layout/sections/SectionAbout";
import SectionServices from "@/components/layout/sections/SectionServices";
import SectionPortfolio from "@/components/layout/sections/SectionPortfolio";
import SectionRecentActivity from "@/components/layout/sections/SectionRecentActivity";
import SectionTools from "@/components/layout/sections/SectionTools";
import SectionContact from "@/components/layout/contacts/SectionContact";
import Anchor from "@/components/Anchor";

// export const revalidate = 3600;
// export const dynamic = 'force-dynamic';

export default async function Home() {
  
  return (
    <div>
        {/* Header Section */}
        <HeaderTop />

        {/* About Section */}
        <Anchor id="about" />
        <SectionAbout />

        {/* Services Section */}
        <Anchor id="services" />
        <SectionServices />

        {/* Recent Activity Section */}
        <Anchor id="recent-activity" />
        <SectionRecentActivity />

        {/* Projects Section */}
        <Anchor id="projects" />
        <SectionPortfolio />

        {/* Tools Section */}
        <Anchor id="tools" />
        <SectionTools />

        {/* Contact Section */}
        <Anchor id="contact" />
        <SectionContact />
    </div>
  );
}
