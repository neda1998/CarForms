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
      { id: 1, plateNumber: '12 ل712- 29', make: 'پراید', penalty: '100 میلیون' },
      { id: 2, plateNumber: '12ب300-200', make: 'پژو', penalty: '75$میلیون' },
      { id: 3, plateNumber: '30ق98-400', make: 'تیبا', penalty: '50$میلیون' },
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
            شماره پلاک: {car.plateNumber} - {car.make} - جریمه: {car.penalty}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cartag;
