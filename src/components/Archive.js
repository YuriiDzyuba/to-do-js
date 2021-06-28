import {AppComponent} from "@core/AppComponent";

export class Archive extends AppComponent {
    static className() {
        return 'archivedNotes'
    }

    toHTML() {
        return (
            `
        <div class="row todoItem mt-2">
       
        </div>
`
        )
    }
}
