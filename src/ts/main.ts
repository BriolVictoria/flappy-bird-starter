import {Background} from "./Background";
import {settings} from "./settings";
import {Ground} from "./Ground";

const flappyBird = {

    init() {
        //Ligne de base
        this.canvas = document.getElementById(settings.canvasID);
        this.ctx = this.canvas.getContext('2d');
        // Fin ligne de base
        this.sprite = new Image; // crée une nouvelle Image (objet) Image une classe, une instance de la classe Image, pour charger une image qui se trouve dans la mémoire du navigateur pour s'en servir dans le srpite
        this.sprite.src = settings.spriteURL;
        this.addEventListeners();
        this.background = new Background(this.sprite, this.ctx); //  Ne pas mettre draw!
        this.ground = new Ground(this.sprite, this.ctx, this.canvas);
    },
    addEventListeners () {
        this.sprite.addEventListener('load', () => {
            this.animate();
        })
    },
    animate () {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.background.draw();
        this.ground.update();
        this.ground.draw();
        requestAnimationFrame(this.animate.bind(this));
    }
};

flappyBird.init();