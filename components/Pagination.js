import { useState, useEffect } from 'react'

import Image from 'next/image'

import styles from '@/styles/components/Pagination.module.css'

const Pagination = ({ totalPages, changeMovies }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(20)
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(10)
  const [minPageNumberLimit, setMinPageNumerLimit] = useState(0)
  const pages = []

  for (let i = 1; i < Math.ceil(totalPages / itemsPerPage); i++) {
    if (i < maxPageNumberLimit + 1 && i > minPageNumberLimit) {
      pages.push(<li data-testid={i} key={i} onClick={() => setCurrentPage(i)} style={{ backgroundColor: currentPage === i ? '#253755' : 'transparent' }}> {i}</li >)
    }
  }

  const previousPage = () => {
    if (currentPage - 1 >= 1) {
      setCurrentPage(currentPage - 1)

      if (currentPage - 1 <= minPageNumberLimit) {
        setMinPageNumerLimit(minPageNumberLimit - 10)
        setMaxPageNumberLimit(currentPage - 1)
      }
    }
  }

  const nextPage = () => {
    if (currentPage + 1 <= (totalPages / itemsPerPage) - 1) {
      setCurrentPage(currentPage + 1)

      if (currentPage + 1 > maxPageNumberLimit) {
        setMinPageNumerLimit(currentPage)
        setMaxPageNumberLimit(maxPageNumberLimit + 10)
      }
    }
  }

  useEffect(() => {
    (async () => {
      const moviesFetch = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=64ecf700e7521e57f8372fc4854f7450&language=fr-FR&page=${currentPage}`)
      const response = await moviesFetch.json()

      let temp = []
      for (let item of response.results) {
        temp.push(item)
      }
      changeMovies(temp)
    })()
  }, [currentPage])

  return (
    <footer className={styles.Pagination}>
      <ul>
        <li onClick={previousPage} data-test-id='previous'>
          <Image src='/images/paginationpreviousarrow.svg' alt='previous arrow' width={8} height={40} />
        </li>
        {pages}
        <li onClick={nextPage} data-test-id='next'>
          <Image src='/images/paginationnextarrow.svg' alt='previous arrow' width={8} height={40} />
        </li>
      </ul>
    </footer>
  )
}

export default Pagination