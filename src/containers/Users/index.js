import React, { useState, useEffect } from "react";
import axios from "axios";

import Avatar from "../../assets/avatar.svg";
import Arrow from "../../assets/arrow.svg";
import Trash from "../../assets/trash.svg";

import { Container, H1, Img, ContainerItens, Button, User } from "./styles";
import { wait } from "@testing-library/user-event/dist/utils";

//const users = [];

///jSX
const Users = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    async function FetchUser() {
      const { data: newUsers } = await axios.get("http://localhost:3001/users");

      setUser(newUsers);
    }
    FetchUser();
  }, []);

  async function DeleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`);

    const NewUser = users.filter((user) => user.id !== userId);
    setUser(NewUser);
  }

  return (
    <Container>
      <Img alt="logo-imagem" src={Avatar} />

      <ContainerItens>
        <H1>Usuários</H1>
        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p>
              <p>{user.age}</p>
              <button onClick={() => DeleteUser(user.id)}>
                <img alt="lata de lixo" src={Trash} />
              </button>
            </User>
          ))}
        </ul>

        <Button>
          <img alt="arrow" src={Arrow} /> Voltar
        </Button>
      </ContainerItens>
    </Container>
  );
};

export default Users;
