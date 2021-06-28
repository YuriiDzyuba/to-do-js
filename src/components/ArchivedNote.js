import {AppComponent} from "@core/AppComponent";

export class ArchivedNote extends AppComponent{

    static className() {
        return 'ArchivedNote'
    }

    toHTML() {
        return (
            `
        <div class="row todoItem mt-2">
            <div class="col-2 todoItem__desc">
                <span>
                <p><img alt="" class="todoItem__img" src=""/>name</p>
                </span>
            </div>
            <div class="col-2 todoItem__desc">
             <p>${new Date()}</p>
            </div>
            <div class="col-2 todoItem__desc">
                <p>category</p>
            </div>
            <div class="col-2 todoItem__desc">
                <p>content</p>
            </div>
            <div class="col-2 todoItem__desc">
                <p>changedDate</p>
            </div>
            <div class="col-2 text-end todoItem__buttonsBlock ">
                <img alt="" src=""/>
                <img alt="" src=""/>
             </div>
        </div>
`
        )
    }
}
