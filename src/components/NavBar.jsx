import React from 'react'
import { Link } from 'react-router-dom'
import style from "./NavBar.module.css"

export const NavBar = () => {
  return (
    <div className={style.container}>
        <img className={style.img} src="https://www.twentyonepilots.com/sites/g/files/g2000020241/files/2025-06/tourpage_logo.png" alt="logo" />
        <nav className={style.nav}>
        <Link className={style.button} to="/">Home</Link>
        <Link className={style.button} to="/shop">Shop</Link>
        <Link className={style.button} to="/qr">Visit Us</Link>   
        </nav>
    </div>
  )
}
