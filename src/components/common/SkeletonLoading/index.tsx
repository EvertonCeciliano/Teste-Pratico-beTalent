import { SkeletonRow, SkeletonCircle, SkeletonText } from './styles';

export const SkeletonLoading = () => {
  // Array com 5 itens para simular 5 linhas de loading
  const rows = Array.from({ length: 5 });

  return (
    <>
      {rows.map((_, index) => (
        <SkeletonRow key={index}>
          <SkeletonCircle />
          <SkeletonText />
          <SkeletonText />
          <SkeletonText />
          <SkeletonText />
        </SkeletonRow>
      ))}
    </>
  );
}; 