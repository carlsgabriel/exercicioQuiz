let questaoAtual = 0;

function mostrarConteudo() {
    if (questions[questaoAtual]) {
        document.querySelector('.scoreArea').style.display = 'none';
        document.querySelector('.questionArea').style.display = 'block';

        document.querySelector('.questionArea .question').innerHTML = questions[questaoAtual].question;
        let option = '';
        for (let i in questions[questaoAtual].options) {
            option += `<div data-op="${i}" class="option"><span>${parseInt(i) + 1}</span>${questions[questaoAtual].options[i]}</div>`
        }
        document.querySelector('.options').innerHTML = option;

        document.querySelectorAll('.option').forEach((item) => {
            item.addEventListener('click', opcaoClicada);
        });

        let pctBarra = (questaoAtual / questions.length) * 100;
        document.querySelector('.progress--bar').style.width = `${pctBarra}%`;
    } else {
        finalizarQuiz();
    }
}



mostrarConteudo();



let opcoesCorretas = 0;

function opcaoClicada(event) {
    let opClicada = parseInt(event.target.getAttribute('data-op'));

    if (questions[questaoAtual].answer === opClicada) {
        opcoesCorretas++;
    }

    questaoAtual++;
    mostrarConteudo();
}


let pctUsuario = 0;

function finalizarQuiz() {
    let pctUsuario = (opcoesCorretas / questions.length) * 100;

    document.querySelector('.progress--bar').style.width = '100%';

    document.querySelector('.questionArea').style.display = 'none';
    document.querySelector('.scoreArea').style.display = 'block';

    let congrats = '';
    if (pctUsuario < 40) {
        congrats = 'Sua nota ficou muito abaixo da média.'
    } else if (pctUsuario < 70) {
        congrats = 'Infelizmente você não atingiu a média.'
    } else {
        congrats = 'Parabéns!';
    }
    document.querySelector('.scoreText1').innerHTML = congrats;
    document.querySelector('.scorePct').innerHTML = `Acertou ${pctUsuario}%`;
    document.querySelector('.scoreText2').innerHTML = `Você respondeu 10 questões e acertou ${opcoesCorretas}.`;
}



document.querySelector('button').addEventListener('click', resetarQuiz);

function resetarQuiz() {
    questaoAtual = 0;
    opcoesCorretas = 0;
    pctUsuario = 0;

    document.querySelector('.progress--bar').style.width = '0%';

    document.querySelector('.scoreArea').style.display = 'none';
    document.querySelector('.questionArea').style.display = 'block';
}