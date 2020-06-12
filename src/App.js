import React from 'react';
import ElectionsStore from './components/elections/Elections-Store';
import VotersStore from './components/voters/Voters-Store'
import './App.css';
import Election from './components/elections/Elections';
import Voters from './components/voters/Voters';


function App() {
	
	return (
		<ElectionsStore.Provider>
			<VotersStore.Provider>
			<div className="App">
				<Election />
				<Voters/>
			</div>
			</VotersStore.Provider>
		</ElectionsStore.Provider>
			
	
		
	);
}

export default App;
