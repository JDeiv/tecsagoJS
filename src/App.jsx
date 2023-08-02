import About from "./components/About"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Main from "./components/Main"
import Products from "./components/Products"
import { Link, Route, Routes } from "react-router-dom"
import Services from "./components/Services"
import Contact from "./components/Contact"


function App() {
  
return (
  <div>
  <Header />
  
  {/*<Main />*/}
  
  <Routes>
    <Route path='/' element={<Hero />}/>
    <Route path='about' element={<About />}/>

    <Route path='services' element={<Services />}/>

    <Route path='products' element={<Products />}/>

    <Route path='contact' element={<Contact />}/>
    
  </Routes>
  <div className="mt-8">
  <Footer/>
  </div>
  </div>
)
}

export default App
