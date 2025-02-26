export const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('pt-BR');
};

export const formatPhone = (phone: string): string => {
  return phone.replace(/(\d{2})(\d{2})(\d{5})(\d{4})/, '+$1 ($2) $3-$4');
}; 