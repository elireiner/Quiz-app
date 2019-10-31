const STORE = [
    {
        id: cuid(),
        question: 'How many times did spaceX try to reach orbit and failed before succeeding their first time?',
        answer1: '0; they succeeding their first time.',
        answer2: 'They succeeded their seconed time.',
        answer3: '3; they succeeded their fourth time.',
        answer4: '5; they succeeded their sixth time.',
        correct: '3; they succeeded their fourth time.'
    },

    {
        id: cuid(),
        question: 'Which of these projects are part of spaceX?',
        answer1: 'project titan',
        answer2: 'project starlink',
        answer3: 'project Planetary Defense',
        answer4: 'project LightSail',
        correct: 'project starlink'
    },

    {
        id: cuid(),
        question: 'Which of these is a spaceX rocket?',
        answer1: 'Falcon Heavy',
        answer2: 'Taurus',
        answer3: 'Athena',
        answer4: 'Pegasus',
        correct: 'Falcon Heavy'
    },

    {
        id: cuid(),
        question: 'When was SpaceX founded?',
        answer1: 'In the 1950\'s',
        answer2: 'In 1999',
        answer3: 'In 2002',
        answer4: 'In 2010',
        correct: 'In 2002'
    },


    {
        id: cuid(),
        question: 'When was the first time SpaceX launched a satellite to geostationary orbit?',
        answer1: 'In December 2013.',
        answer2: 'In March 2011.',
        answer3: 'In November 2010.',
        answer4: 'In June 2009',
        correct: 'In December 2013.'
    }
]
let i = 0;
function renderStartWindow() {
    console.log(`'renderStartWindow' ran`);
    /*
    this function will display the first window users will see when landing on the page.
    it will include a title and a start button.
    
    find the h1 tag and insert the title;
    find the button element with class="start-button" and insert 'Start quiz';
    */

    $('.windows').prepend(
        `<header>
            <h1 class="start-title">How much do you know about SpaceX?</h1>
        </header>
        <div class="start-button-div">
        <button class="start-button">Start quiz</button>
        </div>`);
};

function keepTrack() {
    /*this function will keep track of how many qustions were displayed
    
    each time this function is called the value of 'i' wil be increased by one.*/
    i++
};

function resetTracker() {
    /*this function will reset the value of 'i' to 0*/

    i = 0;
    console.log(i);
};

function removeUnwantedCode() {
    $('.windows').empty();
};

function handleNumCorrect() {
    console.log(`'handleNumCorrect' ran`);
    /* the function will tell the user how may questions they go correct so far*/
};

function handleNumRemaing() {
    console.log(`'handleNumRemaing' ran`);
    /* this function will let the user know how many question still remain*/
};

function returnCode(item) {
    /*this function will return the code needed for the first window
    
    */
    return `<div class="track">
                <p class="correct"></p>
                <p class="remaining"></p>
            </div>
            <form class="form">
                <fieldset class="fieldset">
                    <legend class="question">${item.question}</legend>
                    <input type="radio" name="SpaceX" id="ans-1" value="0">
                    <label for="ans-1">${item.answer1}</label>
                    <br>
                    <input type="radio" name="SpaceX" id="ans-2" value="1">
                    <label for="ans-2">${item.answer2}</label>
                    <br>
                    <input type="radio" name="SpaceX" id="ans-3" value="2">
                    <label for="ans-3">${item.answer3}</label>
                    <br>
                    <input type="radio" name="SpaceX" id="ans-4" value="3">
                    <label for="ans-4">${item.answer4}</label>
                    </fieldset>
            </form>

            <div class="submit-button">
                <button type="submit" class="submit">Submit</button>
            </div>`;
};



function handleStart() {
    console.log(`'handleStart' ran`);
    /*
    this function will dispay one question at a time with its answers
    the first question and its answers will be displayed when the user clicks the start button
    then each following question and asnwers will be displyed when the user clickes next
    but the user will only see the next button after clicking submit
    **important** when the user clicks submit the submit button needs to be cleared from the display
    
    find the form element and when the user clicks 'start quiz' insert the question, aswers, and submit button*/

    $('.body').on('click', '.start-button', function (event) {
        removeUnwantedCode()
        $('.windows').append(returnCode(STORE[i]));
    });

};

function returnChecked() {
    /*this function will return the answer that was selceted when the user clicks submit
    
    find the brodest div element, on click of the submit button run:
        return: find answer selected, get its text
    */
    return $('input[name="SpaceX"]:checked', '.form').next().text();
}

function returnCorrect(item) {
    /*his function will retrn the correct answer*/
    return item.correct;
}

function returnEvalCode() {
    console.log(`'returnIfCorrect' ran`);
    /* this function should return if the checked aswer if equel to the correct aswer.
    to do so, this function will compare the answer clicked on and submitted with the correct answer*/
    if (returnChecked() === returnCorrect(STORE[i])) {
        return `<p>Correct!</p>
                <button class="next">Next</button>`
    }
    else {
        return `<p>This response was wrong...</p>
        <p>The correct answer is: "${returnCorrect(STORE[i])}".</p>
        <button class="next">Next</button>`
    }
};

function handelSubmit() {
    $('.body').on('click', '.submit', function () {
        $('.submit-button').remove();
        /* call a function that will return whether answer correct and next button
        */
        $('.windows').append(returnEvalCode());
    });
}

function handleFinishWindow() {
    console.log(`'handleFinishWindow' ran`);
    /* after the last question was submitted, when the user clicks next, this function will display
    the final window which includes the final score and a button to retake the quiz */
};

function handleNext() {
        $('.windows').on('click', '.next', function () {
            keepTrack()
            console.log(i);
            removeUnwantedCode()
            if (i < 5) {
            $('.windows').append(returnCode(STORE[i]));
            }
            else {

            }
        })
    }


    function handleQuizApp() {
        renderStartWindow();
        handleStart();
        handelSubmit()
        handleNumRemaing();
        handleNumCorrect();
        handleNext()
    }

    $(handleQuizApp);