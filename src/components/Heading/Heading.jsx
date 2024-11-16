import './Heading.css';

export default function Heading(props) {
	return (
		<div className='heading'>
			<h1 className='heading__title'>{props.title}</h1>
			<p className='heading__text'>{props.text}</p>
		</div>
	);
}
