import React, { useState, useEffect } from "react";
import { Button, Modal, Rate, Spin, Card } from "antd";
import { useNavigate } from "react-router-dom";
import "antd/dist/antd.css";
import { MehFilled, FrownFilled, SmileFilled } from "@ant-design/icons";
import "./quizeModel.css";
import Swal from "sweetalert2";
const axios = require("axios");

function Quize() {
  // modal visibility state
  const [isModalVisible, setIsModalVisible] = useState(false);
  // default submit button styling state
  const [submitDisabled, setSubmitDisabled] = useState({
    disabled: true,
    color: "#fff",
  });
  //  isLoading State
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const showModal = () => {
    setIsModalVisible(true);
  };
  // on click cancel function : changing set visibility state false

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // popup confidant level text
  const desc = [
    "strongly disagree ",
    "disagree     ",
    "neutral   ",
    "agree     ",
    "strongly agree",
  ];

  // quiz section styling values

  const quizCardStyles = {
    width: "400px",
    height: "165px",
    color: "#ffffff",
  };

  // all answer value states

  const [value1, setValue1] = useState(null);
  const [value2, setValue2] = useState(null);
  const [value3, setValue3] = useState(null);
  const [value4, setValue4] = useState(null);

  const [value5, setValue5] = useState(null);
  const [value6, setValue6] = useState(null);
  const [value7, setValue7] = useState(null);
  const [value8, setValue8] = useState(null);

  const [value9, setValue9] = useState(null);
  const [value10, setValue10] = useState(null);
  const [value11, setValue11] = useState(null);
  const [value12, setValue12] = useState(null);

  const [value13, setValue13] = useState(null);
  const [value14, setValue14] = useState(null);
  const [value15, setValue15] = useState(null);
  const [value16, setValue16] = useState(null);

  const [value17, setValue17] = useState(null);
  const [value18, setValue18] = useState(null);
  const [value19, setValue19] = useState(null);
  const [value20, setValue20] = useState(null);

  const [value21, setValue21] = useState(null);
  const [value22, setValue22] = useState(null);
  const [value23, setValue23] = useState(null);
  const [value24, setValue24] = useState(null);

  // mcq icons
  const customIcons = {
    1: <FrownFilled style={{ fontSize: "30px" }} />,
    2: <FrownFilled style={{ fontSize: "30px" }} />,
    3: <MehFilled style={{ fontSize: "30px" }} />,
    4: <SmileFilled style={{ fontSize: "30px" }} />,
    5: <SmileFilled style={{ fontSize: "30px" }} />,
  };
  // reset button onclick function

  const tryAginHandler = () => {
    setValue1(null);
    setValue2(null);
    setValue3(null);
    setValue4(null);
    setValue5(null);
    setValue6(null);
    setValue7(null);
    setValue8(null);
    setValue9(null);
    setValue10(null);
    setValue11(null);
    setValue12(null);
    setValue13(null);
    setValue14(null);
    setValue15(null);
    setValue16(null);
    setValue17(null);
    setValue18(null);
    setValue19(null);
    setValue20(null);
    setValue21(null);
    setValue22(null);
    setValue23(null);
    setValue24(null);

    //set section value
    setCurrentQuestion(0);
  };
  // validation values

  const handleChange = (quetion, e) => {
    if (quetion === "1") {
      setValue1(e);
    } else if (quetion === "2") {
      setValue2(e);
    } else if (quetion === "3") {
      setValue3(e);
    } else if (quetion === "4") {
      setValue4(e);
    } else if (quetion === "5") {
      setValue5(e);
    } else if (quetion === "6") {
      setValue6(e);
    } else if (quetion === "7") {
      setValue7(e);
    } else if (quetion === "8") {
      setValue8(e);
    } else if (quetion === "9") {
      setValue9(e);
    } else if (quetion === "10") {
      setValue10(e);
    } else if (quetion === "11") {
      setValue11(e);
    } else if (quetion === "12") {
      setValue12(e);
    } else if (quetion === "13") {
      setValue13(e);
    } else if (quetion === "14") {
      setValue14(e);
    } else if (quetion === "15") {
      setValue15(e);
    } else if (quetion === "16") {
      setValue16(e);
    } else if (quetion === "17") {
      setValue17(e);
    } else if (quetion === "18") {
      setValue18(e);
    } else if (quetion === "19") {
      setValue19(e);
    } else if (quetion === "20") {
      setValue20(e);
    } else if (quetion === "21") {
      setValue21(e);
    } else if (quetion === "22") {
      setValue22(e);
    } else if (quetion === "23") {
      setValue23(e);
    } else if (quetion === "24") {
      setValue24(e);
    }
  };

  // on submit function

  const onSubmit = async () => {
    setLoading(true);
    let answerValues = [
      value4,
      value5,
      value6,

      value1,
      value2,
      value3,

      value7,
      value8,
      value9,

      value10,
      value11,
      value12,

      value16,
      value17,
      value18,

      value13,
      value14,
      value15,

      value22,
      value23,
      value24,

      value19,
      value20,
      value21,
    ];
    // navigate("/details");

    const headers = {
      Authorization: "Bearer my-token",
      "My-Custom-Header": "foobar",
    };

    let submit = false;
    for (var i = 0; i < answerValues.length; i++) {
      if (answerValues[i] === null) {
        // popup validation alt
        Swal.fire({
          icon: "error",
          title: "Please answer all questions ",
        });
        setCurrentQuestion(0);
        submit = false;
        break;
      } else {
        submit = true;
      }
    }

    if (submit) {
      // sending api call
      try {
        await axios
          .post(
            "https://app-ami.herokuapp.com/",
            {
              answers: answerValues,
            },
            { headers }
          )
          .then(function (response) {
            setLoading(false);
            console.log("response", response.data);

            navigate("/details/" + response.data.Id);
          });
      } catch (error) {
        // error popup validation
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error,
        });
      }
    }
  };
  // question array
  const questionSection = [
    {
      section: [
        {
          questionText: "01. I regularly make new friends",
          answerOptions: [
            <span>
              <Rate
                style={{ margin: "30px" }}
                tooltips={desc}
                character={({ index }) => customIcons[index + 1]}
                onChange={(e) => {
                  handleChange("1", e);
                }}
                value={value1}
              />
            </span>,
          ],
        },
        {
          questionText: "02. I do have a strong need to be around other people",
          answerOptions: [
            <span>
              <Rate
                style={{ margin: "30px" }}
                tooltips={desc}
                character={({ index }) => customIcons[index + 1]}
                onChange={(e) => {
                  handleChange("2", e);
                }}
                value={value2}
              />
            </span>,
          ],
        },
        {
          questionText:
            "03. After a long and exhausting week, a lively social event is just what I need",
          answerOptions: [
            <span>
              <Rate
                style={{ margin: "30px" }}
                tooltips={desc}
                character={({ index }) => customIcons[index + 1]}
                onChange={(e) => {
                  handleChange("3", e);
                }}
                value={value3}
              />
            </span>,
          ],
        },
        {
          questionText:
            "04. At social events, I rarely try to introduce myself to new people and mostly talk to the ones I already know",
          answerOptions: [
            <span>
              <Rate
                style={{ margin: "30px" }}
                tooltips={desc}
                character={({ index }) => customIcons[index + 1]}
                onChange={(e) => {
                  handleChange("4", e);
                }}
                value={value4}
              />
            </span>,
          ],
        },
        {
          questionText:
            "05. I usually prefer to be on my own rather than being around others",
          answerOptions: [
            <span>
              <Rate
                style={{ margin: "30px" }}
                tooltips={desc}
                character={({ index }) => customIcons[index + 1]}
                onChange={(e) => {
                  handleChange("5", e);
                }}
                value={value5}
              />
            </span>,
          ],
        },
        {
          questionText:
            "06. I like to share special occasions with just one person or a few close friends, rather than have big celebrations",
          answerOptions: [
            <span>
              <Rate
                style={{ margin: "30px" }}
                tooltips={desc}
                character={({ index }) => customIcons[index + 1]}
                onChange={(e) => {
                  handleChange("6", e);
                }}
                value={value6}
              />
            </span>,
          ],
        },
      ],
    },
    {
      section: [
        {
          questionText:
            "07. When in a doubt, I focus on the big picture and theory behind it",
          answerOptions: [
            <span>
              <Rate
                style={{ margin: "30px" }}
                tooltips={desc}
                character={({ index }) => customIcons[index + 1]}
                onChange={(e) => {
                  handleChange("7", e);
                }}
                value={value7}
              />
            </span>,
          ],
        },
        {
          questionText: " 08. I’m an attentive to details kind of person",
          answerOptions: [
            <span>
              <Rate
                style={{ margin: "30px" }}
                tooltips={desc}
                character={({ index }) => customIcons[index + 1]}
                onChange={(e) => {
                  handleChange("8", e);
                }}
                value={value8}
              />
            </span>,
          ],
        },
        {
          questionText: "09. I think I’m good at reading between the lines",
          answerOptions: [
            <span>
              <Rate
                style={{ margin: "30px" }}
                tooltips={desc}
                character={({ index }) => customIcons[index + 1]}
                onChange={(e) => {
                  handleChange("9", e);
                }}
                value={value9}
              />
            </span>,
          ],
        },
        {
          questionText:
            "10. I always trust in linear process and I constantly look for feedback from others",
          answerOptions: [
            <span>
              <Rate
                style={{ margin: "30px" }}
                tooltips={desc}
                character={({ index }) => customIcons[index + 1]}
                onChange={(e) => {
                  handleChange("10", e);
                }}
                value={value10}
              />
            </span>,
          ],
        },
        {
          questionText:
            "11. I’m more focused on the present and past than dreaming about an imaginative world",
          answerOptions: [
            <span>
              <Rate
                style={{ margin: "30px" }}
                tooltips={desc}
                character={({ index }) => customIcons[index + 1]}
                onChange={(e) => {
                  handleChange("11", e);
                }}
                value={value11}
              />
            </span>,
          ],
        },
        {
          questionText:
            "12. I’ll get bored more quickly when someone starts talking about theoretical or abstract concepts",
          answerOptions: [
            <span>
              <Rate
                style={{ margin: "30px" }}
                tooltips={desc}
                character={({ index }) => customIcons[index + 1]}
                onChange={(e) => {
                  handleChange("12", e);
                }}
                value={value12}
              />
            </span>,
          ],
        },
      ],
    },
    {
      section: [
        {
          questionText:
            "13. I’m more inclined to follow my head than my heart ",
          answerOptions: [
            <span>
              <Rate
                style={{ margin: "30px" }}
                tooltips={desc}
                character={({ index }) => customIcons[index + 1]}
                onChange={(e) => {
                  handleChange("13", e);
                }}
                value={value13}
              />
            </span>,
          ],
        },
        {
          questionText:
            "14. I think the world would be a better place if people relied more on rationality and less on their feelings",
          answerOptions: [
            <span>
              <Rate
                style={{ margin: "30px" }}
                tooltips={desc}
                character={({ index }) => customIcons[index + 1]}
                onChange={(e) => {
                  handleChange("14", e);
                }}
                value={value14}
              />
            </span>,
          ],
        },
        {
          questionText:
            "15. When making a decision I focus on what’s right or wrong rather than what’s good or bad",
          answerOptions: [
            <span>
              <Rate
                style={{ margin: "30px" }}
                tooltips={desc}
                character={({ index }) => customIcons[index + 1]}
                onChange={(e) => {
                  handleChange("15", e);
                }}
                value={value15}
              />
            </span>,
          ],
        },
        {
          questionText:
            "16. I find it easy to empathize with a person even though experiences are very different from mine ",
          answerOptions: [
            <span>
              <Rate
                style={{ margin: "30px" }}
                tooltips={desc}
                character={({ index }) => customIcons[index + 1]}
                onChange={(e) => {
                  handleChange("16", e);
                }}
                value={value16}
              />
            </span>,
          ],
        },
        {
          questionText:
            "17. I value personal values, empathy and compassions over logic and data ",
          answerOptions: [
            <span>
              <Rate
                style={{ margin: "30px" }}
                tooltips={desc}
                character={({ index }) => customIcons[index + 1]}
                onChange={(e) => {
                  handleChange("17", e);
                }}
                value={value17}
              />
            </span>,
          ],
        },
        {
          questionText:
            "18. When I have unpleasant thoughts, I can’t easily put them out of my mind ",
          answerOptions: [
            <span>
              <Rate
                style={{ margin: "30px" }}
                tooltips={desc}
                character={({ index }) => customIcons[index + 1]}
                onChange={(e) => {
                  handleChange("18", e);
                }}
                value={value18}
              />
            </span>,
          ],
        },
      ],
    },
    {
      section: [
        {
          questionText: "19. I like to mix work and play",
          answerOptions: [
            <span>
              <Rate
                style={{ margin: "30px" }}
                tooltips={desc}
                character={({ index }) => customIcons[index + 1]}
                onChange={(e) => {
                  handleChange("19", e);
                }}
                value={value19}
              />
            </span>,
          ],
        },
        {
          questionText:
            "20. I usually prefer just doing what I feel like at any given moment instead of planning a particular daily routine",
          answerOptions: [
            <span>
              <Rate
                style={{ margin: "30px" }}
                tooltips={desc}
                character={({ index }) => customIcons[index + 1]}
                onChange={(e) => {
                  handleChange("20", e);
                }}
                value={value20}
              />
            </span>,
          ],
        },
        {
          questionText:
            "21. Sometimes I am careless because I am preoccupied, with many things on my mind",
          answerOptions: [
            <span>
              <Rate
                style={{ margin: "30px" }}
                tooltips={desc}
                character={({ index }) => customIcons[index + 1]}
                onChange={(e) => {
                  handleChange("21", e);
                }}
                value={value21}
              />
            </span>,
          ],
        },
        {
          questionText:
            "22. I prefer to do my chores before allowing myself to relax",
          answerOptions: [
            <>
              <span>
                <Rate
                  style={{ margin: "30px" }}
                  tooltips={desc}
                  character={({ index }) => customIcons[index + 1]}
                  onChange={(e) => {
                    handleChange("22", e);
                  }}
                  value={value22}
                />
              </span>
            </>,
          ],
        },
        {
          questionText: "23. I often make a backup plan for a backup plan",
          answerOptions: [
            <>
              <span>
                <Rate
                  style={{ margin: "30px" }}
                  tooltips={desc}
                  character={({ index }) => customIcons[index + 1]}
                  onChange={(e) => {
                    handleChange("23", e);
                  }}
                  value={value23}
                />
              </span>
            </>,
          ],
        },
        {
          questionText:
            "24. I like planning ahead to avoid rushing or procrastination",
          answerOptions: [
            <>
              <span>
                <Rate
                  style={{ margin: "30px" }}
                  tooltips={desc}
                  character={({ index }) => customIcons[index + 1]}
                  onChange={(e) => {
                    handleChange("24", e);
                  }}
                  value={value24}
                />
              </span>
            </>,
          ],
        },
      ],
    },
  ];
  // quiz section value
  const [currentQuestion, setCurrentQuestion] = useState(0);
  // onClick next button
  const handleSteps = (isStep) => {
    if (isStep) {
      const nextQuestion = currentQuestion + 1;

      if (nextQuestion < questionSection.length) {
        setCurrentQuestion(Math.abs(nextQuestion));
      }
    }
    if (!isStep) {
      const nextQuestion = currentQuestion - 1;
      if (nextQuestion < questionSection.length) {
        setCurrentQuestion(Math.abs(nextQuestion));
      }
    }
  };

  let sec = currentQuestion + 1;
  // submit button disable function
  useEffect(() => {
    if (currentQuestion === 3) {
      setSubmitDisabled({ disabled: false, color: "var(--gradient-text)" });
    } else {
      setSubmitDisabled({ disabled: true, color: "#fff" });
    }
  }, [currentQuestion]);

  return (
    <>
      {/* Start quiz button */}
      <Button
        shape="round"
        size="large"
        type="primary"
        style={{
          margin: "20px",
          height: "60px",
          width: "200px",
          background: "var(--gradient-text)",
        }}
        onClick={showModal}
      >
        Start quiz
      </Button>

      <Spin size="large" spinning={loading}>
        {/* Quiz popup modal */}
        <Modal
          title={"Quiz " + "Section " + sec + "/4"}
          visible={isModalVisible}
          footer={
            <span>
              <div className="footer">
                {/* back button */}
                <Button
                  danger
                  type="text"
                  size="large"
                  onClick={() => {
                    handleSteps(false);
                  }}
                >
                  🢀
                </Button>
                {/* reset button :resetting all values */}
                <Button shape="round" size="large" onClick={tryAginHandler}>
                  ⭮ Reset
                </Button>
                <Button
                  id="ButtonId"
                  shape="round"
                  size="large"
                  type="primary"
                  onClick={onSubmit}
                  style={{
                    marginLeft: "18px",
                    background: submitDisabled.color,
                  }}
                  disabled={submitDisabled.disabled}
                >
                  Submit
                </Button>
                <Button
                  danger
                  type="text"
                  size="large"
                  onClick={() => {
                    handleSteps(true);
                  }}
                >
                  🢂
                </Button>
              </div>
            </span>
          }
          onCancel={handleCancel}
          width={820}
          bodyStyle={{
            background: "var(--gradient-text)",
            height: "auto",
          }}
        >
          <div className="wrapper">
            {/* left side quiz section */}
            <div className="left">
              <Card style={quizCardStyles} bordered={false}>
                <div className="question-text">
                  {questionSection[currentQuestion].section[0].questionText}
                </div>
                <div className="answer-section">
                  {questionSection[currentQuestion].section[0].answerOptions}
                </div>
              </Card>
              <Card style={quizCardStyles} bordered={false}>
                {" "}
                <div className="question-text">
                  {questionSection[currentQuestion].section[1].questionText}
                </div>
                <div className="answer-section">
                  {questionSection[currentQuestion].section[1].answerOptions}
                </div>
              </Card>
              <Card style={quizCardStyles} bordered={false}>
                <div className="question-text">
                  {questionSection[currentQuestion].section[2].questionText}
                </div>
                <div className="answer-section">
                  {questionSection[currentQuestion].section[2].answerOptions}
                </div>
              </Card>
            </div>
            {/* Right side quiz section */}
            <div className="right">
              <Card style={quizCardStyles} bordered={false}>
                {" "}
                <div className="question-text">
                  {questionSection[currentQuestion].section[3].questionText}
                </div>
                <div className="answer-section">
                  {questionSection[currentQuestion].section[3].answerOptions}
                </div>
              </Card>
              <Card style={quizCardStyles} bordered={false}>
                <div className="question-text">
                  {questionSection[currentQuestion].section[4].questionText}
                </div>
                <div className="answer-section">
                  {questionSection[currentQuestion].section[4].answerOptions}
                </div>
              </Card>
              <Card style={quizCardStyles} bordered={false}>
                {" "}
                <div className="question-text">
                  {questionSection[currentQuestion].section[5].questionText}
                </div>
                <div className="answer-section">
                  {questionSection[currentQuestion].section[5].answerOptions}
                </div>
              </Card>
            </div>
          </div>
        </Modal>
      </Spin>
    </>
  );
}

export default Quize;
