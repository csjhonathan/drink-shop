import ConectaLogo from '../Presentation/Header/ConectaLogo.jsx';
import { Copy, ProjectedBy, CopyrightContainer } from './styles.js';

export default function Copyright(){
	return (
		<CopyrightContainer>
			<Copy>Todos os direitos reservados © 2020 Conecta</Copy>
			<ProjectedBy>Projetado por <ConectaLogo/></ProjectedBy>
		</CopyrightContainer>
	);
}
