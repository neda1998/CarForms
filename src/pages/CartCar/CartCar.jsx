import React from 'react';
import "../../styles/CartCar.css"
import { Link } from 'react-router-dom';

const CartCar = () => {
    return (
        <div className='bgForm'>
            <div className="">
                <p>کارت ماشین</p>
                <div>
                    <p>نام مالک</p>
                    <input type="text" placeholder='نام' />
                </div>
                <div>
                    <p>کد ملی</p>
                    <input type="text" placeholder='کد ملی' />
                </div>
                <div>
                    <p>محل صدور</p>
                    <input type="text" placeholder='محل صدور' />
                </div>
                <div>
                    <p>نام پدر</p>
                    <input type="text" placeholder='نام پدر' />
                </div>
                <div>
                    <p>کدپستی</p>
                    <input type="text" placeholder='کد پستی' />
                </div>
                <Link to="">
                    <button> ذخیره اطلاعات</button>
                </Link>
            </div>
        </div>
    )
}

export default CartCar