// src/components/BurgerStack/BurgerStack.jsx

const BurgerStack = ({stack,removeFromBurger}) => {
  return <ul> 

  
  
        {stack.map((ingredient, index) =>{
         return <li 
            key={index}
            style={{ backgroundColor: ingredient.color }} >
            <span>{ingredient.name}</span>
            <button
              onClick={() => removeFromBurger(index)}
            >
              X
            </button>
          </li>
})}
      </ul>
  
};

export default BurgerStack;
