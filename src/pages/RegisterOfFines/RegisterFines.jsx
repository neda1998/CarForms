import React, { useState, useCallback, useEffect } from 'react';
import NewFines from './NewFines';
import "../../styles/CartCar.css";

const RegisterOfFines = () => {
    const [formData, setFormData] = useState({
        ownerName: '',
        countPenalty: '',
        issueLocation: '',
        carModel: '',
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
        saveDataToLocalStorage(formData);
        setTableData([...tableData, formData]);
        setFormData({
            numberPlates: '',
            carColor: '',
            carName: '',
            carModel: '',
            nameOwner: '',
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
                <NewFines handleDeleteRow={handleDeleteRow} tableData={tableData} />
            ) : (
                <div className='bgForm px-10 flexCol'>
                    <p>ثبت جریمه</p>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="شماره پلاک"
                            name="typepenalty"
                            value={formData.numberPlates}
                            onChange={handleChange}
                            className='formInput'
                        />
                        <input
                            type="text"
                            placeholder="رنگ ماشین"
                            name="countpenalty"
                            value={formData.carColor}
                            onChange={handleChange}
                            className='formInput'
                        />
                        <input
                            type="text"
                            placeholder="نام ماشین"
                            name="issuelocation"
                            value={formData.carName}
                            onChange={handleChange}
                            className='formInput'
                        />
                        <input
                            type="text"
                            placeholder="نام مالک"
                            name="postalcode"
                            value={formData.nameOwner}
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

export default RegisterOfFines;