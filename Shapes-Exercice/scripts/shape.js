import { btnReset, shapesList } from "./elements.js";

export class Shape {

    constructor() 
    {
        this.hideShape();
        this.showShapes();
    }

    hideShape()
    {
        for (let index = 0; index < shapesList.length; index++) {
            const shape = shapesList[index];
            
            shape.addEventListener('click', () => {
                shape.hidden = true;
            })
        }
    }

    showShapes()
    {
        let shapes = Array.from(shapesList);

        btnReset.addEventListener('click', () => {
            shapes.forEach(shape => {
                shape.hidden = false;
            });
        }) 
    }

}