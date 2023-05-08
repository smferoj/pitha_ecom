import { Outlet } from 'react-router-dom';
import './App.css';
import toast, { Toaster } from 'react-hot-toast';
import Header from './component/Header';

function App() {
  return (

<>
<Toaster/>
<div> 
 <Header/>
 <main className='pt-16 bg-slate-100 min-h-[calc(100vh)]'>
  <Outlet/>
 </main>
 </div>
</>
  );
}

export default App;
