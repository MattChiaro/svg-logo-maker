const { Square, Circle, Triangle } = require('./shapes');

class SVG {
    constructor({text = "", textColor = "", shape ="", shapeColor =""}= {}) {
        this.text = text;
        this.textColor = textColor;
        this.shape =  shape;

        this.setText(text, textColor);
        this.shapeFromPrompt(shape, shapeColor);  
    }


    shapeFromPrompt(shape, shapeColor) {
        if(!shape) return;

        switch (shape) {
            case 'Square':
                this.shape = new Square();
                break;
            case 'Triangle':
                this.shape = new Triangle();
                break;
            case 'Circle':
                this.shape = new Circle();
                break;
        }   
        this.shape.setColor(shapeColor);
    }

    setText(text, textColor) {
        if(!text) return;

        if (text.length > 3) {
            throw new Error("Text must not exceed 3 characters.");
        }

        this.text = text;
        this.textColor = textColor;
    }

    setShape(shape, shapeColor) {
        this.shape = shape;
        this.shape.setColor(shapeColor);

    }


    getText() {
        if (this.text) {
            return `<text x="150" y="${this.shape ? this.shape.y : 125}" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
        }
        return '';
    }

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape ? this.shape.render() : ""}${this.getText()}</svg>`;

    }


}


module.exports = SVG;