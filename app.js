const url = 'https://api.adviceslip.com/advice';
const res = document.querySelector('.resultado');
//url que vai ser requerida
fetch(url)

//tratamento de dados
//retornará uma promisse
.then(response => response.json())//o mesmo vai ser transformado em um json

.then(result => {
    const res = document.querySelector('.resultado');//DOOM

    const content = result.slip.advice//parte dos dados vai ser armazenada na variável
    console.log(content);//exibição do resultado da requisição
    
    res.innerHTML = (content)//exibição da requição na pagina html 
})
.catch(error => {
    console.error('Erro na requição');//tratamento do erro
});

const btn = document.querySelector('.refresh');
btn.addEventListener('click',function() {
    location.reload();
})

