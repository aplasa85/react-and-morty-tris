
import styled from 'styled-components';
import {useState, useEffect} from "react";

function App() {

const [characters, setCharacters] = useState([]);

const fetchData = async () => {
  const response = await fetch ("https://rickandmortyapi.com/api/character");
  const data = await response.json();
  setCharacters(data["results"]);
};

useEffect(() => {
  fetchData();
}, []);


  return (
    <body >
      <StyledHeader>
        <StyledTitle><h1>
          React and Morty App
          </h1></StyledTitle>
         
          </StyledHeader>
       
          {
            characters.map(character => {
        
             return<StyledCard>
             <img src={character.image} alt=""/>
             <p>{character.name}</p>
             <p>{character.gender}</p>
             <p>{character.status}</p>
            </StyledCard>
})}

            



            

          
            
          
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
  color: white;
  padding: 0;
`
const Footer = styled.div `
background-color: black;
color: white;
font-family: fantasy;
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
