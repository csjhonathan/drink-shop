import { ThreeDots } from 'react-loader-spinner';

export default function Loader(){
	return(
		<ThreeDots
			height="50"
			width="80"
			radius="9"
			color="black"
			ariaLabel="three-dots-loading"
			wrapperStyle={{}}
			wrapperClassName=""
			visible={true}
		/>
	);
}
