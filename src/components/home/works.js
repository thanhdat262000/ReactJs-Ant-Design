import React, { useState } from "react";
import { Modal, Button } from "antd";
const AppWorks = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div id="works" className="block worksBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>How it works</h2>
          <p>Something here that randomly appeared.</p>
        </div>
        <div className="contentHolder">
          <Button onClick={showModal}>
            <i className="fas fa-play"></i>
          </Button>
        </div>

        <Modal
          title="Basic Modal"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
        >
          <iframe
            title="Music video"
            width="100%"
            height="350"
            src="https://www.youtube.com/watch?v=DxNu1tVksqM&list=PLiUrl-SQRR7LM5cw7azA2H_FZwFx2UgkI&index=7"
          ></iframe>
        </Modal>
      </div>
    </div>
  );
};

export default AppWorks;
