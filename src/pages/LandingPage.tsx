import MainLayout from "../layouts/MainLayout/MainLayout";
import Hero from "../components/Hero/Hero";
import Features from "../components/Features/Features";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import DashboardPreview from "../components/DashboardPreview/DBPreview";
import Footer from "../components/Footer/Footer";

function LandingPage() {
  
  return (
    <MainLayout>
      <Hero />
      <Features />
      <WhyChooseUs />
      <DashboardPreview />
      <Footer />
    </MainLayout>
  );
}

export default LandingPage;   
