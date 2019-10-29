function renderStartWindow() {
    console.log(`'renderStartWindow' ran`);
    /*this function will display the the first window users will see when landing on the page.
    it will include a title and a start button.*/
};

function handleQuestionAnsRendering() {
    console.log(`'handleQuestionsansRendering' ran`);
    /*this function will dispay one question at a time with its answers
    the first question and its answers will be displayed when the user clicks the start button
    then each following question and asnwers will be displyed when the user clickes next
    but the user will only see the next button after clicking submit
    **important** when the user clicks submit the submit button needs to be cleared from the display
    */
};

function handleNumRemaing() {
    console.log(`'handleNumRemaing' ran`);
    /* this function will let the user know how many question still remain*/
};

function handleNumCorrect() {
    console.log(`'handleNumCorrect' ran`);
    /* the function will tell the user how may questions they go correct so far*/
};

function handleCorrect() {
    console.log(`'handleCorrect' ran`);
    /* this function should display the response for a correct answer
    to do so, this function will compare the answer clicked on and submitted with the correct answer*/
};

function handleWrong() {
    console.log(`'handleWrong' ran`);
    /* this function should display the response for a wrong answer
    to do so, this function will compare the answer clicked on and submitted with the correct answer */
};

function handleFinishWindow() {
    console.log(`'handleFinishWindow' ran`);
    /* after the last question was submitted, when the user clicks next, this function will display
    the final window which includes the final score and a button to retake the quiz */
};

function handleQuizApp() {
    renderStartWindow();
    handleQuestionAnsRendering();
    handleNumRemaing();
    handleNumCorrect();
    handleCorrect();
    handleWrong();
    handleFinishWindow();
}

$(handleQuizApp);