import React from 'react'
import './estilos.scss'

export default function Estilos() {
  return (
    <div className='estilos container'>
        <div className='margins'>
            <h1 className='hl'>H1: Jovencillo emponzoñado de whisky, ¡qué figurota exhibe!</h1>

            <h1 className='h1'>H1: Jovencillo emponzoñado de whisky, ¡qué figurota exhibe!</h1>

            <h2 className='h2'>H2: Jovencillo emponzoñado de whisky, ¡qué figurota exhibe!</h2>
            <h2 className='h2 bold'>H2 Bold: Jovencillo emponzoñado de whisky, ¡qué figurota exhibe!</h2>
            <h2 className='h2 it'>H2 italic: Jovencillo emponzoñado de whisky, ¡qué figurota exhibe!</h2>

            <h3 className='h3'>H3: Jovencillo emponzoñado de whisky, ¡qué figurota exhibe!</h3>
            <h3 className='h3 bold'>H3 bold: Jovencillo emponzoñado de whisky, ¡qué figurota exhibe!</h3>
            <h3 className='h3 it'>H3 italic: Jovencillo emponzoñado de whisky, ¡qué figurota exhibe!</h3>
            
            <p className='p'>P: Jovencillo emponzoñado de whisky, ¡qué figurota exhibe!</p>
            <p className='p bold'>P bold: Jovencillo emponzoñado de whisky, ¡qué figurota exhibe!</p>
            <p className='p it'>P italic: Jovencillo emponzoñado de whisky, ¡qué figurota exhibe!</p>

            <p className='p-s'>P-s: Jovencillo emponzoñado de whisky, ¡qué figurota exhibe!</p>
            <p className='p-s bold'>P-s bold: Jovencillo emponzoñado de whisky, ¡qué figurota exhibe!</p>
            <p className='p-s it'>P-s italic: Jovencillo emponzoñado de whisky, ¡qué figurota exhibe!</p>

            <span className='span'>Span: Jovencillo emponzoñado de whisky, ¡qué figurota exhibe!</span>
            <span className='span it'>Span Italic: Jovencillo emponzoñado de whisky, ¡qué figurota exhibe!</span>
        </div>

        <div className='margins'>
            <h2 className='h2'>Margins:</h2><h2></h2>
            <p className='p'>Big 40px</p>
            <div style={{ height: '20px', width: '40px', backgroundColor: '#7b99ff' }}></div>
            <p className='p'>Small 20px</p>
            <div style={{ height: '20px', width: '20px', backgroundColor: '#7b99ff' }}></div>
            <p className='p'>Tiny 10px</p>
            <div style={{ height: '20px', width: '10px', backgroundColor: '#7b99ff' }}></div>
        </div>
        <div className='colors'>
            <div className='h2' style={{ height: '30px', width: '100%', backgroundColor: '#7b99ff', paddingLeft: '10px' }}>#7b99ff</div>
            <div className='h2' style={{ height: '30px', width: '100%', backgroundColor: '#c8d4ff', paddingLeft: '10px' }}>#c8d4ff</div>
            <div className='h2' style={{ height: '30px', width: '100%', backgroundColor: '#ff3c01', paddingLeft: '10px' }}>#ff3c01</div>
            <div className='h2' style={{ height: '30px', width: '100%', backgroundColor: '#ff8a67', paddingLeft: '10px' }}>#ff8a67</div>
            <div className='h2' style={{ height: '30px', width: '100%', backgroundColor: '#a0ff6e', paddingLeft: '10px' }}>#a0ff6e</div>
            <div className='h2' style={{ height: '30px', width: '100%', backgroundColor: '#c6ffa8', paddingLeft: '10px' }}>#c6ffa8</div>
            <div className='h2' style={{ height: '30px', width: '100%', backgroundColor: '#ffe555', paddingLeft: '10px' }}>#ffe555</div>
            <div className='h2' style={{ height: '30px', width: '100%', backgroundColor: '#ffef99', paddingLeft: '10px' }}>#ffef99</div>
            <div className='h2' style={{ height: '30px', width: '100%', backgroundColor: '#f9f9f9', paddingLeft: '10px' }}>#f9f9f9</div>
            <div className='h2' style={{ height: '30px', width: '100%', backgroundColor: '#e8d7c5', paddingLeft: '10px' }}>#e8d7c5</div>
            <div className='h2 f-w' style={{ height: '30px', width: '100%', backgroundColor: '#766E64', paddingLeft: '10px' }}>#766E64</div>
            <div className='h2 f-w' style={{ height: '30px', width: '100%', backgroundColor: '#2d2a26', paddingLeft: '10px' }}>#2d2a26</div>
        </div>
        

    </div>
  )
}
