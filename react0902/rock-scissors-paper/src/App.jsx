import './css/App.css';
import Box from './components/Box';
import { useState } from 'react';
function App() {
  const choice = {
    rock: {
      name: '바위',
      img: 'rock',
    },
    scissors: {
      name: '가위',
      img: 'scissors',
    },
    paper: {
      name: '보',
      img: 'paper',
    },
  };
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState('시작');

  const randomSelect = () => {
    let itemArr = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * itemArr.length);
    let final = itemArr[randomItem];
    return choice[final];
  };

  const play = (item) => {
    console.log(item);
    let userChoice = choice[item];
    let computerChoice = randomSelect();
    setUserSelect(userChoice);
    setComputerSelect(computerChoice);
    setResult(judgement(userChoice, computerChoice));
  };

  const judgement = (user, computer) => {
    return user.name == '가위' && computer.name == '보'
      ? '패배'
      : user.name == '바위' && computer.name == '가위'
      ? '승리'
      : user.name == '보' && computer.name == '바위 '
      ? '승리'
      : user.name == computer.name
      ? '무승부'
      : '패배';
  };
  return (
    <>
      <main className='main'>
        <h1>가위바위보 게임</h1>
        <section>
          <Box user='나' item={userSelect} result={result} />
          <Box user='상대' item={computerSelect} result={result} />
        </section>
        <div className='btns'>
          <button
            onClick={() => {
              play('scissors');
            }}
          />
          가위
          <button
            onClick={() => {
              play('rock');
            }}
          />
          바위
          <button
            onClick={() => {
              play('paper');
            }}
          />
          보
        </div>
      </main>
    </>
  );
}

export default App;
