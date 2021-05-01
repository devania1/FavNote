import React from 'react';
import styles from './Modal.module.scss';
import Form from '../Form/Form';

const Modal = ({ closeModalFn }) => (
    <div className={styles.wrapper}>
            <button className={styles.button} onClick={closeModalFn}>X</button>
            <Form />
    </div>
);

export default Modal;