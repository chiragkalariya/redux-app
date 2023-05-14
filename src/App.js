import './App.css';
import HomeContainer from './containers/HomeContainer';
import NavbarContainer from './containers/NavbarContainer';
import Navbar from './containers/NavbarContainer'
// import Shop from './component/Shop';
// import Props from './component/Props';

function App() {
  return (
    <div className="App">
      <NavbarContainer />
      {/* <Props data={{name: "chirag", age: 25}} /> */}
      {/* <Shop /> */}
      <HomeContainer />
    </div>
  );
}

export default App;
