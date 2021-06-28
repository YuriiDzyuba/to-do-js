export let store = {
    _state: {
        // emptyNote: {
        //     id: "emptyNote",
        //     name: "",
        //     category: "",
        //     content: "",
        //     date: "",
        //     changedDate: "",
        // },
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
        console.log(stateCopy, "fhfhfhfhfh")
        delete stateCopy[id]
        console.log(stateCopy, "fhfhfhfhfh")
        this.setState(stateCopy)

    },

    setState(newState) {
        console.log("fgfdfgdgdgdgdgdfgdfgdgdgdgdgf")
        this._state = newState
        renderApp()
    },

    getState() {
        return {...this._state}
    }
}
