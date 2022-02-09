import styled, { css } from "styled-components";

const buttonStyles = css`
  background-color: #e56931;
  color: white;
  border: none;
  &:hover {
    background-color: white;
    color: #e56931;
    border: 1px solid #e56931;
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: #e56931;
  border: 1px solid #e56931;
  &:hover {
    background-color: #e56931;
    color: white;
    border: 1px solid #fff;
  }
`;

const googleSignInStyles = css`
  background-color: #4285f4;
  color: white;
  line-height: unset;
  border: 1px solid #4285f4;
  &:hover {
    background-color: #fff;
    color: #4285f4;
    border: 1px solid #4285f4;
  }
`;

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }

  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 135px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  ${getButtonStyles}
`;
