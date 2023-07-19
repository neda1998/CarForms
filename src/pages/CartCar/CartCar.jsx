// // import React, { useEffect, useState } from 'react';
// import "../../styles/CartCar.css"
// // import axios from 'axios';
// // // import { getOwnerData } from '../../services/GetData';
// import Button from '../../components/Button/Button';

// // const CartCar = () => {
// //   const [formData, setFormData] = useState({
// //     ownerName: "",
// //     nationalCode: "",
// //     issuePlace: "",
// //     fatherName: "",
// //     postalCode: ""
// //   });

// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData(prevState => ({
// //       ...prevState,
// //       [name]: value
// //     }));
// //   };

// //   // useEffect(() => {
// //   //   try {
// //   //     const getData = axios.get(getOwnerData)
// //   //       .then(res => setFormData(res))
// //   //       .then(error => console.log(error))
// //   //   } catch (error) {
// //   //     console.log(error);
// //   //   }
// //   //   getData()
// //   // }, [])

// //   return (
// //     <div className='bgForm px-10 flexAlign'>
// //       <div className="flexCol">
// //         <p>کارت ماشین</p>
// //         <div className='formInput'>
// //           <input
// //             type="text"
// //             placeholder='نام مالک'
// //             name="ownerName"
// //             onChange={handleInputChange}
// //             value={formData.ownerName}
// //           />
// //         </div>
// //         <div className='formInput'>
// //           <input
// //             type="text"
// //             placeholder='کد ملی'
// //             name="nationalCode"
// //             onChange={handleInputChange}
// //             value={formData.nationalCode}
// //           />
// //         </div>
// //         <div className='formInput'>
// //           <input
// //             type="text"
// //             placeholder='محل صدور'
// //             name="issuePlace"
// //             onChange={handleInputChange}
// //             value={formData.issuePlace}
// //           />
// //         </div>
// //         <div className='formInput'>
// //           <input
// //             type="text"
// //             placeholder='نام پدر'
// //             name="fatherName"
// //             onChange={handleInputChange}
// //             value={formData.fatherName}
// //           />
// //         </div>
// //         <div className='formInput'>
// //           <input
// //             type="text"
// //             placeholder='کد پستی'
// //             name="postalCode"
// //             onChange={handleInputChange}
// //             value={formData.postalCode}
// //           />
// //         </div>
// //         <Button text="ذخیره اطلاعات" pathDiff="newowner" />
// //       </div>
// //     </div>
// //   )
// // }

// // export default CartCar;

// import React, { useState } from 'react';
// import { useTable } from 'react-table';

// const App = () => {
//   // State برای ذخیره داده‌های فرم
//   const [formData, setFormData] = useState({ name: '', age: '', email: '' });
//   // State برای ذخیره داده‌های جدول
//   const [tableData, setTableData] = useState([]);

//   // متد برای ذخیره داده‌های فرم در State جدول
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setTableData([...tableData, formData]);
//     setFormData({ name: '', age: '', email: '' });
//   };

//   // متد برای تغییر State داده‌های فرم
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
//   };

//   // تعریف ستون‌های جدول
//   const columns = React.useMemo(
//     () => [
//       {
//         Header: 'نام',
//         accessor: 'name',
//       },
//       {
//         Header: 'سن',
//         accessor: 'age',
//       },
//       {
//         Header: 'ایمیل',
//         accessor: 'email',
//       },
//     ],
//     []
//   );

//   // ایجاد جدول با استفاده از react-table
//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     rows,
//     prepareRow,
//   } = useTable({ columns, data: tableData });

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="نام"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//         />
//         <input
//           type="number"
//           placeholder="سن"
//           name="age"
//           value={formData.age}
//           onChange={handleChange}
//         />
//         <input
//           type="email"
//           placeholder="ایمیل"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//         />
//         <Button pathDiff="newowner" text="دخیره اطلاعات" />
//       </form>

//       {/* table */}
//       {/* <table {...getTableProps()} style={{ marginTop: '20px' }}>
//         <thead>
//           {headerGroups.map((headerGroup) => (
//             <tr {...headerGroup.getHeaderGroupProps()}>
//               {headerGroup.headers.map((column) => (
//                 <th {...column.getHeaderProps()}>{column.render('Header')}</th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         <tbody {...getTableBodyProps()}>
//           {rows.map((row) => {
//             prepareRow(row);
//             return (
//               <tr {...row.getRowProps()}>
//                 {row.cells.map((cell) => (
//                   <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
//                 ))}
//               </tr>
//             );
//           })}
//         </tbody>
//       </table> */}
//     </div>
//   );
// };

// export default App;

import React, { useState } from 'react';
import NewOwner from './NewOwner';
import Button from "../../components/Button/Button"

const App = () => {
  const [formData, setFormData] = useState({ name: '', age: '', email: '' });
  const [tableData, setTableData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTableData([...tableData, formData]);
    setFormData({ name: '', age: '', email: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="نام"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="سن"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="ایمیل"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <button type="submit">ثبت</button>
        {/* <Button pathDiff="newowner" text="دخیره اطلاعات" /> */}

      </form>

      {/* فرستادن داده‌های جدول به کامپوننت جدول */}
      <NewOwner tableData={tableData} />
    </div>
  );
};

export default App;

