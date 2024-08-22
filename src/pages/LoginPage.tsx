import { PageContainer } from '../utils/styles';
import { LoginForm } from '../components/forms/LoginForm.tsx';

export const LoginPage: React.FC = () => {
  return (
    <PageContainer
      $display='flex'
      $justifyContent='center'
      $alignItems='center'
    >
      <LoginForm />
    </PageContainer>
  );
};
