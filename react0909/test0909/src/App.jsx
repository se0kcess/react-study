import { useCallback, useState } from 'react';
import './App.css';
import ShowSum from './components/ShowSum';
import Box from './components/Box';
import Checkbox from './components/Checkbox';

// useMemo
// 1. 함수 컴포넌트는 자신의 상태가 변경될 때 리렌더링
// 2. 부모 컴포넌트로 부터 받는 prop이 변경될 때 리렌더링
// 3. 부모 컴포넌트의 상태가 변경되면 리렌더링
// React.memo

function App() {
  const [count, setCount] = useState(0);
  const [label, setLabel] = useState('Result');
  const [foodOn, setFoodOn] = useState(false);
  const [clothesOn, setClothesOn] = useState(false);
  const [shelterOn, setShelterOn] = useState(false);

  const foodChange = useCallback((e) => setFoodOn(e.target.checked), []);
  const clothesChange = useCallback((e) => setClothesOn(e.target.checked), []);
  const shelterChange = useCallback((e) => setShelterOn(e.target.checked), []);

  return (
    <>
      <button onClick={() => setLabel(label + ':')}>Change label</button>
      <ShowSum label={label} n={1000000} />
      {count}
      <button onClick={() => setCount(count + 1)}>count</button>
      <Checkbox label='Food' on={foodOn} onChange={foodChange} />
      <Checkbox label='Clothes' on={clothesOn} onChange={clothesChange} />
      <Checkbox label='Shelter' on={shelterOn} onChange={shelterChange} />
      <Box />
    </>
  );
}

export default App;
