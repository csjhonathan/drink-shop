import { useForm } from 'react-hook-form';
import { ContactForm, ContactInfo, FormContainer, FormCell, InputCellphone, InputEmail, InputLabel, InputMessage, InputName, InputSubject, SubmitButton, SubjectOption } from './styles.js';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../../Loader/Loader.jsx';
import { faker } from '@faker-js/faker';

export default function Form(){
	const { register, handleSubmit } = useForm();
	const [focused, setFocused] = useState(null);
	const [disabled, setDisabled] = useState(false);
	function submitForm(form){
		setDisabled(true);
		console.log(form);
		for(const prop in form){
			if(!form[prop]) {
				setTimeout(()=>{
					setDisabled(false);
					toast.error('Preencha todos os campos!');
				},1000);
				return;
			}
		}

		setTimeout(()=>{
			toast.success('Seu formulário foi enviado. Entraremos em contato em breve.');
			setDisabled(false);
		}, faker.number.int({min:1000, max:4000}));
	}

	return (
		<FormContainer>
			<ContactForm onSubmit={handleSubmit(submitForm)}>
				<FormCell>
					<InputLabel htmlFor="username" focused={focused === 'username'}>NOME</InputLabel>
					<InputName
						type="text"
						name='username'
						id='username'
						placeholder="Nome"
						{...register('username')}
						onFocus={()=> setFocused('username')}
						onBlur={()=>setFocused(null)}
						disabled={disabled}
					/>
				</FormCell>
				<ContactInfo>
					<FormCell>
						<InputLabel htmlFor="cell" focused={focused === 'cell'}>TELEFONE</InputLabel>
						<InputCellphone
							type='text'
							name='cell'
							id='cell'
							placeholder='(DDD) 12345-6789'
							mask={'(99) 99999-9999'}
							{...register('cell')}
							onFocus={()=> setFocused('cell')}
							onBlur={()=>setFocused(null)}
							disabled={disabled}

						/>
					</FormCell>
					<FormCell>
						<InputLabel htmlFor="email" focused={focused === 'email'}>E-MAIL</InputLabel>
						<InputEmail
							type='email'
							name='email'
							id='email'
							placeholder='email@email.com.br'
							{...register('email')}
							onFocus={()=> setFocused('email')}
							onBlur={()=>setFocused(null)}
							disabled={disabled}

						/>
					</FormCell>
				</ContactInfo>
				<FormCell>
					<InputLabel htmlFor="subject" focused={focused === 'subject'}>ASSUNTO</InputLabel>
					<InputSubject
						{...register('subject')}
						name='subject'
						id='subject'
						onFocus={()=> setFocused('subject')}
						onBlur={()=>setFocused(null)}
						disabled={disabled}
					>
						<SubjectOption value={''}>Selecione um Assunto</SubjectOption>
						<SubjectOption value={'bottle'}>Garrafa 350ml</SubjectOption>
						<SubjectOption value={'tin'}>Lata 350ml</SubjectOption>
					</InputSubject>
				</FormCell>
				<FormCell>
					<InputLabel htmlFor="message" focused={focused === 'message'}>MENSAGEM</InputLabel>
					<InputMessage
						name='message'
						id='message'
						placeholder='Escreva aqui sua mensagem'
						{...register('message')}
						onFocus={()=> setFocused('message')}
						onBlur={()=>setFocused(null)}
						disabled={disabled}

					/>
				</FormCell>
				<SubmitButton disabled={disabled}>{disabled ? <Loader/> : 'Enviar formulário'}</SubmitButton>
			</ContactForm>
			<ToastContainer/>
		</FormContainer>
	);
}
