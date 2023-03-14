import React from 'react';
import { ContactItem } from 'components/ContactItem/ContactItem';
 import css from './ContactList.module.css';

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

}