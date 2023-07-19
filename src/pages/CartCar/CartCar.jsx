import React, { useEffect, useState } from 'react';
import "../../styles/CartCar.css"
import axios from 'axios';
import { getOwnerData } from '../../services/GetData';
import Button from '../../components/Button/Button';

const CartCar = () => {
  const [formData, setFormData] = useState({
    ownerName: "",
    nationalCode: "",
    issuePlace: "",
    fatherName: "",
    postalCode: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // useEffect(() => {
  //   try {
  //     const getData = axios.get(getOwnerData)
  //       .then(res => setFormData(res))
  //       .then(error => console.log(error))
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   getData()
  // }, [])

  return (
    <div className='bgForm px-10 flexAlign'>
      <div className="flexCol">
        <p>کارت ماشین</p>
        <div className='formInput'>
          <input
            type="text"
            placeholder='نام مالک'
            name="ownerName"
            onChange={handleInputChange}
            value={formData.ownerName}
          />
        </div>
        <div className='formInput'>
          <input
            type="text"
            placeholder='کد ملی'
            name="nationalCode"
            onChange={handleInputChange}
            value={formData.nationalCode}
          />
        </div>
        <div className='formInput'>
          <input
            type="text"
            placeholder='محل صدور'
            name="issuePlace"
            onChange={handleInputChange}
            value={formData.issuePlace}
          />
        </div>
        <div className='formInput'>
          <input
            type="text"
            placeholder='نام پدر'
            name="fatherName"
            onChange={handleInputChange}
            value={formData.fatherName}
          />
        </div>
        <div className='formInput'>
          <input
            type="text"
            placeholder='کد پستی'
            name="postalCode"
            onChange={handleInputChange}
            value={formData.postalCode}
          />
        </div>
        <Button text="ذخیره اطلاعات" pathDiff="newowner" />
      </div>
    </div>
  )
}

export default CartCar;

