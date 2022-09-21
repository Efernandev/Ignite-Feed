import { useState } from 'react';
import { Trash, ThumbsUp } from 'phosphor-react'
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

interface CommentProps {
	content:string; 
	onDeleteComment:(comment:string) => void; 
}

export function Comment({ content, onDeleteComment }: CommentProps) {
	const [likeCount, setLikeCount] = useState(0);

	function handleDeleteComment() {
		onDeleteComment(content)
	}

	function handleLikeComment() {
		setLikeCount((state) => {
			return state + 1; 
		})
	}

	return (
		<div className={styles.comment}>
			<Avatar src="https://github.com/efernandev.png" hasBorder={false} alt="" />

			<div className={styles.commentBox}>
				<div className={styles.commentContent}>
					<header>
						<div className={styles.authorAndTime}>
							<strong>Eduardo Fernando</strong>
							<time title="5 de setembro às 20:15" dateTime='2022-09-05 20:15:21'>Cerca de 1h atrás</time>
						</div>
						<button onClick={handleDeleteComment} title='Deletar comentário'>
							<Trash size={24} />

						</button>
					</header>

					<p>{content}</p>
				</div>
				<footer>
					<button onClick={handleLikeComment}>
						<ThumbsUp />
						Aplaudir <span>{likeCount}</span>
					</button>
				</footer>
			</div>

		</div>
	)
}