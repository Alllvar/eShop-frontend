import * as React from 'react';
import { useForm } from 'react-hook-form';

type LoginForm = {
  email: string;
  password: string;
};

export default function Login() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: LoginForm) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="email" ref={register} placeholder="Email" />
      <input name="password" type="password" ref={register} placeholder="Password" />
      <input type="submit" />
    </form>
  );
}
