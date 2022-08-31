import React from "react";
import ArchiveButton from "./ArchiveButton";
import DeleteButton from "./DeleteButton";

function NoteItemAction({id, onArchive, onDelete, archived}) {
    return(
        <div className="note-item__action">
            <DeleteButton id={id} onDelete={onDelete} />
            <ArchiveButton id={id} onArchive={onArchive} archived={archived}/>
        </div>
    )
}

export default NoteItemAction;