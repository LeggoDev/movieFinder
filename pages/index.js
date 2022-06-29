import { useState } from 'react'

import Head from 'next/head'

import Header from 'components/Header'
import TopRanked from 'components/TopRanked'
import Movies from 'components/Movies'
import Pagination from 'components/Pagination'

import styles from '@/styles/pages/Home.module.css'

export default function Home({ bestMovies }) {
  const [search, setSearch] = useState(null)
  const searchFilm = text => setSearch(text)

  const [totalPages, setTotalPages] = useState(0)
  const changeTotal = (number) => setTotalPages(number)

  const [movies, setMovies] = useState([])
  const changeMovies = array => setMovies(array)

  return (
    <div>
      <Head>
        <title>MovieFinder | Trouve ton film !</title>
        <meta name="description" content="MovieFinder est annuaire de film créé pour un test chez Prisma Media" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
        <Header searchFilm={searchFilm} />
        <TopRanked data={bestMovies} />
        <div className={styles.divider}></div>
        <Movies search={search} changeTotal={changeTotal} movies={movies} changeMovies={changeMovies} />
        <Pagination totalPages={totalPages} changeMovies={changeMovies} />
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const bestMoviesFetch = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=64ecf700e7521e57f8372fc4854f7450&language=fr-FR')
  const bestMovies = await bestMoviesFetch.json()

  const gendersFetch = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=64ecf700e7521e57f8372fc4854f7450&language=fr-FR')
  const genders = await gendersFetch.json()

  return {
    props: {
      bestMovies: bestMovies.results,
      genders: genders.genres
    },
  }
}
