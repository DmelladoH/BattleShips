export class Boat {
  boatParts!: Array<{ coor: string; state: boolean }>

  constructor(public coords: Array<string>) {
    this.boatParts = new Array(coords.length)
    coords.forEach((coor) => {
      this.boatParts = new Array(length).fill({ coor: coor, state: false })
    })
  }

  isSunk() {
    return this.boatParts.every((part) => part.state)
  }

  hit(coor: string) {
    const part = this.boatParts.find((part) => part.coor === coor)
    if (part) {
      part.state = true
    }
  }
}
