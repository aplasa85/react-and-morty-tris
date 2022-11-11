import './App.css';
import styled from 'styled-components';


function App() {
  return (
    <body >
      <StyledHeader>
        <StyledTitle><h1>
          React and Morty App
          </h1></StyledTitle>
         
          </StyledHeader>
          <StyledCard>
          <h3>Random card</h3>  <img src="https://rickandmortyapi.com/api/character/avatar/2.jpeg" alt="Random Pic"></img>
          </StyledCard>
          <StyledCard>
          <h3>Random card</h3>  <img src="https://rickandmortyapi.com/api/character/avatar/2.jpeg" alt="Random Pic"></img>
          </StyledCard>
          
          <Footer>
            <StyledList>
              <a href="#"><Link>Link 1</Link></a>
              <a href="#"><Link>Link 2</Link></a>
              <a href="#"><Link>Link 3</Link></a>
            
            </StyledList>
          
          </Footer>
    
    </body>
  );
}



const StyledTitle = styled.h1 `
  background-color: black;
  width: 100%;
  font-family: fantasy;
  padding: 1px;
  font-size:smaller;
  ;

`
const StyledCard = styled.article `
background-color: darkgrey;
margin-bottom: 30px;
margin-left: 60px;
border: 1px solid black;
margin-right: 60px;
align-items: center;
display: flex;
flex-direction: column;
`

const StyledHeader =styled.header `
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`
const Footer = styled.div `
background-color: black;
color: white;
font-family: fantasy;
max-width: 100%;

padding: 5px;`

const StyledList = styled.ul `
color: white;
border: 1px solid black;

`


const Link = styled.li `
list-style-type: none;
display: inline;
color: white;
padding: 30px;




`



export default App;
