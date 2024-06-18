import HeroSection from './components/HeroSection'
import PhotosSection from './components/PhotosSection'
import Footer from './components/Footer'
import '../styles/styles.css'
import MapSection from './components/MapSection'


function App() {

  return (
    <>
      <HeroSection/>
      <PhotosSection/>
      <MapSection/>
      <Footer phoneNumber={"+7 (996) 147 68 00"}/>
    </>
  )
}

export default App
