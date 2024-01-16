import { useState } from 'react'
import './App.css';
import { namesAndCategories} from './data/data';
import Button from './compnents/button/button';
import ProductContainer from './compnents/productContainer/productContainer';


function App() {
  const [category, setCategory] = useState('All')
  console.log(category)
  return (
    <div className="App">
      {namesAndCategories.map(categoryObj => (
        <Button 
        category={categoryObj.category} 
        count={categoryObj.count}
        setCategory={setCategory}
        />
      ))}
      <ProductContainer 
      filteredCategory={category}/>

    </div>
  );
}

export default App;
