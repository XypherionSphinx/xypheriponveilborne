import styled from "styled-components";

function Symbols({ color, title, subTitle }) {
  return (
    <StyledDiv $color={color} className="symbol">
      <h2>{title}</h2>
      <p>{subTitle}</p>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  background-color: #1a1a1a;
  transition: 0.3s;
  border-radius: 1rem;
  padding: 1.5rem;
  border: 1px solid ${(props) => props.$color};

  &:hover {
    border-color: ${(props) => props.$color};
    background-color: ${(props) => props.$color}22;
    cursor: pointer;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    color: ${(props) => props.$color};
  }

  p {
    font-size: 0.875rem;
    color: #9ca3af;
  }
`;

export default Symbols;
