import React from 'react';
import ElectionsStore from './components/elections/Elections-Store';
import './App.css';
import Election from './components/elections/Elections';

function App() {
	
	return (
		<ElectionsStore.Provider>
			<div className="App">
				<Election />
			</div>
		</ElectionsStore.Provider>
	);
}

export default App;
