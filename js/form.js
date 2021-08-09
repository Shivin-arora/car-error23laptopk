class Form{


    constructor(){
        this.playbtn=createButton("PLAY");
        this.input =createInput().attribute("placeholder","Enter your name");
        this.greeting = createElement("h3");
    }

hide(){
    this.input.hide();
    this.playbtn.hide();
    this.greeting.hide();
}

display(){
    var title=createElement("h1");
    title.html("Car Racing Game");
    title.position(300,30);

    
    this.input.position(300,300);
    this.playbtn.position(400,350);
    

    this.playbtn.mousePressed(
        
        ()=>{

            this.input.hide();
            this.playbtn.hide();

            player.name = this.input.value();
            playerCount= playerCount+1;
            player.index=playerCount;
            
            player.updateNameAndDistance();
            player.updateCount(playerCount);

            this.greeting.html("Hello "+ player.name +"! Welcome to the Multi-player Car Racing Game");
            this.greeting.position(500, 300);

        }
    
    )




}





}