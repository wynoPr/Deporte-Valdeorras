import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../App';


export default function Loading({data}) {

    const navigate = useNavigate();

    const { loaded, setLoaded } = useContext(GlobalContext)

    
    

    setTimeout(() => {
        setLoaded(true)
        // console.log(loaded);
        navigate(data)
    }, 2000);

  return (
    <div className='h1'>Loading</div>
  )
}
