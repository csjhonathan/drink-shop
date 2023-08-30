import { ProductButton, ProductImg, ProductItem, ProductTextDescription, ProductTitle } from './styles.js';

export default function Product({image, title,description}){
	return (
		<ProductItem>
			<ProductImg src={image} alt={description} />
			<ProductTitle>{title}</ProductTitle>
			<ProductTextDescription>{description}</ProductTextDescription>
			<ProductButton>Aqui um CTA</ProductButton>
		</ProductItem>
	);
}
