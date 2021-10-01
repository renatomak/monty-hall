import React from 'react';
import styles from '../styles/cart.module.css';

interface CardProps {
    bgcolor?: string,
    children?: any
}

const Card = (props: CardProps) => {
    return (
        <div
            className={styles.card}
            style={{
                backgroundColor: props.bgcolor ?? "#FFF"
            }}
        >
            {props.children}
        </div>
    );
}

export default Card;