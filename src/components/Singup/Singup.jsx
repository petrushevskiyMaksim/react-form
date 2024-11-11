import IconArrow from '../IconArrow/IconArrow';

export default function Singup() {
	return (
		<p className='form-signup'>
			Уже есть аккаунт ?{' '}
			<a
				className='form-link'
				target='_blank'
				href='https://t.me/PetrushevskiyMaxim'
			>
				Войти <IconArrow />
			</a>
		</p>
	);
}
