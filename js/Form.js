class Form {
  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h3');
    this.reset = createButton('Reset Database');
  }
  hide()
  {
    this.greeting.hide();
    this.input.hide();
    this.button.hide();
  }

  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(displayWidth/2-100, 0);
    
    
    this.input.position(displayWidth/2-100, displayHeight/2-120);
    this.button.position(displayWidth/2+20, displayHeight/2-70);
    this.reset.position(displayWidth-250, 20);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();

      player.name = this.input.value();
      
      playerCount+=1;
      player.index = playerCount;
      player.update()
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name )
      this.greeting.position(displayWidth/2-70, 70);
    });

    this.reset.mousePressed(()=>
    {
      player.updateCount(0);
      game.update(0);
    })

  }
}
