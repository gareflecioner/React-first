import React from 'react'
import {NavLink, Outlet} from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'

export const Layout=() => (
    <>
        <Navbar>
            <NavLink to='/'>Главная</NavLink>
            <NavLink to='/about'>О нас</NavLink>
            <NavLink to='/posts'>Все рецензии</NavLink>
            <NavLink to='/advise_on'>Порекомендовать</NavLink>
            <NavLink to='/SingUp'>Зарегистрироваться</NavLink>
            <NavLink to='/LogIn'>Войти</NavLink>
        </Navbar>
        <main className='container'>
            <Outlet/>
        </main>

        <Footer>

        </Footer>
    </>
);
 export default Layout;    