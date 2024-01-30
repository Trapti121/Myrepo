import './App.css';
import "./index.css";
import React, {useState} from "react";
import Home from "./routes/Home";
import Dogs from "./routes/Dogs";
import Cats from "./routes/Cats";
import Fishes from "./routes/Fishes";
import Birds from "./routes/Birds";
import Feedbacks from "./routes/Feedbacks";
import Dogfood from "./routes/DogFoods";
import Catfood from "./routes/CatFoods";
import { Route, Routes } from 'react-router-dom';
import { Login } from './routes/Login';
import { Register } from './routes/Register';
import EnquiryForm from './components/Enquiry/EnquiryForm';
import CartPage from './components/CartFolder/CartPage';

function App() {
  const [currentForm, setCurrentForm] = useState('login');
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  return (
   <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/dogs" element={<Dogs/>}/>  
      <Route path="/cats" element={<Cats/>}/>
      <Route path="/birds" element={<Birds/>}/>
      <Route path="/fishes" element={<Fishes/>}/>
      <Route path="/cart" element={<CartPage/>}/>
      <Route path="/dogfood" element={<Dogfood/>}/>
      <Route path="/catfood" element={<Catfood/>}/>
      <Route path="/feedback" element={<Feedbacks/>}/>
      <Route path="/fishes/sendenquiry/:id" element={<EnquiryForm/>}/>
      <Route path="/login" element={<Login onFormSwitch={toggleForm} />} />
      <Route path="/register" element={<Register onFormSwitch={toggleForm} />} />
      </Routes>
    </>
  );
}
export default App;
