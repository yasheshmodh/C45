class Game{
    constructor(){
        Button1 = createImg("Start Image 1.jpg")

    }
    play(){
        Button1.position(width/2+200,height/2-100) 
        Button1.mouseClicked(this.start)
    }
    start(){
        bg.changeAnimation("Start")
        bg.scale = 2.2
        Button1.hide()
    }
}