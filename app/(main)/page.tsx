'use client'
import Heading from '../components/homeHeading/Heading'
import TrustedBy from '../components/trustedby/TrustedBy'
import Benefits from '../components/donorsBeneifts/Benefits'
import OurImpactSection from "../components/ourImpact/OurImpactSection";
import WhyJoinus from "../components/whyJoinUs/WhyJoinUsSection"
import TestimoniesSection from "../components/testimonies/TestimoniesSection"

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] flex flex-col items-center w-full">
      <Heading/>
      <Benefits/>
      <TrustedBy/>
      <WhyJoinus/>
      <OurImpactSection/>
      <TestimoniesSection/>
    </div>
  );
}
