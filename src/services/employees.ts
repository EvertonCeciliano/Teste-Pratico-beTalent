import { Employee } from '../types/Employee';
import { api } from './api';

export const employeesService = {
  getAll: () => api.get<Employee[]>('/employees')
}; 