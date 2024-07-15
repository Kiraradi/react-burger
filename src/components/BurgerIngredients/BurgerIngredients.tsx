import React, { useEffect, useLayoutEffect, useState } from 'react'
import IBurgerIngredients, {IBurgerIngredient} from '../BurgerConstructor/IBurgerConstructor.types'
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'

import s from './burgerIngredients.module.css'

const BurgerIngredients:React.FC<IBurgerIngredients> = ({burgerIngredients}) => {
  const [lockedIngredients, setLockedIngredients] = useState<IBurgerIngredient[]>([]);
  const [openedIngredient, setOpenedIngredient] = useState<IBurgerIngredient[]>([]);

  
  
  useEffect(() => {
    const lockedIng: IBurgerIngredient[] = [];
    const openedIng: IBurgerIngredient[] = []; 
    burgerIngredients.map((ing) => {      
      ing.type === 'bun' && lockedIng.length < 2 ? lockedIng.push(ing)  : openedIng.push(ing)
      setOpenedIngredient(openedIng);
      setLockedIngredients(lockedIng)
    })
  }, [burgerIngredients])

  console.log(lockedIngredients)
  return (
    <div className={s.wrapper}>
      {
        lockedIngredients.length && (
          <ConstructorElement
            type={'top'}
            isLocked= {false}
            text={lockedIngredients[0].name}
            price={lockedIngredients[0].price}
            thumbnail={lockedIngredients[0].image}
          />
        )
      }
      
      <div className={s.list}>
        {
          openedIngredient.map(ing => {
            return (
              <div className= {s.item}>
              <DragIcon type="primary" />              
              <ConstructorElement
                      type={undefined}
                      isLocked= {false}
                      text={ing.name}
                      price={ing.price}
                      thumbnail={ing.image}
                    />
              </div>

            )
          })
        }
      </div>
      {
        lockedIngredients[1] && (
          <ConstructorElement
            type={'bottom'}
            isLocked= {false}
            text={lockedIngredients[1].name}
            price={lockedIngredients[1].price}
            thumbnail={lockedIngredients[1].image}
          />
        )
      }
    </div>
  )
}

export default BurgerIngredients
