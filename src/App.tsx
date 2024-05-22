import { FC, useCallback, useEffect, useState } from "react";
import "./styles.css";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

const App: FC = () => {
  const [counter, setCounter] = useState(0);

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    console.log("Only when starts component");
  }, []);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((data) => data.json())
      .then((data) => {
        setUsers(data);
      });
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
                <button
                  disabled={counter == 0}
                  onClick={() => setCounter((prev) => prev - 1)}
                >
                  -
                </button>
                &nbsp;
                <button onClick={() => setCounter((prev) => prev + 1)}>
                  +
                </button>
              </div>
            </div>
          </div>

          <div className="list">
            <h1>Usuários</h1>

            <table border={1}>
              <tr>
                <th>Nome</th>
                <th>Telefone</th>
              </tr>

              {users.map((user) => {
                return (
                  <tr>
                    <td>{user.name}</td>
                    <td>{user.phone}</td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
