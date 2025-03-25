import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Home from "./Home";
import NavBar from "./NavBar";
import  {Routes , Route , Link} from 'react-router-dom'


function App(){
  return(
    <>
    <NavBar />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<ContactUs />} />
    </Routes>
    </>
  )
}
import { Form } from "react-router-dom";

export default App;
