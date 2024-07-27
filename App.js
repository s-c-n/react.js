import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import ClassClick from './Component/ClassClick';
import Details from './Component/Details';
import EventBinding from './Component/EventBinding';
import FunctionClick from './Component/FunctionClick';
import Great from './Component/Great';
import Table from './Component/Table';
import Hook from './Component/Hook';
import Assign from './Component/Assign';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import Navbar from './Component/Page/Navbar';
import Image from './Component/Page/Image';
import Para from './Component/Page/Para';
import Button from './Component/Page/Button';
import Buttons from './Component/Page/Buttons';
function App() {
  return (
    <div>
      {/* <Great />
      <Table />
      <Details nickname = 'LM10' title = 'G.O.A.T'/>
      <FunctionClick />
      <ClassClick />
      <EventBinding />
      <Hook />
      <Assign />
      <Home />
      <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      </BrowserRouter> */}

     <Navbar />
     <Image />
     <Para />
     <Button />
     <Buttons />
    </div>
  );
}

export default App;
