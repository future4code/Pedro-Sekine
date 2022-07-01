import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LogoContainer = styled.img`
  height: 5rem;
  align-self: center;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

export const TextContainer = styled.p`
  margin: 1rem 2rem;
`;

export const TextError = styled.p`
  margin: 1rem 2rem;
  color: red;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ClickableText = styled.a`
  cursor: pointer;
`;
