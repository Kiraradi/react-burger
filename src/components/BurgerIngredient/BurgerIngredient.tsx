import React from 'react'
import { IBurgerIngredient } from '../BurgerConstructor/IBurgerConstructor.types';

import s from "./burgerIngredient.module.css"
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

export interface IBurgerIngredientCard {
    burgerIngredient: IBurgerIngredient
}


const BurgerIngredientCard:React.FC<IBurgerIngredientCard> = ({burgerIngredient}) => {
  //console.log(burgerIngredient)
  return (
    <div className={s.card}>
        <img src={burgerIngredient.image} alt={burgerIngredient.name}></img>
        <div className={s.priceWrapper}>
          <span>{burgerIngredient.price}</span>
          <CurrencyIcon type='primary'/>  
        </div>
        <div>{burgerIngredient.name}</div>
        <Counter count={1} size="default" extraClass="m-1" />
    </div>
  )
}

export default BurgerIngredientCard