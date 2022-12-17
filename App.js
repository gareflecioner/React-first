import './App.css';
import{Route,Routes} from "react-router-dom"
import Layout from './components/Layout';
import {Main} from './pages/Main'
import {About} from './pages/About'
import {Posts} from './pages/Posts'
import {NotFound} from './pages/NotFound'
import {AdviseOn} from './pages/AdviseOn'



function App() {
  return (
    <>
      <Routes>
        <Route path='/' element ={<Layout/>}>
         <Route index element ={<Main/>}/>
         <Route path='about' element ={<About/>}/>
         <Route path='posts' element ={<Posts/>}/>
         <Route path='advise_on' element ={<AdviseOn/>}/>
         <Route path='*' element ={<NotFound/>}/>
        </Route>
      </Routes>  
    </>
  );
}

export default App;
