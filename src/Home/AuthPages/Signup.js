import React from 'react';
import { Formik, useField, Form } from 'formik';
import * as Yup from 'yup';
import { signUpUser } from '../../Components/Utils/api-utils.js';
import styles from './Signup.module.css';
import { setLocalStorage } from '../../Components/Utils/ls-utils.js';

const MyTextInput = ({ label, ...props }) => {
	const [field, meta] = useField(props);
	return (
		<>
			<label htmlFor={props.id || props.name}>{label}</label>
			<input className='textInput' {...field} {...props} />
			{meta.touched && meta.error ? (
				<div className='error'>{meta.error}</div>
			) : null}
		</>
	);
};

function SignupForm() {
	return (
		<>
			<Formik
				initialValues={{ name: '', email: '', password: '' }}
				validationSchema={Yup.object({
					name: Yup.string()
						.max(15, 'Must be 15 characters or less')
						.required('Required'),
					email: Yup.string()
						.email('Invalid email address')
						.required('Required'),
					password: Yup.string()
						.min(6, 'Must be more than 6 characters.')
						.required('Required'),
				})}
				onSubmit={async (values) => {
					const user = await signUpUser(
						values.email,
						values.password
					);
					const token = user.token;

					setLocalStorage(token);

					this.props.history.push('/todos');
				}}>
				<Form>
					<MyTextInput
						label='Name'
						name='name'
						type='text'
						placeholder='Jane'
					/>
					<MyTextInput
						label='Email'
						name='email'
						type='email'
						placeholder='jane@doe.com'
					/>
					<MyTextInput
						label='Create Password'
						name='password'
						type='password'
					/>

					<button type='submit' className={styles.label}>
						Submit
					</button>
				</Form>
			</Formik>
		</>
	);
}

export default SignupForm;
