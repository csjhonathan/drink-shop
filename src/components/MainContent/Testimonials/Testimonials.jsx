import { BtnCarouselList, ChangeTestimonialBtn, InviteContainer, LeftSideContainer,RightSideContainer, TestimonialsContainer, TestimonialAuthor, TestimonialText, TestimonialsCarousel } from './styles.js';
import simleyWoman from '../../../assets/mulher-sorrindo-drink.png';
import barman from '../../../assets/barman-servindo-drink.png';
import testimonials from '../../../constants/testimonials.js';
import { useEffect, useState } from 'react';
import useInterval from 'use-interval';

export default function Testimonials(){
	const [testimonial, setTestimonial] = useState(testimonials[0]);
	const [fadeInEffect, setFadeInEffect] = useState(false);

	useEffect(() => {
		setFadeInEffect(true);
		const timeout = setTimeout(() => {
			setFadeInEffect(false);
		}, 1000);
		return () => clearTimeout(timeout);
	}, [testimonial]);

	useInterval(()=>{
		setTestimonial(
			testimonial.id === testimonials.length ?
				testimonials[0]
				:
				testimonials[testimonial.id]
		);
	},5000);

	return (
		<TestimonialsContainer>
			<LeftSideContainer>
				<img src={simleyWoman} alt="mulher sorrindo com drink na mão" loading='lazy'/>
			</LeftSideContainer>
			<RightSideContainer>
				<TestimonialsCarousel>
					<TestimonialText fadeInEffect={fadeInEffect}>{`"${testimonial?.text}"`}</TestimonialText>
					<TestimonialAuthor fadeInEffect={fadeInEffect}>{testimonial?.author}</TestimonialAuthor>
					<BtnCarouselList>
						{
							testimonials.map(test => <ChangeTestimonialBtn key={test.id} onClick={()=>setTestimonial(test)} selected = {test.id === testimonial.id}></ChangeTestimonialBtn>)
						}
					</BtnCarouselList>

				</TestimonialsCarousel>
				<InviteContainer>
					<img src={barman} alt="barman servindo um drink" loading='lazy'/>
					<p>Peça para seu bar</p>
				</InviteContainer>
			</RightSideContainer>
		</TestimonialsContainer>
	);
}
