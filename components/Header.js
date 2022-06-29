import { useState } from 'react'

import Image from 'next/image'

import styles from '@/styles/components/Header.module.css'

const Header = ({ searchFilm }) => {
  const [text, setText] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    searchFilm(text)
  }
  return (
    <header className={styles.Header}>
      <h1>
        <Image src='/images/logo.svg' alt='logo' width={220} height={36} />
      </h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input type="text" placeholder='Rechercher un film' name='search' spellCheck={false} onChange={(e) => setText(e.target.value)} value={text} />
        <button type='submit' role='button' className='submitButton'>
          <Image className='cursor' src='/images/searchicon.svg' width={18} height={18} />
        </button>
      </form>
    </header>
  )
}

export default Header