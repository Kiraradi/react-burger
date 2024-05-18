import React from 'react'

import styles from './stellarBurgers.module.css';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import { dataBurgerComponents } from '../../utils/data';

export default function StellarBurgers() {
  return (
    <main className={styles.main}>
        <div className={styles.title}>
          <h1 className="text text_type_main-large">Соберите бургер</h1>  
        </div>

        <div className={styles.columns}>
            <BurgerConstructor burgerIngredients={dataBurgerComponents}/>
            <BurgerIngredients/>
        </div>
    </main>
  )
}
