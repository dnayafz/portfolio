import './App.css';
import Header from "./components/Header"; 
import Footer from "./components/footer";
import  Formations  from './components/Diplomas';
import  Experiences from './components/internship';
import  Accueil  from './components/Home';
import  Certificates from './components/Certificates';
import { Navbar,Nav,Container } from 'react-bootstrap';
import {
 
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      
      <Header />
  
      <Navbar  bg="light"  variant="light" expand="lg" ms-auto > 
        <Container  >
      
          <Nav  className=" py-3  mx-auto" >
            <Nav.Link as={Link} to="/">Accueil</Nav.Link>
            <Nav.Link as={Link} to="/formations">Formations</Nav.Link>
            <Nav.Link as={Link} to="/experiences">Experiences</Nav.Link>
            <Nav.Link as={Link} to="/certificates">Certifications</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div>
        <Routes>
          <Route  path="/" element={<Accueil/>}/>
          <Route  path="/formations" element={<Formations/>}/>
          <Route  path="/certificates" element={<Certificates/>}/>
          <Route  path="/experiences" element={<Experiences/>}/>
        </Routes>
        </div>
      
        <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
