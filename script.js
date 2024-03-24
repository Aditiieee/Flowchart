const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

/*buttons.forEach( (button) => {
    //console.log(button)
    button.addEventListener('click', function (e){
       // console.log(e)
            body.style.backgroundColor =e.target.id;
    })
});*/


/*buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        // Get the ID of the clicked button
        var color = this.id;
        
        // Check which button was clicked and change the background color accordingly
        if (color === "yellow") {
            body.style.backgroundColor = "yellow";
        } else if (color === "pink") {
            body.style.backgroundColor = "pink";
        } else if (color === "white") {
            body.style.backgroundColor = "white";
        } else if (color === "skyblue") {
            body.style.backgroundColor = "skyblue";
        } else if (color === "lightgrey") {
            body.style.backgroundColor = "lightgrey";
        }
    });
});*/


/*// Function to change the background color
function changeBackgroundColor(color) {
    body.style.backgroundColor = color;
}

// Loop through each button and add event listeners
buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        // Get the color from the clicked button's ID
        const color = this.id;
        // Call the changeBackgroundColor function with the color
        changeBackgroundColor(color);
    });
});*/


buttons.forEach(function(button){
    button.addEventListener('click', function(){
        const color = this.id
        switch(color){
            case 'yellow':
                body.style.backgroundColor = 'yellow'
                break;
            case 'pink':
                body.style.backgroundColor = 'pink'
                break;
            case 'white':
                body.style.backgroundColor = 'white'
                break;
            case 'skyblue':
                body.style.backgroundColor = 'skyblue'
                break;
            case 'lightgrey':
                body.style.backgroundColor = 'lightgrey'
                break;
            default:
                body.style.backgroundColor = 'white'
                break;
        }
        event.stopPropagation();
    })

    /*body.addEventListener('click', function(){
        body.style.backgroundColor = 'initial'
    })*/
    // This code works only in some places outside of the buttons some places it changes it to initial but not all

    // the next approach is by checking whether the clicked element has the class button in it & not than change to initial color
    /*body.addEventListener('click', function(e){
        if(!e.target.classList.contains('button')){
            body.style.backgroundColor = 'initial'
        }
    })*/

    body.addEventListener('click', function(e){
        console.log(e)
        if(e.target.tagName.toLowerCase() !== 'button'){
            body.style.backgroundColor = 'initial'
        }
    })
})
