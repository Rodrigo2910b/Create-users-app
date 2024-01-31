import styled from "styled-components";
import Backgroud from "../../assets/background1.svg";

export const Container = styled.div`
  background: url("${Backgroud}");
  background-size: cover;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

export const Img = styled.img`
  margin-top: 30px;
`;

export const ContainerItens = styled.div`
  border-radius: 61px 61px 61px 61px;
  background: linear-gradient(
    157deg,
    rgba(255, 255, 255, 0.6) 0.84%,
    rgba(255, 255, 255, 0.6) 0.85%,
    rgba(255, 255, 255, 0.15) 100%
  );
  height: 700px;

  padding: 50px 36px;
  display: flex;
  flex-direction: column;
`;

export const H1 = styled.h1`
  margin-bottom: 80px;

  color: #fff;
  text-align: center;
  font-size: 34px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const InputLabel = styled.p`
  color: #eee;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px; /* 122.222% */
  letter-spacing: -0.408px;

  margin-left: 25px;
`;
export const Input = styled.input`
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  height: 58px;
  width: 342px;
  padding-left: 25px;
  margin-bottom: 35px;

  border: none;
  outline: none;

  color: #ffffff;
  font-style: normal;
  font-weight: normal;
  line-height: 28px;
  font-size: 20px;
`;

export const Button = styled.button`
  margin-top: 132px;
  width: 342px;
  height: 74px;
  flex-shrink: 0;

  border: none;
  border-radius: 14px;
  background: var(--Templates-5-Color-1, rgba(0, 0, 0, 0.8));

  color: #fff;

  font-size: 17px;
  font-style: normal;
  font-weight: 600px;
  line-height: 28px;

  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }
`;
