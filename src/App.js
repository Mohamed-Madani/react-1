import logo from './logo.svg';
import './App.css';
import Name from './component/Name';
import Description from './component/Description';
import Price from './component/Price';
import Image from './component/Image';

function App() {
  return (
    <div className="App">
     <Image />  
     <Name /> 
     <Description />
     <Price />
    </div>
  );
}

export default App;
