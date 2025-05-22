import { useEffect, useState } from 'react';

interface ParkingLot {
  id: number;
  name: string;
  spots: Spot[];
}

interface Spot {
  id: number;
  number: number;
}

export default function App() {
  const [lots, setLots] = useState<ParkingLot[]>([]);

  useEffect(() => {
    fetch('/api/lots')
      .then(res => res.json())
      .then(setLots);
  }, []);

  return (
    <div>
      <h1>Parking Lots</h1>
      {lots.map(lot => (
        <div key={lot.id}>
          <h2>{lot.name}</h2>
          <ul>
            {lot.spots.map(spot => (
              <li key={spot.id}>Spot {spot.number}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
