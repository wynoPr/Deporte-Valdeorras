import React from 'react'
import './f_card.scss'

export default function F_p_card({data}) {
  return (
    <>
      <article className='f_p_card'>
        <figure>
          <img src={data.url}/>
          <figcaption>
            <span className='span it f-o90 f-w'>{data.position}</span>
            <h1 className='h1 it f-o70 f-w'>{data.n_name}</h1>
          </figcaption>
        </figure>
        <div className='f_p_info'>
          <span>
            {/* <h1 className='danger h1'>{data.number}</h1> */}
            <p className='span_alt f-w it'>{data.position}</p>
          </span>
          <h4 className='h4 it f-w bold'>{data.name}</h4>
          <p className='p it f-faint bold'>{data.location}</p>
          <h4 className='h4 it f-w bold danger'>{data.seasons}</h4>
          <p className='p it f-w'>Procedencia: <br/>{data.origin}</p>
        </div>
      </article>
    </>
  )
}
