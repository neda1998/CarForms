// import React, { useEffect, useState } from 'react';
// // import {DataUser} from "../../data/DataUser"

// function NewOwner() {
//     const [ownersData, setOwnersData] = useState();
//     return (
//         <div>
//             <div>
//                 <p>ایجاد مشحصات مالک جدید</p>
//                 <div>
//                     <table>
//                         <tr>
//                             <th>نام مالک</th>
//                             <th>کد ملی</th>
//                             <th>محل صدور</th>
//                             <th>نام پدر</th>
//                             <th>کد پستی</th>
//                         </tr>
//                         {ownersData.map((owner) => {
//                             return (
//                                 <tr key={owner.id}>
//                                     <td>
//                                         {owner.ownerName}
//                                     </td>
//                                     <td>
//                                         {owner.nationalCode}
//                                     </td>
//                                     <td>
//                                         {owner.issuePlace}
//                                     </td>
//                                     <td>
//                                         {owner.fatherName}
//                                     </td>
//                                     <td>
//                                         {owner.postalCode}
//                                     </td>
//                                 </tr>
//                             );
//                         })}
//                     </table>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default NewOwner

import React from 'react';

const NewOwner = ({ tableData }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>نام</th>
          <th>سن</th>
          <th>ایمیل</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((data, index) => (
          <tr key={index}>
            <td>{data.name}</td>
            <td>{data.age}</td>
            <td>{data.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default NewOwner;
