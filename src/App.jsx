import HeroSection from './components/HeroSection'
import PhotosSection from './components/PhotosSection'
import Footer from './components/Footer'
import '../styles/styles.css'


function App() {

  return (
    <>
      <HeroSection/>
      <PhotosSection/>
      <Footer phoneNumber={9999999}/>
    </>
  )
}

export default App
