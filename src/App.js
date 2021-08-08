import logo from './logo.svg';
import './App.css';
import ProfilPhoto from './Component/Profile/ProfilePhoto';
import FullName from './Component/Profile/FullName';
import Adress from './Component/Profile/Adress';
function App() {
  return (
    <div className="main-container">
      <ProfilPhoto />
      <div className="nom" >
        <FullName />
        <Adress />
      </div>
    </div>

  );
}

export default App;
