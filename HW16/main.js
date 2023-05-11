var logoSelector = "#logo";
var alllogos = new Array();
class LogoInfo{
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

    var logo = new LogoInfo("#logo", "um.jpg");
    allLogos.push(logo);

}
$(document).ready(function(){
    initializeArray();
    console.log(allLogos.length);
    console.log(allLogos[0].toString());
    console.log(allLogos[0].theSelector);
    console.log(allLogos[0].theImagePath);
    
    $(allLogos[0].theSelector).attr("src", allLogos[0].theImagePath);

    $("button").click(function(){
       
        $(".stuff").fadeOut();

        $("#third").toggle();
        
        $(allLogos[0].theSelector).fadeOut().fadeIn();
        
    });
    
});