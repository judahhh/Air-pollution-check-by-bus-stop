import React from "react";
import { useSelector } from "react-redux";
import BusstopItem from "./BusstopItem";

const BusstopList = () => {
  const searchBusList = useSelector((state) => state.busstop.busstopList);
  const keyword = useSelector((state) => state.busstop.keyword);

  return (
    <div>
      {keyword &&
        searchBusList
          .filter((item) => (item.name + "").includes(keyword))
          .map((item) => <BusstopItem item={item}></BusstopItem>)}
    </div>
  );
};

export default BusstopList;
