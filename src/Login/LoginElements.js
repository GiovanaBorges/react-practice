import styled from 'styled-components';

export const Container = styled.div`
    height:100vh;
    background : #303030;
    text-align:center;
    
    width:100%;
    padding: 1px 0;
`;

export const Main = styled.div`
    
    height:70%;
    background : whitesmoke;
    color: aqua;
    width:50%;
    position: relative;
    left:5%;
    display:flex;
    flex-direction:column;

`;

export const ContentMain = styled.div`
    margin: 15px auto;
    background: red;
    width:70%;
    height:70%;
    color:white;
    text-align:center;

    h3{
        font-size:25rem;

    }
`;

export const LoginContent = styled.div`
    height:100%;
    background:#101010;
    color:white;
    width:40%;
    position: relative;
    left: 60%;
    bottom:85%;
`;

export const LoginTop = styled.div`
    height:10%;
    width:100%;
    border-bottom : 3px solid red;
`;


export const TextLoginTop = styled.div`
    margin : 20% auto 0;
    height:35px;
    width:100%;
`;

export const Text = styled.h3`
    border-bottom: 1px solid pink;
    font-size : 35px;
    color : white;
    width:50%;
    margin: 0 auto;
`;

export const TextR = styled.h3`
    font-size : 35px;
    color : red;

`;

export const TextMain = styled.h3`
  font-size : 35px;
    color : white;
`;

export const SpaceDataLogin = styled.div`
    width:70%;
    height:40%;
    border-top: 1px solid red;
    border-bottom: 1px solid red;
    margin:75px auto;
    display : flex;
    justify-Content : space-between;
    flex-Direction : column;
    align-items : center;
    padding-top:30px;
`;

export const Label = styled.label`
    margin: 0 120px 0 0;
    font-size:20px;
    color : white;
`;
