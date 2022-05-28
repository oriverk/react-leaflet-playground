import React from "react"
import { round10 } from "../utils/decimal";

type Props = {
  name: string;
  time: any;
  totalDistance: number;
  requiredTime?: number;
  speedPerHour?: number;
  minElevation: number;
  maxElevation: number;
}

export const PathPopupContent: React.FC<Props> = (props) => {
  const { name = "",
    time,
    totalDistance, requiredTime = 0, minElevation, maxElevation } = props;
  const distance = round10(totalDistance / 1000, -1);
  const requiedHour = requiredTime ? requiredTime / 1000 / 60 / 60 : 0;
  const kmPerHour = round10(distance / requiedHour, -1)
  // const date = format(time.getTime(), 'yyyy年MM月dd日', { locale: ja })

  return (
    <div className="popupContent">
      <h3>{name}</h3>
      {/* <p>{date}</p> */}
      <p>距離：{distance}km</p>
      <p>所要時間：{round10(requiedHour, -1)}時間</p>
      <p>平均速度：毎時{kmPerHour}km</p>
      <p>最小標高：{round10(minElevation, -1)}m</p>
      <p>最大標高：{round10(maxElevation, -1)}m</p>
      <p>累積標高(登り)：</p>
      <p>累積標高(下り)：</p>
    </div>
  )
}