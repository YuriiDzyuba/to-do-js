import {AppComponent} from "@core/AppComponent";

export class AllNotesHeader extends AppComponent {
    static className() {
        return 'allNotesHeader'
    }

    toHTML() {
        return (
            ` 
            <div class="row header">
                <div class="col-6">
                  <h6>Note category</h6>
                </div>
                <div class="col-3">
                    <h6>Active</h6>
                </div>
                <div class="col-3">
                    <h6>Archived</h6>
                </div>
            </div>
`
        )
    }
}
