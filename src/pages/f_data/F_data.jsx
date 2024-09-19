import React, { useEffect, useState } from 'react'

import './f_data.scss'

import F_a_card from '../../components/f_card/F_a_card';
import F_p_card from '../../components/f_card/F_p_card';
import Publi from '../../components/publi/Publi';

export default function F_data({data, publi}) {

  if (!data ) {
    return <div>Loading...</div>;
  }

  const textFromDB = data.info;
  const formattedText = textFromDB.replace(/\n/g, '<br>');
  const teamFromDB = data.team;

  const [porteiro, setPorteiro] = useState([]);
  const [dianteiro, setDianteiro] = useState([]);
  const [defensa, setDefensa] = useState([]);
  const [centro, setCentro] = useState([]);
  const [a, setA] = useState([]);
  const [pivot, setPivot] = useState([]);
  const [peche, setPeche] = useState([]);

  // Función para clasificar el equipo
  const sortTeam = () => {
    const porteiroTemp = [];
    const dianteiroTemp = [];
    const defensaTemp = [];
    const centroTemp = [];
    const aTemp = [];
    const pivotTemp = [];
    const pecheTemp = [];

    for (let i = 0; i < teamFromDB.length; i++) {
      if (teamFromDB[i].position === 'Porteiro') porteiroTemp.push(teamFromDB[i]);
      if (teamFromDB[i].position === 'Dianteiro') dianteiroTemp.push(teamFromDB[i]);
      if (teamFromDB[i].position === 'Defensa') defensaTemp.push(teamFromDB[i]);
      if (teamFromDB[i].position === 'Centro') centroTemp.push(teamFromDB[i]);
      if (teamFromDB[i].position === 'Á') aTemp.push(teamFromDB[i]);
      if (teamFromDB[i].position === 'Pívot') pivotTemp.push(teamFromDB[i]);
      if (teamFromDB[i].position === 'Peche') pecheTemp.push(teamFromDB[i]);
    }

    setPorteiro(porteiroTemp);
    setDianteiro(dianteiroTemp);
    setDefensa(defensaTemp);
    setCentro(centroTemp);
    setA(aTemp);
    setPivot(pivotTemp);
    setPeche(pecheTemp);
  };

  useEffect(() => {
    sortTeam();
  }, [data]);
    
  return (
        <main className='container'>
          <section className='f_data_head'>
            <div className='f_data_head_top'>
              <figure className='f_data_head_logo' ><img  className='f_data_head_logo_img' src={data.logo} /></figure>
              <h1 className='f_data_head_t1 h1 f-w f-o90'>{data.name}</h1>
              <h1 className='f_data_head_t2 h2 it f-w f-o70'>//  {data.cat.league}</h1>
            </div>
            <div className='f_data_head_info'>
              <figure className='f_data_head_info_fig'>
                <img  className='f_data_head_info_img' src={data.team_photo}/>
              </figure>
              <div className='f_data_head_info_left'>
                <>
                  <h3 className='h3'> Fundación</h3>
                  <p className='p it f-dim'> {data.foundation} </p>
                </>
                <>
                  <h3 className='h3'> Localidade</h3>
                  <p className='p it f-dim'> {data.location} </p>
                </>
                <>
                  <h3 className='h3'> Equipación</h3>
                  <p className='p it f-dim'> {data.colours} </p>
                </>
                <>
                  <h3 className='h3'> Presidente</h3>
                  <p className='p it f-dim'> {data.chairman} </p>
                </>
              </div>
              <div className='f_data_head_info_right'>
                <p className='p' dangerouslySetInnerHTML={{ __html: formattedText }}></p>
              </div>
            </div>
          </section>
          {publi && <Publi data={publi.add_p1}/>}
          <section className='f_data_team'>
              {/* <F_a_card coach={data.coach} staff={data.staff}/> */}
              {porteiro && porteiro.length > 0 && (
                <>
                <h2 className='h1 team_position'>Porteiros:</h2>
                <div className='team_cards'>
                  {porteiro.map((item, i) => (
                    <F_p_card data={item} key={i} />
                  ))}
                </div>
                </>
              )}
              {dianteiro && dianteiro.length > 0 && (
                <>
                <h2 className='h1 team_position'>Dianteiros:</h2>
                <div className='team_cards'>
                  {dianteiro.map((item, i) => (
                    <F_p_card data={item} key={i} />
                  ))}
                </div>
                </>
              )}
              {defensa && defensa.length > 0 && (
                <>
                <h2 className='h1 team_position'>Defensas:</h2>
                <div className='team_cards'>
                  {defensa.map((item, i) => (
                    <F_p_card data={item} key={i} />
                  ))}
                </div>
                </>
              )}
              {centro && centro.length > 0 && (
                <>
                <h2 className='h1 team_position'>Centrocampistas:</h2>
                <div className='team_cards'>
                  {centro.map((item, i) => (
                    <F_p_card data={item} key={i} />
                  ))}
                </div>
                </>
              )}
              {a && a.length > 0 && (
                <>
                <h2 className='h1 team_position'>Ás:</h2>
                <div className='team_cards'>
                  {a.map((item, i) => (
                    <F_p_card data={item} key={i} />
                  ))}
                </div>
                </>
              )}
              {pivot && pivot.length > 0 && (
                <>
                <h2 className='h1 team_position'>Pivots:</h2>
                <div className='team_cards'>
                  {pivot.map((item, i) => (
                    <F_p_card data={item} key={i} />
                  ))}
                </div>
                </>
              )}
              {peche && peche.length > 0 && (
                <>
                <h2 className='h1 team_position'>Peches:</h2>
                <div className='team_cards'>
                  {peche.map((item, i) => (
                    <F_p_card data={item} key={i} />
                  ))}
                </div>
                </>
              )}
          </section>
          {publi && <Publi data={publi.add_p2}/>}
        </main>
  )
}
