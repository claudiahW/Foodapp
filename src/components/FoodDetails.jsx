import { useEffect, useState } from "react";
import styles from "./fooddetails.module.css";
export default function FoodDetails({ foodId }) {
    const [food, setFood] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
    const API_KEY = "69b76754940b4f86ba578a8ae490bc9f";
    useEffect(() => {
       async function fetchFood() {
          const res = await fetch(`${URL}?apiKey=${API_KEY}`);
          const data = await res.json();
          console.log(data);
          setFood(data);
          setIsLoading(false);
        }
        fetchFood();
    }, [foodId]);
    return (
    <div>
        <div className={styles.recipeCard}>
            <h1>{food.title}</h1>
            <img src={food.image} alt="" />
       <div>  
    <span>
       <strong>⏲ {food.readyInMinutes} Minutes   </strong> 
    </span>
    <span>
     👪 <strong>Serves {food.servings} </strong>  
    </span>
    <span>{food.vegetarian ? "🥕Vegetarian" : "🍖Non-vegetarian"} </span>
    <span>{food.vegan ? "🐄 Vegan" : ""}</span>  
    </div>
    <div>
      💵 <span>{food.pricePerServing/100} Per Serving</span>
    </div>
      </div>
       
        <h2>Instructions</h2>
        <div>
         <ol>  
        {isLoading? (
        <p>Loading...</p>
        ) : ( 
          food.analyzedInstructions[0].steps.map((step) => (
          <li>{step.step}</li>
          ))
        )}
        </ol> 
    </div>
    </div>
    );
}
