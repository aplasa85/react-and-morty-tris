import "./App.js";
import React from "react";

function Home() {

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
    
                
    export default Home
    