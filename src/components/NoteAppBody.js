import React from "react";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";

function NoteAppBody({notes, archived, onDelete, onArchive, onAdd}) {
    return (
        <div className="note-app__body">
            <NoteInput addNote={onAdd}/>
            <h2>Active Notes</h2>
            <NoteList notes={notes} onDelete={onDelete} onArchive={onArchive}/>
            <h2>Archived Notes</h2>
            <NoteList notes={archived} onDelete={onDelete} onArchive={onArchive}/>
        </div>
    )
}

export default NoteAppBody;