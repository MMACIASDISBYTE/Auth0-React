import { useAuth0 } from '@auth0/auth0-react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { LayOut } from './components/pages/LayOut';
import { InfoUser } from './components/pages/InfoUser';

function App() {

  // metodos de Auth0
  const { isLoading} = useAuth0();

  if(isLoading) return <h1>Loading...</h1>;

  return (
    <div className="App">
      <Routes>
        <Route path='/' exactly={true} element={<Home/>}></Route>
        <Route path='/guest' element={<LayOut/>}></Route>
        <Route path='/info-user/:token' element={<InfoUser/>}></Route>
      </Routes>      
    </div>
  );
}

export default App;
