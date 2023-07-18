import React, { useEffect, useState } from 'react';
import {DataUser} from "../../data/DataUser"

function NewOwner() {
    const [ownersData, setOwnersData] = useState(DataUser);
    return (
        <div>
            <div>
                <p>ایجاد مشحصات مالک جدید</p>
                <div>
                    <table>
                        <tr>
                            <th>نام مالک</th>
                            <th>کد ملی</th>
                            <th>محل صدور</th>
                            <th>نام پدر</th>
                            <th>کد پستی</th>
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
        </div>
    );
}

export default NewOwner