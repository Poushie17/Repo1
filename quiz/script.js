const qs=[
    {
        text:"2+2=?",
        options:[
            4,5,2,1
        ],
        ans:0
    },

    {
        text:"2x4=?",
        options:[
            4,8,2,1
        ],
        ans:1
    },
    {
        text:"4/4=?",
        options:[
            4,1,2,0
        ],
        ans:1
    },
    {
        text:"5+1+3=?",
        options:[
            10,6,9,11
        ],
        ans:2
    },
    {
        text:"1x2x8=?",
        options:[
            2,16,17,12
        ],
        ans:1
    },
    {
        text:"10/2=?",
        options:[
            5,1,3,2
        ],
        ans:0
    }

]

class Quest{
    constructor(text,option,ans) {
        this.text=text;
        this.option=option;
        this.ans=ans;
    }
    right(i){
        if (i===this.ans){
            return true;
        }
    }
}

class Quiz{
    constructor(qs){
        this.qs=qs;
        this.current_i=0;
        this.score=0;

    }
    getCurrentQ(){
        return this.qs[this.current_i]
    }

    choice(ansind){
        if(this.getCurrentQ().right(ansind)){
            this.score++;
        }
        this.current_i++;
    }

    done(){
        return  this.current_i>=
            this.qs.length;
        }
    }
const quiz=new Quiz(qs.map(q=>new Quest(q.text,q.options,q.ans)).sort(() => Math.random() - 0.5))
function render(){
    if (quiz.done()){
        showScores();
        return

    }
    else{
        const question=quiz.getCurrentQ();
        document.getElementById("question").textContent=question.text;

        const optioncontainer=document.getElementById("options");
        optioncontainer.innerHTML=""

        question.option.forEach((option,i)=> {
            const button =document.createElement("button");
            button.textContent=option;
            button.classList.add("option-btn");
            button.addEventListener('click',function(){
                quiz.choice(i)
                render()
            });
            optioncontainer.appendChild(button);
        });

        showProgress();
    }
}

function showProgress(){
    const progress=document.getElementById("progress")
    progress.textContent=`questions ${quiz.current_i+1} of ${quiz.qs.length}`;
}

function showScores() {
  const quizContainer = document.querySelector(".quiz-container");
  quizContainer.innerHTML = `
    <h2>Quiz Completed!</h2>
    <p>Your score: ${quiz.score} / ${quiz.qs.length}</p>
    <button id="restart-btn">Restart Quiz</button>
  `;

  document.getElementById("restart-btn").addEventListener("click", () => {
    location.reload();
  });
}

render();