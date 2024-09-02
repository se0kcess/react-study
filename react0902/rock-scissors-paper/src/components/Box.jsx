import scissors from '../assets/img/scissors.png';
import rock from '../assets/img/rock.png';
import paper from '../assets/img/paper.png';
import questionmark from '../assets/img/questionmark.png';

export default function Box({ user, item, result }) {
  console.log(item?.name);
  const imgMap = {
    scissors: scissors,
    rock: rock,
    paper: paper,
    questionmark: questionmark,
  };

  const displayResult = user === '상대' ? (result === '승리' ? '패배' : result === '패배' ? 승리 : result) : result;

  const getClass = () => {
    if (displayResult === '승리') return 'win';
    if (displayResult === '패배') return 'lose';
    if (displayResult === '무승부') return 'draw';

    return (
      <div className={`box ${getClass()}`}>
        <h2>{user}</h2>
        <p>{item?.name}</p>
        <img className='item-img' src={imgMap[item?.img] || questionmark} alt='rock' />
        <p>{displayResult}</p>
      </div>
    );
  };
}
