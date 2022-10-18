import React, { useState, useEffect } from "react";
import { Drawer, Button, Table, Spin } from "antd";
import axios from "axios";
import { RocketOutlined } from "@ant-design/icons";
import "./pathway.css";

function PathWays({ Id }) {
  const [organizedData, setOrganizedData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(
          "http://localhost:5000/degrees/" + Id
        );

        setOrganizedData(
          response.map((row) => ({
            id: row.id,
            Degree: row.degree,
            University: row.uni,
            Requirement: row.requirement,
          }))
        );
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  const columns = [
    {
      title: "Degree",
      dataIndex: "Degree",
      key: "Degree",
      width: "30%",
    },
    {
      title: "University",
      dataIndex: "University",
      key: "University",
      width: "10%",
    },
    {
      title: "Requirement",
      dataIndex: "Requirement",
      key: "address",
      width: "40%",
    },
  ];

  const [visible, setVisible] = useState(false);

  const showLargeDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
      <Button
        type="primary"
        shape="round"
        icon={<RocketOutlined />}
        size={"large"}
        style={{
          background: "var(--gradient-text)",
          borderColor: "var(--gradient-text)",
          marginLeft: "20px",
        }}
        onClick={showLargeDrawer}
      >
        Degrees
      </Button>

      <Drawer
        title={` Degrees`}
        placement="bottom"
        onClose={onClose}
        visible={visible}
        height={700}
      >
        <Spin size="large" spinning={loading}>
          <div>
            <Table
              columns={columns}
              dataSource={organizedData}
              pagination={{ position: ["bottomCenter", "bottomCenter"] }}
              scroll={{ y: 500 }}
            />
          </div>
        </Spin>
      </Drawer>
    </>
  );
}

export default PathWays;
