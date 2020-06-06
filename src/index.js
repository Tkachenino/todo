import React from 'react';
import ReactDom from 'react-dom';

import './components/index/index.css';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';

const App = () => {
  const todoData = [
    { label : 'Drink Coffee', important: true, id: 1 },
    { label : 'Drink tea', important: false, id: 2 },
    { label : 'Drink water', important: true, id: 3 },

  ]
  
  return (
    <div className="todo-app">
      <AppHeader />
      <SearchPanel />
      <TodoList todos={todoData}/>
    </div>
  );
};

ReactDom.render(<App />, document.querySelector(`#root`));