import MainContent from '../../components/MainContent/MainContent.jsx';
import Presentation from '../../components/Presentation/Presentation.jsx';
import { StyledLanding } from './styles.js';

export default function LandingPage(){
	return (
		<StyledLanding>
			<Presentation />
			<MainContent/>
		</StyledLanding>
	);
}
