import StartTodaySection from "@/components/startTodaySection/StartTodaySection";
import HeroSection from "@/components/template/hero/HeroSection";
import ServiceSection from "@/components/template/serviceSection/ServiceSection";
import Container from "@/components/ui/Container";

function HomePage() {
  return (
    <>
      <HeroSection />
      <Container>
        <ServiceSection />
      </Container>
      <StartTodaySection />
    </>
  );
}

export default HomePage;
