import './App.css';
import NavBar from './Navbar';
import AppRoutes from './Routes';
import { Footer } from './Footer';

function App() {
  return (
    <div >
      <header className='container-fluid'>
        <NavBar/>
      </header>
      <main className='container-fluid'>
        <AppRoutes/>
        <Footer/>
      </main>
    </div>
  );
}

export default App;
