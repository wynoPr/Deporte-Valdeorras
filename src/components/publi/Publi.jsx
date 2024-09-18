import React from 'react';

import './publi.scss'

function Publi({data}) {

    // console.log(data);

    const diapos = data.length;

    console.log(diapos);
    
    
    return (
        <>
        {data && <div className='publi'>
            <span className='publi_tag p'>Patrocina:</span>
            <div className='publi_display'>
                <div className={`publi_track${diapos}`}>
                    {data.map ((item, i) => (
                        <a className={`publi_container${diapos}`} href={item.url}  key={i}>
                            <img className='publi_img' src={item.img} />
                        </a>
                    ))}
                </div>
            </div>
        </div>}
        </>
    );
}

export default Publi;