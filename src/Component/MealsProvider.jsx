import React, { useState } from "react";

const MealsContext = React.createContext();

const todaysMeals = [
    "Dish 1",
    "Dish 2",
    "Dish 3",
    "Dish 4"
];

const MealsProvider = ({children}) => {
    const[meals, setMealsList] = useState(todaysMeals);

    return (
        <MealsContext.Provider value={{meals}} >
            {children}
        </MealsContext.Provider>
    )
}

export const useMealsListContext = () => React.useContext(MealsContext);

export default MealsProvider