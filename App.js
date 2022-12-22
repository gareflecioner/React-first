import './App.css';
import{Route,Routes} from "react-router-dom"
import Layout from './components/Layout';
import {Main} from './pages/Main'
import {About} from './pages/About'
import {Posts} from './pages/Posts'
import {NotFound} from './pages/NotFound'
import {AdviseOn} from './pages/AdviseOn'
import { PageCard } from './pages/PageCard';
import {SingUp} from './pages/SingUp'
import { LogIn } from './pages/LogIn';
import { Profile } from './pages/Profile';



function App() {
  return (
    <>
      <Routes>
        <Route path='/' element ={<Layout/>}>
         <Route index element ={<Main/>}/>
         <Route path='about' element ={<About/>}/>
         <Route path='posts' element ={<Posts/>}/>
         <Route path='posts/:id' element ={<PageCard/>}/>
         <Route path='advise_on' element ={<AdviseOn/>}/>
         <Route path='SingUp' element ={<SingUp/>}/>
         <Route path='LogIn' element ={<LogIn/>}/>
         <Route path='Profile' element ={<Profile/>}/>
         <Route path='*' element ={<NotFound/>}/>
        </Route>
      </Routes>  
    </>
  );
}

export default App;
