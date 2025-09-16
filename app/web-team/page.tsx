import HeaderSubpage from "@/components/layout/headers/HeaderSubpage";
import SectionWebTeamAbout from "@/components/layout/sections/web-team/SectionWebTeamAbout";
import SectionWebTeam from "@/components/layout/sections/web-team/SectionWebTeam";

// export const revalidate = 3600;
// export const dynamic = 'force-dynamic';

export default async function Home() {
  
  return (
    <div>
        {/* Header Section */}
        <HeaderSubpage />

        {/* Web Team About Section */}
        <SectionWebTeamAbout />

        {/* Web Team Section */}
        <SectionWebTeam />
    </div>
  );
}
