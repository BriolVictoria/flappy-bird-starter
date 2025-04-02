import {settings} from "../settings";
import {iAnimatable} from "../framework25/types/iAnimatable";
import {FrameDrawer} from "../framework25/FrameDrawer";

export class Background extends FrameDrawer implements iAnimatable{

    constructor(sprite: CanvasImageSource, ctx: CanvasRenderingContext2D) {
        super(sprite, ctx, settings.background.frame);
    }

    animate() {
        this.draw();
    }
}