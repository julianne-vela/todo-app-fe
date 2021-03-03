import React from 'react';
import { signUpUser } from '../../../Components/Utils/api-utils';

async function HandleSubmit() {
	const user = await signUpUser(formik.values.email, formik.values.password);

	return <div></div>;
}

export default HandleSubmit;
