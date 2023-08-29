import LandingPage from './pages/LandingPage/LandingPage.jsx';
import GlobalStyles from './styles/globalStyles.js';
import ResetStyle from './styles/reset.js';

function App() {
	return (
		<>
			<ResetStyle />
			<GlobalStyles />
			<LandingPage/>
		</>
	);
}

export default App;
