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
function App() {
  return (
    <div>
      <Great />
      <Table />
      <Details nickname = 'LM10' title = 'G.O.A.T'/>
      <FunctionClick />
      <ClassClick />
      <EventBinding />
      <Hook />
      <Assign />
      <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
