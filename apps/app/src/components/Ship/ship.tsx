import { Ship } from './ship.model'

// Carrier	5
// 2	Battleship	4
// 3	Destroyer	3
// 4	Submarine	3
// 5	Patrol Boat	2

export default function ShipList() {
  const ships: Ship[] = [
    {
      name: 'Carrier',
      size: 5,
    },
    {
      name: 'Battleship',
      size: 4,
    },
    {
      name: 'Destroyer',
      size: 3,
    },
    {
      name: 'Submarine',
      size: 3,
    },
    {
      name: 'Patrol Boat',
      size: 2,
    },
  ]
}
