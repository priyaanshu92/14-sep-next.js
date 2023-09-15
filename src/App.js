// 1. Import area

import './App.css';
import Header from './components/Header';
import Footer from './components/footer';
import Aside from './components/Aside';
import Section from './components/Section';


//2. Function definition area
function App() {
  return (
    <>
    <Header/>
     <main>
      < Aside/>
      < Section/>
      <Footer/>
     </main>
     
    </>
  );
}
//3.Export area
export default App;
