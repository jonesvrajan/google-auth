import './App.css';
import Home from './components/Home';
import LoginHooks from './components/LoginHooks';
import LogoutHooks from './components/LogoutHooks';

function App() {
  return (
    <div className="home">
      <Home/>
      
      <LoginHooks />
      <LogoutHooks />
    </div>
  );
}

export default App;
