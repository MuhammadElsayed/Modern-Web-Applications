function Musician(name){
    this.name = name;
}

var Violinist = new Musician("violinist");
var Pianist = new Musician("pianist");

Musician.prototype.play = function (piece) {
    console.log(this.name + "is now playing " + piece);
}

Violinist.play("violin");
Pianist.play("piano");