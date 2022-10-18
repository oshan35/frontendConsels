import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import { Input } from "semantic-ui-react";
import { Button, Modal } from "antd";
import { BookOutlined } from "@ant-design/icons";
import "../detailsPage.css";
import uploadIcon from "./../../../assets/Upload.svg";
function RegisterModel() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button
        onClick={() => setVisible(true)}
        type="primary"
        shape="round"
        icon={<BookOutlined />}
        size={"large"}
        style={{
          background: "var(--gradient-text)",
          borderColor: "var(--gradient-text)",
          marginLeft: "20px",
        }}
      >
        Register As a Volunteer
      </Button>
      <Modal
        title="Register"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={350}
        hight={200}
        footer={null}
      >
        <div className="registerFrom">
          <form
            action="https://getform.io/f/b4db1f69-3c42-4bfd-88d9-f0704f139518"
            method="POST"
            enctype="multipart/form-data"
          >
            <div class="image-upload">
              <label for="file-input">
                <div>
                  <img src={uploadIcon} alt="icon"/>
                  <h4>Click or drag file to this area to upload</h4>
                </div>
              </label>

              <input
                id="file-input"
                type="file"
                name="file"
                accept="application/pdf"
              />
            </div>
            <Input type="submit" value="Submit" />
          </form>
        </div>
      </Modal>
    </>
  );
}

export default RegisterModel;
