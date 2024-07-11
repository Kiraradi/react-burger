import React from 'react'
import { IBurgerIngredient } from '../BurgerConstructor/IBurgerConstructor.types'

export interface IBurgerIngredientCard {
    burgerIngredient: IBurgerIngredient
}


const BurgerIngredientCard:React.FC<IBurgerIngredientCard> = ({burgerIngredient}) => {
  return (
    <div>
        <img src={burgerIngredient.image} alt={burgerIngredient.name}></img>
        <div>{burgerIngredient.name}</div>
    </div>
  )
}

export default BurgerIngredientCard