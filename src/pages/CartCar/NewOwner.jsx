import React, {useState, useEffect} from 'react';

const NewOwner = ({handleDeleteRow}) => {
  const tableData = JSON.parse(localStorage.getItem('tableData') || '[]')

  const goBack = () => {
    window.location.href="/cartcar"
  }

  return (
    <div className='px-20 tableForm'>
      <h2>اطلاعات ثبت شده:</h2>
      <table>
        <thead>
          <tr>
            <th>نام مالک</th>
            <th>کد ملی</th>
            <th>محل صدور</th>
            <th>نام پدر</th>
            <th>کد پستی</th>
            <th>حذف</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => (
            <tr key={index}>
              <td>{data.ownerName}</td>
              <td>{data.nationalCode}</td>
              <td>{data.issueLocation}</td>
              <td>{data.fatherName}</td>
              <td>{data.postalCode}</td>
              <td>
              <button onClick={() => handleDeleteRow(index)}>حذف</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className='btnFormOwner' onClick={goBack}>بازگشت به صفحه‌ی قبل</button>
    </div>
  );
};

export default NewOwner;
