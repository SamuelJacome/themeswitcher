import React from 'react';
import {Container} from './styles';
import Switch from 'react-switch';


const Header: React.FC = () => {
    return (
        <Container>
            Hello World

            <Switch 
                onChange = {() => {}}
                checked = {true}
                checkedIcon = {false}
                uncheckedIcon = {false}
            />
                
        </Container>

    );
}

export default Header;
