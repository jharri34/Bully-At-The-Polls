import React from 'react';
import './App.css';
import Routes from './components/shared/routes'
import Header from  './components/shared/header'
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/shared/footer';
import BullyStore from './components/shared/bullystore'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
	
			<BullyStore.Provider>
				<React.Fragment>
					<BrowserRouter>
						<div className="App">
							<Header/>
							<Routes />
							<Footer/>
						</div>
					</BrowserRouter>
				</React.Fragment>
			</BullyStore.Provider>
	);
}

export default App;
