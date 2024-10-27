import NavBar from "./components/NavBar"
import HeroSection from "./components/HeroSection"
import Technologies from "./components/Technologies"
// import Test from "./components/Test/Test"

function App() {
  return (
    <div className="">
      <NavBar />
      <div className="mx-5 md:mx-10 lg:container lg:mx-auto">
        <HeroSection />
        <Technologies />
        {/* <Test /> */}
      </div>
    </div>
  )
}

export default App