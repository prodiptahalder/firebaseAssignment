import React from "react";
import "./App.css";
import firebase from "./firebase";
import { SpellInput } from "./SpellInput";

function App() {
  const [spells, setSpells] = React.useState([]);
  const [newSpellName, setNewSpellName] = React.useState();
  const [newSpellType, setNewSpellType] = React.useState();
  const [refresh, setRefresh] = React.useState(false);

  const fetchData = async () => {
    const db = firebase.firestore();
    const data = await db.collection("spells").get();
    setSpells(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    setRefresh(true)
  };

  React.useEffect(() => {
    fetchData();
    setRefresh(false)
  }, [refresh]);

  const onCreate = () => {
    const db = firebase.firestore();
    db.collection("spells").add({ name: newSpellName, type: newSpellType });
    setRefresh(true)
    setNewSpellName("")
    setNewSpellType("")
  };

  return (<div>
    <h2>Spell-tionary</h2>
    <table class="neo-box">
      <tbody>
      <tr>
        <th style={{width:"30%"}}>Name</th>
        <th style={{width:"40%"}}>Description</th>
      </tr>
      
      <tr>
        <td style={{width:"30%"}}>
        <input
        value={newSpellName}
        onChange={e => setNewSpellName(e.target.value)}
      />
        </td>
        <td style={{width:"40%"}}>
        <input
        value={newSpellType}
        onChange={e => setNewSpellType(e.target.value)}
      />
        </td>
        <td style={{width:"30%"}}><button class="create" onClick={onCreate}>Create</button></td>
      </tr>
      <br></br>
      {spells.map(spell => (
        <tr key={spell.id}>
          <SpellInput spell={spell} />
        </tr>
      ))}
    </tbody>
    </table></div>
  );
}

export default App;
