import './App.css';
import { namesAndCategories, data } from './data/data';
import Button from './compnents/button/button';


function App() {
  const allCategories = data.map(obj => obj.category)
const categorieSet = new Set(allCategories) 
const categoriesUnique = Array.from(categorieSet)
console.log(categoriesUnique)
  return (
    <div className="App">
      {namesAndCategories.map(categoryObj => (
        <Button 
        title={categoryObj.category} 
        count={categoryObj.count}
        />
      ))}

    </div>
  );
}

export default App;
