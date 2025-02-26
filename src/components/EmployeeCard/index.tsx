import { CaretDown } from "@phosphor-icons/react";
import {
  TableRow,
  Avatar,
  EmployeeName,
  ExpandIcon,
  DropdownContent,
  InfoGrid,
  InfoItem,
  Label,
  Value,
  CardContainer,
} from './styles';

interface Employee {
  id: number;
  name: string;
  image: string;
  job: string;
  admission_date: string;
  phone: string;
}

interface EmployeeCardProps {
  employee: Employee;
  expanded: boolean;
  onToggle: () => void;
  formatDate: (date: string) => string;
  formatPhone: (phone: string) => string;
}

export const EmployeeCard = ({ 
  employee: { image, name, job, admission_date, phone }, 
  expanded, 
  onToggle,
  formatDate,
  formatPhone 
}: EmployeeCardProps) => {
  const isMobile = () => window.innerWidth <= 768;
  
  const handleRowClick = () => {
    if (isMobile()) {
      onToggle();
    }
  };

  const renderMobileContent = () => (
    <DropdownContent expanded={expanded}>
      <InfoGrid>
        {employeeInfo.map(({ label, value }) => (
          <InfoItem key={label}>
            <Label>{label}</Label>
            <Value>{value}</Value>
          </InfoItem>
        ))}
      </InfoGrid>
    </DropdownContent>
  );

  const employeeInfo = [
    { label: 'Cargo', value: job },
    { label: 'Data de admissão', value: formatDate(admission_date) },
    { label: 'Telefone', value: formatPhone(phone) }
  ];

  return (
    <CardContainer expanded={expanded}>
      <TableRow onClick={handleRowClick} expanded={expanded}>
        <Avatar src={image} alt={name} />
        <EmployeeName>{name}</EmployeeName>
        <div>{job}</div>
        <div>{formatDate(admission_date)}</div>
        <div>{formatPhone(phone)}</div>
        {isMobile() && (
          <ExpandIcon expanded={expanded}>
            <CaretDown size={20} weight="light" />
          </ExpandIcon>
        )}
      </TableRow>

      {isMobile() && renderMobileContent()}
    </CardContainer>
  );
}; 