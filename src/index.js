import './scss/index.scss'
import {App} from "./components/App";
import {getSortedNotes} from "./functions/getSortedNotes";

export let store = {
    availableCategory: ["", "idea", "Quote", "Random", "task"],
    _state: {
        "ddsf-dfsd-dfdererf-sdfsd": {
            id: "ddsf-dfsd-dfdererf-sdfsd",
            name: "Shopping list",
            category: "Quote",
            content: "buy this and that",
            date: new Date(),
            changedDate: "",
            isActive: false
        },
        "ddsf-d34d-dfqwedf-sdwewefsd": {
            id: "ddsf-d34d-dfqwedf-sdwewefsd",
            name: "Shopping list",
            category: "Random",
            content: "buy this and that",
            date: new Date(),
            changedDate: "",
            isActive: false
        },
        "ddsf-dftyr34-dfdf-sdfsd": {
            id: "ddsf-dftyr34-dfdf-sdfsd",
            name: "Shopping list",
            category: "task",
            content: "buy this andere that",
            date: new Date(),
            changedDate: "",
            isActive: true
        }
    },

    deleteNote(id) {
        let stateCopy = {...this._state}
        delete stateCopy[id]
        this.setState(stateCopy)

    },

    updateStatus(id, key) {
        let stateCopy = {...this._state}
        stateCopy[id][key]= !stateCopy[id][key]
        this.setState(stateCopy)
    },

    addNewNote(form) {
        let newNoteId = `regs-${Math.floor(Math.random() * 100000)}-dfgf`
        let stateCopy = {...this._state, [newNoteId]:{
                id: newNoteId,
                name: form.name,
                category: form.category,
                content: form.content,
                date: new Date(),
                changedDate:[form.changedDate],
                isActive: true
            }}

        this.setState(stateCopy)
    },

    updateData(id, form) {
        let stateCopy = {...this._state}
        let newDate = [stateCopy[id].changedDate[0], form.changedDate]
        console.log(!!stateCopy[id].changedDate,"stateCopy[id].changedDate")
        stateCopy[id]= {...stateCopy[id],
            name: form.name,
            category: form.category,
            content: form.content,
            changedDate: newDate,
        }
        this.setState(stateCopy)
    },

    setState(newState) {
        this._state = newState
        renderApp()
    },

    getState() {
        return {...this._state}
    }
}

const renderApp = () =>{
    console.log(store.getState(),"state")
    App("#app", {state: getSortedNotes(store.getState())})
}

renderApp()
