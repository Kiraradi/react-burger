import { FC, useState } from "react";

import { iModal } from "./Modal.types";

import s from './modal.module.css'

import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ReactDOM from "react-dom";

const modalRoot = document.getElementById("react-modals");

const Modal:FC<iModal> = ({title, onClose, children}) => {
    return ReactDOM.createPortal(
        (<div className={s.ModalOverlay}>
            <div className={s.Modal}>
                <div className={s.header}>
                    <h3 className={s.title}>{title}</h3>
                    <CloseIcon 
                        type="primary" 
                        onClick={onClose}
                    />
                </div>
                <div className={s.content}>{children}</div>
            </div>
        </div>), modalRoot as HTMLElement)
}

export default Modal