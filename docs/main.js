(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/nicholas/Dev/calamity/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "D5Eo":
/*!**********************************************************************!*\
  !*** ./src/app/components/layout/background/background.component.ts ***!
  \**********************************************************************/
/*! exports provided: BackgroundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackgroundComponent", function() { return BackgroundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class BackgroundComponent {
    constructor() { }
    ngOnInit() {
    }
}
BackgroundComponent.ɵfac = function BackgroundComponent_Factory(t) { return new (t || BackgroundComponent)(); };
BackgroundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BackgroundComponent, selectors: [["app-background"]], decls: 7, vars: 0, consts: [[1, "background"], [1, "snow", "snow--near"], [1, "snow", "snow--near", "snow--alt"], [1, "snow", "snow--mid"], [1, "snow", "snow--mid", "snow--alt"], [1, "snow", "snow--far"], [1, "snow", "snow--far", "snow--alt"]], template: function BackgroundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n  position: absolute;\n  width: 100vw;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: hidden;\n  z-index: -1;\n  background: linear-gradient(0deg, #666666, #343646, #191a20, #131313);\n  background-size: 100% 400%;\n  animation: gradient 10s ease-in-out infinite;\n}\n@keyframes gradient {\n  0% {\n    background-position: 0% 0%;\n  }\n  50% {\n    background-position: 0% 100%;\n  }\n  100% {\n    background-position: 0% 0%;\n  }\n}\n[_nghost-%COMP%]   .background[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  position: relative;\n  overflow: hidden;\n}\n[_nghost-%COMP%]   .background[_ngcontent-%COMP%]   .snow[_ngcontent-%COMP%] {\n  z-index: 100;\n  pointer-events: none;\n}\n[_nghost-%COMP%]   .background[_ngcontent-%COMP%]   .snow[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  animation: falling linear infinite both;\n  transform: translate3D(0, -100%, 0);\n}\n[_nghost-%COMP%]   .background[_ngcontent-%COMP%]   .snow--near[_ngcontent-%COMP%] {\n  animation-duration: 10s;\n  background-image: url(\"https://dl6rt3mwcjzxg.cloudfront.net/assets/snow/snow-large-075d267ecbc42e3564c8ed43516dd557.png\");\n  background-size: contain;\n}\n[_nghost-%COMP%]   .background[_ngcontent-%COMP%]   .snow--near[_ngcontent-%COMP%]    + .snow--alt[_ngcontent-%COMP%] {\n  animation-delay: 5s;\n}\n[_nghost-%COMP%]   .background[_ngcontent-%COMP%]   .snow--mid[_ngcontent-%COMP%] {\n  animation-duration: 20s;\n  background-image: url(\"https://dl6rt3mwcjzxg.cloudfront.net/assets/snow/snow-medium-0b8a5e0732315b68e1f54185be7a1ad9.png\");\n  background-size: contain;\n}\n[_nghost-%COMP%]   .background[_ngcontent-%COMP%]   .snow--mid[_ngcontent-%COMP%]    + .snow--alt[_ngcontent-%COMP%] {\n  animation-delay: 10s;\n}\n[_nghost-%COMP%]   .background[_ngcontent-%COMP%]   .snow--far[_ngcontent-%COMP%] {\n  animation-duration: 30s;\n  background-image: url(\"https://dl6rt3mwcjzxg.cloudfront.net/assets/snow/snow-small-1ecd03b1fce08c24e064ff8c0a72c519.png\");\n  background-size: contain;\n}\n[_nghost-%COMP%]   .background[_ngcontent-%COMP%]   .snow--far[_ngcontent-%COMP%]    + .snow--alt[_ngcontent-%COMP%] {\n  animation-delay: 15s;\n}\n@keyframes falling {\n  0% {\n    transform: translate3D(-7.5%, -100%, 0);\n  }\n  100% {\n    transform: translate3D(7.5%, 100%, 0);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2JhY2tncm91bmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHFFQUFBO0VBQ0EsMEJBQUE7RUFDQSw0Q0FBQTtBQUNGO0FBQ0U7RUFDRTtJQUNFLDBCQUFBO0VBQ0o7RUFDRTtJQUNFLDRCQUFBO0VBQ0o7RUFDRTtJQUNFLDBCQUFBO0VBQ0o7QUFDRjtBQUVFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQUo7QUFXSTtFQUNFLFlBQUE7RUFDQSxvQkFBQTtBQVROO0FBWUk7RUFFRSxrQkFBQTtFQUNBLE1BQUE7RUFBUSxRQUFBO0VBQVUsU0FBQTtFQUFXLE9BQUE7RUFDN0IsdUNBQUE7RUFDQSxtQ0FBQTtBQVJOO0FBVU07RUFDRSx1QkFwQk07RUFxQk4seUhBQUE7RUFDQSx3QkFBQTtBQVJSO0FBVVE7RUFDRSxtQkFBQTtBQVJWO0FBWU07RUFDRSx1QkE3Qks7RUE4QkwsMEhBQUE7RUFDQSx3QkFBQTtBQVZSO0FBWVE7RUFDRSxvQkFBQTtBQVZWO0FBY007RUFDRSx1QkF0Q0s7RUF1Q0wseUhBQUE7RUFDQSx3QkFBQTtBQVpSO0FBY1E7RUFDRSxvQkFBQTtBQVpWO0FBaUJJO0VBQ0U7SUFDRSx1Q0FBQTtFQWZOO0VBa0JJO0lBQ0UscUNBQUE7RUFoQk47QUFDRiIsImZpbGUiOiJiYWNrZ3JvdW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB6LWluZGV4OiAtMTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsICM2NjY2NjYsICMzNDM2NDYsICMxOTFhMjAsICMxMzEzMTMpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgNDAwJTtcbiAgYW5pbWF0aW9uOiBncmFkaWVudCAxMHMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG5cbiAgQGtleWZyYW1lcyBncmFkaWVudCB7XG4gICAgMCUge1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgMCU7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSAxMDAlO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDAlO1xuICAgIH1cbiAgfVxuXG4gIC5iYWNrZ3JvdW5kIHtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICRjLS1iYWNrZ3JvdW5kOiAjMzMzO1xuXG4gICAgJHMtLW5lYXI6IDEwcztcbiAgICAkcy0tbWlkOiAoJHMtLW5lYXIgKiAyKTtcbiAgICAkcy0tZmFyOiAoJHMtLW5lYXIgKiAzKTtcbiAgICBcbiAgICAkZWFzZS0tb3V0LXF1YWQ6IGN1YmljLWJlemllciguMjUsLjQ2LC40NTAsLjk0KTtcbiAgICBcbiAgICBcbiAgICAlb24tdG9wIHtcbiAgICAgIHotaW5kZXg6IDEwMDtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIH1cbiAgICBcbiAgICAuc25vdyB7XG4gICAgICBAZXh0ZW5kICVvbi10b3A7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7IHJpZ2h0OiAwOyBib3R0b206IDA7IGxlZnQ6IDA7XG4gICAgICBhbmltYXRpb246IGZhbGxpbmcgbGluZWFyIGluZmluaXRlIGJvdGg7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNEKDAsLTEwMCUsMCk7XG4gICAgICAgIFxuICAgICAgJi0tbmVhciB7XG4gICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogJHMtLW5lYXI7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9kbDZydDNtd2NqenhnLmNsb3VkZnJvbnQubmV0L2Fzc2V0cy9zbm93L3Nub3ctbGFyZ2UtMDc1ZDI2N2VjYmM0MmUzNTY0YzhlZDQzNTE2ZGQ1NTcucG5nJyk7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgXG4gICAgICAgICYgKyAuc25vdy0tYWx0IHtcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6ICgkcy0tbmVhciAvIDIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAgIFxuICAgICAgJi0tbWlkIHtcbiAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAkcy0tbWlkO1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vZGw2cnQzbXdjanp4Zy5jbG91ZGZyb250Lm5ldC9hc3NldHMvc25vdy9zbm93LW1lZGl1bS0wYjhhNWUwNzMyMzE1YjY4ZTFmNTQxODViZTdhMWFkOS5wbmcnKTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgICBcbiAgICAgICAgJiArIC5zbm93LS1hbHQge1xuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogKCRzLS1taWQgLyAyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgICBcbiAgICAgICYtLWZhciB7XG4gICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogJHMtLWZhcjtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL2RsNnJ0M213Y2p6eGcuY2xvdWRmcm9udC5uZXQvYXNzZXRzL3Nub3cvc25vdy1zbWFsbC0xZWNkMDNiMWZjZTA4YzI0ZTA2NGZmOGMwYTcyYzUxOS5wbmcnKTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgICBcbiAgICAgICAgJiArIC5zbm93LS1hbHQge1xuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogKCRzLS1mYXIgLyAyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAgICAgICBcbiAgICBAa2V5ZnJhbWVzIGZhbGxpbmcge1xuICAgICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNEKC03LjUlLC0xMDAlLCAwKTtcbiAgICAgIH1cbiAgICAgICAgICBcbiAgICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNEKDcuNSUsMTAwJSwgMCk7XG4gICAgICB9ICBcbiAgICB9XG4gIH1cbn1cblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BackgroundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-background',
                templateUrl: './background.component.html',
                styleUrls: ['./background.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "PQ0l":
/*!*************************************************************************!*\
  !*** ./src/app/components/character/stat-panel/stat-panel.component.ts ***!
  \*************************************************************************/
/*! exports provided: StatPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatPanelComponent", function() { return StatPanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_game_models_Character__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/game/models/Character */ "dHBT");
/* harmony import */ var src_app_game_models_new_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/game/models/_new-player */ "we5E");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function StatPanelComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stat_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 2, stat_r1.key), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", stat_r1.value, " ");
} }
class StatPanelComponent {
    constructor() { }
    ngOnInit() {
        this.character = this.createNewPlayer();
        this.stats = this.character.getStats();
        const equipment = this.character.readEquipment();
    }
    createNewPlayer() {
        const newPlayer = Object.assign({}, src_app_game_models_new_player__WEBPACK_IMPORTED_MODULE_2__["default"]);
        return new src_app_game_models_Character__WEBPACK_IMPORTED_MODULE_1__["default"](newPlayer.name, newPlayer.stats, newPlayer.equipment, newPlayer.lvl, newPlayer.experience);
    }
}
StatPanelComponent.ɵfac = function StatPanelComponent_Factory(t) { return new (t || StatPanelComponent)(); };
StatPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StatPanelComponent, selectors: [["app-stat-panel"]], decls: 4, vars: 3, consts: [["id", "statPanel"], [1, "stats"], [4, "ngFor", "ngForOf"], [1, "stat"], [1, "stat-value"]], template: function StatPanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, StatPanelComponent_div_2_Template, 7, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx.stats));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["KeyValuePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]   #statPanel[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n[_nghost-%COMP%]   #statPanel[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%] {\n  padding: 1rem;\n  background: #333;\n  color: #FEFEFE;\n  border-radius: 1rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: space-between;\n}\n[_nghost-%COMP%]   #statPanel[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  text-align: center;\n}\n[_nghost-%COMP%]   #statPanel[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.125rem;\n  text-align: left;\n  width: 50%;\n  color: #DDD;\n}\n[_nghost-%COMP%]   #statPanel[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.125rem;\n  text-align: right;\n  font-weight: bold;\n  width: 50%;\n  color: #EEE;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3N0YXQtcGFuZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FBQ0Y7QUFDRTtFQUNFLHFCQUFBO0FBQ0o7QUFDSTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7QUFDTjtBQUVJO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQUFOO0FBR0k7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQUROO0FBSUk7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBRk4iLCJmaWxlIjoic3RhdC1wYW5lbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG5cbiAgI3N0YXRQYW5lbCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXG4gICAgLnN0YXRzIHtcbiAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICBiYWNrZ3JvdW5kOiAjMzMzO1xuICAgICAgY29sb3I6ICNGRUZFRkU7XG4gICAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBhbGlnbi1pdGVtczogc3BhY2UtYmV0d2VlbjtcbiAgICB9XG5cbiAgICBoMiB7XG4gICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLnN0YXQge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgcGFkZGluZzogMC4xMjVyZW07XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgd2lkdGg6IDUwJTtcbiAgICAgIGNvbG9yOiAjREREO1xuICAgIH1cblxuICAgIC5zdGF0LXZhbHVlIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHBhZGRpbmc6IDAuMTI1cmVtO1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIHdpZHRoOiA1MCU7XG4gICAgICBjb2xvcjogI0VFRTtcbiAgICB9XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatPanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-stat-panel',
                templateUrl: './stat-panel.component.html',
                styleUrls: ['./stat-panel.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Rg7J":
/*!*************************************!*\
  !*** ./src/app/game/game.engine.ts ***!
  \*************************************/
/*! exports provided: GameEngine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameEngine", function() { return GameEngine; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


const _c0 = ["*"];
class GameEngine {
    constructor() {
    }
    ngOnInit() {
    }
}
GameEngine.ɵfac = function GameEngine_Factory(t) { return new (t || GameEngine)(); };
GameEngine.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GameEngine, selectors: [["app-game-engine"]], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [["id", "gameEngine"]], template: function GameEngine_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n  display: block;\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden;\n}\n[_nghost-%COMP%]   .background[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  position: relative;\n  overflow: hidden;\n}\n[_nghost-%COMP%]   .background[_ngcontent-%COMP%]   .snow[_ngcontent-%COMP%] {\n  z-index: 100;\n  pointer-events: none;\n}\n[_nghost-%COMP%]   .background[_ngcontent-%COMP%]   .snow[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  animation: falling linear infinite both;\n  transform: translate3D(0, -100%, 0);\n}\n[_nghost-%COMP%]   .background[_ngcontent-%COMP%]   .snow--near[_ngcontent-%COMP%] {\n  animation-duration: 10s;\n  background-image: url(\"https://dl6rt3mwcjzxg.cloudfront.net/assets/snow/snow-large-075d267ecbc42e3564c8ed43516dd557.png\");\n  background-size: contain;\n}\n[_nghost-%COMP%]   .background[_ngcontent-%COMP%]   .snow--near[_ngcontent-%COMP%]    + .snow--alt[_ngcontent-%COMP%] {\n  animation-delay: 5s;\n}\n[_nghost-%COMP%]   .background[_ngcontent-%COMP%]   .snow--mid[_ngcontent-%COMP%] {\n  animation-duration: 20s;\n  background-image: url(\"https://dl6rt3mwcjzxg.cloudfront.net/assets/snow/snow-medium-0b8a5e0732315b68e1f54185be7a1ad9.png\");\n  background-size: contain;\n}\n[_nghost-%COMP%]   .background[_ngcontent-%COMP%]   .snow--mid[_ngcontent-%COMP%]    + .snow--alt[_ngcontent-%COMP%] {\n  animation-delay: 10s;\n}\n[_nghost-%COMP%]   .background[_ngcontent-%COMP%]   .snow--far[_ngcontent-%COMP%] {\n  animation-duration: 30s;\n  background-image: url(\"https://dl6rt3mwcjzxg.cloudfront.net/assets/snow/snow-small-1ecd03b1fce08c24e064ff8c0a72c519.png\");\n  background-size: contain;\n}\n[_nghost-%COMP%]   .background[_ngcontent-%COMP%]   .snow--far[_ngcontent-%COMP%]    + .snow--alt[_ngcontent-%COMP%] {\n  animation-delay: 15s;\n}\n@keyframes falling {\n  0% {\n    transform: translate3D(-7.5%, -100%, 0);\n  }\n  100% {\n    transform: translate3D(7.5%, 100%, 0);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2dhbWUuZW5naW5lLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQUNGO0FBQ0U7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQVVJO0VBQ0UsWUFBQTtFQUNBLG9CQUFBO0FBUk47QUFXSTtFQUVFLGtCQUFBO0VBQ0EsTUFBQTtFQUFRLFFBQUE7RUFBVSxTQUFBO0VBQVcsT0FBQTtFQUM3Qix1Q0FBQTtFQUNBLG1DQUFBO0FBUE47QUFTTTtFQUNFLHVCQXBCTTtFQXFCTix5SEFBQTtFQUNBLHdCQUFBO0FBUFI7QUFTUTtFQUNFLG1CQUFBO0FBUFY7QUFXTTtFQUNFLHVCQTdCSztFQThCTCwwSEFBQTtFQUNBLHdCQUFBO0FBVFI7QUFXUTtFQUNFLG9CQUFBO0FBVFY7QUFhTTtFQUNFLHVCQXRDSztFQXVDTCx5SEFBQTtFQUNBLHdCQUFBO0FBWFI7QUFhUTtFQUNFLG9CQUFBO0FBWFY7QUFnQkk7RUFDRTtJQUNFLHVDQUFBO0VBZE47RUFpQkk7SUFDRSxxQ0FBQTtFQWZOO0FBQ0YiLCJmaWxlIjoiZ2FtZS5lbmdpbmUuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAuYmFja2dyb3VuZCB7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAkYy0tYmFja2dyb3VuZDogIzMzMztcblxuICAgICRzLS1uZWFyOiAxMHM7XG4gICAgJHMtLW1pZDogKCRzLS1uZWFyICogMik7XG4gICAgJHMtLWZhcjogKCRzLS1uZWFyICogMyk7XG4gICAgXG4gICAgJGVhc2UtLW91dC1xdWFkOiBjdWJpYy1iZXppZXIoLjI1LC40NiwuNDUwLC45NCk7XG4gICAgXG4gICAgXG4gICAgJW9uLXRvcCB7XG4gICAgICB6LWluZGV4OiAxMDA7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB9XG4gICAgXG4gICAgLnNub3cge1xuICAgICAgQGV4dGVuZCAlb24tdG9wO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwOyByaWdodDogMDsgYm90dG9tOiAwOyBsZWZ0OiAwO1xuICAgICAgYW5pbWF0aW9uOiBmYWxsaW5nIGxpbmVhciBpbmZpbml0ZSBib3RoO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzRCgwLC0xMDAlLDApO1xuICAgICAgICBcbiAgICAgICYtLW5lYXIge1xuICAgICAgICBhbmltYXRpb24tZHVyYXRpb246ICRzLS1uZWFyO1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vZGw2cnQzbXdjanp4Zy5jbG91ZGZyb250Lm5ldC9hc3NldHMvc25vdy9zbm93LWxhcmdlLTA3NWQyNjdlY2JjNDJlMzU2NGM4ZWQ0MzUxNmRkNTU3LnBuZycpO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICAgIFxuICAgICAgICAmICsgLnNub3ctLWFsdCB7XG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAoJHMtLW5lYXIgLyAyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgICBcbiAgICAgICYtLW1pZCB7XG4gICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogJHMtLW1pZDtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL2RsNnJ0M213Y2p6eGcuY2xvdWRmcm9udC5uZXQvYXNzZXRzL3Nub3cvc25vdy1tZWRpdW0tMGI4YTVlMDczMjMxNWI2OGUxZjU0MTg1YmU3YTFhZDkucG5nJyk7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgXG4gICAgICAgICYgKyAuc25vdy0tYWx0IHtcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6ICgkcy0tbWlkIC8gMik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgICAgXG4gICAgICAmLS1mYXIge1xuICAgICAgICBhbmltYXRpb24tZHVyYXRpb246ICRzLS1mYXI7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9kbDZydDNtd2NqenhnLmNsb3VkZnJvbnQubmV0L2Fzc2V0cy9zbm93L3Nub3ctc21hbGwtMWVjZDAzYjFmY2UwOGMyNGUwNjRmZjhjMGE3MmM1MTkucG5nJyk7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgXG4gICAgICAgICYgKyAuc25vdy0tYWx0IHtcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6ICgkcy0tZmFyIC8gMik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgICAgICAgXG4gICAgQGtleWZyYW1lcyBmYWxsaW5nIHtcbiAgICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzRCgtNy41JSwtMTAwJSwgMCk7XG4gICAgICB9XG4gICAgICAgICAgXG4gICAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzRCg3LjUlLDEwMCUsIDApO1xuICAgICAgfSAgXG4gICAgfVxuICB9XG59XG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameEngine, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-game-engine',
                templateUrl: './game.engine.html',
                styleUrls: ['./game.engine.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _game_game_engine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game/game.engine */ "Rg7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-game-engine");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_game_game_engine__WEBPACK_IMPORTED_MODULE_1__["GameEngine"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "WkHE":
/*!***********************************************************!*\
  !*** ./src/app/scenes/playground/playground.component.ts ***!
  \***********************************************************/
/*! exports provided: PlaygroundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaygroundComponent", function() { return PlaygroundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PlaygroundComponent {
    constructor() { }
    ngOnInit() { }
}
PlaygroundComponent.ɵfac = function PlaygroundComponent_Factory(t) { return new (t || PlaygroundComponent)(); };
PlaygroundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlaygroundComponent, selectors: [["app-playground"]], decls: 0, vars: 0, template: function PlaygroundComponent_Template(rf, ctx) { }, styles: ["[_nghost-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BsYXlncm91bmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUFDRiIsImZpbGUiOiJwbGF5Z3JvdW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlaygroundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-playground',
                templateUrl: './playground.component.html',
                styleUrls: ['./playground.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _game_game_engine__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game/game.engine */ "Rg7J");
/* harmony import */ var _scenes_launch_launch_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scenes/launch/launch.component */ "lJGf");
/* harmony import */ var _components_layout_background_background_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/layout/background/background.component */ "D5Eo");
/* harmony import */ var _scenes_playground_playground_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scenes/playground/playground.component */ "WkHE");
/* harmony import */ var _components_character_stat_panel_stat_panel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/character/stat-panel/stat-panel.component */ "PQ0l");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _game_game_engine__WEBPACK_IMPORTED_MODULE_4__["GameEngine"],
        _scenes_launch_launch_component__WEBPACK_IMPORTED_MODULE_5__["LaunchComponent"],
        _components_layout_background_background_component__WEBPACK_IMPORTED_MODULE_6__["BackgroundComponent"],
        _scenes_playground_playground_component__WEBPACK_IMPORTED_MODULE_7__["PlaygroundComponent"],
        _components_character_stat_panel_stat_panel_component__WEBPACK_IMPORTED_MODULE_8__["StatPanelComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _game_game_engine__WEBPACK_IMPORTED_MODULE_4__["GameEngine"],
                    _scenes_launch_launch_component__WEBPACK_IMPORTED_MODULE_5__["LaunchComponent"],
                    _components_layout_background_background_component__WEBPACK_IMPORTED_MODULE_6__["BackgroundComponent"],
                    _scenes_playground_playground_component__WEBPACK_IMPORTED_MODULE_7__["PlaygroundComponent"],
                    _components_character_stat_panel_stat_panel_component__WEBPACK_IMPORTED_MODULE_8__["StatPanelComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "dEyG":
/*!*************************************!*\
  !*** ./src/app/game/models/Base.ts ***!
  \*************************************/
/*! exports provided: StatType, ModifierType, EquipType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatType", function() { return StatType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifierType", function() { return ModifierType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipType", function() { return EquipType; });
var StatType;
(function (StatType) {
    StatType["HP"] = "hp";
    StatType["STR"] = "str";
    StatType["DEX"] = "dex";
    StatType["INT"] = "int";
    StatType["LUCK"] = "luck";
    StatType["MGK"] = "mgk";
    StatType["SPD"] = "spd";
})(StatType || (StatType = {}));
var ModifierType;
(function (ModifierType) {
    ModifierType["PERC"] = "perc";
    ModifierType["COUNT"] = "count";
})(ModifierType || (ModifierType = {}));
var EquipType;
(function (EquipType) {
    EquipType["HEAD"] = "head";
    EquipType["CHEST"] = "chest";
    EquipType["LEGS"] = "legs";
    EquipType["ARMS"] = "arms";
    EquipType["RELIC"] = "relic";
    EquipType["WEAPON"] = "weapon";
})(EquipType || (EquipType = {}));


/***/ }),

