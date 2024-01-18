import React from "react";
import { namesAndCategories} from '../../data/data';
import Button from '../button/button';

function buttonContainer({setCategory}) {
    const buttonContainerStyle = {
        marginTop: "20px",
      };
  return (
    <div style={buttonContainerStyle}>
      {namesAndCategories.map((categoryObj) => (
        <Button
          category={categoryObj.category}
          count={categoryObj.count}
          setCategory={setCategory}
        />
      ))}
         <Button
          category={"All"}
          count={100}
          setCategory={setCategory}
        />
    </div>
  );
}

export default buttonContainer;
