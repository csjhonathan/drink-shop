import FacebookIcon from '../Presentation/Header/FacebookIcon.jsx';
import InstagramIcon from '../Presentation/Header/InstagramIcon.jsx';
import Form from './Form/Form.jsx';
import { ContactContainer, ContactUs, MediaArea, MediaTitle, SocialArea } from './styles.js';

export default function Contact(){
	return (
		<ContactContainer>
			<SocialArea>
				<ContactUs>Fale Conosco.</ContactUs>
				<MediaArea>
					<FacebookIcon/>
					<InstagramIcon/>
					<MediaTitle>REDES SOCIAIS</MediaTitle>
				</MediaArea>
			</SocialArea>
			<Form/>
		</ContactContainer>
	);
}
