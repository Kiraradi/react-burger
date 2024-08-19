import { FC } from 'react';
import { IDescription } from './Description.types';

import s from './description.module.css';

const Description:FC<IDescription> = ({title, count}) =>  (
    <div className={s.description}>
        <p className='text text_type_main-default text_color_inactive'>{title}</p>
        <p className='text text_type_main-default text_color_inactive'>{count}</p>
    </div>
  )

export default Description;