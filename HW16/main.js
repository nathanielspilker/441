var umSelector = "#UM";
var UM = new Array();
class UMInfo{
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

    var um = new CatInfo("#um", "um.jpg");
    UM.push(um);

}
$(document).ready(function(){
    initializeArray();
    console.log(UM.length);
    console.log(UM[0].toString());
    console.log(UM[0].theSelector);
    console.log(UM[0].theImagePath);

    $(UM[0].theSelector).attr("src", UM[0].theImagePath);

    $("button").click(function(){

        $(".stuff").fadeOut();
        $(UM[0].theSelector).fadeOut();

    });

});
