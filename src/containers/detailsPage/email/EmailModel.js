import React, { useState } from "react";
import { Button, Modal } from "antd";
import { WechatOutlined } from "@ant-design/icons";
import "semantic-ui-css/semantic.min.css";
import { Form, Input, TextArea } from "semantic-ui-react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

function EmailModel({ Id }) {
  const [visible, setVisible] = useState(false);

  const SERVICE_ID = "service_re65jln";
  const TEMPLATE_ID = "template_er9n6bg";
  const USER_ID = "q5S7VZ_90VKpqO057";

  const handleOnSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        });
      }
    );
    console.log("value", e.target);
    e.target.reset();
  };
  return (
    <>
      <Button
        onClick={() => setVisible(true)}
        type="primary"
        shape="round"
        icon={<WechatOutlined />}
        size={"large"}
        style={{
          background: "var(--gradient-text)",
          borderColor: "var(--gradient-text)",
          marginLeft: "20px",
        }}
      >
        Contact
      </Button>
      <Modal
        title="Email"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={350}
        hight={200}
        footer={null}
      >
        <Form onSubmit={handleOnSubmit}>
          <Form.Field
            id="form-input-control-email"
            control={Input}
            label="Email"
            name="email"
            placeholder="Email…"
            required
            icon="mail"
            iconPosition="left"
          />
          <Form.Field
            id="form-input-control-type"
            control={Input}
            name="type"
            value={Id}
            type="hidden"
          />

          <Form.Field
            id="form-input-control-last-name"
            control={Input}
            label="Name"
            name="name"
            placeholder="Name…"
            required
            icon="user circle"
            iconPosition="left"
          />

          <Form.Field
            id="form-textarea-control-opinion"
            control={TextArea}
            label="Message"
            name="message"
            placeholder="Message…"
            required
          />
          <Button
            style={{
              background: "var(--gradient-text)",
              borderColor: "var(--gradient-text)",
              marginLeft: "20px",
            }}
            htmlType="submit"
            type="primary"
            shape="round"
          >
            Submit
          </Button>
        </Form>
      </Modal>
    </>
  );
}

export default EmailModel;
