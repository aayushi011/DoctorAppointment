import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router";


function App() {
  return (
    <div className="App">
      <Link to='/registration'>Registration</Link>  
      <Link to='/login'>Login</Link> 
    </div>
  );
}

export default App;
