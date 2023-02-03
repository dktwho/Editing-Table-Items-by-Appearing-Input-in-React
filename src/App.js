import { useState } from 'react';
import './App.css';
import { initNotes  } from './data';


function App() {
  const [ notes, setNotes] = useState(initNotes)

  const rows = notes.map((note) => {
    const cells = note.fields.map((field) => {
      let elem;

      if(!field.isEdit) {
        elem =<span onClick={() => startEdit(note.id, field.name)} >{field.value}</span>
      } else {
        elem = <input value={field.value} onChange={(e) => changeCell(note.id, field.name, e)} onBlur={() => endEdit(note.id, field.name)}/>
      }
      return <td key={field.name}>{elem}</td>
    })
    return <tr key={note.id}>{cells}</tr>
  })

    function startEdit(id, name) {
      setNotes(notes.map(note => {
        if(note.id === id) {
          const fields = note.fields.map(field => {
            if(field.name === name) {
              return {...field, isEdit: true}
            } else {
              return field
            }
          })
          return {id, fields}
        } else {
          return note
        }
      }))
    }

    function endEdit(id, name) {
      setNotes(notes.map(note => {
        if (note.id === id) {
          const fields = note.fields.map(field => {
            if (field.name === name) {
              return {...field, isEdit: false}
            } else {
              return field;
            }
          });
          return {id, fields};
        } else {
          return note;
        }
      }));
    }
    
    function changeCell(id, name, event) {
      setNotes(notes.map(note => {
        if (note.id === id) {
          const fields = note.fields.map(field => {
            if (field.name === name) {
              return {...field, value: event.target.value}
            } else {
              return field;
            }
          });
          return {id, fields};
        } else {
          return note;
        }
      }));
    }



  return (
    <div className="App">
      <table>
        <tbody>
          {rows}
        </tbody>
      </table>
    </div>
  );
}

export default App;
