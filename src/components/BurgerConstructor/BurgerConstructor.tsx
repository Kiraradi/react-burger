import React, { useEffect, useState } from 'react'
import IBurgerIngredients from './IBurgerConstructor.types'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import BurgerIngredientCard from '../BurgerIngredient/BurgerIngredient';

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
    <div className={styles.BurgerConstructor}>
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

      <div className={styles.listWrapper}>
        <ul className={styles.list}>
          <li className={styles.category}>
            <h2 className={styles.title}>Булки</h2>
            <div className={styles.burgerIngredients}>
              {
                burgerIngredients.filter(ingredient => ingredient.type === 'bun').map(ingredient => {
                  if (ingredient) {
                    return (
                      <BurgerIngredientCard burgerIngredient ={ingredient}/>
                    )
                  }
                })
              }
            </div>
          </li>
          <li className={styles.category}>
            <h2 className={styles.title}>Соусы</h2>
            <div className={styles.burgerIngredients}>
              {
                burgerIngredients.filter(ingredient => ingredient.type === 'sauce').map(ingredient => {
                  if (ingredient) {
                    return (
                      <BurgerIngredientCard burgerIngredient ={ingredient}/>
                    )
                  }
                })
              }
            </div>

          </li>
          <li className={styles.category}>
            <h2 className={styles.title}>Начинки</h2>
            <div className={styles.burgerIngredients}>
              {
                burgerIngredients.filter(ingredient => ingredient.type === 'main').map(ingredient => {
                  if (ingredient) {
                    return (
                      <BurgerIngredientCard burgerIngredient ={ingredient}/>
                    )
                  }
                })
              }
            </div>

          </li>
        </ul>
      </div>
      

    </div>
  )
}


export default BurgerConstructor