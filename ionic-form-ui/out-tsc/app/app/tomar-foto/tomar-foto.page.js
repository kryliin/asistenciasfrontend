import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { PhotoService } from "../services/photo.service";
let TomarFotoPage = class TomarFotoPage {
    constructor(photoService) {
        this.photoService = photoService;
    }
    ngOnInit() {
    }
};
TomarFotoPage = tslib_1.__decorate([
    Component({
        selector: "app-tomar-foto",
        templateUrl: "./tomar-foto.page.html",
        styleUrls: ["./tomar-foto.page.scss"],
    }),
    tslib_1.__metadata("design:paramtypes", [PhotoService]),
], TomarFotoPage);
export { TomarFotoPage };
//# sourceMappingURL=tomar-foto.page.js.map
