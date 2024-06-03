import CallToActionSection from '@/components/CallToAction'
import FAQ from '@/components/FAQ'
import FeaturesSection from '@/components/Features'
import HeroSection from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import PricingSection from '@/components/Pricing'
import JoinWaitlistSection from '@/components/Waitlist'

const HomePage: React.FC = () => {
  return (
    <main className="flex-grow">
      <HeroSection />
      <FeaturesSection />
      <HowItWorks />
      <JoinWaitlistSection />
      <PricingSection />
      <FAQ />
      <CallToActionSection />
    </main>
  )
}

export default HomePage
