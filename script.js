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
    }
}

mostrarConteudo();



let opcoesCorretas = 0;

function opcaoClicada(event) {
    let opClicada = event.target.getAttribute('data-op');

    if (questions[questaoAtual].answer === opClicada){
        opcoesCorretas++;
    }

    questaoAtual++;
    mostrarConteudo();
}