import React, { useState } from 'react'
// import { DataUser } from "../../data/DataUser"

const NewOffences = () => {
    const [ownersData, setOwnersData] = useState();

    return (
        <div className='px-20'>
            <p>ایجاد مشحصات مالک جدید</p>
            <div>
                <table>
                    <tr>
                        <th>
                            شماره پلاک
                        </th>
                        <th>
                            نام مالک
                        </th>
                        <th>
                            کد ملی
                        </th>
                        <th>
                            محل صدور
                        </th>
                        <th>
                            شماره گواهینامه
                        </th>
                        <th>
                            نام پدر
                        </th>
                        <th>
                            کد پستی
                        </th>
                        <th>
                            پایه
                        </th>
                        <th>
                            رنگ ماشین
                        </th>
                        <th>
                            نام ماشین
                        </th>
                        <th>
                            نوع
                        </th>
                        <th>
                            مدل ماشین
                        </th>
                    </tr>
                    {ownersData.map((owner) => {
                        return (
                            <tr key={owner.id}>
                                <td>
                                    {owner.ownerName}
                                </td>
                                <td>
                                    {owner.nationalCode}
                                </td>
                                <td>
                                    {owner.issuePlace}
                                </td>
                                <td>
                                    {owner.fatherName}
                                </td>
                                <td>
                                    {owner.postalCode}
                                </td>
                            </tr>
                        );
                    })}
                </table>
            </div>
        </div>
    )
}

export default NewOffences