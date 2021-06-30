import './scss/index.scss'
import {App} from "./components/App";
import {getSortedNotes} from "./functions/getSortedNotes";

export let store = {
    availableCategory: ["", "idea", "Quote", "Random", "task"],
    _state: {
        "ddsf-dfsd-dfdererf-sdfsd": {
            id: "ddsf-dfsd-dfdererf-sdfsd",
            name: "Where does it come from",
            category: "Quote",
            content: "buy this and that",
            date: new Date(),
            changedDate: "",
            isActive: true
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
            name: "I get some?",
            category: "Quote",
            content: "er 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going thro",
            date: new Date(),
            changedDate: "",
            isActive: true
        },
        "ddsf-dfretesd-dfdererrtretf-sdfsd": {
            id: "ddsf-dfretesd-dfdererrtretf-sdfsd",
            name: "Shopping list",
            category: "Quote",
            content: "buy this and that",
            date: new Date(),
            changedDate: "",
            isActive: false
        },
        "ddsf-d34d-dfqertwedf-sdwewertrfsd": {
            id: "ddsf-d34d-dfqertwedf-sdwewertrfsd",
            name: "standard Lorem",
            category: "Random",
            content: "search for 'lorem ipsum' will uncover many web sites still in their infancy. Vario",
            date: new Date(),
            changedDate: "",
            isActive: true
        },
        "ddsf-dftertryr34-dfdf-sdfrterrsd": {
            id: "ddsf-dftertryr34-dfdf-sdfrterrsd",
            name: "What is Lorem",
            category: "task",
            content: "m passages, and more recently with desktop publishing software like Aldus PageMake",
            date: new Date(),
            changedDate: "",
            isActive: true
        },
        "ddsf-dftertryr34-dferrwedf-sdfrterrsd": {
            id: "ddsf-dftertryr34-dferrwedf-sdfrterrsd",
            name: "geMaker includi",
            category: "Random",
            content: " and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Go",
            date: new Date(),
            changedDate: "",
            isActive: false
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
        let newDate=[]
        if (stateCopy[id].changedDate){
            newDate = stateCopy[id].changedDate
            newDate[1]=form.changedDate
        } else {
            newDate[0]=form.changedDate
        }

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
    App("#app", {state: getSortedNotes(store.getState())})
}

renderApp()
