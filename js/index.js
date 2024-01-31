// Botoes das respostas
const btnAnswers = document.querySelectorAll('.btnAnswers')

// Buttons
const btnStart = document.querySelector('.btnStart')
const btnNext = document.querySelector('.btnNext')
const btnEndGame = document.querySelector('.btnEndGame')

const questionId = document.querySelector('#questionId')
const textQuestion = document.querySelector('.textQuestion')

// Buttons Answers
const labelAnswers1 = document.querySelector('.answers1')
const labelAnswers2 = document.querySelector('.answers2')
const labelAnswers3 = document.querySelector('.answers3')
const labelAnswers4 = document.querySelector('.answers4')

// Inputs
const inputAnswers1 = document.querySelector('#answer1')
const inputAnswers2 = document.querySelector('#answer2')
const inputAnswers3 = document.querySelector('#answer3')
const inputAnswers4 = document.querySelector('#answer4')

// console.log(inputAnswers1.checked)
// console.log(inputAnswers2.checked)
// console.log(inputAnswers3.checked)
// console.log(inputAnswers4.checked)

// Imagem
const img = document.querySelector('#img')


// Divs
const question = document.querySelector('.question')
question.classList.add('hide')
const startGame = document.querySelector('.startGame')
const endGame = document.querySelector('.endGame')
endGame.classList.add('hide')

// Corrects
const totalQuestions = document.querySelector('#totalQuestions')
const totalCorrects = document.querySelector('#totalCorrects')


const questionsArr = [
  {
    id: 1,
    question: 'De quem é a famosa frase “Penso, logo existo”?',
    alternativeA: 'Platão',
    alternativeB: 'Galileu Galilei',
    alternativeC: 'Descartes',
    alternativeD: 'Sócrates',
    alternativeTrue: 'Descartes'
  },
  {
    id: 2,
    question: 'De onde é a invenção do chuveiro elétrico?',
    alternativeA: 'França',
    alternativeB: 'Inglaterra',
    alternativeC: 'Brasil',
    alternativeD: 'Austrália',
    alternativeTrue: 'Brasil'
  },
  {
    id: 3,
    question: 'Normalmente, quantos litros de sangue uma pessoa tem? Em média, quantos são retirados numa doação de sangue?',
    alternativeA: 'Tem entre 2 a 4 litros. São retirados 450 mililitros',
    alternativeB: 'Tem entre 4 a 6 litros. São retirados 450 mililitros',
    alternativeC: 'Tem 10 litros. São retirados 2 litros',
    alternativeD: 'Tem 7 litros. São retirados 1,5 litros',
    alternativeTrue: 'Tem entre 4 a 6 litros. São retirados 450 mililitros'
  },
  {
    id: 4,
    question: 'Quais o menor e o maior país do mundo?',
    alternativeA: 'Vaticano e Rússia',
    alternativeB: 'Nauru e China',
    alternativeC: 'Mônaco e Canadá',
    alternativeD: 'Malta e Estados Unidos',
    alternativeTrue: 'Vaticano e Rússia'
  },
  {
    id: 5,
    question: 'Qual o nome do presidente do Brasil que ficou conhecido como Jango?',
    alternativeA: 'Jânio Quadros',
    alternativeB: 'Jacinto Anjos',
    alternativeC: 'Vaticano e Rússia',
    alternativeD: 'Getúlio Vargas',
    alternativeTrue: 'Jânio Quadros'
  },
  {
    id: 6,
    question: 'Qual o grupo em que todas as palavras foram escritas corretamente?',
    alternativeA: 'Asterístico, beneficiente, meteorologia, entertido',
    alternativeB: 'Asterisco, beneficente, meteorologia, entretido',
    alternativeC: 'Asterisco, beneficente, metereologia, entretido',
    alternativeD: 'Asterístico, beneficiente, metereologia, entretido',
    alternativeTrue: 'Asterisco, beneficente, meteorologia, entretido'
  },
  {
    id: 7,
    question: 'Qual o livro mais vendido no mundo a seguir à Bíblia?',
    alternativeA: 'O Senhor dos Anéis',
    alternativeB: 'Dom Quixote',
    alternativeC: 'O Pequeno Príncipe',
    alternativeD: 'Ela, a Feiticeira',
    alternativeTrue: 'Dom Quixote'
  },
  {
    id: 8,
    question: 'Quantas casas decimais tem o número pi?',
    alternativeA: 'Duas',
    alternativeB: 'Centenas',
    alternativeC: 'Infinitas',
    alternativeD: 'Vinte',
    alternativeTrue: 'Infinitas'
  },
  {
    id: 9,
    question: 'Atualmente, quantos elementos químicos a tabela periódica possui?',
    alternativeA: '113',
    alternativeB: '109',
    alternativeC: '108',
    alternativeD: '118',
    alternativeTrue: '118'
  },
  {
    id: 10,
    question: 'Quais os países que têm a maior e a menor expectativa de vida do mundo?',
    alternativeA: 'Japão e Serra Leoa',
    alternativeB: 'Austrália e Afeganistão',
    alternativeC: 'Itália e Chade',
    alternativeD: 'Brasil e Congo',
    alternativeTrue: 'Japão e Serra Leoa'
  }
]

