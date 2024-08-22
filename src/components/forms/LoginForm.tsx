import { Link } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z, ZodType } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  Button,
  InputContainer,
  InputField,
  InputLabel,
} from '../../utils/styles';

import styles from './index.module.scss';

export interface LoginFormData {
  email: string;
  password: string;
}

export const LoginFormSchema: ZodType<LoginFormData> = z.object({
  email: z
    .string({ message: 'Email is required' })
    .email({ message: 'Invalid email address' }),
  password: z.string({ message: 'Password is required' }),
});

export const LoginForm: React.FC = () => {
  const { register, handleSubmit, formState } = useForm<LoginFormData>({
    resolver: zodResolver(LoginFormSchema),
  });

  console.log(formState);
  const onSubmit: SubmitHandler<LoginFormData> = (data) => {
    console.log(data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <InputContainer>
        <InputLabel htmlFor='email'>Email</InputLabel>
        <InputField id='email' type='email' {...register('email')} />
        {/*{errors.email && <span>{errors.email.message}</span>}*/}
      </InputContainer>

      <InputContainer className={styles.loginFormPassword}>
        <InputLabel htmlFor='password'>Password</InputLabel>
        <InputField id='password' type='password' {...register('password')} />
        {/*{errors.password && <span>{errors.password.message}</span>}*/}
      </InputContainer>

      <Button className={styles.button} type='submit'>
        Login
      </Button>

      <div className={styles.footerText}>
        <span>Don&lsquo;t have an account? </span>
        <Link to={'/register'}>
          <span>Register</span>
        </Link>
      </div>
    </form>
  );
};
