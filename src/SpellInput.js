import React from "react";
import "./App.css";
import firebase from './firebase'
import $ from 'jquery'

export const SpellInput = ({ spell }) => {
  
  const [name, setName] = React.useState(spell.name);
  const [type, setType] = React.useState(spell.type);

  const  onUpdate = () => {
    $(`.${name}v`).addClass('hide')
    $(`.${name}hidden`).removeClass('hide')
  }

  const onSave = () => {
    const db = firebase.firestore()
    db.collection('spells').doc(spell.id).set({...spell, name, type})
    $(`.${name}v`).removeClass('hide')
    $(`.${name}hidden`).addClass('hide')
  }

  const onDelete = () => {
    const db = firebase.firestore()
    db.collection('spells').doc(spell.id).delete()
  }

  return (
    <>
      <td style={{width:"30%"}}>
        <p class={`${name}v`}>{name}</p>
        <input
        class={`${name}hidden hide listElement`}
        value={name}
        onChange={e => {
          setName(e.target.value);
        }}
      /></td>
      <td style={{width:"40%"}}>
      <p class={`${name}v`}>{type}</p>
        <input
        class={`${name}hidden hide listElement`}
        value={type}
        onChange={e => {
          setType(e.target.value);
        }}
      /></td>
      <td style={{width:"30%"}}>
      <button class={`${name}hidden hide save`} onClick={onSave}>Save</button>
        <button class={`${name}v update`} onClick={onUpdate}>Update</button>
      <button class="delete" onClick={onDelete}>Delete</button></td>
    </>
  );
};