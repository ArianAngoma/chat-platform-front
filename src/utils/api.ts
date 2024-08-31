import axios, { AxiosRequestConfig } from 'axios';

import {
  LoginFormData,
  LoginResponseData,
  RegisterFormData,
} from '../types/auth.ts';

const API_URL = import.meta.env.VITE_API_URL;

const config: AxiosRequestConfig = { withCredentials: true };

export const postRegisterUser = async (data: RegisterFormData) =>
  axios.post(`${API_URL}/auth/register`, data, config);

export const postLoginUser = async (data: LoginFormData) =>
  axios.post<LoginResponseData>(`${API_URL}/auth/login`, data, config);
