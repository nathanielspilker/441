var dogSelector = "#dog";
var allDogs = new Array();
class DogInfo{
    constructor(selector, imagePath)
    {
        this.selector = selector;
        this.imagePath = imagePath;
    }

    get theSelector(){
        return this.selector;
    }

    get theImagePath(){
        return this.imagePath;
    }

    toString()
    {
        return this.selector + ":" + this.imagePath; 
    }
}

function initializeArray()
{

    var dog = new DogInfo("#dog", "um.jpg");
    allDogs.push(dog);

}
$(document).ready(function(){
    initializeArray();
    console.log(allDogs.length);
    console.log(allDogs[0].toString());
    console.log(allDogs[0].theSelector);
    console.log(allDogs[0].theImagePath);
    
    //$(allDogs[0].theSelector).src = allDogs[0].theImagePath;
    //$("#my_image").attr("src","second.jpg");
    $(allDogs[0].theSelector).attr("src", allDogs[0].theImagePath);

    $("button").click(function(){
       
        $(".stuff").fadeOut();
        
    });
    
});