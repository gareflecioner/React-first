import React from 'react'
import {Link, NavLink, Outlet} from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'

export const Layout=() => (
    <>
        <Navbar>
            <Link to='/'>Главная</Link>
            <Link to='/about'>О нас</Link>
            <Link to='/posts'>Все рецензии</Link>
            <Link to='/advise_on'>Порекомендовать</Link>
            <Link to='/SingUp'>Зарегистрироваться</Link>
            <Link to='/LogIn'>Войти</Link>
        </Navbar>
        <main className='container'>
            <Outlet/>
        </main>

        <Footer>

        </Footer>
    </>
);
 export default Layout;    