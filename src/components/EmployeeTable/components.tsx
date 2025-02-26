import { Employee } from '../../types/Employee';
import { EmployeeCard } from '../EmployeeCard';
import { formatDate, formatPhone } from '../../utils/formatters';

export const TableHeaderColumns = () => (
  <>
    <div>FOTO</div>
    <div>NOME</div>
    <div>CARGO</div>
    <div>DATA&nbsp;DE&nbsp;ADMISSÃO</div>
    <div>TELEFONE</div>
  </>
);

export const LoadingState = () => (
  <div style={{ padding: '20px', textAlign: 'center' }}>Carregando...</div>
);

export const ErrorState = ({ error }: { error: string }) => (
  <div style={{ padding: '20px', textAlign: 'center' }}>Erro: {error}</div>
);

export const EmptyState = () => (
  <div style={{ padding: '20px', textAlign: 'center' }}>
    Nenhum funcionário encontrado
  </div>
);

interface EmployeeListProps {
  employees: Employee[];
  isRowExpanded: (id: number) => boolean;
  onRowClick: (id: number) => void;
}

export const EmployeeList = ({ 
  employees, 
  isRowExpanded, 
  onRowClick 
}: EmployeeListProps) => (
  <>
    {employees.map(employee => (
      <EmployeeCard
        key={employee.id}
        employee={employee}
        expanded={isRowExpanded(employee.id)}
        onToggle={() => onRowClick(employee.id)}
        formatDate={formatDate}
        formatPhone={formatPhone}
      />
    ))}
  </>
); 