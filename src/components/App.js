import { Route, Routes } from "react-router-dom";
import {
  IconAtom,
  IconBntuBuilding,
  IconDocument,
  IconH,
  IconPrinter,
  IconQuotes,
  IconUserEdit,
} from "../assets/icons/icons";
import BtnCircle from "./BtnCircle/BtnCircle";
import Layout from "./layout/Layout";
import Title from "./Title/Title";

const basePath = "library-bntu";

function App() {
  return (
    <Layout>
      <Routes>
        <Route
          path={`${basePath}`}
          element={
            <div>
              <Title>Hello Slava</Title>
              <BtnCircle>
                <IconDocument />
              </BtnCircle>
              <BtnCircle>
                <IconUserEdit />
              </BtnCircle>
              <BtnCircle>
                <IconBntuBuilding />
              </BtnCircle>
              <BtnCircle>
                <IconQuotes />
              </BtnCircle>
              <BtnCircle>
                <IconAtom />
              </BtnCircle>
              <BtnCircle>
                <IconH />
              </BtnCircle>
              <BtnCircle>
                <IconPrinter />
              </BtnCircle>
            </div>
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;
