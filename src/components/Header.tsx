import { useEffect } from 'react';
import styles from './Header.module.css';
import igniteLogo from '../assets/ignite-logo.svg';

import Aos from 'aos';
import 'aos/dist/aos.css';



export function Header() {
	useEffect(() => {
		Aos.init({duration:800});
	}, [])

	return (
		<header className={styles.header}>
			<img src={igniteLogo} alt="Logotipo do ignite" />
			{/* <strong>Ignite Feed</strong> */}
		</header>
	);
}