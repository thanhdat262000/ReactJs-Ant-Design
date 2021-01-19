import logo from "./logo.svg";
import "./App.css";
import "antd/dist/antd.css";

import { Layout } from "antd";
import AppHeader from "./components/common/header";

const { Header, Content } = Layout;
function App() {
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader />
      </Header>
      <Content></Content>
    </Layout>
  );
}

export default App;
