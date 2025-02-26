import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
`;

export const SkeletonRow = styled.div`
  display: grid;
  grid-template-columns: 60px 220px 160px 160px 160px;
  gap: 40px;
  padding: 0 20px;
  height: 49px;
  align-items: center;
  background: white;
  border-bottom: 1px solid #E9E9E9;

  @media (max-width: 768px) {
    display: flex;
    padding: 0 14px;
    height: 60px;
  }
`;

export const SkeletonCircle = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200px 100%;
  animation: ${shimmer} 1.2s infinite linear;
`;

export const SkeletonText = styled.div`
  height: 16px;
  width: 80%;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200px 100%;
  animation: ${shimmer} 1.2s infinite linear;
  border-radius: 4px;

  @media (max-width: 768px) {
    display: none;
    &:first-of-type {
      display: block;
    }
  }
`; 