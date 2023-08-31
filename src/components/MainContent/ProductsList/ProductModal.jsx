import Modal from 'react-modal';
import { CloseModalButton, ModalContent, ModalProductImg, ModalProductTitle } from './styles.js';

export default function ProductModal({title,image, description, closeModal, modalIsOpen}){
	return (
		<Modal
			isOpen={modalIsOpen}
			onRequestClose={closeModal}
			contentLabel="Detalhes do Produto"
			style={{
				overlay: {
					zIndex: 1000,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					backdropFilter: 'blur(10px)',
					backgroundColor: 'rgba(0, 0, 0, 0.6)',
				},
				content: {
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					zIndex: 1000,
					backgroundColor: 'transparent',
					width: '60vw',
					left: '50%',
					transform: 'translateX(-50%)',
					border:'none'
				},
			}}
		>
			<ModalContent>
				<ModalProductTitle>{title}</ModalProductTitle>
				<ModalProductImg src={image} alt={description} />
				<CloseModalButton onClick={closeModal}>Fechar</CloseModalButton>
			</ModalContent>
		</Modal>
	);
}
