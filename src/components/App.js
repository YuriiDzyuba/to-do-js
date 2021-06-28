import {CategoryNote} from "./CategoryNote";
import {AllNotesHeader} from "./AllNotesHeader";
import {Note} from "./Note";
import {ArchivedNotesHeader} from "./ArchivedNotesHeader";
import {ActiveNotesHeader} from "./ActiveNotesHeader";
import {NewNoteForm} from "./NewNoteForm";

export const App = (selector, obj) => {
    let app = document.querySelector(selector)
    let activeNotes = obj.state.byGroup.active || []
    let archivedNotes = obj.state.byGroup.archived || []
    let sortedNotes = obj.state.byCategory
    let state = obj.state
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

    const getActiveNotesSection =() => {

        const container = document.createElement("div")
        let note = document.createElement("div")
        note.classList.add(ActiveNotesHeader.className())
        const header = new ActiveNotesHeader(note)
        note.innerHTML = header.toHTML()
        container.append(note)

        activeNotes.forEach(itemState => {
            let note = document.createElement("div")
            note.classList.add(Note.className())
            const activeNoteItem = new Note(note, itemState, "active")
            domElements.push(activeNoteItem)
            note.innerHTML = activeNoteItem.toHTML()
            container.append(note)
        })
        return container
    }

    const getArchiveNotesSection =() =>  {

        const container = document.createElement("div")
        let note = document.createElement("div")

        note.classList.add(ArchivedNotesHeader.className())
        const header = new ArchivedNotesHeader(note)
        note.innerHTML = header.toHTML()
        container.append(note)

        archivedNotes.forEach(itemState => {
            let note = document.createElement("div")
            note.classList.add(Note.className())
            const archiveNoteItem = new Note(note, itemState, "archived")
            domElements.push(archiveNoteItem)
            note.innerHTML = archiveNoteItem.toHTML()
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
        root.append(getActiveNotesSection())
        root.append(getNewNoteForm())
        root.append(getSortedNotes())
        root.append(getArchiveNotesSection())
        return root
    }

    const clearApp= () => {
        console.log(app,"app()")
        if (app.firstChild) {
            app.removeChild(app.firstChild)
        }
        render()
    }

    const render = () => {
        console.log(state,"state()")
        app.append(getRoot())
        console.log(domElements, "domElements")
        domElements.forEach(note => note.init())

    }

    return clearApp()
}
