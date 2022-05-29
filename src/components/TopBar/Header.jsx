import React from 'react';

import { Container, Logo, Menu, MenuItem } from './Header.styles';
import { getLocalData } from '../../utils';
import { sitemap } from '../../constants';



export const Header = ({ login, register }) => {

    // get logged in user
    const isLoggedIn = getLocalData('user');

    // create menu items
    const items = [
        { label: 'Create account', link: sitemap.register, enable: register && !isLoggedIn },
        { label: 'Login', link: sitemap.login, enable: login && !isLoggedIn },
        { label: 'Logout', link: sitemap.logout, enable: isLoggedIn },
    ];

    const menuItems = items.filter(item => item.enable).map((item, index) => <MenuItem key={index} to={item.link}>{item.label}</MenuItem>);

    return (
        <Container>
            <Logo to={sitemap.home}>MTV</Logo>
            
            <Menu>
                {menuItems}
            </Menu>
        </Container>
    );
};