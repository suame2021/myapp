//import logo from './logo.svg';
import NavbarComponent from "./navbarComponent";
import "bootstrap/dist/css/bootstrap.min.css"
import HomeComponent from "./home";
import CarouselComponent from "./carouselComponent";
import FooterCOmponent from "./footerComponent";



function App() {
  return (
    <div className="App">
      <NavbarComponent/>
      <CarouselComponent/>
      <HomeComponent/>
      <FooterCOmponent/>


    </div>
  );
}

export default App;
