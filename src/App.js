import './App.css';
import Navbar from './component/Navbar';
import HomeContainer from './containers/HomeContainer';
// import Shop from './component/Shop';
// import Props from './component/Props';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Props data={{name: "chirag", age: 25}} /> */}
      {/* <Shop /> */}
      <HomeContainer>
        
      </HomeContainer>
    </div>
  );
}

export default App;
