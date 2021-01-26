import "./App.css";
import "antd/dist/antd.css";

import { Layout } from "antd";
import AppHeader from "./components/common/header";
import AppHome from "./components/views/home";
import { Footer } from "antd/lib/layout/layout";
import AppFooter from "./components/common/footer";

const { Header, Content } = Layout;
function App() {
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader />
      </Header>
      <Content>
        <AppHome />
      </Content>
      <Footer>
        <AppFooter />
      </Footer>
    </Layout>
  );
}

export default App;
