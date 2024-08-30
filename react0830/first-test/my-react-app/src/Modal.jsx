export default function Modal({ list, number, setModal }) {
  return (
    <div className='modal'>
      <div className='_inner'>
        <button onClick={() => setModal(false)}>닫기</button>
        <h2>Modal</h2>
        <p>{list[number]}</p>
      </div>
    </div>
  );
}
