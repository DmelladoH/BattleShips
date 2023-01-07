import { afterEach, describe, expect, it } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import Board from './board'

describe('Board', () => {
  afterEach(cleanup)

  it('should render the board', () => {
    render(<Board />)
  })

  it('should render the name of the rows', () => {
    const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']

    render(<Board />)
    rows.map((row) => {
      screen.getByText(row)
    })
  })

  it('should render the name of the rows', () => {
    const columns = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']

    render(<Board />)
    columns.map((col) => {
      screen.getByText(col)
    })
  })

  it('should render 10 rows', () => {
    render(<Board />)
    const numberOfRows = screen.getAllByRole('row').length
    expect(numberOfRows).toBe(10)
  })
})
