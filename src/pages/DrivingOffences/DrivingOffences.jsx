import React, { useState, useCallback, useEffect } from 'react';
import NewOffences from './NewOffences';
import "../../styles/CartCar.css";

const DrivingOffences = () => {
    const [formData, setFormData] = useState({
        ownerName: '',
        countPenalty: '',
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
        saveDataToLocalStorage(formData);
        setTableData([...tableData, formData]);
        setFormData({
            typePenalty: '',
            countPenalty: '',
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
                <NewOffences handleDeleteRow={handleDeleteRow} tableData={tableData} />
            ) : (
                <div className='bgForm px-10 flexCol'>
                    <p>انواع جریمه</p>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="نوع جریمه"
                            name="typepenalty"
                            value={formData.typePenalty}
                            onChange={handleChange}
                            className='formInput'
                        />
                        <input
                            type="number"
                            placeholder="میزان جریمه"
                            name="countpenalty"
                            value={formData.countPenalty}
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

export default DrivingOffences;