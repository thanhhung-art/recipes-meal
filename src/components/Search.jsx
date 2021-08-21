import styled from 'styled-components';

function Search() {
    return (
        <Container>
            <Input 
                placeholder="Search..."
            />
            <Button>Seach</Button>
        </Container>
    )
};

var Container = styled.div`

`;

var Input = styled.input`
    width: 600px;
    padding: .5rem;
    border-radius: 5px;
    outline: none;
    border: 1px solid #ccc;
`;

var Button = styled.span`
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: .5rem;
    font-size: .9rem;
    cursor: pointer;
`;

export default Search;
