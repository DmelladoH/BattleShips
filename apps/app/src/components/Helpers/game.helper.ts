export function initBoard(): Array<Array<string>> {
  return new Array(10).fill(0).map(() => new Array(10).fill('0'))
}
