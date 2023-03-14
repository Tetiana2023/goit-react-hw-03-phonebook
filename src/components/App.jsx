import { Component } from 'react';
import React from 'react';
import { FormContact } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { FilterContact } from './FilterContact/FilterContact';
import { nanoid } from 'nanoid';
import css from './App.module.css'

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  // formSubmitHandler = data => {
  //   console.log(data);
  // };

  addNewContact = ({ name, number }) => {
    const newContact = {
      name,
      number,
      id: nanoid(),
    };
    const { contacts } = this.state;
    const isContactExist = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    isContactExist
      ? alert(`${name} is alreadi in contacts`)
      : this.setState(({ contacts }) => ({
          contacts: [newContact, ...contacts],
        }));
  };

  hendleDeleteContact = id => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));
  };

  hendleFilter = event => {
    this.setState({ filter: event.target.value });
  };

  getVivsibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLocaleLowerCase();
    return  contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const visibleContacts = this.getVivsibleContacts();
    return (
      <div className={css.container}>
        <h1 className={css.title}>Phonebook</h1>
        <FormContact onSubmit={this.addNewContact} />
        <h2 className={css.title}>Contacts</h2>
        <FilterContact
          value={this.state.filter}
          hendleFilter={this.hendleFilter}
        />
        <ContactList
          contacts={visibleContacts}
          hendleDeleteContact={this.hendleDeleteContact}
        />
      </div>
    );
  }
}
