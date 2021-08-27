import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Search from './Search';

function Navbar() {
    return (
        <Container>
            <ContainerLevel2>
                <Link to="/" style={{textDecoration: "none", color: "#000"}}>
                    <Logo>Food Recipes</Logo>
                </Link>
                <Search />
            </ContainerLevel2>
        </Container>
    )
}

var
Container = styled.nav`
    padding: 1rem 0;
`,
ContainerLevel2 = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    max-width: 1300px;
    margin: 0 auto;
    @media screen and (min-width: 320px) and (max-width: 768px){
        gap: 1rem;
    }
`,
Logo = styled.h2`
    font-size: 1.5rem;
    font-weight: bold;
    @media screen and (min-width: 320px) and (max-width: 768px){
        margin-left: 10px;
    }
`;

export default Navbar;
