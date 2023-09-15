'use strict'

const pessoas = [

    {
        nome: 'Granger',
        imagem: 'mione.jpg',
        mensagem: 'Que raiva do R..',
        contato: 'Mione',
        tempo: 'Agora mesmo',
        quantidade: '5'
    },

    {
        nome: 'Ronald',
        imagem: 'ron.jpg',
        mensagem: 'Socorro ela v...',
        contato: 'roonil wazlib',
        tempo: 'Há 5 minutos',
        quantidade: '8'
    },

    {
        nome: 'Potter',
        imagem: 'harry.jpg',
        mensagem: 'Ela vai matar el..',
        contato: 'testa rachada',
        tempo: 'Há 6 minutos',
        quantidade: '7'
    },

    {
        nome: 'Ginerva',
        imagem: 'gina.jpg',
        mensagem: 'Vms pra Hogsme..',
        contato: 'Ruiva',
        tempo: '10 minutos',
        quantidade: '2'
    },

    {
        nome: 'Fred',
        imagem: 'fred.jpg',
        mensagem: 'O Filch ta caç...',
        contato: 'Com orelha',
        tempo: 'Há 40 minuos',
        quantidade: '2'
    }

]

const criarCard = (pessoa) => {

    const card = document.createElement('div')
    card.classList.add('card')

    const img = document.createElement('img')
    img.src = `./img/${pessoa.imagem}`
    img.alt = pessoa.nome

    const info = document.createElement('div')
    info.classList.add('info')

    const nomeContainer = document.createElement('div')
    nomeContainer.classList.add('nome-container')

    const nome = document.createElement('h3')
    nome.classList.add('nome')
    nome.textContent = pessoa.nome

    const qntMsg = document.createElement('span')
    qntMsg.classList.add('qnt-msg')
    qntMsg.textContent = pessoa.quantidade

    const mensagem = document.createElement('p')
    mensagem.classList.add('mensagem')
    mensagem.textContent = pessoa.mensagem

    const tempo = document.createElement('p')
    tempo.classList.add('tempo')
    tempo.textContent = pessoa.tempo

    const contatoCard = document.createElement('div')
    contatoCard.classList.add('contato')

    const contato = document.createElement('p')
    contato.textContent = pessoa.contato

    card.appendChild(img)
    card.appendChild(info)
    card.appendChild(tempo)
    card.appendChild(contatoCard)
    info.appendChild(nomeContainer)
    info.appendChild(mensagem)
    nomeContainer.appendChild(nome)
    nomeContainer.appendChild(qntMsg)
    contatoCard.appendChild(contato)

    return card

}

const mostrarCards = (pessoa) => {

    const containerChat = document.getElementById('container-chat')
    const card = criarCard(pessoa)
    containerChat.appendChild(card)

} 

pessoas.forEach(mostrarCards)