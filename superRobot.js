//Object Feld
var Feld= function (feld) {
    this.feld=feld;
    var relDiv=document.querySelector('#general');
    this.relDiv=relDiv
};
Feld.prototype.render=function(){
    for (i=0; i<this.feld.length; i++){
        var arr=this.feld[i];
        var row= document.createElement('div');
        row.className='lines';
        this.relDiv.appendChild(row);
        for (n in arr){
            var newSpan = document.createElement('span');
            if (arr[n]==0){newSpan.className = 'feld'; newSpan.id='ns'+i+n}else{newSpan.className='stones'; newSpan.id='ns'+i+n
            }
            row.appendChild(newSpan);
        }}};
var newFeld= new Feld([
    [0,0,1,1,0,0,0],
    [1,0,0,1,0,1,0],
    [1,1,0,1,0,1,0],
    [0,1,0,1,0,1,0],
    [0,1,0,0,0,1,0],
    [0,1,1,1,1,1,0],
    [0,0,0,0,0,0,0]
]);
newFeld.render();

//Object Robot
var Robot= function(x,y){
    this.x=x;
    this.y=y;
    this.element=document.createElement('div');
    this.element.className='robot';
    let relDiv= document.querySelector('#general');
    relDiv.appendChild(this.element);
    this.rigBord=(document.querySelector('#ns0'+(newFeld.feld[1].length-1))).offsetLeft;
    this.botBord=(document.querySelector('#ns'+(newFeld.feld.length-1)+'0')).offsetTop;
    console.log(this.botBord)
};
//Получаем начальные координаты для робота
Robot.prototype.startPos=function() {
    this.x=(document.querySelector('#ns00')).offsetLeft;
    this.y=(document.querySelector('#ns00')).offsetTop;
    this.element.style.left=this.x+'px';
    this.element.style.top=this.y+'px';
};
Robot.prototype.mooveRight=function(){
    let nextStep=document.elementFromPoint(this.x+80, this.y).className;
    if(this.x<this.rigBord&& nextStep!='stones') this.x=this.x+80;
    this.element.style.left=this.x+'px';
};
Robot.prototype.mooveLeft= function(){
    let nextStep=document.elementFromPoint(this.x-80, this.y).className;
    if(this.x!=(document.querySelector('#ns00')).offsetLeft&& nextStep!='stones')this.x=this.x-80;
    this.element.style.left=this.x+'px';
};
Robot.prototype.mooveUp= function(){
    let nextStep=document.elementFromPoint(this.x, this.y-80).className;
    if(this.y!=document.querySelector('#ns00').offsetTop&& nextStep!='stones')this.y=this.y-80;
    this.element.style.top=this.y+'px';
};
Robot.prototype.mooveDown= function(){
    let nextStep=document.elementFromPoint(this.x, this.y+80).className;
    if(this.y<this.botBord&& nextStep!='stones')this.y=this.y+80;
    this.element.style.top=this.y+'px';
};
var RoboClone= new Robot(0,0);
RoboClone.startPos();

addEventListener('keydown', function(e){
    switch(e.keyCode) {
        case 37: RoboClone.mooveLeft(); break;
        case 39: RoboClone.mooveRight(); break;
        case 38: RoboClone.mooveUp(); break;
        case 40: RoboClone.mooveDown(); break;
    }});