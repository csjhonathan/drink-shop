import Header from './Header/Header.jsx';
import headerBg from '../../assets/header-bg.png';
import guarana from '../../assets/lata-guarana.png';
import { CTAArea, CTAButton, GuaranaTin, PresentationBackground, PresentationContent, PresentationMessage, StyledPresentation } from './styles.js';

export default function Presentation(){

	return(
		<StyledPresentation>
			<PresentationBackground src={headerBg} alt="fundo da apresentação"/>
			<Header/>
			<PresentationContent>
				<CTAArea>
					<PresentationMessage>Aqui um título de duas linhas</PresentationMessage>
					<CTAButton>Aqui um CTA</CTAButton>
				</CTAArea>
				<GuaranaTin src={guarana} alt ="latinha de guaraná"/>
			</PresentationContent>
		</StyledPresentation>
	);
}
