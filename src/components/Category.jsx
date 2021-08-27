import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { categoriesSelector, getCategories } from "../app/categorySlice";
import { getStrCategory } from "../app/strCategorySlice";

function Category() {
  const { categories } = useSelector(categoriesSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const handleClick = (e) => {
    dispatch(getStrCategory(e));
  };

  return (
    <Container>
      <MainTitle>Category</MainTitle>
      <Container1>
        {categories.map((e) => (
          <Link 
            onClick={() => handleClick(e.strCategory)} 
            key={e.idCategory}
            to={`/category/${e.strCategory}`}
            style={{
              textDecoration: "none",
              color: "#000",
            }}
          >
          <Container2>
            <Title>{e.strCategory}</Title>
            <Image src={e.strCategoryThumb} alt="" />
          </Container2>
          </Link>
        ))}
      </Container1>
    </Container>
  );
}

var Container = styled.div`
    flex: 1;
  `,
  Container1 = styled.div`
    overflow: auto;
    height: calc(100vh - 130px);
    padding: 0.5rem;
    &::-webkit-scrollbar {
      width: 7px;
    }
    &::-webkit-scrollbar-thumb {
      background: #ccc;
      border-radius: 10px;
    }
    @media screen and (min-width: 320px) and (max-width: 600px){
      display: flex;
      overflow-x: scroll;
      height: 190px;
      gap: .5rem;
      padding: 0.1rem;
    }
  `,
  Container2 = styled.div`
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 0px 5px -1px rgba(0, 0, 0, 0.91);
    margin-bottom: 0.5rem;
    border-radius: 5px;
  `,
  MainTitle = styled.h2`
    text-align: center;
    padding: 1rem 0;
    @media screen and (min-width: 320px) and (max-width: 600px){
      
    }
  `,
  Title = styled.h2`
    font-size: 24px;
    margin-bottom: 1rem;
    @media screen and (min-width: 320px) and (max-width: 600px){
      font-size: 1.3rem
    }
  `,
  Image = styled.img`
    width: 250px;
    height: 150px;
    object-fit: cover;
    cursor: pointer;
    @media screen and (min-width: 320px) and (max-width: 600px){
      width: 170px;
      height: 80px;
    }
  `;

export default Category;
