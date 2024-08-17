import React from 'react'

import { IBurgerIngredient } from '../BurgerConstructor/IBurgerConstructor.types';

import s from './IngredientDetails.module.css'

export interface IIngredientDetails {
    burgerIngredient: IBurgerIngredient
}

const IngredientDetails:React.FC<IIngredientDetails> = ({burgerIngredient}) => {

  const description = (title: string, count: number) => {
    return (
        <div className={s.description}>
            <p className='text text_type_main-default text_color_inactive'>{title}</p>
            <p className='text text_type_main-default text_color_inactive'>{count}</p>
        </div>
    )
  }

  return (
    <div className={s.wrapper}>
        <div className={s.container}>
            <img src={burgerIngredient.image_large} alt="logo" />
            <p className='text text_type_main-medium'>{burgerIngredient.name}</p>
        </div>
        <div className={s.descriptions}>
            {description('Калории,ккал', burgerIngredient.calories)}
            {description('Белки, г', burgerIngredient.proteins)}
            {description('Жиры, г', burgerIngredient.fat)}
            {description('Углеводы, г', burgerIngredient.carbohydrates)}
        </div>       
    </div>
  )
}

export default IngredientDetails