import { FC, useCallback, useEffect, useState } from "react";
import "./styles.css";

const App: FC = () => {
  const [counter, setCounter] = useState(10);

  useEffect(() => {
    console.log("Only when starts component");
  }, []);

  const fn = useCallback(() => {
    console.log("counter -> ", counter);
    setCounter(counter + 1);
  }, []);

  useEffect(() => {
    console.log("update counter -> ", counter);
  }, [counter]);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="content">
          <h1>Live Hall Cast</h1>
          <div className="counter">
            <div>
              <span>{counter}</span>
              <div className="buttons">
                <button onClick={() => setCounter((prev) => prev - 1)}>
                  -
                </button>
                &nbsp;
                <button onClick={() => setCounter((prev) => prev + 1)}>
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
