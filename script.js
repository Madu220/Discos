// Carregar produtos via fetch
fetch('produtos.json')
    .then(res => res.json())
    .then(produtos => {
        const container = document.getElementById('produtos-container');

        produtos.forEach(produto => {
            const card = document.createElement('div');
            card.classList.add('produto');

            card.innerHTML = `
                <img src="${produto.imagem}" alt="${produto.nome}">
                <h2>${produto.nome}</h2>
                <p>${produto.descricao}</p>
                <p class="preco">${produto.preco}</p>
                <button onclick="comprar('${produto.nome}')">Comprar</button>
            `;

            container.appendChild(card);
        });
    })
    .catch(error => console.error('Erro ao carregar produtos:', error));

function comprar(nomeProduto) {
    alert(`Você comprou: ${nomeProduto}`);
}