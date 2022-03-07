import "./styles.css";
import News from "./components/News";
import { NewsProvider } from "./News-context";
export default function App() {
  return (
    <div className="App">
      <NewsProvider>
        <News />
      </NewsProvider>
    </div>
  );
}
