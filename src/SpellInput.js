import React from "react";
import "./App.css";
import firebase from './firebase'
import $ from 'jquery'

export const SpellInput = ({ spell }) => {
  
  const [name, setName] = React.useState(spell.name);
  const [type, setType] = React.useState(spell.type);

  const  onUpdate = () => {
    console.log(`.${spell.id}v`)
    $(`.${spell.id}v`).addClass('hide')
    $(`.${spell.id}hidden`).removeClass('hide')
  }

  const onSave = () => {
    const db = firebase.firestore()
    db.collection('spells').doc(spell.id).set({...spell, name, type})
    $(`.${spell.id}v`).removeClass('hide')
    $(`.${spell.id}hidden`).addClass('hide')
  }

  const onDelete = () => {
    const db = firebase.firestore()
    db.collection('spells').doc(spell.id).delete()
  }

  return (
    <>
      <td style={{width:"30%"}}>
        <p class={`${spell.id}v`}>{name}</p>
        <input
        class={`${spell.id}hidden hide listElement`}
        value={name}
        onChange={e => {
          setName(e.target.value);
        }}
      /></td>
      <td style={{width:"40%"}}>
      <p class={`${spell.id}v`}>{type}</p>
        <input
        class={`${spell.id}hidden hide listElement`}
        value={type}
        onChange={e => {
          setType(e.target.value);
        }}
      /></td>
      <td style={{width:"30%"}}>
      <button class={`${spell.id}hidden hide save`} onClick={onSave}>Save</button>
        <button class={`${spell.id}v update`} onClick={onUpdate}>Update</button>
      <button class="delete" onClick={onDelete}>Delete</button></td>
    </>
  );
};