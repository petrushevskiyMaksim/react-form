export default function Input({
	autocoplete,
	onBlur,
	onChange,
	isChecked,
	type,
	value,
	name,
	style,
	placeholder,
}) {
	if (type === 'checkbox') {
		return (
			<li className='form__item'>
				<label>
					<input
						className='form__input-checkbox'
						checked={isChecked}
						onChange={onChange}
						// value={value}
						type={type}
					/>
					<span className='form__input-custom'></span>
					Подтверждаю пароль
				</label>
			</li>
		);
	}

	return (
		<li className='form__item'>
			<input
				className='form__input'
				onBlur={onBlur}
				onChange={onChange}
				style={style}
				value={value}
				name={name}
				type={type}
				autoComplete={autocoplete}
				placeholder={placeholder}
			/>
		</li>
	);
}
