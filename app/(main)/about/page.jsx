import AboutUsHeroSection from '../../components/aboutUsHeroHeading/AboutUsHeroSection'
import MissionAndVision from '../../components/missionAndVision/MissionAndVisionSection'
import Archievements from '../../components/archievements/ArchievementsSection'
import WhatMakesUsBest from '../../components/whatMakesUsTheBest/WhatMakesUsBest'
import TeamSection from '../../components/teamSection/TeamSection'

export const metadata = {
  title: 'ALIFE | About us',
  description: 'Find and connect with blood donors nearby.',
}

const page = () => {
  return (
    <div>
      <AboutUsHeroSection />
      <MissionAndVision/>
      <Archievements/>
      <WhatMakesUsBest/>
      <TeamSection/>
    </div>
  )
}

export default page