import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

* {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;

}
body{
    height: auto;
    max-height: 100vh;
    overflow-y: scroll;
}
`;
