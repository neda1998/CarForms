import React, { useState } from 'react';
import "../../styles/CartCar.css"

const Cartag = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [penaltyCars, setPenaltyCars] = useState([]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchClick = () => {
    const staticPenaltyCars = [
      { id: 1, plateNumber: '1234567', make: 'BMW', model: 'X5', penalty: '100$' },
      { id: 2, plateNumber: '4567890', make: 'Audi', model: 'A4', penalty: '75$' },
      { id: 3, plateNumber: '7890123', make: 'Toyota', model: 'Corolla', penalty: '50$' },
    ];

    const filteredCars = staticPenaltyCars.filter((car) =>
      car.plateNumber.includes(searchQuery)
    );
    setPenaltyCars(filteredCars);
  };

  return (
    <div className='bgForm'>
      <input type="text" value={searchQuery} onChange={handleSearchChange} className='formInput' />
      <button onClick={handleSearchClick} className='btnSearch'>جستجو</button>
      <ul>
        {penaltyCars.map((car) => (
          <li key={car.id} className='listcars'>
            شماره پلاک: {car.plateNumber} - {car.make} {car.model} - جریمه: {car.penalty}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cartag;
