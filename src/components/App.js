import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as firebase from 'firebase';

import { getState, getStore } from '../store';

import Navbar from './Navbar';
import Social from './Social';
import HomePage from './HomePage';
import Event from './Event';
import About from './About';

import '../sass/main.scss';

// Firebase
firebase.initializeApp({
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID
});

const store = getStore();

const App = () => (
	<Provider store={store}>
		<BrowserRouter>
			<div>
				<Navbar />
				<Social />
				<div className="main">
					<Switch>
						<Route exact path="/" component={HomePage} />
						<Route exact path="/about" component={About} />
						<Route exact path="/events/:id" component={Event} />
					</Switch>
				</div>
			</div>
		</BrowserRouter>
	</Provider>
);

export default App;
