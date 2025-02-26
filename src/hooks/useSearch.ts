import { Employee } from '../types/Employee';

export const useSearch = () => {
  const normalizeText = (text: string): string => {
    return text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]/g, '');
  };

  const filterEmployees = (employees: Employee[], searchTerm: string) => {
    if (!searchTerm.trim()) return employees;

    const searchNormalized = normalizeText(searchTerm);
    
    return employees.filter(employee => {
      const nameNormalized = normalizeText(employee.name);
      const jobNormalized = normalizeText(employee.job);
      const phoneNormalized = normalizeText(employee.phone);

      return (
        nameNormalized.includes(searchNormalized) ||
        jobNormalized.includes(searchNormalized) ||
        phoneNormalized.includes(searchNormalized)
      );
    });
  };

  return { filterEmployees };
}; 