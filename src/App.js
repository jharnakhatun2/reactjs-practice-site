import logo from './logo.svg';
import './App.css';
import Blog from './components/blogs/Blog';
import Mobile from './components/Mobile/Mobile';
import TodoList from './components/todoList/TodoList';

function App() {
  return (
    <div className="App">
    <Mobile></Mobile>
      <Blog heading={'TOP RATED SALAD RECIPES'} author={'Food Specialist - Mr.Demo1'}></Blog>
      <Blog heading={'BEST REVIEWED SALAD DISH'} author={'Head Chef - Mrs.Demo2'}></Blog>
      <Blog heading={'IMPORTANT CARING SALAD ITEMS'} author={'Cock Specialist - Mr.Demo3'}></Blog>
      <TodoList></TodoList>
    </div>
  );
}

export default App;
