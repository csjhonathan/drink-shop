import Header from './Header/Header.jsx';
import headerBg from '../../assets/header-bg.png';
import guarana from '../../assets/lata-guarana.png';
import { CTAArea, CTAButton, GuaranaTin, PresentationBackground, PresentationContent, PresentationMessage, PresentationContainer } from './styles.js';

export default function Presentation(){
	const handleCTAButtonClick = () => {
		window.scrollTo({
			top: document.body.scrollHeight,
			behavior: 'smooth',
		});
	};

	return(
		<PresentationContainer>
			<PresentationBackground src={headerBg} alt="fundo da apresentação"/>
			<Header/>
			<PresentationContent>
				<CTAArea>
					<PresentationMessage>Ofereça o melhor para os seus clientes!</PresentationMessage>
					<CTAButton onClick={handleCTAButtonClick}>Entre em contato</CTAButton>
				</CTAArea>
				<GuaranaTin src={guarana} alt ="latinha de guaraná"/>
			</PresentationContent>
		</PresentationContainer>
	);
}
