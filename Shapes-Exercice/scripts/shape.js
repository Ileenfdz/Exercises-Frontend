import { shapesList } from "./elements.js";

export class Shape {

    constructor() 
    {

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

}