import React, { useState } from 'react'
import { IBurgerIngredient } from '../BurgerConstructor/IBurgerConstructor.types';

import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../UI/Modal/Modal';
import IngredientDetails from '../IngredientDetails/IngredientDetails';

import s from "./burgerIngredient.module.css"

export interface IBurgerIngredientCard {
    burgerIngredient: IBurgerIngredient
}


const BurgerIngredientCard:React.FC<IBurgerIngredientCard> = ({burgerIngredient}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <>
    <div 
      className={s.card} 
      onClick={() => {
        console.log('rrrr')
        setIsOpen(true)}}
    >
        <img src={burgerIngredient.image} alt={burgerIngredient.name}></img>
        <div className={s.priceWrapper}>
          <span>{burgerIngredient.price}</span>
          <CurrencyIcon type='primary'/>  
        </div>
        <div>{burgerIngredient.name}</div>
        <Counter count={1} size="default" extraClass="m-1" />
    </div>
      {isOpen && (
            <Modal
              title='Детали ингредиента'
              onClose={closeModal}
            >
              <IngredientDetails burgerIngredient={burgerIngredient}/>
            </Modal>
          )}
    </>
  )
}

export default BurgerIngredientCard