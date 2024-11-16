import React from 'react';
import { Transition } from 'react-transition-group';
import { useState, useRef } from 'react';
import Input from '../InputForm/Input';
import Button from '../Button/Button';
import Singup from '../Singup/Singup';
import SimpleModal from '../SimpleModal/SimpleModal';
import './Form.css';

export default function Form() {
	const refModal = useRef(null);

	const [form, setForm] = useState({
		name: '',
		surname: '',
		phone: '',
		email: '',
		pass: '',
		passRepeat: '',
	});

	const [isDirty, setIsDirty] = useState({
		name: false,
		surname: false,
		phone: false,
		email: false,
		pass: false,
		passRepeat: false,
	});

	const [isError, setIsError] = useState({
		name: false,
		surname: false,
		phone: false,
		email: false,
		pass: false,
		passRepeat: false,
	});

	const [errorMessage, setErrorMessage] = useState({
		name: 'Поле не может быть пустым',
		surname: 'Поле не может быть пустым',
		phone: 'Поле не может быть пустым',
		email: 'Поле не может быть пустым',
		pass: 'Поле не может быть пустым',
		passRepeat: 'Поле не может быть пустым',
	});

	const [isChecked, setIsChecked] = useState(false);

	const [modalFormIsOpen, setModalFormIsOpen] = useState(false);

	const handleBlur = e => {
		const name = e.target.name;
		switch (name) {
			case 'name':
				setIsDirty({
					...isDirty,
					name: true,
				});
				break;
			case 'surname':
				setIsDirty({
					...isDirty,
					surname: true,
				});
				break;
			case 'phone':
				setIsDirty({
					...isDirty,
					phone: true,
				});
				break;
			case 'email':
				setIsDirty({
					...isDirty,
					email: true,
				});
				break;
			case 'pass':
				setIsDirty({
					...isDirty,
					pass: true,
				});
				break;
			case 'passRepeat':
				setIsDirty({
					...isDirty,
					passRepeat: true,
				});
				break;
		}
	};

	function handleInputChange(e) {
		const { name, value } = e.target;

		setForm({
			...form,
			[name]: value,
		});

		if (value.length < 3 || value.length > 15) {
			setIsError({
				...isError,
				[name]: true,
			});
			setErrorMessage({
				...errorMessage,
				[name]: 'Длина не может быть меньше 3  и больше 8',
			});
			if (!value) {
				setIsError({
					...isError,
					[name]: true,
				});
				setErrorMessage({
					...errorMessage,
					[name]: 'Поле не может быть пустым',
				});
			}
		} else {
			setIsError({
				...isError,
				[name]: false,
			});
			setErrorMessage({
				...errorMessage,
				[name]: '',
			});
		}
	}

	function handleInputPhoneChange(e) {
		const regexp =
			/^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
		const { name, value } = e.target;

		setForm({
			...form,
			[name]: value,
		});

		if (!regexp.test(value)) {
			setIsError({
				...isError,
				[name]: true,
			});
			setErrorMessage({
				...errorMessage,
				[name]: 'Не верный формат поля телефон',
			});
			if (!value) {
				setIsError({
					...isError,
					[name]: true,
				});
				setErrorMessage({
					...errorMessage,
					[name]: 'Поле не может быть пустым',
				});
			}
		} else {
			setIsError({
				...isError,
				[name]: false,
			});
			setErrorMessage({
				...errorMessage,
				[name]: '',
			});
		}
	}

	function handleInputEmailChange(e) {
		const regexp =
			/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
		const { name, value } = e.target;

		setForm({
			...form,
			[name]: value,
		});

		if (!regexp.test(value)) {
			setIsError({
				...isError,
				[name]: true,
			});
			setErrorMessage({
				...errorMessage,
				[name]: 'Не верный формат поля email',
			});
			if (!value) {
				setIsError({
					...isError,
					[name]: true,
				});
				setErrorMessage({
					...errorMessage,
					[name]: 'Поле не может быть пустым',
				});
			}
		} else {
			setIsError({
				...isError,
				[name]: false,
			});
			setErrorMessage({
				...errorMessage,
				[name]: '',
			});
		}
	}

	function handleInputPasswordChange(e) {
		const regexp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;
		const { name, value } = e.target;

		setForm({
			...form,
			[name]: value,
		});

		if (!regexp.test(value)) {
			setIsError({
				...isError,
				[name]: true,
			});
			setErrorMessage({
				...errorMessage,
				[name]: 'Не коректный пароль или длина меньше 8 символов',
			});

			if (!value) {
				setIsError({
					...isError,
					[name]: true,
				});
				setErrorMessage({
					...errorMessage,
					[name]: 'Поле не может быть пустым',
				});
			}
		} else {
			setIsError({
				...isError,
				[name]: false,
			});
			setErrorMessage({
				...errorMessage,
				[name]: '',
			});
		}
	}

	function handleBtnClick(event) {
		event.preventDefault();
		if (
			!form.name ||
			!form.surname ||
			!form.email ||
			!form.phone ||
			form.pass !== form.passRepeat ||
			!isChecked
		) {
			setModalFormIsOpen(false);
			console.log('Не Форм ');
		} else {
			setModalFormIsOpen(true);
			console.log('Пароль совпадает, все поля заполнены и инпут отмечен !!! ');
		}
	}
	
	function checkIsError() {
		for (let item in isError) {
			if (isError[item] === true) {
				return true;
			} else {
				return false;
			}
		}
	}

	return (
		<div>
			<form className='form' action='submit'>
				<ul className='form__list'>
					{(isDirty.name && errorMessage.name) || isError.name ? (
						<p className='error-message'>{errorMessage.name}</p>
					) : (
						''
					)}
					<Input
						onBlur={handleBlur}
						onChange={handleInputChange}
						value={form.name}
						type='text'
						name='name'
						placeholder='Имя'
					/>
					{(isDirty.surname && errorMessage.surname) || isError.surname ? (
						<p className='error-message'>{errorMessage.surname}</p>
					) : (
						''
					)}
					<Input
						onBlur={handleBlur}
						onChange={handleInputChange}
						value={form.surname}
						type='text'
						name='surname'
						placeholder='Фамилия'
					/>
					{(isDirty.phone && errorMessage.phone) || isError.phone ? (
						<p className='error-message'>{errorMessage.phone}</p>
					) : (
						''
					)}
					<Input
						onBlur={e => handleBlur(e)}
						onChange={handleInputPhoneChange}
						value={form.phone}
						type='tel'
						name='phone'
						placeholder='Номер телефона'
					/>

					{(isDirty.email && errorMessage.email) || isError.email ? (
						<p className='error-message'>{errorMessage.email}</p>
					) : (
						''
					)}
					<Input
						onBlur={e => handleBlur(e)}
						onChange={handleInputEmailChange}
						value={form.email}
						type='email'
						autocoplete='email'
						name='email'
						placeholder='Email'
					/>
					{(isDirty.pass && errorMessage.pass) || isError.pass ? (
						<p className='error-message'>{errorMessage.pass}</p>
					) : (
						''
					)}
					<Input
						onBlur={e => handleBlur(e)}
						onChange={handleInputPasswordChange}
						value={form.pass}
						type='password'
						autocoplete='new-password'
						name='pass'
						placeholder='Пароль'
					/>

					{(isDirty.passRepeat && errorMessage.passRepeat) ||
					isError.passRepeat ? (
						<p className='error-message'>{errorMessage.passRepeat}</p>
					) : (
						''
					)}
					<Input
						onBlur={e => handleBlur(e)}
						onChange={handleInputPasswordChange}
						value={form.passRepeat}
						type='password'
						autocoplete='new-password'
						name='passRepeat'
						placeholder='Повторите пароль'
					/>

					<Input
						isChecked={isChecked}
						type='checkbox'
						onChange={() => setIsChecked(prev => !prev)}
					/>
				</ul>

				<Button
					disabled={checkIsError()}
					onClick={e => handleBtnClick(e)}
					type='button'
					text='Подтверждаю'
				/>
				<Transition in={modalFormIsOpen} timeout={500} unmountOnExit>
					{state => (
						<SimpleModal
							ref={refModal.current}
							onClose={() => setModalFormIsOpen(false)}
							state={state}
						>
							<h2>Регистрация прошла успешно</h2>
							<p className='data-text'>Ваши данные:</p>
							<p>Имя:{form.name}</p>
							<p>Фамилия:{form.surname}</p>
							<p>Телефон:{form.phone}</p>
							<p>Емеил:{form.email}</p>
							<p>Пароль:{form.pass}</p>
						</SimpleModal>
					)}
				</Transition>
			</form>

			<Singup />
		</div>
	);
}
