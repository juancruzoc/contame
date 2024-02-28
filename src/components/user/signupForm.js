import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const SignUpForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      // Realiza la solicitud POST a la API
      await axios.post('http://localhost:8080/signup', data);
      console.log('Registro exitoso');
    } catch (error) {
      console.error('Error al registrar:', error);
    }
  };

  return (
    <div class="flex flex-col items-center justify-center">
        <form onSubmit={handleSubmit(onSubmit)} class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                    Email:
                </label>
                <input
                    type="email"
                    placeholder="example@domain.com"
                    {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors.email && <p>Enter a valid email</p>}
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                    Username:
                </label>
                <input
                    type="text"
                    placeholder="Username"
                    {...register('username', { required: true })}
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors.username && <p>The username is a mandatory field</p>}
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                    Password:
                </label>
                <input
                    type="password"
                    placeholder="Password"
                    {...register('password', { required: true, minLength: 6 })}
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors.password && <p>The password must have at least 6 characters</p>}
            </div>


            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="password_validation">
                    Password validation:
                </label>
                <input
                    type="password"
                    placeholder="Confirmar contraseña"
                    {...register('passwordConfirmation', {
                    required: true,
                    })}
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors.passwordConfirmation && <p>{errors.passwordConfirmation.message}</p>}
            </div>

            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Sign Up</button>
        </form>
    </div>
  );
};

export default SignUpForm;