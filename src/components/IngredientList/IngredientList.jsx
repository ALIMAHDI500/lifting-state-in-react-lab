// src/components/IngredientList/IngredientList.jsx
const IngredientList = ( {ingredient, addToBurger}) => {
  
   
  return <ul> 
    
   
  {  ingredient.map((ingredient,index)=>{
    return <li key={index} style={{ backgroundColor: ingredient.color }}>
      {ingredient.name}  

          <button onClick={() => addToBurger(ingredient)}>+</button>

     </li> 

  })}
       
</ul>

    
};

export default IngredientList;
