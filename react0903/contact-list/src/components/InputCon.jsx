import React, { useState } from 'react';
import '../css/InputCon.css';

export default function InputCon({ addContact, groups, openGroupModal }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [group, setGroup] = useState(groups[0]);
  const [note, setNote] = useState('');
  const [error, setError] = useState('');

  const validateName = (name) => /^[가-힣]{2,}$/.test(name);
  const validatePhone = (phone) => /^010-\d{4}-\d{4}$/.test(phone);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateName(name)) {
      setError('이름은 한글로 두 글자 이상이어야 합니다.');
      return;
    }
    if (!validatePhone(phone)) {
      setError('전화번호는 010-0000-0000 형식이어야 합니다.');
      return;
    }
    addContact({ name, phone, group, note });
    setName('');
    setPhone('');
    setGroup(groups[0]);
    setNote('');
    setError('');
  };

  return (
    <div className='input-container'>
      <form onSubmit={handleSubmit}>
        <div className='input-item'>
          <label>이름:</label>
          <input type='text' value={name} placeholder='이름' onChange={(e) => setName(e.target.value)} />
          {error.includes('이름') && <p className='error'>{error}</p>}
        </div>
        <div className='input-item'>
          <label>전화번호:</label>
          <input type='text' value={phone} placeholder='전화번호' onChange={(e) => setPhone(e.target.value)} />
          {error.includes('전화번호') && <p className='error'>{error}</p>}
        </div>
        <div className='input-item'>
          <label>그룹:</label>
          <div className='group-con'>
            <select value={group} onChange={(e) => setGroup(e.target.value)}>
              {groups.map((g) => (
                <option key={g} value={g}>
                  {g}
                </option>
              ))}
            </select>
            <button type='button' onClick={openGroupModal}>
              조직 추가
            </button>
          </div>
        </div>
        <div className='input-item'>
          <label>간단한 기록:</label>
          <input type='text' value={note} placeholder='간단한 기록' onChange={(e) => setNote(e.target.value)} />
        </div>
        <button type='submit'>저장</button>
      </form>
    </div>
  );
}
