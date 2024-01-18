import { useState } from 'react'
import './App.css';
import ButtonContainer from './compnents/buttonContainer/buttonContainer';
import ProductContainer from './compnents/productContainer/productContainer';


function App() {
  const [category, setCategory] = useState('All')
  console.log(category)
  return (
    <div className="App">
      <ButtonContainer setCategory={setCategory}/>
      <ProductContainer 
      filteredCategory={category}/>
    </div>
  );
}

export default App;
