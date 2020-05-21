import React, { useState } from 'react';
import { Button, Container, Image, Menu } from 'semantic-ui-react';
import { useHistory } from "react-router-dom";

const MenuPrincipal = () => {
    const [activeItem, setactiveItem] = useState(''); 
    const history = useHistory();
    
    function handleClickHome() {
        history.push("/");
        setactiveItem('home');
    }

    function handleClickRegister() {
        history.push("/register");
    }

    function handleClickLogin() {
        history.push("/login");
        setactiveItem('sign-in');
    }    

    return (
        <Menu stackable borderless fluid='true' fixed='top'>
            <Container>         
                <Menu.Item>
                    <Menu.Item
                        name='home'
                        active={activeItem === 'home'}
                        onClick={handleClickHome}
                    >
                        <img src='https://react.semantic-ui.com/logo.png' />
                    </Menu.Item>
                </Menu.Item> 
                <Menu.Menu position='right'>
                    <Menu.Item
                        name='sign-in'
                        active={activeItem === 'sign-in'}
                        onClick={handleClickLogin}
                    />
                    <Menu.Item>
                        <Button color='red' onClick={handleClickRegister}> Register </Button>
                    </Menu.Item>
                </Menu.Menu>
            </Container>   
        </Menu> 
    );
}

export default MenuPrincipal