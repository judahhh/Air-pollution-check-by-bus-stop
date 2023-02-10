import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "../Auth/api";
import styled from "styled-components";
import BusstopInput from "../components/BusstopInput";
import { BusstopActions } from "../store/busstop-slice";
import BusstopList from "../components/BusstopList";
const API_KEY = process.env.REACT_APP_API_KEY;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  min-width: 400px;
`;

const Home = () => {
  const [busstopList, setBusstopList] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        await api
          .get(
            `/6410000/GOA/GOA001?ServiceKey=${API_KEY}&type=json&numOfRows=10&pageNo=1`
          )
          .then((response) => {
            const { data } = response;
            console.log(data.items);
            setBusstopList(response.data.items);
            console.log(busstopList); //왜 얘는 출력 안되냐
            dispatch(BusstopActions.addBusstopList(data.items));
          });
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    };
    getData();
  }, []);
  if (loading) return <div>Loading...</div>;
  if (!busstopList) return <div>Fail</div>;

  return (
    <>
      <Title>경기도 미세먼지센서설치 버스정류장 조회</Title>
      <BusstopInput></BusstopInput>
      <BusstopList></BusstopList>
    </>
  );
};

export default Home;
