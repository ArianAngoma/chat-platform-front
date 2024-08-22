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

export interface RegisterFormData {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

export const RegisterFormSchema: ZodType<RegisterFormData> = z.object({
  email: z
    .string({ message: 'Email is required' })
    .email({ message: 'Invalid email address' }),
  firstName: z.string({ message: 'First Name is required' }),
  lastName: z.string({ message: 'Last Name is required' }),
  password: z
    .string({ message: 'Password is required' })
    .min(8, { message: 'Password must be at least 8 characters long' }),
});

export const RegisterForm: React.FC = () => {
  const { register, handleSubmit, formState } = useForm<RegisterFormData>({
    resolver: zodResolver(RegisterFormSchema),
  });

  console.log(formState);
  const onSubmit: SubmitHandler<RegisterFormData> = (data) => {
    console.log(data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <InputContainer>
        <InputLabel htmlFor='email'>Email</InputLabel>
        <InputField id='email' type='email' {...register('email')} />
        {/*{errors.email && <span>{errors.email.message}</span>}*/}
      </InputContainer>

      <section className={styles.nameFieldRow}>
        <InputContainer>
          <InputLabel htmlFor='firstName'>First Name</InputLabel>
          <InputField id='firstName' type='text' {...register('firstName')} />
          {/*{errors.firstName && <span>{errors.firstName.message}</span>}*/}
        </InputContainer>

        <InputContainer>
          <InputLabel htmlFor='lastName'>Last Name</InputLabel>
          <InputField id='lastName' type='text' {...register('lastName')} />
          {/*{errors.lastName && <span>{errors.lastName.message}</span>}*/}
        </InputContainer>
      </section>

      <InputContainer>
        <InputLabel htmlFor='password'>Password</InputLabel>
        <InputField id='password' type='password' {...register('password')} />
        {/*{errors.password && <span>{errors.password.message}</span>}*/}
      </InputContainer>

      <Button className={styles.button}>Create My Account</Button>

      <div className={styles.footerText}>
        <span>Already have an account? </span>
        <Link to={'/login'}>
          <span>Login</span>
        </Link>
      </div>
    </form>
  );
};
