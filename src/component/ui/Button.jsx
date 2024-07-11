import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #5999ff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

function Button(props) {
  const { title, onClick } = props;
  return <StyledButton onClick={onClick}>{title || "button"}</StyledButton>;
}

export default Button;
