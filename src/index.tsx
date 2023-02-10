import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; 
import Layout from './Layout'; 
import Symptoms from './components/Symptoms'; 
import SymptomDetails from './SymptomDetails';
import reportWebVitals from './reportWebVitals';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import AdminPage from './components/AdminPage';
import AdminPageForm from './components/AdminPageForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LogIn from './components/LogIn';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>    
   <ToastContainer />
    <Routes>     
      <Route path='/' element={<Layout/>}>
        <Route path='/symptoms' element={<Symptoms/>}/>
        <Route path='/symptom/:symptomTitle' element={<SymptomDetails/>}/>
        <Route path='/' element={<App/>}/>
        <Route path='/admin' element={<AdminPage/>}/>
        <Route path='/admin/:symptom_id' element={<AdminPageForm/>}/>
        <Route path='/login' element={<LogIn/>}/>
      </Route>
      
    </Routes>
    </BrowserRouter>

    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