/***/ "dHBT":
/*!******************************************!*\
  !*** ./src/app/game/models/Character.ts ***!
  \******************************************/
/*! exports provided: default, Stat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Character; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stat", function() { return Stat; });
class Character {
    constructor(name, stats, equipment, lvl, experience) {
        this.name = name;
        this.stats = stats;
        this.equipment = equipment;
        this.lvl = lvl;
        this.experience = experience;
    }
    changeEquipment(type, equipment) {
        this.equipment[type] = equipment;
    }
    increaseStat(statistic) {
        this.stats[statistic] += 1;
    }
    getStats() {
        const stats = Object.assign({}, this.stats);
        const equipment = Object.keys(this.equipment).filter(equipment => this.equipment[equipment] != null);
        equipment.forEach(piece => {
            this.equipment[piece].modifiers.forEach(modifier => {
                switch (modifier.modifierType) {
                    case 'count':
                        stats[modifier.statType] += modifier.value;
                        break;
                    case 'perc':
                        stats[modifier.statType] *= modifier.value;
                        break;
                }
            });
        });
        return stats;
    }
    readBaseStats() {
        return this.stats;
    }
    readEquipment() {
        return this.equipment;
    }
}
var Stat;
(function (Stat) {
    Stat["HP"] = "hp";
    Stat["STR"] = "str";
    Stat["DEX"] = "dex";
    Stat["INT"] = "int";
    Stat["LUCK"] = "luck";
    Stat["MGK"] = "mgk";
    Stat["SPD"] = "spd";
})(Stat || (Stat = {}));


/***/ }),

