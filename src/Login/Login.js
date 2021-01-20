import React from 'react';
import {Form,Button} from 'react-bootstrap';
import {Container,Main,LoginContent,LoginTop,Text,TextLoginTop,SpaceDataLogin,Label,ContentMain}
 from './LoginElements';
 import style from './style.css';

const Login = () => {
    return (
        <>
           <Container>
                <Main>
                    <ContentMain>   
                        <h3>Opa olha ae</h3>
                        <p>Eita bora funfar</p>
                        <button>Bora de go ne</button>
                    </ContentMain>
                </Main>
                <LoginContent>
                    <LoginTop />
                    <TextLoginTop><Text>Bora de login hihi</Text></TextLoginTop>
                <SpaceDataLogin>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Label>Email senhora:</Label>
                                <Form.Control type="email" placeholder="Enter email" className={style.input} />
                               
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                            <Label>senha senhora:</Label>
                                <Form.Control type="password" placeholder="Password" className={style.input}/>
                            </Form.Group>
                           
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                            
                        </Form>
                </SpaceDataLogin>
                <LoginTop />
                </LoginContent>
            </Container> 
        </>
    );
}

export default Login;
