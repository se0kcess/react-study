import './list.css';
export default function List({ list, setList, index }) {
  const removeItem = () => {
    setList((prev) => {
      const newList = prev.filter((_, i) => i !== index);
      localStorage.setItem('tripLists', JSON.stringify(newList));
      return newList;
    });
  };
  return (
    <li className='list'>
      <p>{list}</p>
      <i className='fa-solid fa-trash' onClick={removeItem}></i>
    </li>
  );
}
