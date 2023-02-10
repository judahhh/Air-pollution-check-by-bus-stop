import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { BusstopActions } from "../store/busstop-slice";

const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  background-color: papayawhip;
  border: none;
  border-radius: 3px;
  color: palevioletred;
  ::placeholder {
    color: palevioletred;
  }
`;
const Button = styled.button`
  width: 50px;
  height: 40px;
  background-color: palevioletred;
  color: papayawhip;
  border: 1px solid papayawhip;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
  font-weight: bold;
  cursor: pointer;
`;
const Wrapper = styled.section`
  text-align: center;
  min-width: 100px;
  padding: 20px;
  margin-bottom: 20px;
  min-width: 400px;
`;

const BusstopInput = () => {
  const dispatch = useDispatch();
  const [busstopValue, setBusstopValue] = useState();
  const onChangeValue = (e) => {
    setBusstopValue(e.target.value);
    dispatch(BusstopActions.searchKeyword(e.target.value));
  };

  return (
    <Wrapper>
      <Input
        type="text"
        placeholder="버스정류장 이름 입력"
        onChange={onChangeValue}
      ></Input>
      <Button>검색</Button>
    </Wrapper>
  );
};

export default BusstopInput;
