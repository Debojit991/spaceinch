import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import OurServices from './components/OurServices';
import WhyChooseUs from './components/WhyChooseUs';
import HowWeWork from './components/HowWeWork';
import LatestProjects from './components/LatestProjects';
import ClientTestimonials from './components/ClientTestimonials';
import LatestNews from './components/LatestNews';
import Footer from './components/Footer';

export default function Page() {
  return (
    <main className="min-h-screen">
      <div id="home"><HeroSection /></div>
      <div id="about"><AboutUs /></div>
      <div id="services"><OurServices /></div>
      <WhyChooseUs />
      <HowWeWork />
      <div id="projects"><LatestProjects /></div>
      <ClientTestimonials />
      <div id="blog"><LatestNews /></div>
      <Footer />
    </main>
  );
}
