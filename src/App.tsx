
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from './App.module.css';
import './global.css';
// Author: { avatar_url: "", name="", office="" }
// publishedAt: Date
// Content: string

const posts = [
	{
		id: 1,
		author: {
			avatarUrl: 'https://github.com/efernandev.png',
			name: "Eduardo Fernando",
			role: 'Web developer',
		},
		content: [
			{ type: 'paragraph', content: 'Fala galera!👋' },
			{ type: 'paragraph', content: 'Acabei de subir mais um projeto no meu github. É um projeto que fiz no Front end mentor, deem uma olhada lá🚀' },
			{ type: 'link', content: 'https://github.com/Efernandev/QR-Code-component' }
		],
		publishedAt: new Date('2022-09-07 19:50:00')
	},
	{
		id: 2,
		author: {
			avatarUrl: 'https://github.com/shymarrai.png',
			name: "Bruno Gomes",
			role: 'Front end developer',
		},
		content: [
			{ type: 'paragraph', content: 'Fala dev!' },
			{ type: 'paragraph', content: 'Acabei de começar um curso na Ignite sobre ReactJs atualizado... Prepara seu café e vamos codar!' },
			{ type: 'link', content: 'https://github.com/shymarrai' }
		],
		publishedAt: new Date('2022-09-018 14:30:00')
	},
	{
		id: 3,
		author: {
			avatarUrl: 'https://github.com/maykbrito.png',
			name: "Mayk Brito",
			role: 'CTO @ Rocketseat',
		},
		content: [
			{ type: 'paragraph', content: 'Fala dev! Como vocês estão?' },
			{ type: 'paragraph', content: 'Acabei de começar um curso na Ignite sobre ReactJs atualizado... Prepara seu café e vamos codar!' },
			{ type: 'link', content: 'https://github.com/maykbrito' }
		],
		publishedAt: new Date('2022-09-07 14:30:00')
	},
	{
		id: 4,
		author: {
			avatarUrl: 'https://github.com/diego3g.png',
			name: "Diego Fernandes",
			role: 'CTO @ Rocketseat',
		},
		content: [
			{ type: 'paragraph', content: 'Fala dev!' },
			{ type: 'paragraph', content: 'Acabei de começar um curso na Ignite sobre ReactJs atualizado... Prepara seu café e vamos codar!' },
			{ type: 'link', content: 'https://github.com/diego3g' }
		],
		publishedAt: new Date('2022-09-07 14:30:00')
	},
]

function App() {

	return (
		<div>
			<Header />
			<div className={styles.wrapper}>
				<Sidebar />
				<main>
					{posts.map(post => {
						return (
							<Post
								key={post.id}
								author={post.author}
								content={post.content}
								publishedAt={post.publishedAt}
							/>
						)
					})}
				</main>
			</div>
		</div>
	);
};

export default App;