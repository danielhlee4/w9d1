class MovingObject {
    constructor(option) {
        this.pos = option.pos;
        this.vel = option.vel;
        this.radius = option.radius;
        this.color = option.color;
    }

    draw(ctx) {
        const x = this.pos[0];
        const y = this.pos[1];
        ctx.beginPath();
        ctx.arc(x, y, this.radius, 0, 2 * Math.PI, true);
        ctx.fillStyle = `${this.color}`
        ctx.stroke();
        ctx.fill()
    }
}

export default MovingObject;

