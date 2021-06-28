import {AppComponent} from "@core/AppComponent";
import {getNewDate} from "../functions/getNewDate";

export class Note extends AppComponent {
    constructor(root, data, type) {
        super(root, data, type);
    }

    static className() {
        return 'activeNote'
    }


    toHTML() {
        console.log(this.data.changedDate,"this.data.changedDate")
        return (
            `
        <div class="row todoItem mt-2">
            <div class="col-2 todoItem__desc">
                <span>
                <p><img alt="" class="todoItem__img" src=""/>${this.data.name}</p>
                </span>
            </div>
            <div class="col-2 todoItem__desc">
             <p>${this.data.date.getDate()}/${this.data.date.getMonth()+1}/${this.data.date.getFullYear()}</p>
            </div>
            <div class="col-2 todoItem__desc">
                <p>${this.data.category}</p>
            </div>
            <div class="col-2 todoItem__desc">
                <p>${this.data.content}</p>
            </div>
            <div class="col-2 todoItem__desc">
                <p>${ this.data.changedDate ? this.data.changedDate.map(e=>`${e} `) : ""}</p>
            </div>
            <div class="col-2 text-end todoItem__buttonsBlock ">
            <button 
            id=ed-${this.data.id}
            class=${this.type==="archived"? "d-none": ""}
            >ed</button>
            <button id=arch-${this.data.id}>arch</button>
           <button id=del-${this.data.id}>del</button>
             </div>
        </div>
        
        
        <form id=form-${this.data.id} class="row form d-none">
          <div class="row editNote">
            <div class="col-12 text-center">
                <h6>edit note</h6>
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
                        <span class="input-group-text" id="basic-addon1"></span>
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
        
        
        
        
        
        
        
        
        
        
        
        
`


        )
    }

    init() {
        this.addDomListeners()
    }
}
