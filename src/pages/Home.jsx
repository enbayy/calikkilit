import AboutSection from '../components/home/AboutSection'
import HeroSection from '../components/home/HeroSection'
import ProductCategoriesSection from '../components/home/ProductCategoriesSection'
import { heroSlides } from '../components/home/homeData'

function Home() {
  return (
    <div className="pb-16">
      <HeroSection slides={heroSlides} />
      <ProductCategoriesSection />
      <AboutSection />
    </div>
  )
}

export default Home

