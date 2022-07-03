import { useState, useEffect } from 'react'

import Image from 'next/image'

import styles from '@/styles/components/Movies.module.css'

const Movies = ({ search, changeTotal, movies, changeMovies }) => {
  const [gender, setGender] = useState(null)
  const [filterAlphabet, setFilterAlphabet] = useState(false)
  const [filterGenrer, setFilterGender] = useState(false)

  const genders = [
    { id: null, name: 'Tous' },
    { id: 28, name: 'Action' },
    { id: 12, name: 'Aventure' },
    { id: 16, name: 'Animation' },
    { id: 35, name: 'Comédie' },
    { id: 80, name: 'Crime' },
    { id: 14, name: 'Fantastique' },
  ]

  const toggleFilterAlphabet = () => setFilterAlphabet(filterAlphabet === false ? true : false)
  const toggleFilterGender = () => setFilterGender(filterGenrer === false ? true : false)

  const sortingMovies = (value) => {
    if (value === 'a-z') {
      setMovies(data.sort((a, b) => a.title.localeCompare(b.title)))
    } else {
      setMovies(data.sort((a, b) => b.title.localeCompare(a.title)))
    }
  }

  const filterByGender = (id) => id ? setGender(id) : setGender(null)

  useEffect(() => {
    (async () => {
      const moviesFetch = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=64ecf700e7521e57f8372fc4854f7450&language=fr-FR')
      const response = await moviesFetch.json()

      changeTotal(response.total_pages)

      let temp = []
      for (let item of response.results) {
        temp.push(item)
      }
      changeMovies(temp)
    })()
  }, [])

  return (
    <section className={styles.Movies}>
      <h2>{search ? `Recherche: ${search}` : 'Tous les films'}</h2>
      <section className={styles.filtres}>
        <article>
          <p>Trier par :</p>
          <ul className='cursor'
            onClick={() => toggleFilterAlphabet()}
            style={{ backgroundColor: filterAlphabet === true ? '#253755' : null }}
          >
            <div>
              <span>Ordre alphabétique</span>
              <Image src='/images/dropdownarrow.svg' alt='dropdownarrow' width={10} height={6} />
            </div>
            {
              filterAlphabet && (
                <>
                  <li onClick={() => sortingMovies('a-z')}>De A à Z</li>
                  <li onClick={() => sortingMovies('z-a')}>De Z à A</li>
                </>
              )
            }
          </ul>
        </article>
        <article>
          <p>Filtrer par :</p>
          <ul className='cursor'
            onClick={() => toggleFilterGender()}
            style={{ backgroundColor: filterGenrer === true ? '#253755' : null }}
          >
            <div>
              <span>Genre</span>
              <Image src='/images/dropdownarrow.svg' alt='dropdownarrow' width={10} height={6} />
            </div>
            {filterGenrer && (
              <>
                {genders.map(item => <li key={item.name} onClick={() => filterByGender(item.id)}>{item.name}</li>)}
              </>
            )}
          </ul>
        </article>
      </section>
      <section className={styles.display}>
        {movies
          .filter(element => search ? element.title.toLowerCase().includes(search.toLowerCase()) : element)
          .filter(element => gender ? element.genre_ids.includes(gender) : element)
          .map((movie, index) => {
            if (index < 20) {
              return (
                <div key={index}>
                  <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt='movie image' width={138} height={200} />
                  <h3>{movie.title}</h3>
                  <span>{movie.release_date && movie.release_date.split('-')[0]}</span>
                </div>
              )
            }
          })}
      </section>
    </section>
  )
}

export default Movies