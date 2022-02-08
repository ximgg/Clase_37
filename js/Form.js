class Form {
  constructor() {
    this.input= createInput("Ingresa tu nombre");
    this.button = createButton('JUGAR');
    this.greeting = createElement('h2');

  }
  hide (){
    this.greeting.hide();
    this.input.hide();
    this.button.hide();
  }

  display(){
    var title = createElement('h2')
    title.html("Juego de Carreras de Autos");
    title.position(130, 0);
    
   
    
    this.input.position(130, 160);
    this.button.position(250, 200);

    this.button.mousePressed(function(){
      this.input.hide();
      this.button.hide();

      var name = input.value();
      
      playerCount+=1;
      player.update(name)
      player.updateCount(playerCount);
      
      this.greeting.html("Hola " + name )
      this.greeting.position(130, 160)
    });

  }
}
