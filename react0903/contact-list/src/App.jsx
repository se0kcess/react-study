import { useState } from 'react';
import InputCon from './components/InputCon';
import ListArea from './components/ListArea';
import GroupModal from './components/GroupModal';
import DetailModal from './components/DetailModal';
import './css/App.css';

export default function App() {
  const initialContacts = JSON.parse(localStorage.getItem('contacts')) || [];
  const initialGroups = JSON.parse(localStorage.getItem('groups')) || ['가족', '친구', '직장', '스터디'];

  const [contacts, setContacts] = useState(initialContacts);
  const [groups, setGroups] = useState(initialGroups);
  const [searchTerm, setSearchTerm] = useState('');
  const [isGroupModalOpen, setIsGroupModalOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);

  const addContact = (newContact) => {
    const updatedContacts = [...contacts, newContact];
    setContacts(updatedContacts);
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
  };

  const deleteContact = (index) => {
    const updatedContacts = contacts.filter((_, i) => i !== index);
    setContacts(updatedContacts);
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
  };

  const updateGroups = (newGroups) => {
    setGroups(newGroups);
    localStorage.setItem('groups', JSON.stringify(newGroups));
  };

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.includes(searchTerm) || contact.phone.includes(searchTerm) || contact.group.includes(searchTerm)
  );

  return (
    <div className='app'>
      <h1>연락처 리스트</h1>
      <div className='content'>
        <InputCon addContact={addContact} groups={groups} openGroupModal={() => setIsGroupModalOpen(true)} />
        <ListArea
          contacts={filteredContacts}
          deleteContact={deleteContact}
          setSelectedContact={setSelectedContact}
          setSearchTerm={setSearchTerm}
        />
      </div>
      {isGroupModalOpen && (
        <GroupModal groups={groups} updateGroups={updateGroups} onClose={() => setIsGroupModalOpen(false)} />
      )}
      {selectedContact && <DetailModal contact={selectedContact} onClose={() => setSelectedContact(null)} />}
    </div>
  );
}
