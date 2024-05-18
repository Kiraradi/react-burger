import React from 'react';
import { Logo, BurgerIcon, ListIcon, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './appHeader.module.css';

export default function AppHeader() {
  return (
    <header className={styles.header}>
        <div className={styles.headerContent}>
            <nav className={styles.content}>
                <ul className={styles.navList}>
                    <li className={styles.navItem}>
                        <BurgerIcon type="primary"/>
                        <p className="text text_type_main-default">Конструктор</p>
                    </li>
                    <li className={styles.navItem}>
                        <ListIcon type="secondary"/>
                        <p className="text text_type_main-default text_color_inactive">Лента заказов</p>
                    </li>
                </ul>
            </nav>
            <div className={styles.content}>
              <Logo/>  
            </div>
            
            <div className={styles.content}>
                <div className={styles.personalAccount}>
                    <ProfileIcon type="secondary"/>
                    <p className="text text_type_main-default text_color_inactive">Личный кабинет</p>
                </div>
            </div>
        </div>
    </header>
  )
}
