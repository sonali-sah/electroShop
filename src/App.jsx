import Banner from "./sections/Banner"
import Category from "./sections/Category"
import Footer from "./sections/Footer"
import Header from "./sections/Header"
import { Hero } from "./sections/Hero"
import Insta from "./sections/Insta"
import Productsgrid from "./sections/Productsgrid"
import Reviews from "./sections/Reviews"
import Types from "./sections/Types"
import Services from "./sections/Services"

export default function App() {
  return (
    <>
    <Header />
    <Hero />
    <Category />
    <Types />
    <Services />
    <Productsgrid />
    <Banner />
    <Reviews />
    <Insta />
    <Footer />
    
    </>
  )
}