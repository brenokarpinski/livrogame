var urlParams = new URLSearchParams(window.location.search);

var lista = window.document.getElementById('feiticos')
var fescolidos = window.document.getElementById('feiticosescolidos')
var listafinal = []
var descricao

var habilidadeSalva = localStorage.getItem('habilidade');
var energiaSalva = localStorage.getItem('energia');
var sorteSalva = localStorage.getItem('sorte');
var magiasalva = localStorage.getItem('magia')



if (habilidadeSalva && energiaSalva && sorteSalva) {
   habilidade.innerHTML = `HABILIDADE: ${habilidadeSalva}`
   energia.innerHTML = `ENERGIA: ${energiaSalva}`
   sorte.innerHTML = `SORTE: ${sorteSalva}`
   magia.innerHTML += ` ${magiasalva}`

}





function mostrar() {
    descricao = window.document.getElementById('descricao');
    let feiticoSelecionado = lista.value
    switch (feiticoSelecionado) {
        case "copiadecriatura":
            descricao.innerHTML = 'Este encanto permitirá que você faça aparecer uma réplica perfeita de qualquer criatura contra a qual você esteja lutando. A réplica terá os mesmos índices de HABILIDADE e ENERGIA e os mesmos poderes do original. Mas a réplica estará sob seu controle, e você poderá, por exemplo, instruí-la para que ataque a criatura original e ficar assistindo a batalha de camarote!';
            break;
        case "percepcao":
            descricao.innerHTML = 'Com este encanto, você poderá sintonizar comprimentos de ondas psíquicas. Isso poderá ajudá-lo a ler a mente de uma criatura ou descobrir o que está por trás de uma porta trancada. Porém, às vezes, este encanto pode dar informações equivocadas, se houver mais de uma fonte psíquica perto de uma outra.';
            break;
        case "fogo":
            descricao.innerHTML = 'Todas as criaturas têm medo do fogo, e este encanto dá o poder de fazer aparecer fogo segundo a sua vontade. Você poderá causar uma pequena explosão no chão que queimará por vários segundos ou criar uma barreira de fogo para manter criaturas à distância.';
            break;
        case "ourotolos":
            descricao.innerHTML = 'Este encanto transformará pedra comum em uma pilha do que parece ser ouro. Contudo, o encanto é apenas uma forma de encanto da ilusão - embora mais confiável do que o Encanto da ilusão abaixo - e a pilha de ouro logo voltará a ser pedra.';
            break;
        case "ilusao":
            descricao.innerHTML = 'Este é um encanto poderoso, mas que não é muito confiável. Através deste encanto, você poderá criar uma ilusão convincente (por exemplo, que você se transformou em serpente, ou que o chão está coberto de carvão em brasa) para enganar uma criatura. O encanto ficará imediatamente sem efeito se acontecer qualquer coisa que desfaça a ilusão (por exemplo, você convence uma criatura que se transformou em uma serpente e então imediatamente atinge sua cabeça com um golpe de espada!). É eficiente sobre tudo com criaturas inteligentes.';
            break;
        case "levitacao":
            descricao.innerHTML = 'Você pode lançar este encanto sobre objetos, adversários ou até sobre você mesmo. Livra quem o recebe dos efeitos da gravidade e assim fará com que tudo que esteja sob a sua influência flutue livremente no ar, sob o seu controle.';
            break;
        case "fsorte":
            descricao.innerHTML = 'Este encanto pode ser lançado a qualquer momento durante a sua aventura, a não ser durante uma batalha. Uma vez lançado, recuperará o seu índice de SORTE em metade de seu índice de SORTE Inicial. Este encanto nunca levará o seu índice de SORTE a um número superior a seu nível Inicial Portanto, se você lançar dois encantos da SORTE juntos, o seu índice de SORTE voltará apenas a ser igual a seu nível Inicial.';
            break;
        case "escudo":
            descricao.innerHTML = 'Ao lançar este encanto, você cria um escudo invisível à sua frente que o protegerá de objetos físicos, por exemplo flechas, espadas ou criaturas. O escudo não tem efeito contra a magia e, evidentemente, se nada fora dele pode tocar em você, você também não poderá tocar em nada fora dele.';
            break;
        case "fhabilidade":
            descricao.innerHTML = 'Este encanto restabelecerá o seu índice de HABILIDADE, aumentando-o em metade de seu valor Inicial, e pode ser lançado a qualquer momento durante a sua aventura, a não ser em uma batalha.';
            break;
        case "forca":
            descricao.innerHTML = 'Este encanto tem o efeito de aumentar muito a sua força, e é muito útil quando se luta contra criaturas fortes. Porem, deve ser utilizado com cautela, já que é difícil controlar a sua própria força quando ela aumenta demais!';
            break;
        case "fraqueza":
            descricao.innerHTML = 'Criaturas fortes são reduzidas por este encanto a miseráveis fracotes. Não tem efeito contra todas as criaturas, mas, quando tem efeito, a criatura se torna frágil e muito menos perigosa em uma batalha.';
            break;
        case "fenergia":
            descricao.innerHTML = 'Este encanto recuperará o seu índice de Energia, aumentando-o em metade de seu valor Inicial, e pode ser lançado a qualquer momento durante a sua aventura.';
            break;
        default:
            descricao.innerHTML = 'Descrição não disponível.';
            break;
    }
}

function adicionar(){
    let selectedIndex = lista.selectedIndex;
    
    if (selectedIndex === -1) {
        window.alert("Por favor, selecione um valor válido.");
        return;
    }

    let feiticoSelecionado = lista.options[selectedIndex].text

    if (listafinal.length >= magiasalva){
        window.alert('Limite de feitiços atingido.')
        return
    }

    
    if (feiticoSelecionado){ 
        listafinal.push(feiticoSelecionado)
        var item = document.createElement('option') //cria um elemento dinaminco option
        item.text = `${feiticoSelecionado}`
        fescolidos.appendChild(item) // coloca o valor "item" na lista

        document.getElementById('quantidade').textContent = `Itens adicionados: ${listafinal.length}`;
        
    } else {
        window.alert("Por favor, selecione um valor válido.");
    }
        
}

function remover() {
    let selectedIndex = fescolidos.selectedIndex;

    if (selectedIndex > -1) {
        listafinal.splice(selectedIndex, 1);
        fescolidos.remove(selectedIndex);

        document.getElementById('quantidade').textContent = `Itens adicionados: ${listafinal.length}`;
    } else {
        window.alert("Por favor, selecione um item para remover.");
    }
}

function salvar(){
    if(listafinal.length < magiasalva){
        window.alert('Escolha o maior número de feitiços possível.')
    } else{
        localStorage.setItem('feiticos', JSON.stringify(listafinal))

    window.location.href = 'livrojogo.html'}

}