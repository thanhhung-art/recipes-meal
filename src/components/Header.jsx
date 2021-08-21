import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from "styled-components";
import { categoriesSelector, getCategories } from '../app/categorySlice';

function Header() {
    const { categories, loading } = useSelector(categoriesSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories());
    },[dispatch]);

    return (
        <Container>
            <Left>
                <Title>What are you cook today?</Title>
            </Left>
            <Right>
                
            </Right>
        </Container>
    )
};

var Container = styled.div`

`;

var Left = styled.div`

`;

var Right = styled.div`

`;

var Title = styled.h1`

`;

export default Header;
