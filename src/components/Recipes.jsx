import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes, recipesSelector } from "../app/dataSlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getMealId } from "../app/mealSlice";
import { strCategorySelector } from "../app/strCategorySlice";

function Recipes({ category }) {
  const { recipes } = useSelector(recipesSelector);
  const dispatch = useDispatch();
  const { strCategory } = useSelector(strCategorySelector);
  let currCategory = [];

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  const handleClick = (id) => {
    dispatch(getMealId(id));
  };

  if (category === strCategory) {
    let listCategory = recipes.filter((e) => e.strCategory === category);
    currCategory = listCategory;
  }

  return (
    <Container>
      <MainTitle>Menu</MainTitle>
      <Container1>
        {category ? (
          <>
            {currCategory.length > 0 ? (
              currCategory.map((e) => Component(e, handleClick))
            ) : (
              <NotFound>Sorry No Meal Found</NotFound>
            )}
          </>
        ) : (
          <>{recipes.map((e) => Component(e, handleClick))}</>
        )}
      </Container1>
    </Container>
  );
}

function Component(e, handleClick) {
  return (
    <Container2 key={e.idMeal}>
      <Link
        onClick={() => handleClick(e.idMeal)}
        to={`/meal/${e.idMeal}`}
        style={{ textDecoration: "none", color: "#333" }}
      >
        <Image src={e.strMealThumb} alt="" />
        <Title>{e.strMeal}</Title>
      </Link>
    </Container2>
  );
}

var Container = styled.div`
    flex: 3;
  `,
  Container1 = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    height: calc(100vh - 130px);
    overflow: auto;
    padding: 0.5rem;
    &::-webkit-scrollbar {
      width: 7px;
    }
    &::-webkit-scrollbar-thumb {
      background: #ccc;
      border-radius: 10px;
    }
    @media screen and (min-width: 320px) and (max-width: 600px){
      overflow: visible;
    }
  `,
  Container2 = styled.div`
    width: calc(100% / 3 - 11px);
    height: 250px;
    padding-bottom: 2rem;
    margin-bottom: 1rem;
    box-shadow: 0px 0px 14px -3px rgba(0, 0, 0, 0.53);
    border-radius: 5px;
    cursor: pointer;
    @media screen and (min-width: 320px) and (max-width: 600px){
      width: 47%;
      height: 150px;
    }
  `,
  MainTitle = styled.h2`
    text-align: center;
    padding: 1rem 0;
  `,
  Title = styled.h3`
    text-align: center;
  `,
  Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
  `,
  NotFound = styled.h2`
    font-size: 3rem;
    text-align: center;
    width: 100%;
  `;

export default Recipes;
