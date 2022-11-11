
import styled from 'styled-components';
import Home from ".Pages/Home.jsx";
import {useState, useEffect} from "react";
import {Routes, Route, BrowserRouter} from "react-router-dom";

<Home>
            

          
            
          
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
  display:flex;
justify-content: center;
 
  ;

`
const StyledCard = styled.article `
background-color: darkgrey;
margin-bottom: 30px;
margin-left: 60px;
border: 5px solid black;
margin-right: 60px;
align-items: center;
display: flex;
flex-direction: column;
border-radius: 25px;
font-family: Times New Roman;
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
padding: 15px;





`



export default App;
