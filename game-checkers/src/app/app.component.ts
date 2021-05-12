import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title:string;
  game:string;
  board: string;
  eachBox: number;
  numOfRows: string;
  boardColors: any;
  posCords: any;
  team1: any;
  team1Kings: any;
  team2: any;
  team2Kings: any;
  posCirclesCords: any;
  emptyCords: any;
  sourceObject: any;
  team1turn: boolean;
  team2turn: boolean;
  team1won: boolean;
  team2won: boolean;


  constructor() {
    this.title = 'Jatinder Singh - Term Project - CS701';
    this.game = 'Online Checkers';

    this.boardColors = {c1:"navajowhite", c2: "chocolate"};

    if(window.localStorage.length !== 0){
      this.board = window.localStorage.getItem("board").toString();
      this.numOfRows = window.localStorage.getItem("numOfRows").toString();

      this.eachBox = +this.board / +this.numOfRows;

      this.posCords = JSON.parse(window.localStorage.getItem("posCords"));
      this.posCirclesCords = JSON.parse(window.localStorage.getItem("posCirclesCords"));

      this.team1 = JSON.parse(window.localStorage.getItem("team1"));
      this.team2 = JSON.parse(window.localStorage.getItem("team2" ));
      this.emptyCords = JSON.parse(window.localStorage.getItem("emptyCords"));

      this.team1turn = window.localStorage.getItem("team1turn") === 'true';
      this.team2turn = window.localStorage.getItem("team2turn") === 'true';

      this.team1Kings = JSON.parse(window.localStorage.getItem("team1Kings"));
      this.team2Kings = JSON.parse(window.localStorage.getItem("team2Kings" ));

    } else{
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

    this.team1won =  this.didTeam1Won();
    this.team2won = this.didTeam2Won();
  }

  didTeam1Won(): any{
    if(this.team2.length == 0){
      return true;
    }
    return false;
  }

  didTeam2Won(): any{
    if(this.team1.length == 0){
      return true;
    }
    return false;
  }

  restart(): any{

    window.localStorage.clear();
    // wait for little bit for variables to change and then restart
    setTimeout(() =>{
        this.eachBox = +this.board / +this.numOfRows;
        this.posCords = this.getBoxPositionCoordinates();
        this.posCirclesCords = this.getposCirclesCords();
        this.team1 = this.getTeamOne();
        this.team2 = this.getTeamTwo();
        this.emptyCords = this.getEmptyCoords();
        this.team1turn = true;
        this.team2turn = false;
        this.team1won =  this.didTeam1Won();
        this.team2won = this.didTeam2Won();
        this.team1Kings = [];
        this.team2Kings = [];
      }
      , 50);

  }

  saveLocal(): any{
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

  clearLocal():any{
    window.localStorage.clear();
  }

  drag(ev) {
    // check to see which teams turn it is and then only add the class
    if((ev.target.id && this.getIndexWithinTeam(this.team1, ev.target.id) >= 0 && this.team1turn) || (ev.target.id && this.getIndexWithinTeam(this.team2, ev.target.id) >= 0 && this.team2turn) ){
      this.sourceObject = {id:ev.target.id, x: ev.target.attributes.cx.value, y: ev.target.attributes.cy.value};
      ev.target.classList.add("dragged");
    }
    ev.preventDefault();
  }

  dragOver(ev){
    ev.preventDefault();
    if(this.sourceObject){
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
      dropPoint = {id: ev.target.id, x: ev.target.attributes.cx.value, y: ev.target.attributes.cy.value};
      let point = this.sourceObject;

      //If this is Team 1's turns and check if pick up point exists in Team1 and make sure the drop location is empty location
      if (this.getIndexWithinTeam(this.team1, point.id) >= 0 && this.getIndexWithinTeam(this.emptyCords, dropPoint.id) >= 0 && this.team1turn) {
        // check to see if a king is being moved
        if(this.getIndexWithinTeam(this.team1Kings, point.id) >= 0){
          // Team 1: Move forward or backwards if the drop point is 1 ahead to left or right
          if ( ((point.x == (+dropPoint.x + this.eachBox)) || (point.x == (+dropPoint.x - this.eachBox)))
            && (point.y == (+dropPoint.y - this.eachBox) || point.y == (+dropPoint.y + this.eachBox))
          ){
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
          else if ( ((point.x == (+dropPoint.x + (this.eachBox * 2))) && (point.y == (+dropPoint.y - (this.eachBox * 2))))
            || ((point.x == (+dropPoint.x + (this.eachBox * 2))) && (point.y == (+dropPoint.y + (this.eachBox * 2))))
          ) {
            //check if the position ahead Team 2
            for (let i = 0; i < this.team2.length; i++) {
              //If yes, then move ahead with jumping
              if (this.team2[i].x == (+dropPoint.x + this.eachBox) && (this.team2[i].y == (+dropPoint.y - this.eachBox))
              ) {
                this.team1.push(dropPoint);
                this.team1Kings.push(dropPoint);
                this.emptyCords.push(point);
                this.team1.splice(this.getIndexWithinTeam(this.team1, point.id), 1);
                this.team1Kings.splice(this.getIndexWithinTeam(this.team1Kings, point.id), 1);
                this.emptyCords.splice(this.getIndexWithinTeam(this.emptyCords, dropPoint.id), 1);
                this.emptyCords.push({id: this.team2[i].id, x: this.team2[i].x, y: this.team2[i].y}); //add to empty
                this.team2.splice(this.getIndexWithinTeam(this.team2, this.team2[i].id), 1);//remove
                break;
              }
              //backward
              else if(this.team2[i].x == (+dropPoint.x + this.eachBox) && (this.team2[i].y == (+dropPoint.y + this.eachBox))){
                this.team1.push(dropPoint);
                this.team1Kings.push(dropPoint);
                this.emptyCords.push(point);
                this.team1.splice(this.getIndexWithinTeam(this.team1, point.id), 1);
                this.team1Kings.splice(this.getIndexWithinTeam(this.team1Kings, point.id), 1);
                this.emptyCords.splice(this.getIndexWithinTeam(this.emptyCords, dropPoint.id), 1);
                this.emptyCords.push({id: this.team2[i].id, x: this.team2[i].x, y: this.team2[i].y}); //add to empty
                this.team2.splice(this.getIndexWithinTeam(this.team2, this.team2[i].id), 1);//remove
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
                && this.doesCoordsExist(this.team2, (+dropPoint.x - (this.eachBox)), (+dropPoint.y - (this.eachBox))))
            ) {
              this.team1turn = true;
              this.team2turn = false;
            } else {
              this.team1turn = false;
              this.team2turn = true;
            }
          }
          // is jump possible to right and remove a piece from team 2's
          else if ( ((point.x == (+dropPoint.x - (this.eachBox * 2)))) && (point.y == (+dropPoint.y - (this.eachBox * 2)))
            || ((point.x == (+dropPoint.x - (this.eachBox * 2)))) && (point.y == (+dropPoint.y + (this.eachBox * 2)))
          ) {
            //check if the position ahead Team 2
            for (let i = 0; i < this.team2.length; i++) {
              //If yes, then move ahead with jumping
              if (this.team2[i].x == (+dropPoint.x - this.eachBox) && (this.team2[i].y == (+dropPoint.y - this.eachBox))
              ) {
                this.team1.push(dropPoint);
                this.emptyCords.push(point);
                this.team1Kings.push(dropPoint);
                this.team1.splice(this.getIndexWithinTeam(this.team1, point.id), 1);
                this.team1Kings.splice(this.getIndexWithinTeam(this.team1Kings, point.id), 1);
                this.emptyCords.splice(this.getIndexWithinTeam(this.emptyCords, dropPoint.id), 1);
                this.emptyCords.push({id: this.team2[i].id, x: this.team2[i].x, y: this.team2[i].y}); //add to empty
                this.team2.splice(this.getIndexWithinTeam(this.team2, this.team2[i].id), 1);//remove
                break;
              }
              else if((this.team2[i].x == (+dropPoint.x - this.eachBox) && (this.team2[i].y == (+dropPoint.y + this.eachBox)))){
                this.team1.push(dropPoint);
                this.emptyCords.push(point);
                this.team1Kings.push(dropPoint);
                this.team1.splice(this.getIndexWithinTeam(this.team1, point.id), 1);
                this.team1Kings.splice(this.getIndexWithinTeam(this.team1Kings, point.id), 1);
                this.emptyCords.splice(this.getIndexWithinTeam(this.emptyCords, dropPoint.id), 1);
                this.emptyCords.push({id: this.team2[i].id, x: this.team2[i].x, y: this.team2[i].y}); //add to empty
                this.team2.splice(this.getIndexWithinTeam(this.team2, this.team2[i].id), 1);//remove
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
                && this.doesCoordsExist(this.team2, (+dropPoint.x - (this.eachBox)), (+dropPoint.y - (this.eachBox))))
            ) {
              this.team1turn = true;
              this.team2turn = false;
            } else {
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
                this.emptyCords.push({id: this.team2[i].id, x: this.team2[i].x, y: this.team2[i].y}); //add to empty
                this.team2Kings.splice(this.getIndexWithinTeam(this.team2Kings,this.team2[i].id), 1);
                this.team2.splice(this.getIndexWithinTeam(this.team2, this.team2[i].id), 1);//remove
                break;
              }
            }
            //Check to if there is another jump possible; if yes, then keep Team 1's otherwise, set it to Team 2's turn
            if ((this.doesCoordsExist(this.emptyCords, (+dropPoint.x + (+this.eachBox * 2)), (+dropPoint.y + (+this.eachBox * 2)))
              && this.doesCoordsExist(this.team2, (+dropPoint.x + (+this.eachBox)), (+dropPoint.y + (+this.eachBox))))
              || (this.doesCoordsExist(this.emptyCords, (+dropPoint.x - (+this.eachBox * 2)), (+dropPoint.y + (+this.eachBox * 2)))
                && this.doesCoordsExist(this.team2, (+dropPoint.x - (+this.eachBox)), (+dropPoint.y + (+this.eachBox))))
            ) {
              this.team1turn = true;
              this.team2turn = false;
            } else {
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
                this.emptyCords.push({id: this.team2[i].id, x: this.team2[i].x, y: this.team2[i].y}); //add to empty
                this.team2Kings.splice(this.getIndexWithinTeam(this.team2Kings,this.team2[i].id), 1);
                this.team2.splice(this.getIndexWithinTeam(this.team2, this.team2[i].id), 1);//remove
                break;
              }
            }
            //Check to if there is another jump possible; if yes, then keep Team 1's otherwise, set it to Team 2's turn
            if ((this.doesCoordsExist(this.emptyCords, (+dropPoint.x + (this.eachBox * 2)), (+dropPoint.y + (this.eachBox * 2)))
              && this.doesCoordsExist(this.team2, (+dropPoint.x + (this.eachBox)), (+dropPoint.y + (this.eachBox))))
              || (this.doesCoordsExist(this.emptyCords, (+dropPoint.x - (this.eachBox * 2)), (+dropPoint.y + (this.eachBox * 2)))
                && this.doesCoordsExist(this.team2, (+dropPoint.x - (this.eachBox)), (+dropPoint.y + (this.eachBox))))
            ) {
              this.team1turn = true;
              this.team2turn = false;
            } else {
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
        if(this.getIndexWithinTeam(this.team2Kings, point.id) >= 0) {
          // Team 1: Move forward or backwards if the drop point is 1 ahead to left or right
          if (((point.x == (+dropPoint.x + this.eachBox)) || (point.x == (+dropPoint.x - this.eachBox)))
            && (point.y == (+dropPoint.y + this.eachBox) || point.y == (+dropPoint.y - this.eachBox)) ) {
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
            || ((point.x == (+dropPoint.x + (this.eachBox * 2))) && (point.y == (+dropPoint.y - (this.eachBox * 2))))
          ) {
            //check if the position ahead Team 1
            for (let i = 0; i < this.team1.length; i++) {
              //If yes, then move ahead with jumping
              if (this.team1[i].x == (+dropPoint.x + this.eachBox) && (this.team1[i].y == (+dropPoint.y + this.eachBox))
              ) {
                this.team2.push(dropPoint);
                this.emptyCords.push(point);
                this.team2Kings.push(dropPoint);
                this.team2Kings.splice(this.getIndexWithinTeam(this.team2Kings, point.id), 1);
                this.team2.splice(this.getIndexWithinTeam(this.team2, point.id), 1);
                this.emptyCords.splice(this.getIndexWithinTeam(this.emptyCords, dropPoint.id), 1);
                this.emptyCords.push({id: this.team1[i].id, x: this.team1[i].x, y: this.team1[i].y}); //add to empty
                this.team1.splice(this.getIndexWithinTeam(this.team1, this.team1[i].id), 1);//
                break;
              }
              else if(this.team1[i].x == (+dropPoint.x + this.eachBox) && (this.team1[i].y == (+dropPoint.y - this.eachBox))){
                this.team2.push(dropPoint);
                this.emptyCords.push(point);
                this.team2Kings.push(dropPoint);
                this.team2Kings.splice(this.getIndexWithinTeam(this.team2Kings, point.id), 1);
                this.team2.splice(this.getIndexWithinTeam(this.team2, point.id), 1);
                this.emptyCords.splice(this.getIndexWithinTeam(this.emptyCords, dropPoint.id), 1);
                this.emptyCords.push({id: this.team1[i].id, x: this.team1[i].x, y: this.team1[i].y}); //add to empty
                this.team1.splice(this.getIndexWithinTeam(this.team1, this.team1[i].id), 1);//
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
                && this.doesCoordsExist(this.team1, (+dropPoint.x + (this.eachBox)), (+dropPoint.y + (this.eachBox))))
            ) {
              this.team1turn = false;
              this.team2turn = true;
            } else {
              this.team1turn = true;
              this.team2turn = false;
            }
          }
          // is jump possible to left and if it is, then remove a piece from team 2's and jump
          else if (((point.x == (+dropPoint.x - (this.eachBox * 2)))) && (point.y == (+dropPoint.y + (this.eachBox * 2)))
            || ((point.x == (+dropPoint.x - (this.eachBox * 2)))) && (point.y == (+dropPoint.y - (this.eachBox * 2)))
          ) {
            for (let i = 0; i < this.team1.length; i++) {
              if (this.team1[i].x == (+dropPoint.x - this.eachBox) && (this.team1[i].y == (+dropPoint.y + this.eachBox))
              ) {
                this.team2.push(dropPoint);
                this.emptyCords.push(point);
                this.team2Kings.push(dropPoint);
                this.team2Kings.splice(this.getIndexWithinTeam(this.team2Kings, point.id), 1);
                this.team2.splice(this.getIndexWithinTeam(this.team2, point.id), 1);
                this.emptyCords.splice(this.getIndexWithinTeam(this.emptyCords, dropPoint.id), 1);
                this.emptyCords.push({id: this.team1[i].id, x: this.team1[i].x, y: this.team1[i].y}); //add to empty
                this.team1.splice(this.getIndexWithinTeam(this.team1, this.team1[i].id), 1);//remove
                break;
              }
              else if(this.team1[i].x == (+dropPoint.x - this.eachBox) && (this.team1[i].y == (+dropPoint.y - this.eachBox))){
                this.team2.push(dropPoint);
                this.emptyCords.push(point);
                this.team2Kings.push(dropPoint);
                this.team2Kings.splice(this.getIndexWithinTeam(this.team2Kings, point.id), 1);
                this.team2.splice(this.getIndexWithinTeam(this.team2, point.id), 1);
                this.emptyCords.splice(this.getIndexWithinTeam(this.emptyCords, dropPoint.id), 1);
                this.emptyCords.push({id: this.team1[i].id, x: this.team1[i].x, y: this.team1[i].y}); //add to empty
                this.team1.splice(this.getIndexWithinTeam(this.team1, this.team1[i].id), 1);//remove
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
                && this.doesCoordsExist(this.team1, (+dropPoint.x + (this.eachBox)), (+dropPoint.y + (this.eachBox))))
            ) {
              this.team1turn = false;
              this.team2turn = true;
            } else {
              this.team1turn = true;
              this.team2turn = false;
            }
          }
        }

        //else if piece is not a king
        else{
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
                this.emptyCords.push({id: this.team1[i].id, x: this.team1[i].x, y: this.team1[i].y}); //add to empty
                this.team1Kings.splice(this.getIndexWithinTeam(this.team1Kings,this.team1[i].id), 1);
                this.team1.splice(this.getIndexWithinTeam(this.team1, this.team1[i].id), 1);//remove
                break;
              }
            }
            //Check to if there is another jump possible; if yes, then keep Team 2's otherwise, set it to Team 1's turn
            if ((this.doesCoordsExist(this.emptyCords, (+dropPoint.x - (this.eachBox * 2)), (+dropPoint.y - (this.eachBox * 2)))
              && this.doesCoordsExist(this.team1, (+dropPoint.x - (this.eachBox)), (+dropPoint.y - (this.eachBox))))
              || (this.doesCoordsExist(this.emptyCords, (+dropPoint.x + (this.eachBox * 2)), (+dropPoint.y - (this.eachBox * 2)))
                && this.doesCoordsExist(this.team1, (+dropPoint.x + (this.eachBox)), (+dropPoint.y - (this.eachBox))))
            ) {
              this.team1turn = false;
              this.team2turn = true;
            } else {
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
                this.emptyCords.push({id: this.team1[i].id, x: this.team1[i].x, y: this.team1[i].y}); //add to empty
                this.team1Kings.splice(this.getIndexWithinTeam(this.team1Kings,this.team1[i].id), 1);
                this.team1.splice(this.getIndexWithinTeam(this.team1, this.team1[i].id), 1);//remove
                break;
              }
            }
            //Check to if there is another jump possible; if yes, then keep Team 2's otherwise, set it to Team 1's turn
            if ((this.doesCoordsExist(this.emptyCords, (+dropPoint.x - (this.eachBox * 2)), (+dropPoint.y - (this.eachBox * 2)))
              && this.doesCoordsExist(this.team1, (+dropPoint.x - (this.eachBox)), (+dropPoint.y - (this.eachBox))))
              || (this.doesCoordsExist(this.emptyCords, (+dropPoint.x + (this.eachBox * 2)), (+dropPoint.y - (this.eachBox * 2)))
                && this.doesCoordsExist(this.team1, (+dropPoint.x + (this.eachBox)), (+dropPoint.y - (this.eachBox))))
            ) {
              this.team1turn = false;
              this.team2turn = true;
            } else {
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
  print(s: string){
    console.log(new Date() + " "+ s);
  }

  //When mouse leave a spot, it clears over class
  dragLeave(){
    let elems = document.querySelectorAll(".over");
    for (let i = 0; i < elems.length; i++) {
      elems[i].classList.remove("over");
    }
  }

  doesCoordsExist(t:any, x:number, y: number): boolean{
    for (let value of t){
      if(+value.x === x && +value.y === y){
        return true;
      }
    }
    return false;
  }

  getIndexWithinTeam(t:any, id:number): number{
    return t.findIndex((value) =>
      value.id == id
    );
  }

  getTeamOne(): any{
    let team =[];
    let intialNumberOfPositions = (((+this.numOfRows - 2) / 2) * (+this.numOfRows/2));
    let total =0;
    for (let pos of this.posCirclesCords){
      if(total < (intialNumberOfPositions)) {
        team.push({id: pos.id, x:pos.x, y:pos.y});
        pos.taken = true;
        total++;
      }
    }
    return team;
  }

  getTeamTwo(): any{
    let team =[];
    let intialNumberOfPositions = (((+this.numOfRows - 2) / 2) * (+this.numOfRows/2));
    let total = (this.posCirclesCords.length- intialNumberOfPositions);
    for (let [i, pos] of this.posCirclesCords.entries()){
      if(total < this.posCirclesCords.length && total <= i) {
        team.push({id: pos.id, x:pos.x, y:pos.y});
        pos.taken = true;
      }
    }
    return team;
  }

  getEmptyCoords(): any{
    let result = [];
    for (let pos of this.posCirclesCords){
      if(pos.taken === false) {
        result.push({id: pos.id, x:pos.x, y:pos.y});
        pos.taken = true;
      }
    }
    return result;
  }

  getposCirclesCords(): any {
    let result = [];
    let i = 0;
    for (let pos of this.posCords) {
      if (pos.color === this.boardColors.c2) {
        let x = pos.x + (this.eachBox / 2);
        let y = pos.y + (this.eachBox / 2);
        result.push({id: i,x: x, y: y, taken: false});
        i++;
      }
    }
    return result;
  }


//generate all x,y coordinates for board
  getBoxPositionCoordinates(): any{
    let c = [];
    let nextColor;
    for (let i = 0; i < +this.board; i+=this.eachBox){
      //first column start with red and next column start with black and so on.
      if((i/this.eachBox) % 2 === 0){
        nextColor = this.boardColors.c1;
      }else {
        nextColor = this.boardColors.c2;
      }
      for (let j = 0; j < +this.board; j+=this.eachBox){
        if( nextColor === this.boardColors.c1){
          c.push({x: j, y: i, color: this.boardColors.c1});
          nextColor = this.boardColors.c2;
        }
        else{
          c.push({x: j, y: i, color: this.boardColors.c2});
          nextColor = this.boardColors.c1;
        }
      }
    }
    return c;
  }

  ngOnInit() {

  }

}
