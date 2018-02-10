module objects {
    export class Button extends createjs.Bitmap {
        // Private Instance Variables

        // Public Properties

        // Constructor
        constructor(imagePath:string, x:number= 0, y:number = 0 ) {
            super(imagePath);

            this.x = x;
            this.y = y;

            this.on("mouseover", this._mouseOver);
            this.on("mouseout", this._mouseOut);
        }
        // Private Methods
        private _mouseOver():void {
            this.alpha = 0.7;
        }

        private _mouseOut():void {
            this.alpha = 1.0;
        }

        // Public Methods
    }
}