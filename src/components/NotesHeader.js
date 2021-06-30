import {AppComponent} from "@core/AppComponent";
import trash from '../img/icons/trashWhite.svg';
import download from '../img/icons/downloadWhite.svg';
import upload from '../img/icons/uploadWhite.svg';
import edit from '../img/icons/editWhite.svg';

export class NotesHeader extends AppComponent {

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
                    <img 
                    alt="" 
                    src=${this.type==="archived"? "" : edit}
                    />
                    <img 
                    alt="" 
                    src=${this.type==="archived"? upload : download}
                    />
                    <img 
                    alt="" 
                    src=${trash}
                    />
                </div>
         </div>
    `);
    }
}


