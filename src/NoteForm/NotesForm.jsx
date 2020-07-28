import React, { Component } from 'react';
import './NotesForm.css';


class NotesForm extends Component {
    constructor() {
        super();
        this.addNote = this.addNote.bind(this)
    }

    addNote() {
        this.props.addNote(this.textInput.value);
        this.textInput.value = "";
        this.textInput.focus(); 
    }

    render() {
        return (
            <div className="NotesForm">
                <input 
                    ref={input =>{this.textInput = input;}}
                    type="text"
                    placeholder="Write a Note"
                ></input>
                <button
                    onClick={this.addNote}
                >Add Note</button>


            </div>
        )
    }

}

export default NotesForm;