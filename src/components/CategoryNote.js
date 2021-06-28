import {AppComponent} from "@core/AppComponent";

export class CategoryNote extends AppComponent{
    static className() {
        return 'categoryNote'
    }

    toHTML() {
        console.log(this.data,"  this.data")
        return(
           `
            <div class="row todoItem mt-2">
                <div class="col-6 todoItem__desc">
                    <span>
                        <p><img alt="" class="todoItem__img" src=""/>${this.data.category}</p>
                    </span>
                </div>
                <div class="col-3 todoItem__desc">
                    <p>${this.data.active}</p>
                </div>
                <div class="col-3 todoItem__desc">
                    <p>${this.data.archived}</p>
                </div>
            </div>`
        )
    }
}
