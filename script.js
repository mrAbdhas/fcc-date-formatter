//Accessing html elements with getElementBuId() and assigning them to variables
const currentDateParagraph = document.getElementById("current-date");
const dateOptionsSelectElement = document.getElementById("date-options");

/*we use the constructor Date() and initialize it
with the new operator to create a new Date() constructor object
that returns a string with the current date and time */
const date = new Date();


/*.getDate() method, it returns a number
between 1 and 31, that represent the day of the month
for the provided date*/
const day = date.getDate();

/** .getMonth() method, it returns a number
between 0 and 11, this represents the month for the
date provided, 0 equals january and 11 december,
since it returns is zero-based, we add +1 to get
expected month number*/
const month = date.getMonth() +1;

/*.getFullYear() method, returns a number, which
represent the year of the provided date */
const year = date.getFullYear();

/*.getHours() method, returns a number between
0 and 23, that represent the hour for the date
provided, we add +1, since its returns are
zero-based, so we get the expected hour*/
const hours = date.getHours() + 1;

/*.getMinutes() method, returns a number between
0 and 59, that represent the minutes for the
provided date, we add +1, since its returns are
zero-based, so we get the expected minutes*/
const minutes = date.getMinutes() + 1;

/* a variable named formattedDate, assign it template literals.
inside  the template literal, we add embedded expression variables*/
const formattedDate = `${day}-${month}-${year}`;


/*we use textContent to set the text content
of HTML element */
currentDateParagraph.textContent =  formattedDate;

/*Event listener
we use "change" event type
.addEventListener takes event type "", and a listener 
in this case the listener or second argument is arrow function*/
dateOptionsSelectElement.addEventListener("change", () => {
    /*we use a swicth statement to match the users selection
    from the dropdown menu with displayed value of the date in 
    the chosen date format.
    swicth statement with dateOptionsSelectElement.value
    as the expression*/
    switch(dateOptionsSelectElement.value) {
        case "yyyy-mm-dd":
            /*we use textContent to set the text content
            of HTML element, in this case it will match the 
            above case clause */
            currentDateParagraph.textContent = formattedDate;
            /*we Split formattedDate into an array of substrings
            with the .split() method and use a "-" as the separator.
            .reverse() method is used to reverse an array in place.
            we chain the .reverse() method to the end of .split()
            finally Use the .join() method to join the reversed 
            array elements into a string and use a "-" for the separator.*/
            formattedDate
            .split("-")
            .reverse()
            .join("-");
            break //Terminates the swicth statement
        case "mm-dd-yyyy-h-mm":
            /*we use textContent to set the text content
            of HTML element, in this case it will match the 
            above case clause */
            currentDateParagraph.textContent = `${month}-${day}-${year} ${hours} Hours ${minutes} Minutes`;
            break
            /*default case is executed when none of 
            the previouse case condition match the value being 
            evaluated*/
            default:
                currentDateParagraph.textContent = formattedDate;

    }
})
