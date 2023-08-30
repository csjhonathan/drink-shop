import ConectaLogo from './ConectaLogo.jsx';
import FacebookIcon from './FacebookIcon.jsx';
import InstagramIcon from './InstagramIcon.jsx';
import { SocialArea, StyledHeader } from './styles.js';

export default function Header(){
	return (
		<StyledHeader>
			<ConectaLogo/>
			<SocialArea>
				<FacebookIcon/>
				<InstagramIcon/>
			</SocialArea>

		</StyledHeader>
	);
}
