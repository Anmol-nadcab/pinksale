import logo from './logo.svg';
import './App.css'
import { Route,Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import jQuery from 'jquery';
import Launchpad from './components/launchpadlist';
import Poolpage from './components/poolpage';
import Private from './components/privatesale';
import Airdrop from './components/airdrop';
import Leader from './components/leaderboard';
import ConnectHeader from './components/ConnectHeader';

function App() {
  return (
    
    <>

     <Routes>

        <Route path='/' element={<Homepage/>}/>
        <Route path='/launchpad' element={<Launchpad/>}/>
        <Route path='/poolpage' element={<Poolpage/>}/>
        <Route path='/private' element={<Private/>}/>
        <Route path='/airdrop' element={<Airdrop/>}/>
        <Route path='/leaderboard' element={<Leader/>}/>

        
        


     
      </Routes>
    </>

  );
}

export default App;
