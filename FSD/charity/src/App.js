import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { HashRouter, Routes, Route } from "react-router-dom";
import PreLoginPage from './components/Prelogin';
import PreSignupPage from './components/Presignup';

import ADMINlogin from './components/ADMINlogin';
import ADMINsignup from './components/ADMINsignup'




import Review from './components/Review';
import Review1 from './components/Review1';
import Guide_review from './components/Guide_review';
import Review1_results from './components/Review1_results';

import Review2 from './components/Review2';
import Review2_results from './components/Review2_results';

import Review3 from './components/Review3';
import Coreview from './components/Coreview';
import { Provider } from 'react-redux';
import store from './store';
import DonorSignup from './components/DonorSignup';
import DonorLogin from './components/DonorLogin';
import NGOLogin from './components/NGOLogin';
import NGOSignup from './components/NGOSignup';
import CARD from './components/CARD';
import Guide_review2 from './components/Guide_review2';
import ParentSignup from './components/ParentSignup';
import ParentLogin from './components/ParentLogin';
import CARD2 from './components/CARD2';

function App() {
  return (
    <Provider store={store}><div>
   <HashRouter > 
 <Routes>
<Route path='/' element={ <Home/>}/>
<Route path='/donorlogin' element={ <DonorLogin/>}/>
<Route path='/adminlogin' element={ <ADMINlogin/>}/>
<Route path='/ngologin' element={ <NGOLogin/>}/>
<Route path='/donorsignup' element={ <DonorSignup/>}/>
<Route path='/adminsignup' element={ <ADMINsignup/>}/>
<Route path='/ngosignup' element={ <NGOSignup/>}/>
<Route path='/parentsignup' element={ <ParentSignup/>}/>
<Route path='/parentlogin' element={ <ParentLogin/>}/>
<Route path='/prelogin' element={ <PreLoginPage/>}/>
<Route path='/presignup' element={ <PreSignupPage/>}/>
<Route path='/review' element={ <Review/>}/>
<Route path='/review1' element={ <Review1/>}/>
<Route path='/review2' element={ <Review2/>}/>
<Route path='/review3' element={ <Review3/>}/>
<Route path='/card' element={ <CARD/>}/>
<Route path='/card2' element={ <CARD2/>}/>
<Route path='/review1_results' element={ <Review1_results/>}/>
<Route path='/review2_results' element={ <Review2_results/>}/>
<Route path='/guidereview' element={ <Guide_review/>}/>
<Route path='/guidereview2' element={ <Guide_review2/>}/>
<Route path='/coreview' element={ <Coreview/>}/>
</Routes>

 <Footer/> 
</HashRouter> 
</div> 
</Provider>
  );
}

export default App;
