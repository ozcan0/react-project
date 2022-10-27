import { Routes, Route  } from "react-router-dom";
import Header from "./Components/Header";
import { Layout } from 'antd';
import { routeConfig } from "./routes/routeConfig";
import 'antd/dist/antd.min.css';


function App() {
  
  return (
  <>
    <Layout className="layout">
        <Header />
        <Routes>
          {
            routeConfig && routeConfig.map(({path,element}, key) => {
              return <Route key={key} path={path} element={element} />
            })
          }
        </Routes>
    </Layout>
  </>
  );
}

export default App;