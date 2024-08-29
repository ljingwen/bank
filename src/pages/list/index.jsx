import React from "react";
import { NavBar, Space, Card, Button } from "antd-mobile";
import { CloseOutline, MoreOutline, SearchOutline } from "antd-mobile-icons";
import "./index.less";
import bg from "./../../assets/bg.jpg";
import edit from "./../../assets/edit.png";
import { useNavigate } from "react-router-dom";

function Lists() {
  const navigate = useNavigate();
  return (
    <div className="list">
      <NavBar
        className="top_bar"
        right={
          <div style={{ fontSize: 24 }}>
            <Space style={{ "--gap": "16px" }}>
              <MoreOutline />
            </Space>
          </div>
        }
      >
        <div className="title">我的账户</div>
      </NavBar>
      <div className="content">
        <div className="title">借记卡</div>
        <Card>
          <div className="card">
            <div className="top">
              <div className="left_part">
                <div className="one">I类</div>
                <span className="two">6228 **** 9073</span>
                <span className="third">查看</span>
              </div>
              <div className="right_part">
                <span className="text">
                  <div>设置别名</div>
                  <img
                    style={{
                      marginLeft: "4px",
                      marginTop: 3,
                      width: 16,
                      height: 16,
                    }}
                    src={edit}
                    alt="edit"
                  />
                </span>
              </div>
            </div>
            <div className="middle">
              <span className="one">人民币可用余额：</span>
              <span className="two">762.23</span>
            </div>
            <div className="bot">
              <div className="text">详情</div>
            </div>
            <div className="bottom">
              <div
                onClick={() => {
                  navigate("/details");
                }}
              >
                查看明细
              </div>
              <div>我要转账</div>
              <div>我要理财</div>
            </div>
          </div>
        </Card>
        <div className="title_second">信用卡</div>
        <img src={bg} alt="" className="bg_pic" />
        <Button className="sumbit">开通电子账户</Button>
      </div>
    </div>
  );
}

export default Lists;
