import { useSelector } from "react-redux";
import styled from "styled-components";
import { recipesSelector } from "../app/dataSlice";
import { mealIdSelector } from "../app/mealSlice";

function Meal() {
  const { id } = useSelector(mealIdSelector);
  const { recipes } = useSelector(recipesSelector);
  let meal = recipes.filter((e) => e.idMeal === id);
  meal = meal[0];
  // get meal ingredients and measures
  let mealIngredients = [],
    measures = [];
  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`] !== "") {
      mealIngredients.push(meal[`strIngredient${i}`]);
    }
    if (meal[`strMeasure${i}`] !== " ") {
      measures.push(meal[`strMeasure${i}`]);
    }
  }

  return (
    <Container>
      <ColLeft>
        <img
          src={meal.strMealThumb}
          alt=""
          width="100%"
          height="auto"
          style={{ objectFit: "cover" }}
        />
      </ColLeft>
      <ColRight>
        <Container2>
            <Title>{meal.strMeal}</Title>
            <Title3>Category: {meal.strCategory}</Title3>
            <Tags>Tags : {meal.strTags}</Tags>
            <Title3>Area: {meal.strArea}</Title3>
        </Container2>
        <Container2>
            <Title2>Ingredients: </Title2>
            <WrapIngredient>
            {mealIngredients.map((e, i) => (
                <Ingredient key={i}>
                  {e}({measures[i] === "Dash" ? "-" : measures[i]})
                </Ingredient>
            ))}
            </WrapIngredient>
        </Container2>
        <Container2>
            <Title2>Instruction:</Title2>
            <Instruction>{meal.strInstructions}</Instruction>
        </Container2>
        <div>
          <Link href={meal.strYoutube} rel="_blank">Watch on youtube</Link>
        </div>
      </ColRight>
    </Container>
  );
}

var Container = styled.div`
    display: flex;
    width: 100%;
    margin-top: 2rem;
    @media screen and (min-width: 320px) and (max-width: 600px) {
      flex-direction: column;
      gap: 1rem;
    }
  `,
  Container2 = styled.div`
    margin-bottom: 2rem;
  `,
  ColLeft = styled.div`
    width: 50%;
    @media screen and (min-width: 320px) and (max-width: 600px) {
      width: 100%;
    }
  `,
  ColRight = styled.div`
    width: 50%;
    padding-left: 1rem;
    @media screen and (min-width: 320px) and (max-width: 600px) {
      width: 100%;
      padding-left: 0;
    }
  `,
  Title = styled.h1`
    font-size: 2.2rem;
    margin-bottom: 1rem;
    @media screen and (min-width: 320px) and (max-width: 600px){
      margin-bottom: .5rem;
    }
  `,
  Title2 = styled.h3`
    font-size: 1.5rem;
  `,
  Title3 = styled.h5`
    font-size: 0.9rem;
    font-weight: 400;
  `,
  Tags = styled.h5`
    font-size: 0.9rem;
    margin: 0.5rem 0;
    font-weight: 400;
  `,
  WrapIngredient = styled.div`
    margin-top: 1rem;
  `,
  Ingredient = styled.span`
    margin-right: 1rem;
    margin-bottom: .3rem;
    display: inline-block;
  `,
  Instruction = styled.p`
    margin-top: 1rem;
    font-size: 1.2rem;
    @media screen and (min-width: 320px) and (max-width: 600px){
      text-align: justify;
      padding: 0 .3rem;
    }
  `,
  Link = styled.a`
    font-size: 2rem;
    text-decoration: none;
    margin-top: 2rem;
    display: block;
    color: blue;
    @media screen and (min-width: 320px) and (max-width: 600px){
      margin-bottom: 2rem;
    }
  `;

export default Meal;
