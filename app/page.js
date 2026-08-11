import HeroSection from './components/HeroSection';
import AntigravityAssistant from './components/AntigravityAssistant';
import ProjectShowcase from './components/ProjectShowcase';
import TechStack from './components/TechStack';
import ExperienceTimeline from './components/ExperienceTimeline';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 overflow-hidden">
      <HeroSection />
      <AiAssistant />
      <ProjectShowcase />
      <TechStack />
      <ExperienceTimeline />
      <ContactSection />
      <Footer />
    </main>
  );
}
