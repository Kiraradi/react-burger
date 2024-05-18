import React, { useEffect, useState } from 'react'
import IBurgerIngredients from './IBurgerConstructor.types'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'

import styles from './burgerConstructor.module.css';

const BurgerConstructor: React.FC<IBurgerIngredients> = ({burgerIngredients}) => {
  const [ingredientType, setingredientType] = useState('bun');
  const [title, setTitle] = useState('Булки');

  useEffect(()=> {
    switch(ingredientType){
      case 'bun':
        setTitle('Булки')
        break;
        case 'sauce':
          setTitle('Соусы')
          break;
          case 'main':
            setTitle('Начинки')
            break;
    }
  },[ingredientType])

  return (
    <div>
      <div className={styles.menu}>
        <Tab value="bun" active={ingredientType === 'bun'} onClick={setingredientType}>
          Булки
        </Tab>
        <Tab value="sauce" active={ingredientType === 'sauce'} onClick={setingredientType}>
          Соусы
        </Tab>
        <Tab value="main" active={ingredientType === 'main'} onClick={setingredientType}>
          Начинки
        </Tab>
      </div>
      <h2 className={styles.title}>{title}</h2>
      <ul>
        {
          burgerIngredients.filter(ingredient => ingredient.type === ingredientType).map(ingredient => {
            if (ingredient) {
              return (
                <div>{ingredient.name}</div>
              )
              return<></>
            }
          })
        }
      </ul>
    </div>
  )
}


export default BurgerConstructor