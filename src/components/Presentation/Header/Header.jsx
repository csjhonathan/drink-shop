import {SocialArea, StyledHeader } from '../styles.js';
import ConectaLogo from './ConectaLogo.jsx';
import FacebookIcon from './FacebookIcon.jsx';
import InstagramIcon from './InstagramIcon.jsx';

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
