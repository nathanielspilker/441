var catSelector = "#cat";
var allCats = new Array();
class CatInfo{
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

    var cat = new CatInfo("#cat", "cat.jpg");
    allCats.push(cat);

}
$(document).ready(function(){
    initializeArray();
    console.log(allCats.length);
    console.log(allCats[0].toString());
    console.log(allCats[0].theSelector);
    console.log(allCats[0].theImagePath);

    $(allCats[0].theSelector).attr("src", allCats[0].theImagePath);

    $("button").click(function(){

        $(".stuff").fadeOut();
        $(allCats[0].theSelector).fadeOut();

    });

});
