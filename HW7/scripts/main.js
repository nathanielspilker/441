// I really had a tough time with this one.

var myViewFinderArray = new Array();

class ViewFinder
{
    constructor(title, image, description, author, imageyear )
    {
        this.title = title;
        this.image = image;
        this.description = description;
        this.author = author;
        this.imageyear = imageyear;
    }
    toString()
    {
        return "Title: " + this.title;
        return "Image; " + this.image;
        return "Description; " + this.description
        return "Author; " + this.author
        return "Imageyear; " + this.imageyear
    }


    get theTitle()
    {
        return this.title;
    }
    get theImage()
    {
        return this.image;
    }
    get theDescription()
    {
        return this.description;
    }
    get theAuthor()
    {
        return this.author;
    }
    get theImageyear()
    {
        return this.imageyear;
    }

}

function initializeArray()
{

    var myViewFinder = new ViewFinder("Asian American in the United States: Yellow Peril, Fetishization of Asian Women, Chinese Virus");

    var myViewFinder1 = new ViewFinder("imgsrc = Socialart.jpg");

    var myViewFinder2 = new ViewFinder("An art piece describing the various interpretations and misunderstandings of asian culture and its peoples.");

    var myViewFinder3 = new ViewFinder("Anna Nguyen");

    var myViewFinder4 = new ViewFinder("Jan 25, 2012");

    myViewFinderArray.push(myViewFinder);

    myViewFinderArray.push(myViewFinder1);

    myViewFinderArray.push(myViewFinder2);

    myViewFinderArray.push(myViewFinder3);

    myViewFinderArray.push(myViewFinder4);
}
function accessInformation()
{
    var randomNumber = Math.floor(Math.random() * myViewFinderArray.length);
    document.getElementById("title").innerHTML = myViewFinderArray[randomNumber].toString();
    document.getElementById("image").innerHTML = myViewFinderArray[randomNumber].toString();
    document.getElementById("description").innerHTML = myViewFinderArray[randomNumber].toString();
    document.getElementById("author").innerHTML = myViewFinderArray[randomNumber].toString();
    document.getElementById("imageyear").innerHTML = myViewFinderArray[randomNumber].toString();

}
