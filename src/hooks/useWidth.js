import { useEffect, useState } from 'react';

export const useWidth = () =>{
	const [viewWindow, setViewWindow] = useState(window.innerWidth);
	function handleResize() {
		setViewWindow(window.innerWidth);
	}

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return {viewWindow};
};
