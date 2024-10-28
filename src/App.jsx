import NavBar from "./components/NavBar"
import HeroSection from "./components/HeroSection"
import Technologies from "./components/Technologies"
import FooterSection from "./components/FooterSection"
import ProjectSection from "./components/ProjectSection"

function App() {
  return (
    <div className="">
      <NavBar />
      <div className="mx-5 md:mx-10 lg:container lg:mx-auto">
        <HeroSection />
        <ProjectSection />
        <Technologies />
      </div>
      <FooterSection />
    </div>
  )
}

export default App