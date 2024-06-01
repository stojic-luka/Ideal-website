import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import { Order, Path } from "../../hooks/dataFetchHooks";

import "../../styles/home.css";

interface Props {
  orderData: Order | undefined;
  pathData: Path[] | undefined;
}
export default function WorldMap({ pathData, orderData }: Props) {
  if (!pathData || !orderData) return <></>;

  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="50 0 850 580" className="world-map">
        {pathData.map((path, index) => (
          <Tippy
            content={`${orderData[path.id] != 0 ? orderData[path.id] : "No"} orders from ${path.id}`}
            placement="top"
            trigger="mouseenter"
            key={index}
          >
            <path id={path.id} d={path.d} className={orderData[path.id] === 0 ? "no-orders" : "orders"} />
          </Tippy>
        ))}
      </svg>
    </>
  );
}
