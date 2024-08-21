import {
  Button,
  InputContainer,
  InputField,
  InputLabel,
} from '../../utils/styles';

import styles from './index.module.scss';
import { Link } from 'react-router-dom';

export const LoginForm: React.FC = () => {
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <InputContainer>
        <InputLabel htmlFor='email'>Email</InputLabel>
        <InputField id='email' type='email' />
      </InputContainer>

      <InputContainer className={styles.loginFormPassword}>
        <InputLabel htmlFor='password'>Password</InputLabel>
        <InputField id='password' type='password' />
      </InputContainer>

      <Button className={styles.button}>Login</Button>

      <div className={styles.footerText}>
        <span>Don&lsquo;t have an account? </span>
        <Link to={'/register'}>
          <span>Register</span>
        </Link>
      </div>
    </form>
  );
};
