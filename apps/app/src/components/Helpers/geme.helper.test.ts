import { afterEach, describe, expect, it } from 'vitest'
import { Boat } from './Boat'
import { initBoard } from './game.helper'

describe('initBoard', () => {
  it('initBoard should return a 10 x 10 matrix', () => {
    const result = initBoard()
    expect(result.length).toBe(10)
    expect(result[0].length).toBe(10)
  })

  it('initBoard should fill the matrix with the string 0', () => {
    const result = initBoard()
    expect(result[0][0]).toBe('0')
  })
})

describe('boat', () => {
  it('should create a boat with the right coordinates', () => {
    const boat = new Boat(['A1', 'A2', 'A3'])
    expect(boat.coords).toEqual(['A1', 'A2', 'A3'])
  })
})
