import React from 'react'
import { useEffect, useState } from 'react'
import './App.css'
import Tmdb from './Tmdb'
import MovieRow from './Components/MovieRow'
import FeaturedMovie from './Components/FeaturedMovie'

export default () => {

  const [movieList, setMovieList] = useState([]);




useEffect(() => {
  const loadall = async () => {
    //pegar a lista
    let list = await Tmdb.getHomeList();
    setMovieList(list);
    console.log(list)
  }


  loadall();
},[])


  return (
    <div className='page'>
      
    <FeaturedMovie/>
      <section className='listas'>
      {movieList.map((item, key) => (
        <MovieRow key={key} title={item.title} items={item.items}/>
      ))}
      </section>
     </div>
  );
}