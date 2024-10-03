import React, { useEffect, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react';

import './App.scss'
import "./index.scss";
import './fonts.scss'

import F_data from './pages/f_data/F_data';
import Header from './components/header/Header';
import Estilos from './pages/styles/Estilos';
import Loading from './pages/loading/Loading';
import Directory from './pages/directory/Directory';

export const GlobalContext = React.createContext();



function App() {
  
  //petición sacar datos de equipo api
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const res = await fetch("https://x8ki-letl-twmt.n7.xano.io/api:tk--qIGp/data");
      const data = await res.json();
      const sortedData = [...data].sort((a, b) => new Date(a.id) - new Date(b.id))
       // // console.log(data);
       // console.log(sortedData);
       // console.log(sortedData[0].data.cat.type);
       // console.log(sortedData[0].name);  
      setData(sortedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  
  //
  //petición sacar datos de publi api
  const [publi, setPubli] = useState([]);
  const getPubli = async () => {
    try {
      const res = await fetch("https://x8ki-letl-twmt.n7.xano.io/api:tk--qIGp/publi");
      const data = await res.json();
      const sortedPubli = [...data].sort((a, b) => new Date(a.id) - new Date(b.id))
      //  console.log(sortedPubli);
      setPubli(sortedPubli);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    getPubli();
  }, []);
  
  //
// console.log(data[1].data.cat.type);
// console.log(data[1].name);

const location = window.location.pathname;
// console.log(location);

const [loaded, setLoaded] = useState(false);


  return (
    <GlobalContext.Provider value={{ loaded, setLoaded }}>
      <BrowserRouter>
      <Header data={data}/>
          <Routes>
          {data?.length > 0 && data.map((item, i) => 
            <Route key={i} path={item.data.cat.type + '/' + item.name} element={<F_data data={item.data} publi={publi[i]} /> } />
            )}
            <Route path="/" element={<Directory data={data}/>} />
            <Route path="/styles" element={<Estilos />} />
            { loaded == false ? <Route path="*" element={<Loading data={location}/>} /> : <Route path="*" element={<Navigate to="/" />} />}
            
          </Routes>
      </BrowserRouter>
      <Analytics/>
      </GlobalContext.Provider>
  )
}

export default App
