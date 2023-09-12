import './App.css';
import { Table, Row } from 'reactstrap'
import { useState } from 'react';

function App() {

  const [title, setTitle] = useState([]);
  const [note, setNote] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setTitle([...title, note]);
    setNote("");
  };

  const onChangeText = (e) => {
    setNote(e.target.value);
  };

  return (
    <>
      <h1>TODO</h1>
      <Table>
        <Row>
          <form onSubmit={onSubmit}>
            <input className='input' value={note} placeholder='What`s in your mind?' onChange={onChangeText} />
            <button onClick={onSubmit}>+</button>
          </form>
        </Row>

        <Row>
          {
            title.map((title, index) => {
              return (
                <li key={index}>
                  <input type="checkbox" />
                  <span>{title}</span>
                </li>
              )
            })
          }
        </Row>
      </Table>

    </>
  );
}

export default App;
