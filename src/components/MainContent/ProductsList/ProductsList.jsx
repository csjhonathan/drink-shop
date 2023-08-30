import Product from './Product.jsx';
import { StyledProductsList } from './styles.js';
import products from '../../../constants/products.js';

export default function ProductsList(){
	return (
		<StyledProductsList>
			{products.map(({image, title ,description}, index) => (
				<Product
					key={index}
					image={image}
					description={description}
					title={title}/>
			))}
		</StyledProductsList>
	);
}
