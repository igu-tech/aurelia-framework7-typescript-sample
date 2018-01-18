import { inject, bindable } from 'aurelia-framework';
import { DataService } from '../../services/DataService';

@inject(DataService)
export class Closed {
    @bindable
    currentCat: string = null;
    @bindable
    searchText: string;
    @bindable
    categories: ITenderCategories[];

    opts: string[] = ['none', 'age', 'reg', 'cat', 'req', 'clo'];

    constructor(private DataService: DataService) {
        window['currentController'] = this;
    }

    activate() {
        console.log("Activating");
        this.currentCat = "3";
        this.currentCatChanged();
    }

    private currentCatChanged() {
        this.categories = [];
        console.log("Loading Data for category:" + this.opts[+this.currentCat]);
        this.DataService.GetClosedCategories(this.opts[+this.currentCat], this.searchText)
            .then((result) => {
                this.categories = result;
                console.log("Got Data");
            })
            .catch((error) => {
                alert("Error:" + error);
            });
    }

    private searchTextChanged() {
        console.log("Loading Data for Text:" + this.searchText);
        this.categories = [];
        this.DataService.GetClosedCategories(this.opts[+this.currentCat], this.searchText)
            .then((result) => {
                this.categories = result;
                console.log("Got Data");
            })
            .catch((error) => {
                alert("Error:" + error);
            });
    }
}