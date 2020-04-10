// usado expresse para criar e configurar servidor
const express = require('express')
const server = express()

// coleção das ideias
const ideas = [
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729007.svg",
        title: "Cursos de Programação",
        category: "Estudo",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi unde quisquam quod ex quia.",
        url: "http://google.com"
    },
    {
        img: "https://image.flaticon.com/icons/svg/753/753024.svg",
        title: "Exercícios",
        category: "Saúde",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi unde quisquam quod ex quia.",
        url: "http://google.com"
    },
    {
        img: "https://image.flaticon.com/icons/svg/1830/1830774.svg",
        title: "Meditação",
        category: "Mentalidade",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi unde quisquam quod ex quia.",
        url: "http://google.com"
    },
    {
        img: "https://image.flaticon.com/icons/svg/1830/1830832.svg",
        title: "Tocar Instrumento",
        category: "Diversão",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi unde quisquam quod ex quia.",
        url: "http://google.com"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2235/2235423.svg",
        title: "Jogar VideGame",
        category: "Diversão",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi unde quisquam quod ex quia.",
        url: "http://google.com"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2737/2737098.svg",
        title: "Dormir",
        category: "Saúde",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi unde quisquam quod ex quia.",
        url: "http://google.com"
    },

]

// configurar arquivos estáticos (css, scripts, imagens)
server.use(express.static('public'))

// configuração do nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('views', {
    express: server,
    noCache: true, //somente para desenvolvimento, depois desabilitar
})

// criado rota '/'
// capturado pedido do cliente para responder
server.get('/', function (req, res) {

    const reversedIdeas = [...ideas].reverse()

    let lastIdeas = []
    for (let idea of reversedIdeas) {
        if (lastIdeas.length < 2) {
            lastIdeas.push(idea)
        }
    }

    return res.render('index.html', { ideas: lastIdeas })
})

server.get('/ideas', function (req, res) {

    const reversedIdeas = [...ideas].reverse()

    return res.render('ideas.html', { ideas: reversedIdeas })
})

// servidor ligado na porta 3000
server.listen(3000)
