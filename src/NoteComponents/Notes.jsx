import React, { Component } from 'react';
import './Notes.css';

class Notes extends Component {
    constructor(props) {
        super(props);
        this.noteContent = this.props.noteContent;
        this.noteId = this.props.noteId;
    }

    handleRemove(id)
    {
        alert('remove: '+ id);
    }

    render() {
        return (<div className="Note">
            <span
            onClick={()=> this.handleRemove(this.noteId)}
            >&times;</span>
            <p>{this.noteContent}</p>
        </div>
        )
    }
}
export default Notes;