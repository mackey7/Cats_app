import React from "react";
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 36px;
  text-align: center;
  color: #000;
  text-transform:uppercase;
  letter-spacing:8px;
  font-family: 'Coiny', cursive;
`;
function Header(props) {
    return <div>
        <Title> {props.text} </Title>
    </div>;
}
export default Header;
