import { User } from './user.ts';

export interface Tokens {
  accessToken: string;
  refreshToken: string;
}

export interface AuthState {
  user: User | null;
  tokens: Tokens | null;
}

export interface RegisterFormData extends Omit<User, 'id'> {
  password: string;
}

export type LoginFormData = Pick<RegisterFormData, 'email' | 'password'>;

export interface RegisterResponseData {
  user: User;
  tokens: Tokens;
}

export type LoginResponseData = RegisterResponseData;
