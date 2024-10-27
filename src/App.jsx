import NavBar from "./components/NavBar"
import HeroSection from "./components/HeroSection"

function App() {
  return (
    <div>
      <NavBar />
      <div className="mx-5 md:mx-10 lg:container lg:mx-auto">
        <HeroSection />
      </div>
    </div>
  )
}

export default App