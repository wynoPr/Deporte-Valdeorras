import React from 'react'

import './header.scss'

import { Link, NavLink } from 'react-router-dom'

export default function Header({data}) {

// console.log(data[0].visible);


  return (
    <header className='header'>
        <Link className='header_logo' to='/'><img className='header_logo_img' src='https://deportevaldeorras.s3.eu-north-1.amazonaws.com/logos/DdV_A_C.png'/></Link>
        <nav className='header_nav'>
            {data?.length > 0 && data.map((item, i) => (
                item.visible === true && <NavLink key={i} to={`${item.data.cat.type}/${item.name}`} className='header_nav_a btt_nav h3'>{item.data.name}</NavLink>
            ))}
        </nav>
    </header>
  )
}
