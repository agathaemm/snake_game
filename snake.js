function Snake() {
    this.x = 0;
    this.y = 0;
    this.xspeed = 1;
    this.yspeed = 0;
    this.total = 1;
    this.tail = [];

    //pega a localizacao exata de onde a comida esta
    this.eat = function(pos) {
        var d = dist(this.x, this.y, pos.x, pos.y);
        if (d < 1) {
            this.total++;
            return true;
        } else {
            return false;
        }
    }

    //indic as direcoes da cobrinha
    this.dir = function(x, y) {
        this.xspeed = x;
        this.yspeed = y;
    }

    this.death = function() {
        for (var i=0; i < this.tail.length; i++) {
            var pos = this.tail[i];
            var d = dist(this.x, this.y, pos.x, pos.y);
            if (d < 1) {
                this.total = 0;
                this.tail = [];
            }
        }
    }

    this.update = function() {
        if(this.total === this.tail.length) {
            for (var i=0; i<this.tail.length-1; i++) {
                this.tail[i] = this.tail[i+1];
            } 
        }
        this.tail[this.total-1] = createVector(this.x, this.y);

        this.x = this.x + this.xspeed *escala;
        this.y = this.y + this.yspeed *escala;

        this.x = constrain(this.x, 0, width-escala);
        this.y = constrain(this.y, 0, height-escala);
    }

    //mostra a cobrinha na tela
    this.show = function() {
        //desenha a cobrinha 
        fill(255);
        rect(this.x, this.y, escala, escala);

        fill(255);
        for (var i=0; i<this.tail.length-1; i++) {
                rect(this.tail[i].x, this.tail[i].y, escala, escala);
        }
        
    }
}