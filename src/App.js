import './App.css';
import { namesAndCategories} from './data/data';
import Button from './compnents/button/button';
import ProductContainer from './compnents/productContainer/productContainer';


function App() {
  return (
    <div className="App">
      {namesAndCategories.map(categoryObj => (
        <Button 
        title={categoryObj.category} 
        count={categoryObj.count}
        />
      ))}
      <ProductContainer/>

    </div>
  );
}

export default App;
