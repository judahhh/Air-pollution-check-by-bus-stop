import React, { useEffect, useState } from "react";
import api from "../Auth/api";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { dustActions } from "../store/dust-slice";
const API_KEY = process.env.REACT_APP_API_KEY;

const dustBoard = styled.div`
  color: wheat;
`;

const DustDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const dustData = useSelector((state) => state.dust.dustData);
  console.log(dustData);
  // const busstopList = useSelector((state) => state.busstop.busstopList);
  // console.log(busstopList);
  // let busstopName = busstopList.filter((item) => item.busno === id);

  useEffect(() => {
    const getDust = async () => {
      try {
        await api
          .get(
            `/6410000/GOA/GOA002?ServiceKey=${API_KEY}&busno=${id}&type=json&numOfRows=10&pageNo=1`
          )
          .then((response) => {
            // useRef()? 써야하나?
            dispatch(dustActions.addDustData(response.data.result.data));
          });
      } catch (err) {
        console.log(err);
      }
    };
    getDust();
  }, []);

  return (
    <>
      <h1>대기환경지수</h1>
      <dustBoard>
        {/* 버정 이름: {busstopName} */}
        미세먼지(pm10) 측정값 : {dustData.pm10}
        <br />
        일산화탄소(co) 측정값 : {dustData.co}
        <br />
        아황산가스(so2) 측정값 : {dustData.so2}
        <br />
        이산화질소(no2) 측정값 : {dustData.no2}
        <br />
        온도 : {dustData.temp}
        <br />
        습도 : {dustData.hum}
        <br />
        풍향 : {dustData.wd}
        <br />
        풍속 : {dustData.ws}
        <br />
      </dustBoard>
    </>
  );
};

export default DustDetail;
