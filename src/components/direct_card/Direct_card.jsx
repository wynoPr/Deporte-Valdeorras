import React from 'react'
import { Link } from 'react-router-dom'

export default function Direct_card({data}) {

    // console.log(data.name);
    

  return (
    <Link className='direct_card' to={`${data.data.cat.type}/${data.name}`}>
      <figure className='direct_fig'>
        <img className='direct_img' src={data.data.logo}/>
        
      </figure>
      <h3 className='direct_figcap h3 bold f-w'>{data.data.name}</h3>
      <p className='direct_figcap p bold f-faint'>{data.data.cat.league}</p>

      <span className='direct_bg'>
      {[...Array(20)].map((_, index) => (
        <span key={index} className='direct_cat h1 f-w f-o50'>{data.data.cat.type}</span>
      ))}
      </span>
    </Link>
  )
}
