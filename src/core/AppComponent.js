import {store} from "../index";

export class AppComponent {
    constructor(root, data = [], type = "") {
        if (!root) {
            throw new Error('No $root provided for DomListener')
        }
        this.root = root
        this.data = data
        this.type = type
    }

    onSubmit(event) {
        event.preventDefault();
        if (this.data.id) {
            if (event.target.id === `form-${this.data.id}`) {
                let form = {
                    category: event.target.elements["select"].value,
                    changedDate: event.target.elements["date"].value,
                    name: event.target.elements["name"].value,
                    content: event.target.elements["content"].value,
                }
                store.updateData(this.data.id, form)
            }
        } else {
            if (event.target.id === `form-${this.data.id}`) {
                let form = {
                    category: event.target.elements["select"].value,
                    changedDate: event.target.elements["date"].value,
                    name: event.target.elements["name"].value,
                    content: event.target.elements["content"].value,
                }

                store.addNewNote(form)
            }
        }
    }

    onClick(event) {
        if (event.target.id) {
            if (event.target.id === `del-${this.data.id}`) {
                store.deleteNote(this.data.id)
            } else if (event.target.id === `arch-${this.data.id}`) {
                store.updateStatus(this.data.id, "isActive")
            } else if (event.target.id === `ed-${this.data.id}`) {
                let editContainer = this.root.querySelector(".form")
                if (editContainer.classList.contains("d-none")) {
                    editContainer.classList.remove("d-none")
                } else editContainer.classList.add("d-none")

            }
        }
    }

    addDomListeners() {
        this.root.addEventListener("click", this.onClick.bind(this))
        let form = this.root.querySelector(".form")
        form.addEventListener("submit", this.onSubmit.bind(this))
    }

    toHTML() {
        return ""
    }

}
