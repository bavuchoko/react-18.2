import styled from "styled-components";

function Button({ disabled, children }) {
    return <StyledButton disabled={disabled}>{children}</StyledButton>;
}
const StyledButton = styled.button`
  color: whitesmoke;
  width: 258px;
  height: 46px;
  margin: 0 auto;
  background-color: #175ba9;
  border-radius: 4px;

  &:active,
  &:hover,
  &:focus {
    background: var(--button-hover-bg-color, #025ce2);
  }

  &:disabled {
    cursor: default;
    opacity: 0.5;
    background: var(--button-bg-color, #6683a4);
  }
`;

export default Button;