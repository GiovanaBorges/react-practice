import React  from 'react';

import {Nav,NavMenu,NavBtn,NavBtnLink,NavLogo,NavLink} from './NavbarElements.js';


const NavBar = () =>{
    return(
        <>
          <Nav>
              <NavLogo>
                  E-Gift
            </NavLogo>  
          <NavMenu>
              <NavLink >
                  home
              </NavLink>
            </NavMenu>
              <NavMenu>
              <NavLink >
                  aloha
              </NavLink>
              </NavMenu>
              <NavMenu>
              <NavLink>
                  ola
              </NavLink>
              </NavMenu>
              <NavMenu>
              <NavLink >
                  popo
              </NavLink>
              </NavMenu>
          
          <NavBtn>
              <NavBtnLink >Logar</NavBtnLink>
          </NavBtn>
          </Nav>
        </>
    )
}

export default NavBar;


