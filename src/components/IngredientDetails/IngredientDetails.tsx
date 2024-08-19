import React from 'react'

import { IBurgerIngredient } from '../BurgerConstructor/IBurgerConstructor.types';

import s from './IngredientDetails.module.css'
import Description from './Description/Description';

export interface IIngredientDetails {
    burgerIngredient: IBurgerIngredient
}

const IngredientDetails:React.FC<IIngredientDetails> = ({burgerIngredient}) => {



  return (
    <div className={s.wrapper}>
        <div className={s.container}>
            <img src={burgerIngredient.image_large} alt="logo" />
            <p className='text text_type_main-medium'>{burgerIngredient.name}</p>
        </div>
        <div className={s.descriptions}>
            <Description title='Калории,ккал' count={burgerIngredient.calories}/>
            <Description title='Белки, г' count={burgerIngredient.proteins}/>
            <Description title='Жиры, г' count={burgerIngredient.fat}/>
            <Description title='Углеводы, г' count={burgerIngredient.carbohydrates}/>
        </div>       
    </div>
  )
}

export default IngredientDetails