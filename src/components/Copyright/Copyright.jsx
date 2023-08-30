import ConectaLogo from '../Presentation/Header/ConectaLogo.jsx';
import { Copy, ProjectedBy, StyledCopyright } from './styles.js';

export default function Copyright(){
	return (
		<StyledCopyright>
			<Copy>Todos os direitos reservados © 2020 Conecta</Copy>
			<ProjectedBy>Projetado por <ConectaLogo/></ProjectedBy>
		</StyledCopyright>
	);
}
