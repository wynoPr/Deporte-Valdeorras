import React from 'react'

import './directory.scss'

import Direct_card from '../../components/direct_card/Direct_card'

export default function Directory({data}) {

  
  return (
    <main className='container'>
        <h1 className='f_data_head_t1 h1 f-o90'>Os nosos Equipos</h1>
        <div className='direct_grid'>
            {data.map((item, i) => ( item.visible === true && <Direct_card data={item} key={i}/>) )}
        </div>
    </main>
  )
}
