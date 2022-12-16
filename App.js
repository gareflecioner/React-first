import './App.css';
import{BrowserRouter,Route,Routes,Router} from "react-router-dom"
import {Navbar} from './components/Navbar'
import { Footer } from './components/Footer';
import{Form} from './components/Form'
import MyButton from './components/MyButton';
import MyCarousel from './components/MyCarousel';
import DefaultCard from './components/DefaultCard';


function App() {
  return (
<BrowserRouter>

<Navbar/>
<h1>Сайт с рецензиями</h1>

<MyCarousel/>

<Footer/>


</BrowserRouter>


    // <BrowserRouter>
    // <Navbar>
    // </Navbar>
    //   <Routes>
    //     <Route path='/' element ={<Main/>}/>
    //     <Route path='/about'  element ={<About/>}/>
    //     <Route path='/*'  element ={<NotFound/>}/>

    //   </Routes>
    //   <Footer></Footer>
    // </BrowserRouter>
  );
}

export default App;
