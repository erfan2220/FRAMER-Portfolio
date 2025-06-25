
import './index.css'
import Navbar from "./Components/navbar.jsx";
import Hero from "./Components/Hero.jsx";
import Parallax from "./Components/Parallax.jsx";
import Services from "./Components/services.jsx";
import Portfolio from "./Components/Portfolio.jsx";
import Contact from "./Components/Contact.jsx";
import Cursor from "./Components/Cursor.jsx";

function App()
{
  return (
        <div>
            <Cursor/>
            <section  id="Home" >
                <Navbar/>
                <Hero/>
            </section>
            <section >
                <Parallax type="Services"/>
            </section>
            <section id="Services" className="bg-gradient-to-b from-[#0c0c1d] to-[#111132]">
                <Services/>
            </section>
            <section >
                <Parallax  type="Portfolio"/>
            </section>

                <Portfolio id="Portfolio"/>



            <section className="bg-[#0c0c1d] " id="Contact">
                <Contact/>
            </section>
        </div>

  )
}

export default App
