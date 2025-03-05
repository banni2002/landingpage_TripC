import Header from "@/components/Header"
import Introduce from "@/components/Introduce"
import Partners from "@/components/Partners"
import Download from "@/components/Download"
import Customer from "@/components/Customer"
import FAQs from "@/components/FAQs"
import Footer from "@/components/Footer"
import FeatureSection from "@/components/FeatureSection"
import PropertyListing from "@/components/PropertyListing"
import ChatbotButton from "@/components/ui/chatbot-button";

export default function Home() {
  return (
    <div id="app">
    <Header />
    <main className="min-h-screen flex flex-col landing-page">
      {/* Header */}
      <Introduce />
      <Partners />
      <Download />
      <Customer />
      <FeatureSection />
      <FAQs />
      <PropertyListing />
      <ChatbotButton />
    </main>
    <Footer />
    </div>
  )
}

