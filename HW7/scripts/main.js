// let's create an empty array. We will add to this later
var myViewFinderArray = new Array();

// this is the main ViewFinder class
class ViewFinder
{
    // the constructor requires only one title, the description, imagePath, etc.
    // we will create multiple objects from this class
    constructor(title, image, description, author, imageyear )
    {
        this.title = title;
        this.image = image;
        this.description = description;
        this.author = author;
        this.imageyear = imageyear;
    }

    // this just returns the title concatenated with the string "Title"
    // keep in mind only one return statement can exist in a function
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

// this function is called in the body of the HTML page so that the objects are created and added to the
// array myViewFinderArray
function initializeArray()
{
    // create the first object from the class ViewFinder
    var myViewFinder = new ViewFinder("A really funny Pug");
    // create a second object from the class ViewFinder
    var myViewFinder1 = new ViewFinder("A really angry tiger");

    myViewFinderArray.push(myViewFinder);
    // add the second object to the array
    myViewFinderArray.push(myViewFinder1);


}

// this function gets an object from the array and puts it into the element with the id title
function accessInformation()
{
    // get a random number
    var randomNumber = Math.floor(Math.random() * myViewFinderArray.length);
    // get a random object from the array
    // calling the toString, but we could have gotten the property theTitle as well
    document.getElementById("title").innerHTML = myViewFinderArray[randomNumber].toString();
    document.getElementById("image").innerHTML = myViewFinderArray[randomNumber].toString();
    document.getElementById("description").innerHTML = myViewFinderArray[randomNumber].toString();
    document.getElementById("author").innerHTML = myViewFinderArray[randomNumber].toString();
    document.getElementById("imageyear").innerHTML = myViewFinderArray[randomNumber].toString();

}
