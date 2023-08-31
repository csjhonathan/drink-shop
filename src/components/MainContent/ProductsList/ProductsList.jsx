import Product from './Product.jsx';
import { ProductsListContainer } from './styles.js';
import products from '../../../constants/products.js';

export default function ProductsList(){
	return (
		<ProductsListContainer>
			{products.map(({image, title ,description}, index) => (
				<Product
					key={index}
					image={image}
					description={description}
					title={title}/>
			))}
		</ProductsListContainer>
	);
}
