import styled from "styled-components";
import Backgroud from "../../assets/background2.svg";

export const Container = styled.div`
  background: url("${Backgroud}");
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  // gap: 40px;
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
  backdrop-filter: blur(22.5px);
  height: 0;
  width: 414px;
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

export const Button = styled.button`
  width: 342px;
  height: 74px;
  flex-shrink: 0;
  position: absolute;
  top: 640px;
  border: 1px solid #fff;
  border-radius: 14px;
  background: transparent;

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

  img {
    transform: rotateY(180deg);
  }
`;

export const User = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;

  border-radius: 14px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  height: 58px;
  width: 342px;

  border: none;
  outline: none;

  p {
    color: #eee;
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;
