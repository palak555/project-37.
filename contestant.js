class Contestant{
    constructor(){
        this.button=createButton("submit")
        this.button.position(340,290)
    }

    


    getCount(){
        var contestantCountRef = database.ref("contestantCount");
        contestantCountRef.on("value",(data)=>{
            contestantCount=data.val();
        })
    }

    updateCount(count){
        database.ref("/").update({
           contestantCount: count
        })
    }

    update(name){
        var contestantIndex ="contestant"
        database.ref(contestantIndex).set({
            name:this.name
        })
    }

    display(){

        

        this.button.mousePressed(()=>{
            this.title.hide();
            this.input1.hide();
            this.input2.hide();
            this.button.hide();
            contestant.name = this.input1.value();
            contestantCount+=1;
            contestant.index = contestantCount;
            contestant.update();
            contestant.updateCount(contestantCount);

        })

    }

    
}