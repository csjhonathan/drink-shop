import { faker } from '@faker-js/faker';

const testimonials = [];

(()=>{
	for(let i = 0; i < faker.number.int({min:4,max:10}); i++){
		testimonials.push({
			id:i+1,
			author: `@${faker.person.firstName()}`,
			text: faker.lorem.sentence()
		});
	}
})();

export default testimonials;
