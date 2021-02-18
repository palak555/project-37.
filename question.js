class Question{
    constructor(){
        this.title=createElement("h1");
        this.input1=createInput("name")
        this.input2=createInput("your answer no.")
        this.question=createElement("h3")
        this.option1=createElement("h4");
        this.option2=createElement("h4");
        this.option3=createElement("h4");
        this.option4=createElement("h4");

        
        
    }

    hide(){
        this.input2.hide();
       
        this.input1.hide();
        this.title.hide();
      }


display(){
  
  this.title.html("MY QUIZE GAME");
   this.title.position(350,0);

   this.question.html("what is start from 'T' ends from 'T' and have 'T' in it?")
   this.question.position(150,80);
   this.option1.html("1: Tint ");
   this.option1.position(150,100);
   this.option2.html("2: teapot ");
   this.option2.position(150,120);
   this.option3.html("3: threat ");
   this.option3.position(150,140);
   this.option4.html("4: taunt ");
   this.option4.position(150,160);

    this.input1.position(150,230);
    this.input2.position(400,230);


}












}