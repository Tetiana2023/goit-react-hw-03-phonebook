import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactItem.module.css';

export const ContactItem = ({name, number, hendleDeleteContact})=>{
    return(
        <>
        <div className={css.item}>
            <p>{name}:</p>
            <p>{number}</p>
            <button className={css.button} type="button" onClick={hendleDeleteContact}>Delete</button>
        </div>
        </>
    )
};

ContactItem.propTypes = {
    name:PropTypes.string.isRequired,
    number:PropTypes.string.isRequired,
    hendleDeleteContact:PropTypes.func.isRequired,

}