import {CategoryNote} from "./CategoryNote";
import {AllNotesHeader} from "./AllNotesHeader";
import {Note} from "./Note";
import {NewNoteForm} from "./NewNoteForm";
import {NotesHeader} from "./NotesHeader";

export const App = (selector, obj) => {
    let app = document.querySelector(selector)
    let activeNotes = obj.state.byGroup.active || []
    let archivedNotes = obj.state.byGroup.archived || []
    let sortedNotes = obj.state.byCategory
    let domElements = []

    const getSortedNotes =() => {
        const container = document.createElement("div")

        let note = document.createElement("div")
        note.classList.add(AllNotesHeader.className())
        const header = new AllNotesHeader(note)
        note.innerHTML = header.toHTML()
        container.append(note)

        for (let key in sortedNotes) {
            let note = document.createElement("div")
            note.classList.add(CategoryNote.className())
            const catNoteIten = new CategoryNote(note, {category: key, ...sortedNotes[key]})
            note.innerHTML = catNoteIten.toHTML()
            container.append(note)
        }
        return container
    }

    const getNoteItems = (notesArr,type) => {

        const container = document.createElement("div")
        let note = document.createElement("div")

        note.classList.add(NotesHeader.className())
        const header = new NotesHeader(note,[],type)
        note.innerHTML = header.toHTML()
        container.append(note)

        notesArr.forEach(itemState => {
            let note = document.createElement("div")
            note.classList.add(Note.className())
            const noteItem = new Note(note, itemState, type)
            domElements.push(noteItem)
            note.innerHTML = noteItem.toHTML()
            container.append(note)
        })
        return container
    }

    const getNewNoteForm =() =>{
        let container = document.createElement("div")
        let note = document.createElement("div")
        note.classList.add(NewNoteForm.className())
        const newNoteForm = new NewNoteForm(note)
        domElements.push(newNoteForm)
        note.innerHTML = newNoteForm.toHTML()
        container.append(note)
        return container
    }

    const getRoot = () =>  {
        const root = document.createElement("div")
        root.classList.add("container")
        root.append(getNoteItems(activeNotes,"active"))
        root.append(getNewNoteForm())
        root.append(getSortedNotes())
        root.append(getNoteItems(archivedNotes,"archived"))
        return root
    }

    const clearApp= () => {
        if (app.firstChild) {
            app.removeChild(app.firstChild)
        }
        render()
    }

    const render = () => {
        app.append(getRoot())
        domElements.forEach(note => note.init())

    }

    return clearApp()
}
