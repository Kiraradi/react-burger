import React, { useEffect, useState } from 'react'

import styles from './stellarBurgers.module.css';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import { getIngredientsFromSServer } from '../../Services/Api';
import { IBurgerIngredient } from '../BurgerConstructor/IBurgerConstructor.types';

const StellarBurgers = () => {
  const [ingredients, setIngredients] = useState<IBurgerIngredient[] | null>([])

  useEffect(() => {
    const getIngredients = async () => {
      const ingredients = await getIngredientsFromSServer();
      setIngredients(ingredients);
    };

    getIngredients();
    
  }, [])
  return (
    <main className={styles.main}>
        <div className={styles.title}>
          <h1 className="text text_type_main-large">Соберите бургер</h1>  
        </div>

        <div className={styles.columns}>
            { ingredients && <BurgerConstructor burgerIngredients={ingredients}/>}
            { ingredients && <BurgerIngredients burgerIngredients={ingredients}/>}
        </div>
    </main>
  )
}

export default StellarBurgers
