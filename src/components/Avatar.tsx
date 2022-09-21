import styles from './Avatar.module.css';

interface AvatarProps {
	hasBorder?: boolean;
	src: string;
	alt?: string;
	title?:string; 
}

export function Avatar({ hasBorder, src, alt, title }: AvatarProps) {
	return (
		<img
			className={hasBorder ? styles.avatarWithBorder : styles.avatar}
			src={src}
			alt={alt}
			title={title}
		/>
	)
}