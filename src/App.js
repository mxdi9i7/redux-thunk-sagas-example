import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';
import UsersList from './components/UsersList';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<TodoList />
				<UsersList />
			</header>
		</div>
	);
}

export default App;
