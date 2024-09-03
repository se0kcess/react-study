import React from 'react';
import ContactItem from './ContactItem';
import SearchCon from './SearchCon';
import '../css/ListArea.css';

export default function ListArea({ contacts, deleteContact, setSelectedContact, setSearchTerm }) {
  return (
    <div className='list-area'>
      <SearchCon setSearchTerm={setSearchTerm} />
      <div className='contact-list'>
        {contacts.map((contact, index) => (
          <ContactItem
            key={index}
            contact={contact}
            onDelete={() => deleteContact(index)}
            onDetail={() => setSelectedContact(contact)}
          />
        ))}
      </div>
    </div>
  );
}
