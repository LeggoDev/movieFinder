import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Header from '../components/Header'

import { jest } from '@jest/globals';

test('formulaire de recherche', () => {
  const handleSubmit = jest.fn()

  render(<Header onSubmit={handleSubmit} />)

  let search = 'Doctor'

  const searchInput = screen.getByPlaceholderText('Rechercher un film')
  const submitButton = screen.getByRole('button')

  userEvent.type(searchInput, search)
  userEvent.click(submitButton)

  setTimeout(() => {
    expect(handleSubmit).toHaveBeenCalled()
    expect(handleSubmit).toHaveBeenCalledWith({ search })
    expect(handleSubmit).toHaveBeenCalledTimes(1)
  }, 1000)
})
