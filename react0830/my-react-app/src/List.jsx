export default function List({ i, a, setModal, setNumber }) {
  return (
    <div>
      <li
        key={i}
        onClick={() => {
          setModal(true);
          setNumber(i);
        }}
      >
        {a}- {i}
      </li>
    </div>
  );
}
