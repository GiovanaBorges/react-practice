import styled from 'styled-components';



export const Nav = styled.nav`
    background: #000;
    height: 80px;
    display: flex;
    justify-content : space-between;
    padding : 0.5rem calc((100vw - 1000px) /2);
    z-index : 10;

    @media screen and (max-width:768px){
        display : flex;
        justify-content:start-end;
        
    }
`;
 
export const NavLogo = styled.div`
   
   font-size:35px;
   text-align : center;
   color : white;
    margin-top: 6px;
    text-decoration : none;

    &:hover{
        color:red;
        border-bottom:5px solid red;
        transition: all ease-in-out 0.5s;
        
    }
@media screen and (max-width: 768px){
    margin-left:25px;
}

`;

export const NavLink = styled.h1`
   font-size:25px;
    display: flex;
    justify-content : space-between;
    color : red;
    padding : 0.8vmin;
    color:white;
    height: 100%;
    cursor: pointer;
    
    margin : 25px 35px 0 35px;
    :hover{
    color: red;   
    }
`;

export const NavMenu = styled.div`
display : flex;
align-items : center;
margin-right : -24px;
font-size:1.5rem;
margin-left:45px; 

@media screen and (max-width: 768px){
    display : none;
}
`;

export const NavBtn = styled.nav`
display : flex;
align-items : center;
margin-right: 7px;
color:dark;



@media screen and (max-width :768px){
    display:none;
};
`;

export const NavBtnLink = styled.h1`
    border-radius: 4px;
    background:red;
    padding :5px 15px;
    color : white;
    border : none;
    outline : none;
    cursor : pointer;
    transition :all 0.2s ease-in-out;
    text-decoration : none;

    :hover{
        transition : all 0.2s ease-in-out;
        background : white;
        color : black;
    };
`;