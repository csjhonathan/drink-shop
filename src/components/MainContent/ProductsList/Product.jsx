import { useState } from 'react';
import { ProductButton, ProductImg, ProductItem, ProductTextDescription, ProductTitle } from './styles.js';
import Modal from 'react-modal';
import ProductModal from './ProductModal.jsx';


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
			<ProductModal
				closeModal={closeModal}
				modalIsOpen={modalIsOpen}
				title={title}
				image={image}
				description={description}
			/>

		</ProductItem>
	);
}
