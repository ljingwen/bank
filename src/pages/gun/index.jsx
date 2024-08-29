import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import png_0 from "./../../assets/0.jpg";
import png_1 from "./../../assets/1.jpg";
import png_2 from "./../../assets/2.jpg";
import png_3 from "./../../assets/3.jpg";

function Gun() {
  const navigate = useNavigate();
  const params = useLocation();
  const id = params?.state?.id;
  const activeKey = params?.state?.activeKey;
  console.log(
    "%c [ params ]-11",
    "font-size:13px; background:pink; color:#bf2c9f;",
    id
  );
  const getPic = () => {
    if (Number(id) === 0) {
      return png_0;
    } else if (Number(id) === 1) {
      return png_1;
    } else if (Number(id) === 2) {
      return png_2;
    } else if (Number(id) === 3) {
      return png_3;
    }
  };
  return (
    <div
      onClick={() => {
        navigate("/details", { state: { activeKeys: activeKey } });
      }}
    >
      <img style={{ width: "100%", height: "100%" }} src={getPic()} alt="" />
    </div>
  );
}

export default Gun;
