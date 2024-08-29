import React, { useEffect, useState } from "react";
import "./index.less";
import { NavBar, Space, CapsuleTabs, List } from "antd-mobile";
import { DownFill, MoreOutline, SearchOutline } from "antd-mobile-icons";
import export_bg from "./../../assets/export.png";
import people from "./../../assets/people.png";
import bank from "./../../assets/bank.jpeg";
import { useNavigate, useLocation } from "react-router-dom";

function Details() {
  const navigate = useNavigate();
  const [activeKey, setActiveKey] = useState("1");
  const params = useLocation();
  console.log(
    "%c [ params----------- ]-13",
    "font-size:13px; background:pink; color:#bf2c9f;",
    params
  );
  const activeKeys = params?.state?.activeKeys;
  useEffect(() => {
    if (activeKeys) {
      setActiveKey(activeKeys);
    }
  }, [activeKeys]);
  const list = [
    {
      title: "转支",
      pay: "-2181.90",
      time: "2024-08-01 08:13:34",
      num: "0.00",
    },
    {
      title: "转存",
      pay: "+2181.90",
      time: "2024-07-31 15:04:14",
      num: "2181.90",
    },
    {
      title: "转支",
      pay: "-49,400.00",
      time: "2024-08-01 08:13:34",
      num: "0.00",
    },
    {
      title: "转存",
      pay: "+49,400.00",
      time: "2024-08-01 08:13:34",
      num: "49,400.00",
    },
  ];
  const list1 = [
    {
      title: "转支",
      pay: "-2181.90",
      time: "2024-08-01 08:13:34",
      num: "0.00",
    },
    {
      title: "转存",
      pay: "+2181.90",
      time: "2024-07-31 15:04:14",
      num: "2181.90",
    },
  ];
  const list2 = [];
  //
  const handleJump = (index) => {
    navigate(`/gun`, { state: { id: index, activeKey: activeKey } });
  };
  const renderList = () => {
    return (
      <div className="data_list">
        <List>
          {list?.map((item, index) => (
            <List.Item
              onClick={() => handleJump(index)}
              extra={
                <div className="right_box">
                  <div
                    className="one"
                    style={{
                      color: index === 1 || index === 3 ? "#efb24f" : "#5e5e5e",
                    }}
                  >
                    {item.pay}
                  </div>
                  <div className="two">
                    <span className="iii">余额：</span>
                    <span>{item.num}</span>
                  </div>
                </div>
              }
              description={item.time}
              clickable
            >
              {item?.title}
            </List.Item>
          ))}
        </List>
      </div>
    );
  };
  const renderList1 = () => {
    return (
      <div className="data_list">
        <List>
          {list1?.map((item, index) => (
            <List.Item
              onClick={() => handleJump(index)}
              extra={
                <div className="right_box">
                  <div
                    className="one"
                    style={{
                      color: index === 1 || index === 3 ? "#efb24f" : "#5e5e5e",
                    }}
                  >
                    {item.pay}
                  </div>
                  <div className="two">
                    <span className="iii">余额：</span>
                    <span>{item.num}</span>
                  </div>
                </div>
              }
              description={item.time}
              clickable
            >
              {item?.title}
            </List.Item>
          ))}
        </List>
      </div>
    );
  };
  const renderList2 = () => {
    return (
      <div className="data_list">
        <List>
          {list2?.map((item, index) => (
            <List.Item
              extra={
                <div className="right_box">
                  <div
                    className="one"
                    style={{
                      color: index === 1 || index === 3 ? "#efb24f" : "#5e5e5e",
                    }}
                  >
                    {item.pay}
                  </div>
                  <div className="two">
                    <span className="iii">余额：</span>
                    <span>{item.num}</span>
                  </div>
                </div>
              }
              description={item.time}
              clickable
            >
              {item?.title}
            </List.Item>
          ))}
        </List>
      </div>
    );
  };

  const handleback = () => {
    navigate("/list");
  };

  const handleChange = (key) => {
    setActiveKey(key);
  };
  return (
    <div className="details">
      <NavBar
        onBack={handleback}
        className="top_bar"
        right={
          <div style={{ fontSize: 24 }}>
            <Space style={{ "--gap": "16px" }}>
              <img src={people} alt="people" />
              <img src={export_bg} alt="people" />
            </Space>
          </div>
        }
      >
        <div className="title">查看明细</div>
      </NavBar>
      <div className="top_bar">
        <div className="left">
          <img className="left_bank" src={bank} alt="" />
          <div>6228 **** 9073</div>
        </div>
        <div className="right">
          <span>人民币｜本币</span>
          <DownFill color="#313131" fontSize={10} className="_icon" />
        </div>
      </div>
      <div className="content">
        <CapsuleTabs activeKey={activeKey} onChange={handleChange}>
          <CapsuleTabs.Tab title="近一周" key="1">
            {renderList2()}
          </CapsuleTabs.Tab>
          <CapsuleTabs.Tab title="近一月" key="2">
            {renderList1()}
          </CapsuleTabs.Tab>
          <CapsuleTabs.Tab title="近三月" key="3">
            {renderList()}
          </CapsuleTabs.Tab>
          <CapsuleTabs.Tab
            title={
              <div>
                <span style={{ marginRigt: "10px" }}>筛选</span>
                <DownFill color="#313131" fontSize={10} className="_icon" />
              </div>
            }
            key="hhahah"
            disabled
          ></CapsuleTabs.Tab>
        </CapsuleTabs>
      </div>
    </div>
  );
}

export default Details;
