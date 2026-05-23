import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { PhilosophySection } from '@/components/sections/PhilosophySection'
import { TechStackSection } from '@/components/sections/TechStackSection'
import { CurrentWorkSection } from '@/components/sections/CurrentWorkSection'
import { EngineeringImpactSection } from '@/components/sections/EngineeringImpactSection'
import { EngineeringDomainsSection } from '@/components/sections/EngineeringDomainsSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { AIWorkflowSection } from '@/components/sections/AIWorkflowSection'
import { GitHubSection } from '@/components/sections/GitHubSection'
import { ExperienceSection } from '@/components/sections/ExperienceSection'
import { ContactSection } from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0e1a]">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <PhilosophySection />
      <TechStackSection />
      <CurrentWorkSection />
      <EngineeringImpactSection />
      <EngineeringDomainsSection />
      <ProjectsSection />
      <AIWorkflowSection />
      <GitHubSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
