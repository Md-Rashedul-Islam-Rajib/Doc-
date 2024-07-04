
import './App.css'
import Banner from './components/Banner'
import BottomBanner from './components/BottomBanner'
import Care from './components/Care'
import Faq from './components/Faq'
import Footer from './components/Footer'
import Nav from './components/Nav'
import ServiceSection from './components/ServiceSection'
import Testimonials from './components/Testimonials'

import WhoWeAre from './components/WhoWeAre'



function App() {
  

  return (
    <>
      <Nav />
      <div className='my-4 max-w-7xl mx-auto'>
      <Banner />
      </div>
      <div className="my-12 max-w-7xl mx-auto">
      <Care />
      </div>
      <div className="my-12 max-w-7xl mx-auto">
        <WhoWeAre/>
      </div>
      <div className="my-32 bg-[#fffff5] p-2 max-w-7xl mx-auto rounded-lg">
        <ServiceSection />
      </div>
      <div className="my-20 max-w-7xl mx-auto">
        <Testimonials />
      </div>
      <div className="my-20 max-w-7xl mx-auto">
        <Faq />
      </div>
      <div className="my-20 max-w-7xl mx-auto">
        <BottomBanner />
      </div>
      <Footer />
    </>
  )
}

export default App
