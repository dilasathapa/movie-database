
import './App.css';
import AllRoutes from './Components/Allroutes/AllRoutes';
import Navbar from './Components/Allroutes/Navbar';
import AddMovie from './Components/Pages/AddMovie';
// import Home from './Components/Pages/Home';

function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      {/* <AddMovie/> */}
      <Navbar/>

      <AllRoutes/>

    </div>
  );
}

export default App;
