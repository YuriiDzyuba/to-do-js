import {AppComponent} from "@core/AppComponent";

export class ActiveNotesHeader extends AppComponent {

    static className() {
        return 'activeNoteHeader'
    }

    toHTML() {
        return (`
            <div class="row header mt-3">
                <div class="col-2">
                    <h6>Name</h6>
                </div>
                <div class="col-2">
                    <h6>Created</h6>
                </div>
                <div class="col-2">
                    <h6>Category</h6>
                </div>
                <div class="col-2">
                    <h6>Content</h6>
                </div>
                <div class="col-2">
                    <h6>Dates</h6>
                </div>
                <div class="col-2 text-end ">
                    <img alt="" src={props.isNotesActive ? editItem : null}/>
                    <img alt="" src={props.isNotesActive ? archiveIcon : unArchiveIcon}/>
                    <img alt="" src={trashIcon}/>
                </div>
         </div>
    `);
    }
}


