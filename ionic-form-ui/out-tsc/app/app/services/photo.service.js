import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { Plugins, CameraResultType, CameraSource } from "@capacitor/core";
const { Camera, Filesystem, Storage } = Plugins;
let PhotoService = class PhotoService {
    constructor() { }
    agregarFoto() {
        return tslib_1.__awaiter(this, void 0, void 0, function*() {
            // Take a photo
            const capturedPhoto = yield Camera.getPhoto({
                resultType: CameraResultType.Uri,
                source: CameraSource.Camera,
                quality: 100,
            });
        });
    }
};
PhotoService = tslib_1.__decorate([
    Injectable({
        providedIn: "root",
    }),
    tslib_1.__metadata("design:paramtypes", []),
], PhotoService);
export { PhotoService };
//# sourceMappingURL=photo.service.js.map
