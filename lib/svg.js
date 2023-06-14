const {square, circle, triangle} = require('./shapes');

class SVG {
    constructor () {
        this.text = ""
        this.textColor = "";
        this.shape = "";
    }

    setText (text, textColor) {
        if (text.length > 3) {
            throw new Error("Text must not exceed 3 characters.");
        }
        this.text = text;
        this.textColor = textColor;
    }

    setShape (shape) {
        this.shape = shape;
    }

    setColor (color) {
        this.shape.setColor(color);
    }

    getText(){
        if(this.text){
            return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
        }
        return '';
    }

    render () {
        return  `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape ? this.shape.render():""}${this.getText()}</svg>`;
    }

}


module.exports = SVG;