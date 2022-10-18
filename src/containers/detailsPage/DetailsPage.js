import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../footer/Footer";
import { Card, Typography, Divider, Tag, Button, Spin, Modal } from "antd";
import "./detailsPage.css";
import {
  LinkedinOutlined,
  SendOutlined,
  InstagramFilled,
  FacebookFilled,
} from "@ant-design/icons";
import EmailModel from "./email/EmailModel";
import PathWays from "./pathWays/PathWays";
import NavigationBar from "../../components/navbar/navbar";
import RegisterModel from "./register/Register";
import axios from "axios";

function DetailsPage() {
  let { Id } = useParams();
  const [loading, setLoading] = useState(true);
  const [allData, setAllData] = useState([]);
  const [famousPersonsNames, setFamousPersonsNames] = useState([]);
  const [strengths, setStrengths] = useState([]);
  const [weaknesses, setweaknesses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(
          "http://localhost:5000/details/" + Id
        );
        setAllData(response);
        setFamousPersonsNames(response.famousPersons);
        setStrengths(response.strengths);
        setweaknesses(response.weaknesses);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  const { Title, Paragraph, Text } = Typography;
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div>
        <Spin size="large" spinning={loading}>
          <div>
            <NavigationBar />
            <div className="container">
              <Modal
                title="Share"
                centered
                visible={visible}
                onOk={() => setVisible(false)}
                onCancel={() => setVisible(false)}
                width={500}
                footer={null}
                cancelButtonProps={{ style: { display: "none" } }}
              >
                <Button
                  type="primary"
                  shape="round"
                  icon={<InstagramFilled />}
                  onClick = {() => window.open("https://www.instagram.com/")}
                  size={"large"}
                  style={{
                    background: "var(--gradient-text)",
                    borderColor: "var(--gradient-text)",
                    marginLeft: "10px",
                  }}
                >
                  Instagram
                </Button>
                <Button
                  type="primary"
                  shape="round"
                  icon={<FacebookFilled />}
                  onClick = {() => window.open("https://www.facebook.com/")}
                  size={"large"}
                  style={{
                    background: "var(--gradient-text)",
                    borderColor: "var(--gradient-text)",
                    marginLeft: "20px",
                  }}
                >
                  {" Facebook "}
                </Button>
                <Button
                  type="primary"
                  shape="round"
                  icon={<LinkedinOutlined />}
                  onClick = {() => window.open("https://www.linkedin.com/")}
                  size={"large"}
                  style={{
                    background: "var(--gradient-text)",
                    borderColor: "var(--gradient-text)",
                    marginLeft: "20px",
                  }}
                >
                  {"  Linked"}
                </Button>
              </Modal>
            </div>
            <div class="wrapperDetails">
              <Card
                title={
                  <Title style={{ marginLeft: "50px" }}>{allData.id}</Title>
                }
                bordered={false}
                style={{ width: "auto" }}
              >
                <Text strong>{allData.description}</Text>
                <Divider />
                <div>
                  <div className="strenth-weak">
                    <Title level={3} type="success">
                      Strengths
                    </Title>
                    {strengths.map((o) => {
                      return <Tag color="green">{o}</Tag>;
                    })}

                    <Title level={3} type="danger">
                      Weakness
                    </Title>
                    {weaknesses.map((o) => {
                      return <Tag color="red">{o}</Tag>;
                    })}
                  </div>
                  <div className="workplace-habits">
                    <Title level={2} type="warning">
                      Workplace Habits
                    </Title>
                    <Paragraph>
                      <Text strong>{allData.workplaceHabits}</Text>
                    </Paragraph>
                  </div>
                  <div className="button-options">
                    <Button
                      onClick={() => setVisible(true)}
                      type="primary"
                      shape="round"
                      icon={<SendOutlined />}
                      size={"large"}
                      style={{
                        background: "var(--gradient-text)",
                        borderColor: "var(--gradient-text)",
                      }}
                    >
                      Share
                    </Button>

                    <EmailModel Id={Id} />

                    <RegisterModel Id={Id} />

                    <PathWays Id={Id} />
                  </div>
                </div>
              </Card>
              <div>
                <Card
                  title={
                    <Title style={{ marginLeft: "50px" }} level={5}>
                      Famous Persons
                    </Title>
                  }
                  bordered={false}
                >
                  <div className="__person">
                    <img src={allData.imgLink} alt="Img" />
                  </div>
                  <div className="person-names">
                    {famousPersonsNames.map((o) => {
                      return <h3>{o}</h3>;
                    })}
                  </div>
                </Card>
              </div>
            </div>
            <Footer />
          </div>
        </Spin>
      </div>
    </>
  );
}

export default DetailsPage;
