import React from 'react';
import './App.css';
import ElectionsStore from './components/elections/Elections-Store';
import VotersStore from './components/voters/Voters-Store';
import Routes from './routes/routes'
// import Election from './components/elections/Elections';
// import Voters from './components/voters/Voters';

import { BrowserRouter } from 'react-router-dom';

function App() {
	return (
		<ElectionsStore.Provider>
			<VotersStore.Provider>
				<React.Fragment>
					<BrowserRouter>
						<div className="App">
							<Routes />
						</div>
					</BrowserRouter>
				</React.Fragment>
			</VotersStore.Provider>
		</ElectionsStore.Provider>
	);
}

export default App;
