import Header from './components/Header/Header';
import Input from './components/Input/Input';
import NoList from './components/NoList/NoList';
import TotalCount from './components/TotalCount/TotalCount';
import PostList from './components/PostList/PostList';
import './app.css';

function App() {
  return (
    <>
      <Header />
      <Input />
      <TotalCount />
      <NoList />
      <PostList />
    </>
  );
}

export default App;
