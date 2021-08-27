import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { recipesSelector } from "../app/dataSlice";
import { getMealId } from "../app/mealSlice";

function Search() {
  const inputEl = useRef(null);
  const { recipes } = useSelector(recipesSelector);
  const [showSuggest, setShowSuggest] = useState(true);
  const [currSuggests, setCurrSuggests] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [activeEl, setActiveEl] = useState(0);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (e) => {
    let value = e.target.value;
    if (value) {
      const listSuggests = recipes.filter((suggestion) =>
        suggestion.strMeal.toLowerCase().includes(value.toLowerCase())
      );
      setCurrSuggests(listSuggests);
      setUserInput(value);
    } else {
      setCurrSuggests([]);
      setActiveEl(0);
      setUserInput("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      dispatch(getMealId(currSuggests[activeEl].idMeal));
      // reset search bar
      setActiveEl(0);
      setShowSuggest(false);
      setUserInput("");
      inputEl.current.blur();
      // redirect
      history.push(`/meal/${currSuggests[activeEl].idMeal}`);
    } else if (e.keyCode === 38) {
      if (activeEl === 0) {
        setActiveEl(currSuggests.length - 1);
      } else {
        if (userInput) setActiveEl(activeEl - 1);
      }
    } else if (e.keyCode === 40) {
      if (activeEl === currSuggests.length - 1) {
        setActiveEl(0);
      } else {
        if (userInput) setActiveEl(activeEl + 1);
      }
    }
  };

  const handleClick = (id) => {
    dispatch(getMealId(id));
    history.push(`/meal/${id}`);
  };

  return (
    <Container>
      <Container1>
        <Input
          placeholder="Search meal..."
          onChange={handleChange}
          onFocus={() => setShowSuggest(true)}
          onBlur={() => {
            setShowSuggest(false);
            setCurrSuggests([]);
            setActiveEl(0);
          }}
          onKeyDown={handleKeyDown}
          ref={inputEl}
          value={userInput}
        />
      </Container1>
      {showSuggest && (
        <Suggests>
          {currSuggests.map((e, i) => {
            return (
              <SuggestItem
                active={i === activeEl ? "red" : "#333"}
                onMouseDown={() => handleClick(e.idMeal)}
                key={i}
              >
                {e.strMeal}
              </SuggestItem>
            );
          })}
        </Suggests>
      )}
    </Container>
  );
}

var Container = styled.div`
    position: relative;
  `,
  Container1 = styled.div``,
  Suggests = styled.ul`
    position: absolute;
    background: #fff;
    width: 40%;
    list-style: none;
    margin-top: 5px;
    padding-left: 1rem;
    overflow: auto;
    box-shadow: 0px 0px 14px -3px rgba(0, 0, 0, 0.53);
    &::-webkit-scrollbar {
      width: 7px;
    }
    &::-webkit-scrollbar-thumb {
      background: #ccc;
      border-radius: 10px;
    }
  `,
  SuggestItem = styled.li`
    margin: 0.3rem 0;
    color: ${(props) => props.active};
    cursor: pointer;
  `,
  Input = styled.input`
    width: 600px;
    padding-bottom: 0.5rem;
    outline: none;
    border: none;
    border-bottom: 2px solid #ccc;
    @media screen and (min-width: 768px) and (max-width: 1024px){
      width: 500px;
      margin-right: 1rem;
    }
    @media screen and (min-width: 320px) and (max-width: 768px) {
      width: 100vw;
      padding: 10px;
    }
  `;

export default Search;
