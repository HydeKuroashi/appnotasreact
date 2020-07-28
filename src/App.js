import React, { Component } from 'react';
import './App.css';

import Notes from './NoteComponents/Notes';
import NotesForm from './NoteForm/NotesForm.jsx';
import firebase from 'firebase';
//import { DB_CONFIG } from './config/config'
import 'firebase/database';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [
        // { noteId: 1, noteContent: 'note 1' },
        // { noteId: 2, noteContent: 'note 2' }
      ]
    };
    const DB_CONFIG = {
      apiKey: "AIzaSyAPNP9RkGlSBQaPfJePLUwreYN0KEvuAx8",
      authDomain: "notesreactbd.firebaseapp.com",
      databaseURL: "https://notesreactbd.firebaseio.com",
      projectId: "notesreactbd",
      storageBucket: "notesreactbd.appspot.com",
      messagingSenderId: "297414945611",
      appId: "1:297414945611:web:0e4779bbeb785b128316ce",
      measurementId: "G-81T0BDS7EG"
    };
    if (!firebase.apps.length) {

      this.app = firebase.initializeApp(DB_CONFIG);
      this.db = this.app.database().ref().child('notes');
      const { notes } = this.state;
      
      this.db.on('child_added', snap => {
        notes.push({
          noteId: snap.key,
          noteContent: snap.val().noteContent
        })
        
        this.setState({ notes });
        
      });
      
    }

    this.addNote = this.addNote.bind(this);
  }


  componentDidMount() {

  }
  removeNote() { }

  addNote(note) {
    // let { notes } = this.state;
    // notes.push({
    //   noteId: note.length + 1,
    //   noteContent: note
    // });
    this.db.push().set({noteContent:note})
    //this.setState({ notes: notes });

  }


  render() {
    return (
      <div className="notesContainer">
        <div className="notesHeader">
          <h1>React in firebase App</h1>
        </div>
        <div className="notesBody">
          <ul>
            {this.state.notes.map(note => {
              return (
                <Notes
                  noteContent={note.noteContent}
                  noteId={note.noteId}
                  key={note.noteId}
                ></Notes>
              )
            })}
          </ul>
        </div>
        <div className="notesFooter">
          <NotesForm addNote={this.addNote} ></NotesForm>
        </div>

      </div>
    );
  }
}

export default App;
