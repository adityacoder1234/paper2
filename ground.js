class ground{
    constructor()
    {
        var ground_options={
            isStatic : true
    }
        this.body=Bodies.rectangle(150,500,2500,20,ground_options);
        World.add(world,this.body)
    }
    display()
    {
        rect(150,500,2500,20);
    }
}