/***/ "lJGf":
/*!***************************************************!*\
  !*** ./src/app/scenes/launch/launch.component.ts ***!
  \***************************************************/
/*! exports provided: LaunchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LaunchComponent", function() { return LaunchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_character_stat_panel_stat_panel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/character/stat-panel/stat-panel.component */ "PQ0l");
/* harmony import */ var _components_layout_background_background_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/layout/background/background.component */ "D5Eo");




class LaunchComponent {
    constructor() { }
    ngOnInit() {
    }
}
LaunchComponent.ɵfac = function LaunchComponent_Factory(t) { return new (t || LaunchComponent)(); };
LaunchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LaunchComponent, selectors: [["app-launch"]], decls: 2, vars: 0, template: function LaunchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-stat-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-background");
    } }, directives: [_components_character_stat_panel_stat_panel_component__WEBPACK_IMPORTED_MODULE_1__["StatPanelComponent"], _components_layout_background_background_component__WEBPACK_IMPORTED_MODULE_2__["BackgroundComponent"]], styles: ["[_nghost-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xhdW5jaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQUNGIiwiZmlsZSI6ImxhdW5jaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBibG9jaztcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LaunchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-launch',
                templateUrl: './launch.component.html',
                styleUrls: ['./launch.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "lXsm":
/*!******************************************!*\
  !*** ./src/app/game/models/Equipment.ts ***!
  \******************************************/
/*! exports provided: equipment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equipment", function() { return equipment; });
/* harmony import */ var src_app_game_models_Base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/game/models/Base */ "dEyG");

const headEquipment = {
    leatherHelment: {
        name: 'Leather Helmet',
        description: 'A helmet salvaged from early 1940\'s football',
        shortDesc: '+1 Dex',
        type: src_app_game_models_Base__WEBPACK_IMPORTED_MODULE_0__["EquipType"].HEAD,
        modifiers: [
            {
                statType: src_app_game_models_Base__WEBPACK_IMPORTED_MODULE_0__["StatType"].DEX,
                modifierType: src_app_game_models_Base__WEBPACK_IMPORTED_MODULE_0__["ModifierType"].COUNT,
                value: 1
            }
        ]
    }
};
const chestEquipment = {
    leatherVest: {
        name: 'Leather Vest',
        description: 'A leather platemail with several broken buckles',
        shortDesc: '+1 Dex',
        type: src_app_game_models_Base__WEBPACK_IMPORTED_MODULE_0__["EquipType"].CHEST,
        modifiers: [
            {
                statType: src_app_game_models_Base__WEBPACK_IMPORTED_MODULE_0__["StatType"].DEX,
                modifierType: src_app_game_models_Base__WEBPACK_IMPORTED_MODULE_0__["ModifierType"].COUNT,
                value: 1
            }
        ]
    }
};
const legsEquipment = {
    leatherPants: {
        name: 'Leather Pants',
        description: 'A pair of dusty, leather trousers with holes in the knees',
        shortDesc: '+1 Dex',
        type: src_app_game_models_Base__WEBPACK_IMPORTED_MODULE_0__["EquipType"].LEGS,
        modifiers: [
            {
                statType: src_app_game_models_Base__WEBPACK_IMPORTED_MODULE_0__["StatType"].DEX,
                modifierType: src_app_game_models_Base__WEBPACK_IMPORTED_MODULE_0__["ModifierType"].COUNT,
                value: 1
            }
        ]
    }
};
const armsEquipment = {
    leatherBracers: {
        name: 'Leather Bracers',
        description: 'Flimsy, leather bracers cracking from age',
        shortDesc: '+1 Dex',
        type: src_app_game_models_Base__WEBPACK_IMPORTED_MODULE_0__["EquipType"].ARMS,
        modifiers: [
            {
                statType: src_app_game_models_Base__WEBPACK_IMPORTED_MODULE_0__["StatType"].DEX,
                modifierType: src_app_game_models_Base__WEBPACK_IMPORTED_MODULE_0__["ModifierType"].COUNT,
                value: 1
            }
        ]
    }
};
const weaponEquipment = {
    rustySword: {
        name: 'Rusty Sword',
        description: 'This sword looks ready to fall apart',
        shortDesc: '+1 Atk',
        type: src_app_game_models_Base__WEBPACK_IMPORTED_MODULE_0__["EquipType"].WEAPON,
        modifiers: [
            {
                statType: src_app_game_models_Base__WEBPACK_IMPORTED_MODULE_0__["StatType"].STR,
                modifierType: src_app_game_models_Base__WEBPACK_IMPORTED_MODULE_0__["ModifierType"].COUNT,
                value: 1
            }
        ]
    }
};
const relicEquipment = {
    rabbitsFoot: {
        name: 'Rabbit\'s foot',
        description: 'An old, tattered foot of a rabbit that is said to increase luck',
        shortDesc: '+10% Luck',
        type: src_app_game_models_Base__WEBPACK_IMPORTED_MODULE_0__["EquipType"].RELIC,
        modifiers: [
            {
                statType: src_app_game_models_Base__WEBPACK_IMPORTED_MODULE_0__["StatType"].LUCK,
                modifierType: src_app_game_models_Base__WEBPACK_IMPORTED_MODULE_0__["ModifierType"].PERC,
                value: 1.1
            }
        ]
    }
};
const equipment = {
    head: headEquipment,
    chest: chestEquipment,
    legs: legsEquipment,
    arms: armsEquipment,
    weapon: weaponEquipment,
    relic: relicEquipment
};


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _scenes_launch_launch_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scenes/launch/launch.component */ "lJGf");
/* harmony import */ var _scenes_playground_playground_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scenes/playground/playground.component */ "WkHE");






