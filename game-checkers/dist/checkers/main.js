(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\singh\Google Drive\Masters in Computer Information w concentration in WD\CS701\Work\CS701_TermProject_Singh\checkers\src\main.ts */"zUnb");


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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




function AppComponent_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "<---------- Team 1's Turn------------->");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " <---------- Team 2's Turn------------->");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Team 1 won");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Team 2 won");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent__svg_rect_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "rect");
} if (rf & 2) {
    const rec_r10 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x", rec_r10.x)("y", rec_r10.y)("width", ctx_r4.eachBox)("height", ctx_r4.eachBox)("fill", rec_r10.color);
} }
function AppComponent__svg_circle_12_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "circle", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function AppComponent__svg_circle_12_Template__svg_circle_mousedown_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.drag($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rec_r11 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", rec_r11.id)("cx", rec_r11.x)("cy", rec_r11.y)("r", ctx_r5.eachBox / 2 * 0.9);
} }
function AppComponent__svg_circle_13_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "circle", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function AppComponent__svg_circle_13_Template__svg_circle_mousedown_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.drag($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rec_r14 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", rec_r14.id)("cx", rec_r14.x)("cy", rec_r14.y)("r", ctx_r6.eachBox / 2 * 0.9);
} }
function AppComponent__svg_circle_14_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "circle", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function AppComponent__svg_circle_14_Template__svg_circle_mouseover_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.dragOver($event); })("mouseleave", function AppComponent__svg_circle_14_Template__svg_circle_mouseleave_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.dragLeave(); })("mouseup", function AppComponent__svg_circle_14_Template__svg_circle_mouseup_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.drop($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rec_r17 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", rec_r17.id)("cx", rec_r17.x)("cy", rec_r17.y)("r", ctx_r7.eachBox / 2);
} }
function AppComponent__svg_circle_15_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "circle", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function AppComponent__svg_circle_15_Template__svg_circle_mousedown_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.drag($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rec_r22 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", rec_r22.id)("cx", rec_r22.x)("cy", rec_r22.y)("r", ctx_r8.eachBox / 2 * 0.5);
} }
function AppComponent__svg_circle_16_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "circle", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function AppComponent__svg_circle_16_Template__svg_circle_mousedown_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.drag($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rec_r25 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", rec_r25.id)("cx", rec_r25.x)("cy", rec_r25.y)("r", ctx_r9.eachBox / 2 * 0.5);
} }
class AppComponent {
    constructor() {
        this.title = 'Jatinder Singh - Term Project - CS701';
        this.game = 'Online Checkers';
        this.boardColors = { c1: "navajowhite", c2: "chocolate" };
        if (window.localStorage.length !== 0) {
            this.board = window.localStorage.getItem("board").toString();
            this.numOfRows = window.localStorage.getItem("numOfRows").toString();
            this.eachBox = +this.board / +this.numOfRows;
            this.posCords = JSON.parse(window.localStorage.getItem("posCords"));
            this.posCirclesCords = JSON.parse(window.localStorage.getItem("posCirclesCords"));
            this.team1 = JSON.parse(window.localStorage.getItem("team1"));
            this.team2 = JSON.parse(window.localStorage.getItem("team2"));
            this.emptyCords = JSON.parse(window.localStorage.getItem("emptyCords"));
            this.team1turn = window.localStorage.getItem("team1turn") === 'true';
            this.team2turn = window.localStorage.getItem("team2turn") === 'true';
            this.team1Kings = JSON.parse(window.localStorage.getItem("team1Kings"));
            this.team2Kings = JSON.parse(window.localStorage.getItem("team2Kings"));
        }
        else {
            this.board = "800";
            this.numOfRows = "8";
            this.eachBox = +this.board / +this.numOfRows;
            this.posCords = this.getBoxPositionCoordinates();
            this.posCirclesCords = this.getposCirclesCords();
            this.team1 = this.getTeamOne();
            this.team2 = this.getTeamTwo();
            this.emptyCords = this.getEmptyCoords();
            this.team1turn = true;
            this.team2turn = false;
            this.team1Kings = [];
            this.team2Kings = [];
        }
        this.team1won = this.didTeam1Won();
        this.team2won = this.didTeam2Won();
    }
    didTeam1Won() {
        if (this.team2.length == 0) {
            return true;
        }
        return false;
    }
    didTeam2Won() {
        if (this.team1.length == 0) {
            return true;
        }
        return false;
    }
    restart() {
        window.localStorage.clear();
        // wait for little bit for variables to change and then restart
        setTimeout(() => {
            this.eachBox = +this.board / +this.numOfRows;
            this.posCords = this.getBoxPositionCoordinates();
            this.posCirclesCords = this.getposCirclesCords();
            this.team1 = this.getTeamOne();
            this.team2 = this.getTeamTwo();
            this.emptyCords = this.getEmptyCoords();
            this.team1turn = true;
            this.team2turn = false;
            this.team1won = this.didTeam1Won();
            this.team2won = this.didTeam2Won();
            this.team1Kings = [];
            this.team2Kings = [];
        }, 50);
    }
    saveLocal() {
        window.localStorage.setItem("board", this.board);
        window.localStorage.setItem("numOfRows", this.numOfRows);
        window.localStorage.setItem("posCords", JSON.stringify(this.posCords));
        window.localStorage.setItem("posCirclesCords", JSON.stringify(this.posCirclesCords));
        window.localStorage.setItem("team1", JSON.stringify(this.team1));
        window.localStorage.setItem("team2", JSON.stringify(this.team2));
        window.localStorage.setItem("emptyCords", JSON.stringify(this.emptyCords));
        window.localStorage.setItem("team1turn", this.team1turn.toString());
        window.localStorage.setItem("team2turn", this.team2turn.toString());
        window.localStorage.setItem("team1Kings", JSON.stringify(this.team1Kings));
        window.localStorage.setItem("team2Kings", JSON.stringify(this.team2Kings));
    }
    clearLocal() {
        window.localStorage.clear();
    }
    drag(ev) {
        if ((ev.target.id && this.getIndexWithinTeam(this.team1, ev.target.id) >= 0 && this.team1turn) || (ev.target.id && this.getIndexWithinTeam(this.team2, ev.target.id) >= 0 && this.team2turn)) {
            this.sourceObject = { id: ev.target.id, x: ev.target.attributes.cx.value, y: ev.target.attributes.cy.value };
            ev.target.classList.add("dragged");
        }
        ev.preventDefault();
    }
    dragOver(ev) {
        ev.preventDefault();
        if (this.sourceObject) {
            ev.target.classList.add("over");
        }
    }
    drop(ev) {
        let elems = document.querySelectorAll(".dragged");
        for (let i = 0; i < elems.length; i++) {
            elems[i].classList.remove("dragged");
        }
        elems = document.querySelectorAll(".over");
        for (let i = 0; i < elems.length; i++) {
            elems[i].classList.remove("over");
        }
        let dropPoint;
        if (ev.target.id) {
            dropPoint = { id: ev.target.id, x: ev.target.attributes.cx.value, y: ev.target.attributes.cy.value };
            let point = this.sourceObject;
            //If this is Team 1's turns and check if pick up point exists in Team1 and make sure the drop location is empty location
            if (this.getIndexWithinTeam(this.team1, point.id) >= 0 && this.getIndexWithinTeam(this.emptyCords, dropPoint.id) >= 0 && this.team1turn) {
                // check to see if a king is being moved
                if (this.getIndexWithinTeam(this.team1Kings, point.id) >= 0) {
                    // Team 1: Move forward or backwards if the drop point is 1 ahead to left or right
                    if (((point.x == (+dropPoint.x + this.eachBox)) || (point.x == (+dropPoint.x - this.eachBox)))
                        && (point.y == (+dropPoint.y - this.eachBox) || point.y == (+dropPoint.y + this.eachBox))) {
                        this.team1.push(dropPoint);
                        this.team1Kings.push(dropPoint);
                        this.emptyCords.push(point);
                        this.team1.splice(this.getIndexWithinTeam(this.team1, point.id), 1);
                        this.team1Kings.splice(this.getIndexWithinTeam(this.team1Kings, point.id), 1);
                        this.emptyCords.splice(this.getIndexWithinTeam(this.emptyCords, dropPoint.id), 1);
                        this.team1turn = false;
                        this.team2turn = true;
                    }
                    // is jump possible to left and if it is, then remove a piece from team 2's and jump
                    else if (((point.x == (+dropPoint.x + (this.eachBox * 2))) && (point.y == (+dropPoint.y - (this.eachBox * 2))))
                        || ((point.x == (+dropPoint.x + (this.eachBox * 2))) && (point.y == (+dropPoint.y + (this.eachBox * 2))))) {
                        //check if the position ahead Team 2
                        for (let i = 0; i < this.team2.length; i++) {
                            //If yes, then move ahead with jumping
                            if (this.team2[i].x == (+dropPoint.x + this.eachBox) && (this.team2[i].y == (+dropPoint.y - this.eachBox))) {
                                this.team1.push(dropPoint);
                                this.team1Kings.push(dropPoint);
                                this.emptyCords.push(point);
                                this.team1.splice(this.getIndexWithinTeam(this.team1, point.id), 1);
                                this.team1Kings.splice(this.getIndexWithinTeam(this.team1Kings, point.id), 1);
                                this.emptyCords.splice(this.getIndexWithinTeam(this.emptyCords, dropPoint.id), 1);
                                this.emptyCords.push({ id: this.team2[i].id, x: this.team2[i].x, y: this.team2[i].y }); //add to empty
                                this.team2.splice(this.getIndexWithinTeam(this.team2, this.team2[i].id), 1); //remove
                                break;
                            }
                            //backward
                            else if (this.team2[i].x == (+dropPoint.x + this.eachBox) && (this.team2[i].y == (+dropPoint.y + this.eachBox))) {
                                this.team1.push(dropPoint);
                                this.team1Kings.push(dropPoint);
                                this.emptyCords.push(point);
                                this.team1.splice(this.getIndexWithinTeam(this.team1, point.id), 1);
                                this.team1Kings.splice(this.getIndexWithinTeam(this.team1Kings, point.id), 1);
                                this.emptyCords.splice(this.getIndexWithinTeam(this.emptyCords, dropPoint.id), 1);
                                this.emptyCords.push({ id: this.team2[i].id, x: this.team2[i].x, y: this.team2[i].y }); //add to empty
                                this.team2.splice(this.getIndexWithinTeam(this.team2, this.team2[i].id), 1); //remove
                                break;
                            }
                        }
                        //Check to if there is another jump possible; if yes, then keep Team 1's otherwise, set it to Team 2's turn
                        if ((this.doesCoordsExist(this.emptyCords, (+dropPoint.x + (this.eachBox * 2)), (+dropPoint.y + (this.eachBox * 2)))
                            && this.doesCoordsExist(this.team2, (+dropPoint.x + (this.eachBox)), (+dropPoint.y + (this.eachBox))))
                            || (this.doesCoordsExist(this.emptyCords, (+dropPoint.x - (this.eachBox * 2)), (+dropPoint.y + (this.eachBox * 2)))
                                && this.doesCoordsExist(this.team2, (+dropPoint.x - (this.eachBox)), (+dropPoint.y + (this.eachBox))))
                            || (this.doesCoordsExist(this.emptyCords, (+dropPoint.x + (this.eachBox * 2)), (+dropPoint.y - (this.eachBox * 2)))
                                && this.doesCoordsExist(this.team2, (+dropPoint.x + (this.eachBox)), (+dropPoint.y - (this.eachBox))))
                            || (this.doesCoordsExist(this.emptyCords, (+dropPoint.x - (this.eachBox * 2)), (+dropPoint.y - (this.eachBox * 2)))
                                && this.doesCoordsExist(this.team2, (+dropPoint.x - (this.eachBox)), (+dropPoint.y - (this.eachBox))))) {
                            this.team1turn = true;
                            this.team2turn = false;
                        }
                        else {
                            this.team1turn = false;
                            this.team2turn = true;
                        }
                    }
                    // is jump possible to right and remove a piece from team 2's
                    else if (((point.x == (+dropPoint.x - (this.eachBox * 2)))) && (point.y == (+dropPoint.y - (this.eachBox * 2)))
                        || ((point.x == (+dropPoint.x - (this.eachBox * 2)))) && (point.y == (+dropPoint.y + (this.eachBox * 2)))) {
                        //check if the position ahead Team 2
                        for (let i = 0; i < this.team2.length; i++) {
                            //If yes, then move ahead with jumping
                            if (this.team2[i].x == (+dropPoint.x - this.eachBox) && (this.team2[i].y == (+dropPoint.y - this.eachBox))) {
                                this.team1.push(dropPoint);
                                this.emptyCords.push(point);
                                this.team1Kings.push(dropPoint);
                                this.team1.splice(this.getIndexWithinTeam(this.team1, point.id), 1);
                                this.team1Kings.splice(this.getIndexWithinTeam(this.team1Kings, point.id), 1);
                                this.emptyCords.splice(this.getIndexWithinTeam(this.emptyCords, dropPoint.id), 1);
                                this.emptyCords.push({ id: this.team2[i].id, x: this.team2[i].x, y: this.team2[i].y }); //add to empty
                                this.team2.splice(this.getIndexWithinTeam(this.team2, this.team2[i].id), 1); //remove
                                break;
                            }
                            else if ((this.team2[i].x == (+dropPoint.x - this.eachBox) && (this.team2[i].y == (+dropPoint.y + this.eachBox)))) {
                                this.team1.push(dropPoint);
                                this.emptyCords.push(point);
                                this.team1Kings.push(dropPoint);
                                this.team1.splice(this.getIndexWithinTeam(this.team1, point.id), 1);
                                this.team1Kings.splice(this.getIndexWithinTeam(this.team1Kings, point.id), 1);
                                this.emptyCords.splice(this.getIndexWithinTeam(this.emptyCords, dropPoint.id), 1);
                                this.emptyCords.push({ id: this.team2[i].id, x: this.team2[i].x, y: this.team2[i].y }); //add to empty
                                this.team2.splice(this.getIndexWithinTeam(this.team2, this.team2[i].id), 1); //remove
                                break;
                            }
                        }
                        //Check to if there is another jump possible; if yes, then keep Team 1's otherwise, set it to Team 2's turn
                        if ((this.doesCoordsExist(this.emptyCords, (+dropPoint.x + (this.eachBox * 2)), (+dropPoint.y + (this.eachBox * 2)))
                            && this.doesCoordsExist(this.team2, (+dropPoint.x + (this.eachBox)), (+dropPoint.y + (this.eachBox))))
                            || (this.doesCoordsExist(this.emptyCords, (+dropPoint.x - (this.eachBox * 2)), (+dropPoint.y + (this.eachBox * 2)))
                                && this.doesCoordsExist(this.team2, (+dropPoint.x - (this.eachBox)), (+dropPoint.y + (this.eachBox))))
                            || (this.doesCoordsExist(this.emptyCords, (+dropPoint.x + (this.eachBox * 2)), (+dropPoint.y - (this.eachBox * 2)))
                                && this.doesCoordsExist(this.team2, (+dropPoint.x + (this.eachBox)), (+dropPoint.y - (this.eachBox))))
                            || (this.doesCoordsExist(this.emptyCords, (+dropPoint.x - (this.eachBox * 2)), (+dropPoint.y - (this.eachBox * 2)))
                                && this.doesCoordsExist(this.team2, (+dropPoint.x - (this.eachBox)), (+dropPoint.y - (this.eachBox))))) {
                            this.team1turn = true;
                            this.team2turn = false;
                        }
                        else {
                            this.team1turn = false;
                            this.team2turn = true;
                        }
                    }
                }
                //else if the piece is not a king
                else {
                    // Team 1: Move forward if the drop point is 1 ahead to left or right
                    if (((point.x == (+dropPoint.x + this.eachBox)) || (point.x == (+dropPoint.x - this.eachBox))) && (point.y == (+dropPoint.y - this.eachBox))) {
                        this.team1.push(dropPoint);
                        this.emptyCords.push(point);
                        this.team1.splice(this.getIndexWithinTeam(this.team1, point.id), 1);
                        this.emptyCords.splice(this.getIndexWithinTeam(this.emptyCords, dropPoint.id), 1);
                        this.team1turn = false;
                        this.team2turn = true;
                    }
                    // is jump possible to left and if it is, then remove a piece from team 2's and jump
                    else if (((point.x == (+dropPoint.x + (this.eachBox * 2))) && (point.y == (+dropPoint.y - (this.eachBox * 2))))) {
                        //check if the position ahead Team 2
                        for (let i = 0; i < this.team2.length; i++) {
                            //If yes, then move ahead with jumping
                            if (this.team2[i].x == (+dropPoint.x + this.eachBox) && (this.team2[i].y == (+dropPoint.y - this.eachBox))) {
                                this.team1.push(dropPoint);
                                this.emptyCords.push(point);
                                this.team1.splice(this.getIndexWithinTeam(this.team1, point.id), 1);
                                this.emptyCords.splice(this.getIndexWithinTeam(this.emptyCords, dropPoint.id), 1);
                                this.emptyCords.push({ id: this.team2[i].id, x: this.team2[i].x, y: this.team2[i].y }); //add to empty
                                this.team2Kings.splice(this.getIndexWithinTeam(this.team2Kings, this.team2[i].id), 1);
                                this.team2.splice(this.getIndexWithinTeam(this.team2, this.team2[i].id), 1); //remove
                                break;
                            }
                        }
                        //Check to if there is another jump possible; if yes, then keep Team 1's otherwise, set it to Team 2's turn
                        if ((this.doesCoordsExist(this.emptyCords, (+dropPoint.x + (+this.eachBox * 2)), (+dropPoint.y + (+this.eachBox * 2)))
                            && this.doesCoordsExist(this.team2, (+dropPoint.x + (+this.eachBox)), (+dropPoint.y + (+this.eachBox))))
                            || (this.doesCoordsExist(this.emptyCords, (+dropPoint.x - (+this.eachBox * 2)), (+dropPoint.y + (+this.eachBox * 2)))
                                && this.doesCoordsExist(this.team2, (+dropPoint.x - (+this.eachBox)), (+dropPoint.y + (+this.eachBox))))) {
                            this.team1turn = true;
                            this.team2turn = false;
                        }
                        else {
                            this.team1turn = false;
                            this.team2turn = true;
                        }
                    }
                    // is jump possible to right and remove a piece from team 2's
                    else if (((point.x == (+dropPoint.x - (this.eachBox * 2)))) && (point.y == (+dropPoint.y - (this.eachBox * 2)))) {
                        //check if the position ahead Team 2
                        for (let i = 0; i < this.team2.length; i++) {
                            //If yes, then move ahead with jumping
                            if (this.team2[i].x == (+dropPoint.x - this.eachBox) && (this.team2[i].y == (+dropPoint.y - this.eachBox))) {
                                this.team1.push(dropPoint);
                                this.emptyCords.push(point);
                                this.team1.splice(this.getIndexWithinTeam(this.team1, point.id), 1);
                                this.emptyCords.splice(this.getIndexWithinTeam(this.emptyCords, dropPoint.id), 1);
                                this.emptyCords.push({ id: this.team2[i].id, x: this.team2[i].x, y: this.team2[i].y }); //add to empty
                                this.team2Kings.splice(this.getIndexWithinTeam(this.team2Kings, this.team2[i].id), 1);
                                this.team2.splice(this.getIndexWithinTeam(this.team2, this.team2[i].id), 1); //remove
                                break;
                            }
                        }
                        //Check to if there is another jump possible; if yes, then keep Team 1's otherwise, set it to Team 2's turn
                        if ((this.doesCoordsExist(this.emptyCords, (+dropPoint.x + (this.eachBox * 2)), (+dropPoint.y + (this.eachBox * 2)))
                            && this.doesCoordsExist(this.team2, (+dropPoint.x + (this.eachBox)), (+dropPoint.y + (this.eachBox))))
                            || (this.doesCoordsExist(this.emptyCords, (+dropPoint.x - (this.eachBox * 2)), (+dropPoint.y + (this.eachBox * 2)))
                                && this.doesCoordsExist(this.team2, (+dropPoint.x - (this.eachBox)), (+dropPoint.y + (this.eachBox))))) {
                            this.team1turn = true;
                            this.team2turn = false;
                        }
                        else {
                            this.team1turn = false;
                            this.team2turn = true;
                        }
                    }
                }
                //Make it a king
                if (+dropPoint.y == (+this.board - (+this.eachBox / 2)) && this.getIndexWithinTeam(this.team1Kings, dropPoint.id) < 0) {
                    this.team1Kings.push(dropPoint);
                }
            }
            //If this is Team 2's turns and check if pick up point exists in Team2 and make sure the drop location is empty location
            else if (this.getIndexWithinTeam(this.team2, point.id) >= 0 && this.getIndexWithinTeam(this.emptyCords, dropPoint.id) >= 0 && this.team2turn) {
                //check if the piece is a king
                if (this.getIndexWithinTeam(this.team2Kings, point.id) >= 0) {
                    // Team 1: Move forward or backwards if the drop point is 1 ahead to left or right
                    if (((point.x == (+dropPoint.x + this.eachBox)) || (point.x == (+dropPoint.x - this.eachBox)))
                        && (point.y == (+dropPoint.y + this.eachBox) || point.y == (+dropPoint.y - this.eachBox))) {
                        this.team2.push(dropPoint);
                        this.emptyCords.push(point);
                        this.team2Kings.push(dropPoint);
                        this.team2Kings.splice(this.getIndexWithinTeam(this.team2Kings, point.id), 1);
                        this.team2.splice(this.getIndexWithinTeam(this.team2, point.id), 1);
                        this.emptyCords.splice(this.getIndexWithinTeam(this.emptyCords, dropPoint.id), 1);
                        this.team1turn = true;
                        this.team2turn = false;
                    }
                    // is jump possible to right and if it is, then remove a piece from team 1's and jump
                    else if (((point.x == (+dropPoint.x + (this.eachBox * 2))) && (point.y == (+dropPoint.y + (this.eachBox * 2))))
                        || ((point.x == (+dropPoint.x + (this.eachBox * 2))) && (point.y == (+dropPoint.y - (this.eachBox * 2))))) {
                        //check if the position ahead Team 1
                        for (let i = 0; i < this.team1.length; i++) {
                            //If yes, then move ahead with jumping
                            if (this.team1[i].x == (+dropPoint.x + this.eachBox) && (this.team1[i].y == (+dropPoint.y + this.eachBox))) {
                                this.team2.push(dropPoint);
                                this.emptyCords.push(point);
                                this.team2Kings.push(dropPoint);
                                this.team2Kings.splice(this.getIndexWithinTeam(this.team2Kings, point.id), 1);
                                this.team2.splice(this.getIndexWithinTeam(this.team2, point.id), 1);
                                this.emptyCords.splice(this.getIndexWithinTeam(this.emptyCords, dropPoint.id), 1);
                                this.emptyCords.push({ id: this.team1[i].id, x: this.team1[i].x, y: this.team1[i].y }); //add to empty
                                this.team1.splice(this.getIndexWithinTeam(this.team1, this.team1[i].id), 1); //
                                break;
                            }
                            else if (this.team1[i].x == (+dropPoint.x + this.eachBox) && (this.team1[i].y == (+dropPoint.y - this.eachBox))) {
                                this.team2.push(dropPoint);
                                this.emptyCords.push(point);
                                this.team2Kings.push(dropPoint);
                                this.team2Kings.splice(this.getIndexWithinTeam(this.team2Kings, point.id), 1);
                                this.team2.splice(this.getIndexWithinTeam(this.team2, point.id), 1);
                                this.emptyCords.splice(this.getIndexWithinTeam(this.emptyCords, dropPoint.id), 1);
                                this.emptyCords.push({ id: this.team1[i].id, x: this.team1[i].x, y: this.team1[i].y }); //add to empty
                                this.team1.splice(this.getIndexWithinTeam(this.team1, this.team1[i].id), 1); //
                                break;
                            }
                        }
                        //Check to if there is another jump possible; if yes, then keep Team 2's otherwise, set it to Team 1's turn
                        if ((this.doesCoordsExist(this.emptyCords, (+dropPoint.x - (this.eachBox * 2)), (+dropPoint.y - (this.eachBox * 2)))
                            && this.doesCoordsExist(this.team1, (+dropPoint.x - (this.eachBox)), (+dropPoint.y - (this.eachBox))))
                            || (this.doesCoordsExist(this.emptyCords, (+dropPoint.x + (this.eachBox * 2)), (+dropPoint.y - (this.eachBox * 2)))
                                && this.doesCoordsExist(this.team1, (+dropPoint.x + (this.eachBox)), (+dropPoint.y - (this.eachBox))))
                            || (this.doesCoordsExist(this.emptyCords, (+dropPoint.x - (this.eachBox * 2)), (+dropPoint.y + (this.eachBox * 2)))
                                && this.doesCoordsExist(this.team1, (+dropPoint.x - (this.eachBox)), (+dropPoint.y + (this.eachBox))))
                            || (this.doesCoordsExist(this.emptyCords, (+dropPoint.x + (this.eachBox * 2)), (+dropPoint.y + (this.eachBox * 2)))
                                && this.doesCoordsExist(this.team1, (+dropPoint.x + (this.eachBox)), (+dropPoint.y + (this.eachBox))))) {
                            this.team1turn = false;
                            this.team2turn = true;
                        }
                        else {
                            this.team1turn = true;
                            this.team2turn = false;
                        }
                    }
                    // is jump possible to left and if it is, then remove a piece from team 2's and jump
                    else if (((point.x == (+dropPoint.x - (this.eachBox * 2)))) && (point.y == (+dropPoint.y + (this.eachBox * 2)))
                        || ((point.x == (+dropPoint.x - (this.eachBox * 2)))) && (point.y == (+dropPoint.y - (this.eachBox * 2)))) {
                        for (let i = 0; i < this.team1.length; i++) {
                            if (this.team1[i].x == (+dropPoint.x - this.eachBox) && (this.team1[i].y == (+dropPoint.y + this.eachBox))) {
                                this.team2.push(dropPoint);
                                this.emptyCords.push(point);
                                this.team2Kings.push(dropPoint);
                                this.team2Kings.splice(this.getIndexWithinTeam(this.team2Kings, point.id), 1);
                                this.team2.splice(this.getIndexWithinTeam(this.team2, point.id), 1);
                                this.emptyCords.splice(this.getIndexWithinTeam(this.emptyCords, dropPoint.id), 1);
                                this.emptyCords.push({ id: this.team1[i].id, x: this.team1[i].x, y: this.team1[i].y }); //add to empty
                                this.team1.splice(this.getIndexWithinTeam(this.team1, this.team1[i].id), 1); //remove
                                break;
                            }
                            else if (this.team1[i].x == (+dropPoint.x - this.eachBox) && (this.team1[i].y == (+dropPoint.y - this.eachBox))) {
                                this.team2.push(dropPoint);
                                this.emptyCords.push(point);
                                this.team2Kings.push(dropPoint);
                                this.team2Kings.splice(this.getIndexWithinTeam(this.team2Kings, point.id), 1);
                                this.team2.splice(this.getIndexWithinTeam(this.team2, point.id), 1);
                                this.emptyCords.splice(this.getIndexWithinTeam(this.emptyCords, dropPoint.id), 1);
                                this.emptyCords.push({ id: this.team1[i].id, x: this.team1[i].x, y: this.team1[i].y }); //add to empty
                                this.team1.splice(this.getIndexWithinTeam(this.team1, this.team1[i].id), 1); //remove
                                break;
                            }
                        }
                        //Check to if there is another jump possible; if yes, then keep Team 2's otherwise, set it to Team 1's turn
                        if ((this.doesCoordsExist(this.emptyCords, (+dropPoint.x - (this.eachBox * 2)), (+dropPoint.y - (this.eachBox * 2)))
                            && this.doesCoordsExist(this.team1, (+dropPoint.x - (this.eachBox)), (+dropPoint.y - (this.eachBox))))
                            || (this.doesCoordsExist(this.emptyCords, (+dropPoint.x + (this.eachBox * 2)), (+dropPoint.y - (this.eachBox * 2)))
                                && this.doesCoordsExist(this.team1, (+dropPoint.x + (this.eachBox)), (+dropPoint.y - (this.eachBox))))
                            || (this.doesCoordsExist(this.emptyCords, (+dropPoint.x - (this.eachBox * 2)), (+dropPoint.y + (this.eachBox * 2)))
                                && this.doesCoordsExist(this.team1, (+dropPoint.x - (this.eachBox)), (+dropPoint.y + (this.eachBox))))
                            || (this.doesCoordsExist(this.emptyCords, (+dropPoint.x + (this.eachBox * 2)), (+dropPoint.y + (this.eachBox * 2)))
                                && this.doesCoordsExist(this.team1, (+dropPoint.x + (this.eachBox)), (+dropPoint.y + (this.eachBox))))) {
                            this.team1turn = false;
                            this.team2turn = true;
                        }
                        else {
                            this.team1turn = true;
                            this.team2turn = false;
                        }
                    }
                }
                //else if piece is not a king
                else {
                    // Team 1: Move forward if the drop point is 1 ahead to left or right
                    if (((point.x == (+dropPoint.x + this.eachBox)) || (point.x == (+dropPoint.x - this.eachBox))) && (point.y == (+dropPoint.y + this.eachBox))) {
                        this.team2.push(dropPoint);
                        this.emptyCords.push(point);
                        this.team2.splice(this.getIndexWithinTeam(this.team2, point.id), 1);
                        this.emptyCords.splice(this.getIndexWithinTeam(this.emptyCords, dropPoint.id), 1);
                        this.team1turn = true;
                        this.team2turn = false;
                    }
                    // is jump possible to right and if it is, then remove a piece from team 1's and jump
                    else if (((point.x == (+dropPoint.x + (this.eachBox * 2))) && (point.y == (+dropPoint.y + (this.eachBox * 2))))) {
                        //check if the position ahead Team 1
                        for (let i = 0; i < this.team1.length; i++) {
                            //If yes, then move ahead with jumping
                            if (this.team1[i].x == (+dropPoint.x + this.eachBox) && (this.team1[i].y == (+dropPoint.y + this.eachBox))) {
                                this.team2.push(dropPoint);
                                this.emptyCords.push(point);
                                this.team2.splice(this.getIndexWithinTeam(this.team2, point.id), 1);
                                this.emptyCords.splice(this.getIndexWithinTeam(this.emptyCords, dropPoint.id), 1);
                                this.emptyCords.push({ id: this.team1[i].id, x: this.team1[i].x, y: this.team1[i].y }); //add to empty
                                this.team1Kings.splice(this.getIndexWithinTeam(this.team1Kings, this.team1[i].id), 1);
                                this.team1.splice(this.getIndexWithinTeam(this.team1, this.team1[i].id), 1); //remove
                                break;
                            }
                        }
                        //Check to if there is another jump possible; if yes, then keep Team 2's otherwise, set it to Team 1's turn
                        if ((this.doesCoordsExist(this.emptyCords, (+dropPoint.x - (this.eachBox * 2)), (+dropPoint.y - (this.eachBox * 2)))
                            && this.doesCoordsExist(this.team1, (+dropPoint.x - (this.eachBox)), (+dropPoint.y - (this.eachBox))))
                            || (this.doesCoordsExist(this.emptyCords, (+dropPoint.x + (this.eachBox * 2)), (+dropPoint.y - (this.eachBox * 2)))
                                && this.doesCoordsExist(this.team1, (+dropPoint.x + (this.eachBox)), (+dropPoint.y - (this.eachBox))))) {
                            this.team1turn = false;
                            this.team2turn = true;
                        }
                        else {
                            this.team1turn = true;
                            this.team2turn = false;
                        }
                    }
                    // is jump possible to left and if it is, then remove a piece from team 2's and jump
                    else if (((point.x == (+dropPoint.x - (this.eachBox * 2)))) && (point.y == (+dropPoint.y + (this.eachBox * 2)))) {
                        for (let i = 0; i < this.team1.length; i++) {
                            if (this.team1[i].x == (+dropPoint.x - this.eachBox) && (this.team1[i].y == (+dropPoint.y + this.eachBox))) {
                                this.team2.push(dropPoint);
                                this.emptyCords.push(point);
                                this.team2.splice(this.getIndexWithinTeam(this.team2, point.id), 1);
                                this.emptyCords.splice(this.getIndexWithinTeam(this.emptyCords, dropPoint.id), 1);
                                this.emptyCords.push({ id: this.team1[i].id, x: this.team1[i].x, y: this.team1[i].y }); //add to empty
                                this.team1Kings.splice(this.getIndexWithinTeam(this.team1Kings, this.team1[i].id), 1);
                                this.team1.splice(this.getIndexWithinTeam(this.team1, this.team1[i].id), 1); //remove
                                break;
                            }
                        }
                        //Check to if there is another jump possible; if yes, then keep Team 2's otherwise, set it to Team 1's turn
                        if ((this.doesCoordsExist(this.emptyCords, (+dropPoint.x - (this.eachBox * 2)), (+dropPoint.y - (this.eachBox * 2)))
                            && this.doesCoordsExist(this.team1, (+dropPoint.x - (this.eachBox)), (+dropPoint.y - (this.eachBox))))
                            || (this.doesCoordsExist(this.emptyCords, (+dropPoint.x + (this.eachBox * 2)), (+dropPoint.y - (this.eachBox * 2)))
                                && this.doesCoordsExist(this.team1, (+dropPoint.x + (this.eachBox)), (+dropPoint.y - (this.eachBox))))) {
                            this.team1turn = false;
                            this.team2turn = true;
                        }
                        else {
                            this.team1turn = true;
                            this.team2turn = false;
                        }
                    }
                }
                //Make team 2 kings
                if (+dropPoint.y == ((+this.eachBox) / 2) && this.getIndexWithinTeam(this.team1Kings, dropPoint.id) < 0) {
                    this.team2Kings.push(dropPoint);
                }
            }
            this.team1won = this.didTeam1Won();
            this.team2won = this.didTeam2Won();
            this.sourceObject = null;
        }
        ev.preventDefault();
    }
    //printing for testing purposes
    print(s) {
        console.log(new Date() + " " + s);
    }
    //When mouse leave a spot, it clears over class
    dragLeave() {
        let elems = document.querySelectorAll(".over");
        for (let i = 0; i < elems.length; i++) {
            elems[i].classList.remove("over");
        }
    }
    doesCoordsExist(t, x, y) {
        for (let value of t) {
            if (+value.x === x && +value.y === y) {
                return true;
            }
        }
        return false;
    }
    getIndexWithinTeam(t, id) {
        return t.findIndex((value) => value.id == id);
    }
    getTeamOne() {
        let team = [];
        let intialNumberOfPositions = (((+this.numOfRows - 2) / 2) * (+this.numOfRows / 2));
        let total = 0;
        for (let pos of this.posCirclesCords) {
            if (total < (intialNumberOfPositions)) {
                team.push({ id: pos.id, x: pos.x, y: pos.y });
                pos.taken = true;
                total++;
            }
        }
        return team;
    }
    getTeamTwo() {
        let team = [];
        let intialNumberOfPositions = (((+this.numOfRows - 2) / 2) * (+this.numOfRows / 2));
        let total = (this.posCirclesCords.length - intialNumberOfPositions);
        for (let [i, pos] of this.posCirclesCords.entries()) {
            if (total < this.posCirclesCords.length && total <= i) {
                team.push({ id: pos.id, x: pos.x, y: pos.y });
                pos.taken = true;
            }
        }
        return team;
    }
    getEmptyCoords() {
        let result = [];
        for (let pos of this.posCirclesCords) {
            if (pos.taken === false) {
                result.push({ id: pos.id, x: pos.x, y: pos.y });
                pos.taken = true;
            }
        }
        return result;
    }
    getposCirclesCords() {
        let result = [];
        let i = 0;
        for (let pos of this.posCords) {
            if (pos.color === this.boardColors.c2) {
                let x = pos.x + (this.eachBox / 2);
                let y = pos.y + (this.eachBox / 2);
                result.push({ id: i, x: x, y: y, taken: false });
                i++;
            }
        }
        return result;
    }
    //generate all x,y coordinates for board
    getBoxPositionCoordinates() {
        let c = [];
        let nextColor;
        for (let i = 0; i < +this.board; i += this.eachBox) {
            //first column start with red and next column start with black and so on.
            if ((i / this.eachBox) % 2 === 0) {
                nextColor = this.boardColors.c1;
            }
            else {
                nextColor = this.boardColors.c2;
            }
            for (let j = 0; j < +this.board; j += this.eachBox) {
                if (nextColor === this.boardColors.c1) {
                    c.push({ x: j, y: i, color: this.boardColors.c1 });
                    nextColor = this.boardColors.c2;
                }
                else {
                    c.push({ x: j, y: i, color: this.boardColors.c2 });
                    nextColor = this.boardColors.c1;
                }
            }
        }
        return c;
    }
    ngOnInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 51, vars: 26, consts: [[1, "cont"], ["class", "blackTeam", 4, "ngIf"], ["class", "redTeam", 4, "ngIf"], [1, "row"], [3, "mouseup"], [4, "ngFor", "ngForOf"], ["draggable", "true", "fill", "black", 3, "mousedown", 4, "ngFor", "ngForOf"], ["draggable", "true", "fill", "firebrick", 3, "mousedown", 4, "ngFor", "ngForOf"], ["draggable", "true", "fill", "chocolate", 3, "mouseover", "mouseleave", "mouseup", 4, "ngFor", "ngForOf"], ["draggable", "true", "fill", "gold", 3, "mousedown", 4, "ngFor", "ngForOf"], [1, "text-danger"], ["id", "g1"], ["type", "radio", "value", "800", "name", "b", 3, "ngModel", "checked", "ngModelChange", "click"], ["type", "radio", "value", "1000", "name", "b", 3, "ngModel", "checked", "ngModelChange", "click"], ["type", "radio", "value", "1200", "name", "b", 3, "ngModel", "checked", "ngModelChange", "click"], ["id", "g2"], ["type", "radio", "value", "8", "name", "r", 3, "ngModel", "checked", "ngModelChange", "click"], ["type", "radio", "value", "10", "name", "r", 3, "ngModel", "checked", "ngModelChange", "click"], ["type", "radio", "value", "16", "name", "r", 3, "ngModel", "checked", "ngModelChange", "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "btn-success", 3, "click"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], [1, "blackTeam"], [1, "redTeam"], ["draggable", "true", "fill", "black", 3, "mousedown"], ["draggable", "true", "fill", "firebrick", 3, "mousedown"], ["draggable", "true", "fill", "chocolate", 3, "mouseover", "mouseleave", "mouseup"], ["draggable", "true", "fill", "gold", 3, "mousedown"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_p_5_Template, 2, 0, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_p_6_Template, 2, 0, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_p_7_Template, 2, 0, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AppComponent_p_8_Template, 2, 0, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "svg", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseup", function AppComponent_Template__svg_svg_mouseup_10_listener($event) { return ctx.drop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AppComponent__svg_rect_11_Template, 1, 5, "rect", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AppComponent__svg_circle_12_Template, 1, 4, "circle", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AppComponent__svg_circle_13_Template, 1, 4, "circle", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AppComponent__svg_circle_14_Template, 1, 4, "circle", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AppComponent__svg_circle_15_Template, 1, 4, "circle", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AppComponent__svg_circle_16_Template, 1, 4, "circle", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "****Changing values will restart the game****");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Board Size: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_23_listener($event) { return ctx.board = $event; })("click", function AppComponent_Template_input_click_23_listener() { return ctx.restart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " 800px ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_25_listener($event) { return ctx.board = $event; })("click", function AppComponent_Template_input_click_25_listener() { return ctx.restart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " 1000px ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_27_listener($event) { return ctx.board = $event; })("click", function AppComponent_Template_input_click_27_listener() { return ctx.restart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " 1200px ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Number of Rows: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_32_listener($event) { return ctx.numOfRows = $event; })("click", function AppComponent_Template_input_click_32_listener() { return ctx.restart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " 8x8 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_34_listener($event) { return ctx.numOfRows = $event; })("click", function AppComponent_Template_input_click_34_listener() { return ctx.restart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " 10x10 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_36_listener($event) { return ctx.numOfRows = $event; })("click", function AppComponent_Template_input_click_36_listener() { return ctx.restart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " 16x16 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "New Game/restart game");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_40_listener() { return ctx.restart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Restart the game/New Game");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " ***This will clear any games saved locally***");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Save/delete Local Storage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_47_listener() { return ctx.saveLocal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Save Local");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_49_listener() { return ctx.clearLocal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Clear Local");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.game);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.team1turn && !ctx.team1won && !ctx.team2won);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.team2turn && !ctx.team1won && !ctx.team2won);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.team1won);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.team2won);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("height", ctx.board)("width", ctx.board);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.posCords);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.team1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.team2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.emptyCords);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.team1Kings);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.team2Kings);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.board)("checked", ctx.board === "800");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.board)("checked", ctx.board === "1000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.board)("checked", ctx.board === "1200");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.numOfRows)("checked", ctx.numOfRows === "8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.numOfRows)("checked", ctx.numOfRows === "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.numOfRows)("checked", ctx.numOfRows === "16");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: ["svg[_ngcontent-%COMP%]{\r\n  border: 2px solid black;\r\n}\r\n\r\n.dragged[_ngcontent-%COMP%] {opacity: 0.5}\r\n\r\n.over[_ngcontent-%COMP%]{\r\n  fill: navajowhite;\r\n  opacity: 0.5;\r\n}\r\n\r\n.cont[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-flow: column wrap;\r\n  align-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.row[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n}\r\n\r\n.redTeam[_ngcontent-%COMP%]{\r\n  color: darkred;\r\n  font-size: 25px;\r\n  border: 2px solid darkred;\r\n  font-weight: bolder;\r\n}\r\n\r\n.blackTeam[_ngcontent-%COMP%]{\r\n  color: black;\r\n  font-size: 25px;\r\n  border: 2px solid black;\r\n  font-weight: bolder;\r\n\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  margin: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUEsVUFBVSxZQUFZOztBQUV0QjtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsbUJBQW1COztBQUVyQjs7QUFFQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic3Zne1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4uZHJhZ2dlZCB7b3BhY2l0eTogMC41fVxyXG5cclxuLm92ZXJ7XHJcbiAgZmlsbDogbmF2YWpvd2hpdGU7XHJcbiAgb3BhY2l0eTogMC41O1xyXG59XHJcblxyXG4uY29udCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5yb3d7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xyXG59XHJcblxyXG4ucmVkVGVhbXtcclxuICBjb2xvcjogZGFya3JlZDtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgZGFya3JlZDtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcblxyXG4uYmxhY2tUZWFte1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuXHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");





class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                ],
                imports: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


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