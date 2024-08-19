import React, { useEffect, useLayoutEffect, useState } from 'react'
import IBurgerIngredients, {IBurgerIngredient} from '../BurgerConstructor/IBurgerConstructor.types'
import { Button, ConstructorElement, CurrencyIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import Modal from '../UI/Modal/Modal';
import OrderDetails from '../OrderDetails/OrderDetails';

import s from './burgerIngredients.module.css';

const BurgerIngredients:React.FC<IBurgerIngredients> = ({burgerIngredients}) => {
  const [lockedIngredients, setLockedIngredients] = useState<IBurgerIngredient[]>([]);
  const [openedIngredient, setOpenedIngredient] = useState<IBurgerIngredient[]>([]);
  const [fullPrice, setFullPrice] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const closeModal = () => {
    setIsOpen(false);
  }

  useEffect(() => {
    const price = burgerIngredients.reduce((acc, ing) => acc + ing.price, 0);
    setFullPrice(price)
  }, [burgerIngredients])

  useEffect(() => {
    const lockedIng: IBurgerIngredient[] = [];
    const openedIng: IBurgerIngredient[] = []; 
    burgerIngredients.map((ing) => {      
      ing.type === 'bun' && lockedIng.length < 2 ? lockedIng.push(ing)  : openedIng.push(ing)
      setOpenedIngredient(openedIng);
      setLockedIngredients(lockedIng)
    })
  }, [burgerIngredients])

  
  return (
    <div className={s.wrapper}>
      <div className={s.fullList}>
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
      <div className={s.price}>
        <p className='text text_type_main-large'>{fullPrice}</p>
        <CurrencyIcon type="primary" />
        <Button 
          htmlType="button" 
          type="primary" 
          size="medium"
          onClick={() => {setIsOpen(true)}}
        >
          Оформить заказ
        </Button>

      </div>
      {isOpen && <Modal
        title=''
        onClose={closeModal}
       >
        <OrderDetails/>
        </Modal>}
    </div>
  )
}

export default BurgerIngredients
