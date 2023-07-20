import React, { useState,useCallback, useEffect } from 'react';
import NewOwner from './NewOwner';
import "../../styles/CartCar.css";

const CartCar = () => {
  const [formData, setFormData] = useState({
    ownerName: '',
    nationalCode: '',
    issueLocation: '',
    fatherName: '',
    postalCode: '',
  });

  const [tableData, setTableData] = useState([]);
  const [showNewOwner, setShowNewOwner] = useState(false);

  const handleDeleteRow = useCallback((index) => {
    const updatedTableData = JSON.parse(localStorage.getItem('tableData') || '[]');
    updatedTableData.splice(index, 1);
    setTableData(updatedTableData);
    localStorage.setItem('tableData', JSON.stringify(updatedTableData));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    saveDataToLocalStorage(formData); // ذخیره اطلاعات در localStorage
    setTableData([...tableData, formData]);
    setFormData({
      ownerName: '',
      nationalCode: '',
      issueLocation: '',
      fatherName: '',
      postalCode: '',
    });
  };

  const saveDataToLocalStorage = (data) => {
    const previousData = localStorage.getItem('tableData');
    const parsedPreviousData = previousData ? JSON.parse(previousData) : [];
    const newData = [...parsedPreviousData, data];
    setTableData(newData);
    localStorage.setItem('tableData', JSON.stringify(newData));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleShowNewOwner = () => {
    setShowNewOwner(prevState => !prevState);
  };

  useEffect(() => {
    const previousData = localStorage.getItem('tableData');
    const parsedPreviousData = previousData ? JSON.parse(previousData) : [];
    setTableData(parsedPreviousData);
  }, []);
  return (
    <div>
      {showNewOwner ? (
        <NewOwner handleDeleteRow={handleDeleteRow} tableData={tableData}/>
      ) : (
        <div className='bgForm px-10 flexCol'>
          <p>کارت ماشین</p>
          <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="نام مالک"
            name="ownerName"
            value={formData.ownerName}
            onChange={handleChange}
            className='formInput'
          />
           <input
          type="number"
          placeholder="کد ملی"
          name="nationalCode"
          value={formData.nationalCode}
          onChange={handleChange}
          className='formInput'
        />
        <input
          type="text"
          placeholder="محل صدور"
          name="issueLocation"
          value={formData.issueLocation}
          onChange={handleChange}
          className='formInput'
        />
        <input
          type="text"
          placeholder="نام پدر"
          name="fatherName"
          value={formData.fatherName}
          onChange={handleChange}
          className='formInput'
        />
        <input
          type="text"
          placeholder="کد پستی"
          name="postalCode"
          value={formData.postalCode}
          onChange={handleChange}
          className='formInput'
        />
            <button className='btnForm' type="submit">ذخیره اطلاعات</button>
          <button className='btnForm' onClick={handleShowNewOwner}>نمایش اطلاعات</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default CartCar;
