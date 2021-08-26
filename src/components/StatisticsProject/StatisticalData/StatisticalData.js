import React from "react";
import PropTypes from "prop-types";
import style from "./StatisticalData.module.css";

function StatisticalData({ stats }) {
  const colorFunc = () => {
    let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
  };

  return (
    <div className={style.data}>
      {stats.map((item) => (
        <div
          key={item.id}
          className={style.dataItem}
          style={{ backgroundColor: colorFunc() }}
        >
          <li>
            {/* <span className={style.spanItem + '' + style.first}>{item.label}</span> */}
            <span className={`${style.spanItem} ${style.first}`}>
              {item.label}
            </span>

            <span className={style.spanItem}>{`${item.percentage}%`}</span>
          </li>
        </div>
      ))}
    </div>
  );
}

StatisticalData.propTypes = {
  stats: PropTypes.array,
};

export default StatisticalData;
