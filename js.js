fetch('https://opentdb.com/api.php?amount=10')
.then(response => response.json())
.then(data => printQuestions(data.results))


function printQuestions(types) {
    let container = document.getElementById('questions-container')
    types.forEach((answer) =>{
        container.innerHTML +=  `<div class="col-4">
                                    <div class="card">
                                        <div class="card-body">
                                            ${answer.correct_answer}
                                        </div>
                                    </div>
                                </div>`
    })
}