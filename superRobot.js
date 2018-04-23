//
var feld=[
    [0,0,1,1,0],
    [1,0,0,1,0],
    [1,1,0,1,0],
    [0,0,0,1,0],
    [0,1,0,0,0]
];

//Создаём поле
var relDiv=document.querySelector('#general');
function renderFeld(feldDivs){
for (i=0; i<feldDivs.length; i++){
   var arr=feldDivs[i];
   var row= document.createElement('div');
    relDiv.appendChild(row);
    for (n in arr){
        var newSpan = document.createElement('span');
        if (arr[n]==0){newSpan.className = 'feld'; newSpan.id='ns'+i+n}else{newSpan.className='stones'; newSpan.id='ns'+i+n}
        newSpan.innerText=arr[n];
        row.appendChild(newSpan);
    }}}
renderFeld(feld);

//Robot
var Robot= function(x,y){
    this.x=x;
    this.y=y;
    this.element=document.createElement('div');
    this.element.className='robot';
    this.element.style.left=this.x+'px';
    this.element.style.top=this.y+'px';
    relDiv.appendChild(this.element)
};

//Получаем начальные координаты для робота
Robot.prototype.startPos=function() {
this.x=(document.querySelector('#ns00')).offsetLeft;
    this.y=(document.querySelector('#ns00')).offsetTop;
    this.element.x=(document.querySelector('#ns00')).offsetLeft;
    this.element.y=(document.querySelector('#ns00')).offsetTop;
};

Robot.prototype.mooveRight=function(){
    this.x=this.x+80;
    this.element.x=this.x+80
};
var RoboClone= new Robot(0,0);
RoboClone.startPos();
RoboClone.mooveRight();

console.log(RoboClone);




