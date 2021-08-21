import { useSelector } from "react-redux";
import { strCategorySelector } from "../app/strCategorySlice";
import Category from "../components/Category";
import Recipes from "../components/Recipes";

function CategoryMeal() {
    const {strCategory} = useSelector(strCategorySelector);
    return (
        <>
            <Category />
            <Recipes category={strCategory} />
        </>
    )
}

export default CategoryMeal;
