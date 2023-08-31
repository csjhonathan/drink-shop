import { CTAArea, InviteButton, InviteText, InviteContainer, StyledTin } from './styles.js';
import tin from '../../assets/lata-guaraná-produto.png';
import { useWidth } from '../../hooks/useWidth.js';

export default function Invite(){
	const {viewWindow} = useWidth();

	return (
		<InviteContainer>
			<CTAArea>
				<InviteText>Quer experimentar?</InviteText>
				<a href="https://www.conectaai.com/" target="_blank" rel="noreferrer"><InviteButton>Veja mais</InviteButton></a>
			</CTAArea>
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
				right={viewWindow < 1440 ?'1%':'20%'}
				top={'-70px'}
				viewWindow={viewWindow}
			/>
		</InviteContainer>
	);
}
