import React from 'react';
import ReactDOM from 'react-dom';

import GlobalStyles from './trevormicek.github.io/Styles/Global';

import Theme from './trevormicek.github.io/Theme';
import NavBar from './trevormicek.github.io/Styles/NavBar/NavBar';





//Main App 
const Site = () => (
	<Theme>
		<GlobalStyles />
		<NavBar />
	</Theme>	
	
)
ReactDOM.render(
	<Site />, 
	document.getElementById('root')
);

//Start Date: 2/16/2020
//End Date: 4/?/2020
//7 weeks from start to finish(sick for 1 week)
