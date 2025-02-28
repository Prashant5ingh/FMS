import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Adduser from './component/Add';
import Userdetailsedit from './component/userdetailsedit';
import Userdetails from './component/userdetails';
import Userdetailsdelete from './component/userdelete';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import Confirm from './component/confirm';
import './App.css';
import Confirm from './component/confirm';
import Bar from './component/Bar';
import Mainnav from './component/Mainnav';

function App() {
  return (
    <div className="App">
      <Mainnav/>
    </div>
  );
}

export default App;
