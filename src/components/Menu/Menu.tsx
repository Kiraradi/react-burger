import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import { FC, memo } from 'react'

import { IMenu } from './Menu.types'

import s from './Menu.module.css'

const Menu:FC<IMenu> = ({ingredientType, setIngredientType}) => {
  return (
    <div className={s.menu}>
        <Tab value="bun" active={ingredientType === 'bun'} onClick={setIngredientType}>
          Булки
        </Tab>
        <Tab value="sauce" active={ingredientType === 'sauce'} onClick={setIngredientType}>
          Соусы
        </Tab>
        <Tab value="main" active={ingredientType === 'main'} onClick={setIngredientType}>
          Начинки
        </Tab>
      </div>
  )
}

export default memo(Menu);