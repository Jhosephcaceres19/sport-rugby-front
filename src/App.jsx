import { Article } from "./Article";
import FormularioPrueba from "./componentes/FormularioPrueba";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

// App.js
export const App = () => {
  return (
    <div className='bg-[#9fd5d1] min-h-screen'>
      <Navbar/>
      <FormularioPrueba/>
      <Article/>
      
      <Footer/>
    </div>
  );
};
