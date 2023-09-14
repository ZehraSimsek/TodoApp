import { Table } from 'reactstrap'
import { useState } from 'react';
// import './App.css';
import './Container/Ekran.css'

function App() {

  const [title, setTitle] = useState([]);
  const [note, setNote] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const [checked, setChecked] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (note === "") {
      return false;
    }
    setTitle([...title, note]);
    setNote("");
  };

  const onChangeText = (e) => {
    setNote(e.target.value);
  };

  const onDestroy = (e) => {
    setTitle([]);
    setChecked([]);
  };

  const onCheck = (index) => {
    const newChecked = [...checked];
    newChecked[index] = !newChecked[index];
    setChecked(newChecked);
  };
  
  const onAllChecked = (isChecked) => {
    const newChecked = Array(checked.length).fill(isChecked);
    setChecked(newChecked);
  };
  

  const onDestroySpan = (index) => {
    const newTitle = [...title];
    newTitle.splice(index, 2);
    setTitle(newTitle);
  };


  return (
    <>
      <h1>todo list</h1>
      <Table className='todoapp'>
        <tr>
          <td>
            <form onSubmit={onSubmit}>
              <input className='input' value={note} placeholder='What`s in your mind?' onChange={onChangeText} autoFocus />
              <input class="toggle-all" type="checkbox" onClick={()=>onAllChecked}/>
              <label for="toggle-all">
                Mark all as complete
              </label>
            </form>
          </td>
        </tr>

        {isVisible &&
          title.map((title, index) => (
            <tr key={index} className='main'>
              <td>
                <input className='toggle' type="checkbox" onChange={() => onCheck(index)} />
                <span className={checked[index] ? 'checked' : ''}>{title}
                </span>
                <button className='destroy' onClick={() => onDestroySpan(index)}>X</button>
              </td>
            </tr>

          ))}

        <footer className='footer'>
          <span className='todo-count'>{title.length} items left.  </span>


          <ul class="filters">
            <li>
              <a href="#/" class="selected">All</a>
            </li>
            <li>
              <a href="#/">Active</a>
            </li>
            <li>
              <a href="#/">Completed</a>
            </li>
            <button className='button' onClick={onDestroy}>X</button>
          </ul>

        </footer>




      </Table>

    </>
  );
}

export default App;
