class Ball {
    constructor(x,y,r) {
        this.x =x;
        this.y =y;
        this.r =r;
        this.sAngle = 0;
        this.eAngle = Math.PI*2;

        this.Gx = x+10;
        this.Gy = y+5;

        this.speed = 0.6;

    }

    run(radius) {
        //  this.Gx = this.Gx + 0.8;
        //  this.x++
       
        // console.log( Math.sin(radius))
        // console.log( Math.cos(radius))

        this.x = this.x + Math.cos(radius)* this.speed;
        this.y = this.y + Math.sin(radius)* this.speed;
    }

    get(radius) {
        let b_y = Math.cos(radius) * this.r + this.y;
        let b_x = Math.sin(radius) * this.r+ this.x;
        return { b_x, b_y };
    }

    stop() {
        this.x = this.x;
        this.y = this.y;
    }

}

export default Ball