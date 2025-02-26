import { useState, useEffect } from 'react';
import { employeesService } from '../services/employees';
import { Employee } from '../types/Employee';

export function useEmployees() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getEmployees() {
      try {
        const data = await employeesService.getAll();
        setEmployees(data);
      } catch (error) {
        setError(error instanceof Error ? error.message : 'Erro ao carregar funcionários');
      } finally {
        setLoading(false);
      }
    }

    getEmployees();
  }, []);

  return { employees, loading, error };
} 