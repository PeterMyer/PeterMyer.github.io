import './App.css';
import NavBar from './Navbar';
import AppRoutes from './Routes';
import { Footer } from './Footer';
import TagManager from 'react-gtm-module'

function App() {

  const tagManagerArgs = {
    gtmId: 'GTM-5VW8PXG'
  }
  TagManager.initialize(tagManagerArgs)

  return (
    <div >
      <header className='container-fluid'>
        <NavBar/>
      </header>
      <main className='container-fluid'>
        <AppRoutes/>
      </main>
      <Footer className="footer-component"/>
    </div>
  );
}

export default App;
