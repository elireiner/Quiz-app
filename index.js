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
let h = 0;
function renderStartWindow() {
    $('.windows').prepend(
        `<header>
            <h1 class="start-title">How much do you know about SpaceX?</h1>
        </header>
        <div class="start-button-div">
        <button class="start-button">Start quiz</button>
        </div>`);
};

function removeUnwantedCode() {
    $('.windows').empty();
};

function returnCode(item) {
    return `<div class="track">
                <p class="correct">You answered ${h}/5 questions correct.</p>
                <p class="remaining">This is question ${i + 1}/5.</p>
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
    $('.body').on('click', '.start-button', function (event) {
        removeUnwantedCode()
        $('.windows').append(returnCode(STORE[i]));
    });
};

function returnChecked() {
    return $('input[name="SpaceX"]:checked', '.form').next().text();
}

function returnCorrect(item) {
    return item.correct;
}

function returnEvalCode() {
    if (returnChecked() === returnCorrect(STORE[i])) {
        h++;
        $('.correct').empty().append(`You answered ${h}/5 questions correct.`)
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
        if ($(`.form input[type="radio"]:checked`).length){
            $('.submit-button').remove();
            $('.windows').append(returnEvalCode());
        }
        else {
            $('.submit-button').empty().append(`<button type="submit" class="submit">Submit</button>
                                                <p>Please select an answer.</p>`)
        }
    });
}

function handleNext() {
        $('.windows').on('click', '.next', function () {
            i++;
            removeUnwantedCode()
            if (i < 5) {
            $('.windows').append(returnCode(STORE[i]));
            }
            else {
                $('.windows').append(`<div class="final-window">
                                        <p>Your SpaceX IQ score is: ${h}/5</p>
                                        <button class="retake">Retake</button>
                                    </div`)
            }
        })
    }

function handleRetake(){
    $('.windows').on('click', '.retake', function (){
        removeUnwantedCode()
        i = 0;
        h = 0;
        $('.windows').append(returnCode(STORE[i]));

    })
}
    function handleQuizApp() {
        renderStartWindow();
        handleStart();
        handelSubmit();
        handleNext();
        handleRetake();
    }

    $(handleQuizApp);