import React from 'react'

import './f_card.scss'

export default function F_a_card({coach, staff}) {
  return (
    <article className='f_a_card'>
        <figure>
            <span style={{ backgroundImage: `url(${coach.url})` }} />
            <figcaption className='h4 bold f-w'>Adestrador</figcaption>
        </figure>
        <div className='f_a_info'>
          <p className='p it f-faint bold'>{coach.name}</p>
          <h3 className='h2 it bold'>{coach.n_name}</h3>
          {/* <p className='p-s it'>{coach.info}</p> */}
          <h4 className='h4 it bold'>Corpo Técnico</h4>
          {staff.map((item, i) => <p className='p it f-dim' key={i}>{item}</p>)}
        </div>
    </article>
  )
}
