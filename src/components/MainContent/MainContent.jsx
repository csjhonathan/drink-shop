import ProductsList from './ProductsList/ProductsList.jsx';
import Testimonials from './Testimonials/Testimonials.jsx';
import { ProductsDescription, ProductsTitle, ProductsTitleAndDescription, StyledMainContent } from './styles.js';

export default function MainContent(){
	return (
		<StyledMainContent>
			<ProductsTitleAndDescription>
				<ProductsTitle>Produtos</ProductsTitle>
				<ProductsDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris semper, tortor sed vehicula.
				</ProductsDescription>
			</ProductsTitleAndDescription>
			<ProductsList/>
			<Testimonials/>
		</StyledMainContent>
	);
}
