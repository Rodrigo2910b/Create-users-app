import React, { useState, useRef } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import People from "../../assets/people.svg";
import Arrow from "../../assets/arrow.svg";

import {
  Container,
  H1,
  Img,
  ContainerItens,
  InputLabel,
  Input,
  Button,
} from "./styles";
import { wait } from "@testing-library/user-event/dist/utils";

const MIN_AGE = 12;

///jSX
const App = () => {
  const [users, setUser] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState(MIN_AGE);

  async function AddNewUser() {
    try {
      if (age < MIN_AGE) {
        toast.error(" Idade não permitida", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        return;
      }
      const { data: newUser } = await axios.post(
        "http://localhost:3001/users",
        {
          name,
          age,
        }
      );
      setUser([...users, newUser]);
      setName();
      setAge(MIN_AGE);
      toast.success("Ussuario cadastrado", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      toast.error("houve um erro inesperad ", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  return (
    <Container>
      <Img alt="logo-imagem" src={People} />

      <ContainerItens>
        <H1>Ola!</H1>

        <InputLabel>Nome</InputLabel>
        <Input
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Nome"
        />

        <InputLabel>Idade</InputLabel>
        <Input
          value={age}
          onChange={(event) => {
            const value = event.target.value;

            setAge(value);
          }}
          placeholder="Idade"
        />

        <Button onClick={AddNewUser}>
          Cadastrar <img alt="arrow" src={Arrow} />
        </Button>
      </ContainerItens>
    </Container>
  );
};

export default App;
