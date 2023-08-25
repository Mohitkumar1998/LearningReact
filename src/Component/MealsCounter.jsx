import { useMealsListContext } from "./MealsProvider";

const MealsCounter = () => {
    const { meals } = useMealsListContext();

    return (
        <div>
            <h3>Number of Meals today: {meals.length}</h3>
        </div>
    );
}

export default MealsCounter;