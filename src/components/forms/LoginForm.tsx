import { Link, useLocation, useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z, ZodType } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { setCredentials } from '../../store/auth.ts';

import {
  Button,
  InputContainer,
  InputField,
  InputLabel,
} from '../../utils/styles';

import { useAppDispatch } from '../../hooks/store.ts';

import { postLoginUser } from '../../utils/api.ts';

import { LoginFormData } from '../../types/auth.ts';

import styles from './index.module.scss';

export const LoginFormSchema: ZodType<LoginFormData> = z.object({
  email: z
    .string({ message: 'Email is required' })
    .email({ message: 'Invalid email address' }),
  password: z.string({ message: 'Password is required' }),
});

export const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(LoginFormSchema),
  });

  console.log(errors);

  const onSubmit: SubmitHandler<LoginFormData> = async (formData) => {
    try {
      const { data } = await postLoginUser(formData);
      dispatch(
        setCredentials({
          user: data.user,
          tokens: data.tokens,
        })
      );

      const from =
        (location.state as { from: Location }).from.pathname || '/conversation';

      navigate(from);
    } catch (error) {
      console.log(error);
    }
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
