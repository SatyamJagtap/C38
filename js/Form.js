class Form{
    constructor(){

    }

    display(){
        var title = createElement("h1","Car Racing")
        title.position(windowWidth/2,200);

        var input = createInput("name");
        input.position(windowWidth/2,windowHeight/2);

        var button = createButton("Start the Race");
        button.position(windowWidth/2,windowHeight/2+100)

        button.mousePressed(function(){
            input.hide();
            title.hide();
            button.hide();
            var name = input.value();
        });
    }
}