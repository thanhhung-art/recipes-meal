import styled from "styled-components";
import Category from "./components/Category";
import Recipes from "./components/Recipes";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Meal from "./pages/Meal";
import { useSelector } from "react-redux";
import { mealIdSelector } from "./app/mealSlice";
import { strCategorySelector } from "./app/strCategorySlice";
import CategoryMeal from "./pages/CategoryMeal";

function App() {
  const {id} = useSelector(mealIdSelector);
  const {strCategory} = useSelector(strCategorySelector);

  return (
    <Router>
      <Navbar />
      <Container>

        <Switch>
          <Route path={`/meal/${id}`}>
            <Meal />
          </Route>
          <Route path={`/category/${strCategory}`}>
            <CategoryMeal />
          </Route>  
          <Route path="/">
            <Category />
            <Recipes category={null}/>
          </Route>
        </Switch>
        
      </Container>
    </Router>
  );
}

var Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
`;

export default App;
