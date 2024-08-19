import React, { useCallback, useMemo, useState } from 'react'
import IBurgerIngredients, { IBurgerIngredient } from './IBurgerConstructor.types'
import BurgerIngredientCard from '../BurgerIngredient/BurgerIngredient';
import Menu from '../Menu/Menu'; 

import styles from './burgerConstructor.module.css';

const BurgerConstructor: React.FC<IBurgerIngredients> = ({burgerIngredients}) => {
  const [ingredientType, setIngredientType] = useState<string>('bun');

  const filterIngredients = useCallback((cotegory: string, ingredients: IBurgerIngredient[]):IBurgerIngredient[] | null => {
    const sortedIngredients = ingredients.filter(ingredient => ingredient.type === cotegory);
    
    if (sortedIngredients.length > 0) {
      return sortedIngredients;
    }
    return null;
  }, [])

  const buns = useMemo(() => filterIngredients('bun', burgerIngredients),[burgerIngredients.length]);
  const sauces = useMemo(() => filterIngredients('sauce', burgerIngredients),[burgerIngredients.length]);
  const main = useMemo(() => filterIngredients('main', burgerIngredients),[burgerIngredients.length]);

  return (
    <div className={styles.BurgerConstructor}>
      <Menu ingredientType={ingredientType} setIngredientType={setIngredientType}/>
      <div className={`${styles.listWrapper} custom-scroll`}>
        <ul className={styles.list}>
          <li className={styles.category}>
            <h2 className={styles.title}>Булки</h2>
            <div className={styles.burgerIngredients}>
              {
                buns && 
                  buns.map(ingredient => <BurgerIngredientCard burgerIngredient ={ingredient}/>)                
              }
            </div>
          </li>
          <li className={styles.category}>
            <h2 className={styles.title}>Соусы</h2>
            <div className={styles.burgerIngredients}>
              {
                sauces && 
                  sauces.map(ingredient => <BurgerIngredientCard burgerIngredient ={ingredient}/>)  
              }
            </div>

          </li>
          <li className={styles.category}>
            <h2 className={styles.title}>Начинки</h2>
            <div className={styles.burgerIngredients}>
              {
                main && 
                  main.map(ingredient => <BurgerIngredientCard burgerIngredient ={ingredient}/>) 
              }
            </div>
          </li>
        </ul>
      </div>
      
    </div>
  )
}


export default BurgerConstructor