import  { useState } from 'react';

import s from './OrderDetails.module.css';

import icon from '../../image/graphics.svg'

const OrderDetails = () => {
    const [orderNumber, setOrderNumber] = useState<string>('034536');

    return (
        <div className={s.orderDetails}>
            <div className={s.titleWrapper}>
                <h2 className='text text_type_digits-large'>{orderNumber}</h2>
                <span className='text text_type_main-default'>идентификатор заказа</span>
            </div>
            <div className={s.icon}>
                <img src={icon} alt="icon" />
            </div>
            <div className={s.description}>
                <p className='text text_type_main-smal'>Ваш заказ начали готовить</p>
                <p className='text text_type_main-small text_color_inactive'>Дождитесь готовности на орбитальной станции</p>
            </div>

        </div>
    )
}

export default OrderDetails