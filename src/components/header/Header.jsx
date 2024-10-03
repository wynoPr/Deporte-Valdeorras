import React from 'react'

import './header.scss'

import { Link, NavLink } from 'react-router-dom'

export default function Header({data}) {

// console.log(data[0].visible);

const F11 = [];
const FS = [];

// Filtro para separar los objetos en los arrays correspondientes
data.forEach(item => {
  if (item.data.cat.type === 'F11') {
    F11.push(item);
  } else if (item.data.cat.type === 'FS') {
    FS.push(item);
  }
});

// Resultado
// console.log('Array F11:', F11);
// console.log('Array FS:', FS);

// menu desplegable
  const buttons = document.querySelectorAll('.btt_dd');

  function toggleActiveClass(event) {
    buttons.forEach(button => button.classList.remove('act'));
    event.target.classList.toggle('act');
  }

  buttons.forEach(button => {
    button.addEventListener('click', toggleActiveClass);
  });


  return (
    <header className='header'>
        <Link className='header_logo' to='/'><img className='header_logo_img' src='https://deportevaldeorras.s3.eu-north-1.amazonaws.com/logos/DdV_A_C.png'/></Link>
        <nav className='header_nav'>
          <button className='btt_dd h3'>F11<svg className='btt_dd_updown' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-361q-8 0-15-2.5t-13-8.5L268-556q-11-11-11-28t11-28q11-11 28-11t28 11l156 156 156-156q11-11 28-11t28 11q11 11 11 28t-11 28L508-372q-6 6-13 8.5t-15 2.5Z"/></svg>
            <div className='btt_dd_div'>
            {F11.length > 0 && F11.map((item, i) => (
              item.visible === true && <NavLink key={i} to={`${item.data.cat.type}/${item.name}`} className='btt_dd_a p bold'>{item.data.name}</NavLink>
            ))}
            </div>
          </button>
          <button className='btt_dd h3 act'>FS<svg className='btt_dd_updown' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-361q-8 0-15-2.5t-13-8.5L268-556q-11-11-11-28t11-28q11-11 28-11t28 11l156 156 156-156q11-11 28-11t28 11q11 11 11 28t-11 28L508-372q-6 6-13 8.5t-15 2.5Z"/></svg>
          <div className='btt_dd_div'>
            {FS.length > 0 && FS.map((item, i) => (
              item.visible === true && <NavLink key={i} to={`${item.data.cat.type}/${item.name}`} className='btt_dd_a p bold'>{item.data.name}</NavLink>
            ))}
            </div>
          </button>
            {/* {data?.length > 0 && data.map((item, i) => (
                item.visible === true && <NavLink key={i} to={`${item.data.cat.type}/${item.name}`} className='header_nav_a btt_nav h3'>{item.data.name}</NavLink>
            ))} */}
        </nav>
    </header>
  )
}
