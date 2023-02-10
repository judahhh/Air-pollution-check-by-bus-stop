import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const Wrapper = styled.span`
  margin-left: 40px;
  @media ${(props) => props.theme.mobile} {
    margin-left: 130px;
  }
`;

const Item = styled.div`
  display: inline-block;
  padding: 10px;
  margin: 10px;
  border: 1px lightgray solid;
  border-radius: 5px;
  width: 40%;
  text-align: center;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover {
    background-color: ghostwhite;
  }
`;

const BusstopItem = ({ item }) => {
  const navigate = useNavigate();
  const goDustPage = () => {
    navigate(`/detail/${item.busno}`);
  };
  return (
    <Wrapper>
      <Item onClick={goDustPage}>정류장 이름 : {item.name}</Item>
    </Wrapper>
  );
};

export default BusstopItem;