// Configs
let numQuestion = 0
let corrects = 0
let answerText = ''
totalQuestions.innerText = questionsArr.length



// Funcoes
function startGameFunc() {
  question.classList.remove('hide')
  startGame.classList.add('hide')

  showQuestions(numQuestion)

  btnNext.addEventListener('click', nextQuestion)


  // Add estilo no button
  for (let btn of btnAnswers) {
    btn.addEventListener('click', () => {
      if (btn.classList[1] == 'answers1') {
        btn.disabled = false
        inputAnswers1.checked = true
        btn.disabled = true;
      }
      else if (btn.classList[1] == 'answers2') {
        // btn.disabled = false
        inputAnswers2.checked = true
        btn.disabled = true;
      }
      else if (btn.classList[1] == 'answers3') {
        // btn.disabled = false
        inputAnswers3.checked = true
        btn.disabled = true;
      }
      else if (btn.classList[1] == 'answers4') {
        // btn.disabled = false
        inputAnswers4.checked = true
        btn.disabled = true;
      }
      answerText = btn.innerText
      console.log('Resposta: ' + answerText)

      if (answerText === questionsArr[numQuestion].alternativeTrue) {
        corrects++

      }
    })
  }


}

function showQuestions(index) {
  questionId.innerText = questionsArr[index].id
  textQuestion.innerText = questionsArr[index].question
  labelAnswers1.innerText = questionsArr[index].alternativeA
  labelAnswers2.innerText = questionsArr[index].alternativeB
  labelAnswers3.innerText = questionsArr[index].alternativeC
  labelAnswers4.innerText = questionsArr[index].alternativeD
}


function nextQuestion() {
  numQuestion++
  if (numQuestion > 9) {
    console.log('Fim')
    endGame.classList.remove('hide')
    question.classList.add('hide')

    totalCorrects.innerText = corrects
    if (corrects < 6) {
      img.src = './imgs/reprovado.png'
      img.alt = 'Reprovado Imagem'
    }
    else {
      img.src = './imgs/aprovado.png'
      img.alt = 'Aprovado Imagem'
    }
  }
  else {
    showQuestions(numQuestion)
  }

  // Abilitar botao quando clicado
  for (let btn of btnAnswers) {
    btn.disabled = false
  }


  // Retirando estilo dos inputs
  inputAnswers1.checked = false
  inputAnswers2.checked = false
  inputAnswers3.checked = false
  inputAnswers4.checked = false

}

// Events
btnStart.addEventListener('click', startGameFunc)
btnEndGame.addEventListener('click', () => {
  window.location.reload()
})
