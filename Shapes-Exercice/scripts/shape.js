import { btnReset, shapesList } from "./elements.js";

export class Shape {

    shapes = Array.from(shapesList);

    constructor() 
    {
        this.hideShape();
        this.showShapes();
    }

    hideShape()
    {
        this.shapes.forEach(shape => {
            shape.addEventListener('click', () => {
                shape.hidden = true;
            }) 
        });
    }

    showShapes()
    {
        btnReset.addEventListener('click', () => {
            this.shapes.forEach(shape => {
                shape.hidden = false;
            });
        }) 
    }

}