import {AppComponent} from "@core/AppComponent";
import {store} from "../index"

export class NewNoteForm extends AppComponent {
    constructor(root, data, type) {
        super(root, data, type);
    }

    static className() {
        return 'newNoteForm'
    }

    onClick(event) {
        if (event.target.id) {
            if (event.target.id === `addNewNote`) {
                let editContainer = this.root.querySelector(".form")
                if (editContainer.classList.contains("d-none")) {
                    editContainer.classList.remove("d-none")
                } else editContainer.classList.add("d-none")
            } else if (event.target.id === `arch-${this.data.id}`) {
                store.updateStatus(this.data.id, "isActive")
            } else if (event.target.id === `ed-${this.data.id}`) {


            }
        }
    }

    toHTML() {
        console.log(this.root.querySelector("#ed"), "this.root")
        return (
            `
        <form id=form-${this.data.id} class="row form d-none">
          <div class="row editNote">
            <div class="col-12 text-center">
                <h6>Create new note</h6>
            </div>
                <div class="col-4">
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">Category :</span>
                        <select id="select" class="form-select" aria-label="Default select example">
                              <option value="Quote">Quote</option>
                              <option value="idea">idea</option>
                              <option value="Random">Random</option>
                              <option value="task">task</option>
                        </select>
                    </div>
                </div>
                <div class="col-8">
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">Name</span>
                        <input type="text"
                               id="name"
                               class="form-control"
                               placeholder=""
                               aria-describedby="basic-addon1"
                         
                        />
                    </div>
                </div>
                <div class="col-4">
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">end date</span>
                        <input 
                            type="date" 
                            id="date" 
                            name="trip-start"
                            value=""
                            id="date"
                        >
                    </div>
                </div>
                <div class="col-8">
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">content</span>
                        <textarea type="text"
                                  id="content"
                                  class="form-control"
                                  placeholder=""
                                  aria-label="Username"
                                  aria-describedby="basic-addon1"
                                 
                        ></textarea>
                    </div>
                </div>
                <div class="col-12 d-grid justify-content-center mt-2">
                    <button
                        type="submit"
                        class="btn btn-secondary"
                     
                    >Save Note
                    </button>
                </div>
        </div>
      </form>  
      <div class="col-12 d-grid justify-content-end m-2">
              <button
                        type="button"
                        class="btn btn-secondary"
                        id="addNewNote"
                     
              >Add Note
              </button>
      </div>
        
        
        
        
        
        
        
        
        
        
        
`


        )
    }

    init() {
        this.addDomListeners()
    }
}
