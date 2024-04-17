let valorTotal;
limpar();

function adicionar(){
    let produto = document.getElementById ('produto').value;
    let nomeProduto = produto.split ('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade  = document.getElementById ('quantidade').value;
    if (quantidade <= 0) {
        alert('Por favor insira uma quantidade válida');
        return
    }
    if (produto== ''){
        alert('insira um produto');
        return
    }
    let preco = quantidade * valorUnitario ;
    let listaProdutos = document.getElementById('lista-produtos');
    listaProdutos.innerHTML =  listaProdutos.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${produto} <span class="texto-azul">R$${preco}</span>
  </section>`;
    valorTotal = valorTotal + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `${valorTotal}`;
    document.getElementById ('quantidade').value = '';
   
}
  

function limpar() {
    valorTotal = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
}