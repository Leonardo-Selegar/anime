import React, { useState, useContext } from "react";
import context from '../context/Context';

function AnimeList() {

  const [anime, setAnime] = useState('')
  const [animesList, setAnimesList] = useState([]);
  const { emailContext } = useContext(context)

  const requestApi = async () => {
    const endPoint = `https://kitsu.io/api/edge/anime?filter[text]=${anime}`
    const result = await fetch(endPoint);
    const data = await result.json();
    setAnimesList(data.data)
    console.log(data.data);
  }

  function handleChange({ target: { value } }) {
    setAnime(value)
  }

  function onClick() {
    requestApi(anime)
    setAnime('');
  }

  return (
    <div>
      <h1>{emailContext}</h1>
    <div>
      <input
        type="text"
        name="anime"
        value={ anime }
        onChange={handleChange} 
      />
      <button
        type="button"
        onClick={ onClick }
      >
        Buscar
      </button>
    </div>
    {
      animesList && (
        animesList.map((anime, index) => (
          <div key={index}>
            <h3>{anime.attributes.abbreviatedTitles[0]}</h3>
            <img src={ anime.attributes.posterImage.medium} alt={anime.attributes.abbreviatedTitles[0]} />
            <button
              type="button"
            >
              Detalhes
            </button>
          </div>
        ))
      )
    }
    </div>
  )
}

export default AnimeList;