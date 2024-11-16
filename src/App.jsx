import Heading from './components/Heading/Heading';
import Form from './components/Form/Form';
import './App.css';

export default function App() {
	return (
		<div className='app'>
			
			<Heading
				title='Создание аккаунта'
				text='Введите свои данные, чтобы создать аккаунт в сервисе'
			/>
			<Form />
		</div>
	);
}
