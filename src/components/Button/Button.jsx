import './Button.css';

export default function Button(props) {
	return (
		<button
			disabled={props.disabled}
			className='form__btn'
			onClick={props.onClick}
			type={props.type}
		>
			{props.text}
		</button>
	);
}
