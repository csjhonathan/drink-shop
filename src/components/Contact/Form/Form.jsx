import { useForm } from 'react-hook-form';
import { ContactForm, ContactInfo, FormArea, FormCell, InputCellphone, InputEmail, InputLabel, InputMessage, InputName, InputSubject, SubmitButton } from './styles.js';
import { useState } from 'react';

export default function Form(){
	const { register, handleSubmit } = useForm();
	const [focused, setFocused] = useState(null);

	function submitForm(form){
		console.log(form);
	}

	return (
		<FormArea>
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

					/>
				</FormCell>
				<ContactInfo>
					<FormCell>
						<InputLabel htmlFor="cell" focused={focused === 'cell'}>TELEFONE</InputLabel>
						<InputCellphone
							type='text'
							name='cell'
							id='cell'
							placeholder='(21) 00000-0000'
							{...register('cell')}
							onFocus={()=> setFocused('cell')}
							onBlur={()=>setFocused(null)}
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
					>
						<option value={''}>Selecione um Assunto</option>
						<option value={'bottle'}>Garrafa 350ml</option>
						<option value={'tin'}>Lata 350ml</option>
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
					/>
				</FormCell>
				<SubmitButton>AQUI UM CTA</SubmitButton>
			</ContactForm>
		</FormArea>
	);
}
