import { useState, useEffect } from 'react';
import { useEmployees } from '../../hooks/useEmployees';
import { useWindowSize } from '../../hooks/useWindowSize';
import { formatDate, formatPhone } from '../../utils/formatters';
import { Employee } from '../../types/Employee';
import { EmployeeCard } from '../EmployeeCard';
import { SearchInput } from '../SearchInput';
import { EmptyState } from '../common/EmptyState';
import { SkeletonLoading } from '../common/SkeletonLoading';
import { ErrorState } from '../common/ErrorState';

import {
  Container,
  Header,
  Title,
  Table,
  TableHeader,
} from './styles';

const EmployeeTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedRows, setExpandedRows] = useState<number[]>([]);
  const { isMobile } = useWindowSize();
  const { employees, loading, error } = useEmployees();

  useEffect(() => {
    if (!isMobile && expandedRows.length > 0) {
      setExpandedRows([]);
    }
  }, [isMobile, expandedRows.length]);

  const filterEmployees = (employees: Employee[], term: string) => {
    if (!term.trim()) return employees;

    const searchLower = term.toLowerCase();
    return employees.filter(employee => 
      employee.name.toLowerCase().includes(searchLower) ||
      employee.job.toLowerCase().includes(searchLower) ||
      employee.phone.includes(searchLower)
    );
  };

  const handleRowClick = (id: number) => {
    if (!isMobile) return;
    
    setExpandedRows(prev => 
      prev.includes(id) 
        ? prev.filter(rowId => rowId !== id)
        : [...prev, id]
    );
  };

  const isRowExpanded = (id: number) => expandedRows.includes(id);

  const handleRetry = () => {
    window.location.reload();
  };

  if (loading) {
    return (
      <Container>
        <Header>
          <Title>Funcionários</Title>
          <SearchInput 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            disabled={loading}
          />
        </Header>
        
        <Table>
          <TableHeader>
            <div>FOTO</div>
            <div>NOME</div>
            <div>CARGO</div>
            <div>DATA&nbsp;DE&nbsp;ADMISSÃO</div>
            <div>TELEFONE</div>
          </TableHeader>
          <SkeletonLoading />
        </Table>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Header>
          <Title>Funcionários</Title>
          <SearchInput 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            disabled
          />
        </Header>
        <Table>
          <ErrorState error={error} onRetry={handleRetry} />
        </Table>
      </Container>
    );
  }

  const filteredEmployees = filterEmployees(employees, searchTerm);

  return (
    <Container>
      <Header>
        <Title>Funcionários</Title>
        <SearchInput 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Header>
      
      <Table>
        <TableHeader>
          <div>FOTO</div>
          <div>NOME</div>
          <div>CARGO</div>
          <div>DATA&nbsp;DE&nbsp;ADMISSÃO</div>
          <div>TELEFONE</div>
        </TableHeader>

        {filteredEmployees.map((employee: Employee) => (
          <EmployeeCard
            key={employee.id}
            employee={employee}
            expanded={isRowExpanded(employee.id)}
            onToggle={() => handleRowClick(employee.id)}
            formatDate={formatDate}
            formatPhone={formatPhone}
          />
        ))}

        {filteredEmployees.length === 0 && <EmptyState />}
      </Table>
    </Container>
  );
};

export default EmployeeTable; 