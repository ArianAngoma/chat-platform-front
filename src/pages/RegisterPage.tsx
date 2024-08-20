import { RegisterForm } from '../components/forms/RegisterForm.tsx';
import { PageContainer } from '../utils/styles';

export const RegisterPage: React.FC = () => {
  return (
    <PageContainer>
      <RegisterForm />
    </PageContainer>
  );
};
