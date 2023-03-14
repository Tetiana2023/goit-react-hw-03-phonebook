import React from 'react';
import { ContactItem } from 'components/ContactItem/ContactItem';
import css from './ContactList.module.css';
import PropTypes from 'prop-types';

export const ContactList = ({contacts, hendleDeleteContact})=> {
    return (
        <>
        <ul >
            {contacts.map(({id, name, number }) =>(
            <li  className={css.list} key ={id}>           
             
            <ContactItem 
            name={name}
            number={number}
            hendleDeleteContact={()=> hendleDeleteContact(id)}/>
            </li>))} 
        </ul>
        </>
    )

};
ContactList.propType = {
    contacts:PropTypes.shape({
        id:PropTypes.string.isRequired,
        name:PropTypes.string.isRequired,
        number:PropTypes.string.isRequired, 
    }).isRequired,
    }