import { useState } from 'react';
import { CloseModalButton, ModalContent, ModalProductImg, ModalProductTitle, ProductButton, ProductImg, ProductItem, ProductTextDescription, ProductTitle } from './styles.js';
import Modal from 'react-modal';


Modal.setAppElement('#root');
export default function Product({image, title,description}){
	const [modalIsOpen, setModalIsOpen] = useState(false);

	const openModal = () => {
		setModalIsOpen(true);
	};

	const closeModal = () => {
		setModalIsOpen(false);
	};
	return (
		<ProductItem>
			<ProductImg src={image} alt={description} />
			<ProductTitle>{title}</ProductTitle>
			<ProductTextDescription>{description}</ProductTextDescription>
			<ProductButton onClick={openModal}>Ver Produto</ProductButton>

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
		</ProductItem>
	);
}
