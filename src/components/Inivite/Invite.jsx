import { InviteButton, InviteText, StyledInvite, StyledTin } from './styles.js';
import tin from '../../assets/lata-guaraná-produto.png';
import { useEffect, useState } from 'react';

export default function Invite(){
	const [viewWindow, setViewWindow] = useState(window.innerWidth);
	function handleResize() {
		setViewWindow(window.innerWidth);
	}

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<StyledInvite>
			<InviteText>Quer experimentar?</InviteText>
			<InviteButton>Aqui um CTA</InviteButton>
			<StyledTin
				src={tin}
				alt="latinha de guaraná"
				width={'92.217px'}
				height={'161.971px'}
				transform={'rotate(15deg)'}
				left={viewWindow < 1440 ?'5%':'20%'}
				top={'-60px'}
				viewWindow={+Infinity}
			/>
			<StyledTin
				src={tin}
				alt="latinha de guaraná"
				width={'195.407px'}
				height={'343.215px'}
				transform={'rotate(-15deg)'}
				left={viewWindow < 1440 ?'10%':'25%'}
				top={'30px'}
				viewWindow={viewWindow}

			/>
			<StyledTin
				src={tin}
				alt="latinha de guaraná"
				width={'286.53px'}
				height={'503.264px'}
				transform={'rotate(15deg)'}
				right={viewWindow < 1440 ?'5%':'20%'}
				top={'-70px'}
				viewWindow={viewWindow}
			/>
		</StyledInvite>
	);
}