const routes = [
    { path: '', component: _scenes_launch_launch_component__WEBPACK_IMPORTED_MODULE_2__["LaunchComponent"] },
    { path: 'playground', component: _scenes_playground_playground_component__WEBPACK_IMPORTED_MODULE_3__["PlaygroundComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "we5E":
/*!********************************************!*\
  !*** ./src/app/game/models/_new-player.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_app_game_models_Equipment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/game/models/Equipment */ "lXsm");

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'SinSys',
    stats: {
        hp: 100,
        str: 10,
        dex: 10,
        int: 10,
        luck: 10,
        mgk: 10,
        spd: 10
    },
    equipment: {
        head: src_app_game_models_Equipment__WEBPACK_IMPORTED_MODULE_0__["equipment"].head.leatherHelment,
        chest: src_app_game_models_Equipment__WEBPACK_IMPORTED_MODULE_0__["equipment"].chest.leatherVest,
        legs: src_app_game_models_Equipment__WEBPACK_IMPORTED_MODULE_0__["equipment"].legs.leatherPants,
        arms: src_app_game_models_Equipment__WEBPACK_IMPORTED_MODULE_0__["equipment"].arms.leatherBracers,
        relicLeft: null,
        relicRight: src_app_game_models_Equipment__WEBPACK_IMPORTED_MODULE_0__["equipment"].relic.rabbitsFoot,
        weaponLeft: null,
        weaponRight: src_app_game_models_Equipment__WEBPACK_IMPORTED_MODULE_0__["equipment"].weapon.rustySword
    },
    lvl: 1,
    experience: 1
});


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map