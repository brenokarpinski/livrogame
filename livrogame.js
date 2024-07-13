
var urlParams = new URLSearchParams(window.location.search);

var habilidadeSalva = localStorage.getItem('habilidade');
var energiaSalva = localStorage.getItem('energia');
var sorteSalva = localStorage.getItem('sorte');
var magiasalva = localStorage.getItem('magia')
var feiticos = localStorage.getItem('feiticos')


// Converte a string de feitiços em um array (supondo que seja uma string JSON)
var feiticosArray = feiticos ? JSON.parse(feiticos) : [];

var capa = window.document.getElementById("conteudojogo")

var habilidade = window.document.getElementById('habilidade')
var energia = window.document.getElementById('energia')
var sorte = window.document.getElementById('sorte')
var magia = window.document.getElementById('magia')
var listadefeiticos = window.document.getElementById('feiticos')

if (habilidadeSalva && energiaSalva && sorteSalva) {
   habilidade.innerHTML = `HABILIDADE: ${habilidadeSalva}`
   energia.innerHTML = `ENERGIA: ${energiaSalva}`
   sorte.innerHTML = `SORTE: ${sorteSalva}`
   magia.innerHTML += ` ${magiasalva}`

}

function preencherSelect() {


   // Preenche o select com as opções recuperadas
   feiticosArray.forEach(feitico => {
       const opcao = document.createElement('option');
       opcao.value = feitico;
       opcao.text = feitico;
       listadefeiticos.appendChild(opcao);
   });
}

// Chama a função para preencher o select quando a página carregar
window.onload = preencherSelect;



window.addEventListener('beforeunload', function () {
   localStorage.clear();
});


var introducao = {
   titulo: "HISTÓRIA",
   detalhes: "O ordeiro e generoso povo do Vale dos Salgueiros vive há oito anos sob o terror e medo do feiticeiro Balthus Dire. Terror – porque o poder dele é realmente aterrorizante - e medo causados pela notícia que acabou chegando aos ouvidos desse povo, vinda dos domínios do feiticeiro, de que seus ambiciosos planos de conquista começariam pelo próprio Vale.<br> <br> Um fiel Semi-Elfo enviado em uma missão de espionagem à Torre Negra voltou galopando para o Vale há três dias com uma mensagem desesperada. Do interior das cavernas de Rocha Escarpada, Balthus Dire tinha recrutado um exército de Caóticos e se preparava para atacar com eles o Vale dentro de uma semana.<br> <br>O bom Rei Salamon era um homem de ação. Foram enviados mensageiros por todo o Vale no mesmo dia para preparar as defesas e convocar os homens para a guerra. Foram enviados também cavaleiros à Grande Floresta de Yore para avisar aos Semi-Elfos que moravam lá e fazer um apelo para que se aliassem às forças. O Rei Salamon era também um homem sábio. Ele sabia muito bem que as notícias inevitavelmente chegariam aos ouvidos do Grande Mago de Yore, um mestre da magia branca de grandes poderes, que vivia nas profundezas da floresta. O mago era velho e não resistiria a uma batalha destas proporções. Mas ele havia ensinado suas artes a vários jovens magos, e talvez um de seus discípulos de magia ajudasse o rei e seus súditos com coragem e ambição.<br> <br>Você é o aluno brilhante do Grande Mago de Yore. Ele tem sido um Mestre duro, e sua própria impaciência muitas vezes foi mais forte do que você. Talvez um pouco precipitadamente, você partiu de imediato para a corte de Salamon. O rei recebeu-o entusiasticamente e explicou seu plano. A batalha poderia ser evitada sem derramamento de sangue se Balthus fosse assassinado antes que seu exército pudesse ser reunido.<br> <br>A missão que você tem pela frente é extremamente perigosa. Balthus Dire está cercado, em sua Cidadela, por uma multidão de criaturas assombrosas. Embora a Magia seja a sua arma mais forte, haverá momentos em que você terá que confiar em sua espada para sobreviver.<br> <br>O Rei Salamon expôs a você como seria a sua missão e o advertiu dos perigos que estavam à sua frente. Há um caminho melhor para atravessar a Cidadela. Se você o descobrir, terá êxito com um mínimo de risco para a sua pessoa. Talvez você precise de várias viagens para descobrir o caminho mais fácil para atravessar a Cidadela.<br> <br>Você deixa o Vale dos Salgueiros na longa caminhada para a Torre Negra. No sopé da colina de Rocha Escarpada, você pode ver sua silhueta contra o céu escuro...",
   botoes: [{ texto: "Definir atributos", acao: (habilidadeSalva !== null) ? null : abrirPagina() },
   { texto: "Continuar", destino: (habilidadeSalva !== null) ? 1 : null}]
}

var p1 = {
   titulo: "1",
   detalhes: "O sol se põe. Enquanto o crepúsculo se transforma em escuridão, você começa a subir a colina na direção da ameaçadora forma que se desenha contra o céu noturno. A Cidadela fica a menos de uma hora de escalada.<br><br>A uma certa distância de seus muros, você pára para descansar - um erro, uma vez que, dessa posição, ela parece um espectro medonho do qual não se pode escapar. Os cabelos no seu pescoço se arrepiam enquanto você a observa. <br><br>Mas você se envergonha de seus medos. Com inflexível decisão, você marcha adiante na direção do portão principal, onde você sabe que encontrará guardas à sua espera. Você considera suas opções. Já pensou em se apresentar como um especialista em plantas medicinais que veio tratar de um guarda com febre. Poderia também se dizer um comerciante ou artesão - talvez um carpinteiro. Poderia até mesmo ser um nômade que buscasse abrigo para a noite. <br><br>Enquanto você pondera as possibilidades, e as histórias que terá que contar aos guardas, acaba chegando à trilha principal que conduz aos portões. Duas lanternas brilham em cada um dos lados da porta levadiça. <br><br>Você ouve grunhidos abafados ao se aproximar, e vê duas criaturas de aparência absurda. Do lado esquerdo está uma criatura horrível, com a cabeça de um cachorro e o corpo de um grande macaco, flexionando seus braços fortíssimos. Do outro lado, encontra-se de fato o seu oposto, com a cabeça de um macaco no corpo de um cachorro grande. Este último guarda se aproxima nas suas quatro patas. Pára a alguns metros de distância diante de você, ergue-se sobre as patas traseiras e dirige a palavra a você. <br><br>Por qual das histórias você optará?",
   botoes: [{ texto: "Se apresentar como um especialista em plantas medicinais", destino: 261 }, { texto: "Dizer que é um comerciante", destino: 230 }, { texto: "Pedir abrigo para pernoitar", destino: 20 }]
}
var p2 = {
   titulo: "2",
   detalhes: "Um pouco adiante na passagem há uma porta do lado direito. Esta porta está coberta por estranhos caracteres, em uma linguagem que você não compreende.",
   botoes: [{ texto: "Tentar abrir a porta", destino: 142 }, { texto: "Continuar seguindo a passagem", destino: 343 }]
}
var p3 = { //precisa criar condicao para saber se tem os itens
   titulo: "3",
   detalhes: "O que você oferecerá a eles?",
   botoes: [{ texto: "Uma Miríade de Bolso?", destino: 327 }, { texto: "Uma Aranha em um Vidro?", destino: 59 }, { texto: "Um punhado de Pequenas Amoras?", destino: 236 }, { texto: "Desembainhar a espada", destino: 286 }, { texto: "Correr para a porta mais distante", destino: 366 }]
}
var p4 = {
   titulo: "4",
   detalhes: "Você faz aparecer uma bola de fogo e a manda voando no rosto da criatura. Porém, fica assistindo desanimado ao vê-la ricochetear sem nenhum efeito! Você pode:",
   botoes: [{ texto: "lançar rapidamente um Encanto de Cópia de Criatura", destino: 190 }, { texto: "desembainhar a espada", destino: 303 }]
}
var p5 = {
   titulo: "5",
   detalhes: "Você experimenta a maçaneta da porta e ela gira, abrindo para um outro corredor. Logo adiante, a passagem vira para a direita e termina pouco depois em outra porta. Nesta porta há um letreiro que diz: <i>Por Favor Toque a Campainha para Chamar o Mordomo</i>. Uma corda - evidentemente a campainha - pende ao lado da porta.",
   botoes: [{ texto: "Tocar a campainha", destino: 40 }, { texto: "Experimentar a maçaneta da porta", destino: 361 }]
}
var p6 = {
   titulo: "6",
   detalhes: "O caminho segue ao longo do rio por vários metros e depois volta a penetrar na rocha. Você segue o caminho por algum tempo.",
   botoes: [{ texto: "Seguir viagem", destino: 367 }]
}
var p7 = {// precisa criar condicao para saber se tem o item em questao 
   titulo: "7",
   detalhes: "A porta está trancada. Você pode tentar pô-la abaixo, batendo nela com o ombro, ou pode lançar um Encanto da Força sobre você mesmo e tentar arrancar a porta das suas dobradiças.",
   botoes: [{ texto: "Bater com o ombro", destino: 268 }, { texto: "Usar encando de força", destino: 116 }]
}
var p8 = {
   titulo: "8",
   detalhes: "Ela observa espantada o aparecimento de uma réplica perfeita dela mesma entre vocês dois. Ela recua um pouco, e você orienta a sua criação para o ataque. Mas, quando elas se aproximam uma da outra, acontece uma coisa estranha. Elas parecem ser incapazes de chegar perto uma da outra, como duas extremidades giratórias, e sempre separam-se bruscamente de um salto. Porém, sua própria cópia pelo menos forçou a criatura a se afastar de você para uma certa distância, permitindo que você corra para a entrada principal da Cidadela.",
   botoes: [{ texto: "Seguir em frente", destino: 218 }]
}
var p9 = {
   titulo: "9",
   detalhes: "Sob o seu Encanto da Ilusão, a multidão de espectadores olha você começar a jogar. Você observa umas duas rodadas e a tensão cresce. Você resolve que é melhor sair do aposento sem mais perda de tempo.",
   botoes: [{ texto: "Sair do aposento", destino: 31 }]
}
var p10 = {
   titulo: "10",
   detalhes: "Você tateia pela rocha e acaba por encontrar uma pequena alavanca. Ao puxar esta alavanca, a face da rocha esfarela um pouco e aparece uma pequena abertura. Você sobe por esta abertura e chega a uma passagem. Descendo a passagem para a esquerda, você pode ver uma porta e resolve investigar.",
   botoes: [{ texto: "Investigar porta", destino: 249 }]
}
var p11 = { // precisa criar condicao de uso
   titulo: "11",
   detalhes: "Você pode usar:",
   botoes: [{ texto: "Encanto do Ouro dos Tolos", destino: 36 }, { texto: "Encanto de Cópia de Criatura", destino: 262 }, { texto: "Encanto da Percepção Extra-Sensorial", destino: 128 }, { texto: "Encanto da Fraqueza", destino: 152 }, { texto: "Desembanhar espada e lutar", destino: 16 }]
}
var p12 = {
   titulo: "12",
   detalhes: "Ele fica parado diante de você, respirando pesadamente. O Encanto dele evidentemente foi bastante exaustivo. Você pode usar essa oportunidade para:",
   botoes: [{ texto: "Deslocar-se rapidamente para o armário das armas", destino: 274 }, { texto: "Pular para debaixo da mesa", destino: 335 }, { texto: "Correr para a janela", destino: 78 }]
}
var p13 = {
   titulo: "13",
   detalhes: "A maçaneta gira e você abre a porta para um outro aposento, onde há bastante atividade. Três velhas feias, com narizes e queixos compridos, circulam pelo aposento - que parece ser alguma espécie de cozinha - pegando vários ingredientes dos armários e acrescentando-os a um caldo dentro de um grande caldeirão. Há um pedaço de carne assando em um espeto, embaixo de uma grande chaminé. Olhando mais atentamente, você descobre que a carne, na verdade, não é de um animal, mas sim um Anão inteiro que escurece ao fogo. Uma das mulheres olha para você e diz: <i>Ah, você deve ser o novo empregado...ou é a próxima refeição?</i>, com o que todas as três começam a dar gargalhadas e gritos enquanto riem.",
   botoes: [{ texto: "Deixar acreditarem que é um novo empregado", destino: 302 }, { texto: "Investigar o aposento com mais tempo", destino: 215 }]
}
var p14 = { // precisa criar condição para teste de sorte
   titulo: "14",
   detalhes: "A sombra do muro dificulta muito a visão. Uma pedra solta desliza, e você perde o equilíbrio, oscilando à beira do que você tem consciência de que deve ser um poço profundo. Teste a sua Sorte. Se você tiver sorte, recupera o equilíbrio e caminha em segurança. Você pode então dar a volta no poço e continuar (vá para 79). Se você não tiver sorte, cai lá dentro (vá para 100).",
   botoes: [{ texto: "Tive sorte", destino: 79 }, { texto: "Não tive sorte", destino: 100 }]
}
var p15 = { // acao para incluir objeto especial na mochila
   titulo: "15",
   detalhes: "A adaga é realmente uma obra de arte e sem dúvida valia um bom preço. A lâmina é feita de metal brilhante, e o cabo é de um couro verde peculiar, com pedras incrustadas. Você lê uma inscrição que diz que esta é uma adaga de arremesso encantada que nunca erra. Em um combate futuro, você poderá usar esta adaga para arremessar em um adversário. Ela causará automaticamente a perda de dois pontos de ENERGIA sem necessidade de jogar dados para conhecer a Força de Ataque. Mas você só poderá usá-la uma vez. Você põe a adaga em seu cinturão e parte na direção da Cidadela. ",
   botoes: [{ texto: "Continuar", destino: 245 }]
}
var p16 = { //acao de batalha necessario
   titulo: "2",
   detalhes: "Resolva esta batalha:<br><br> GARK               HABILIDADE: 7                    ENERGIA:11<br><br> Depois de 4 rodadas você poderá fugir para uma das portas mais distantes do aposento. Ou poderá continuar a batalha",
   botoes: [{ texto: "Fugir", destino: 99 }, { texto: "Venci a batalha", destino: 180 }]
}
var p17 = {
   titulo: "17",
   detalhes: "Todo tipo de alimentos estranhos podem ser encontrados nos armários. Globos oculares, línguas, lagartixas, frascos de líquidos, ervas e frutos silvestres de diferentes formas e tamanhos. Uma garrafa em especial, contendo um líquido verde transparente, chama a sua atenção. Você não tem tempo para ler o rótulo no momento, por isso você a põe no bolso rapidamente, enquanto elas não estão olhando. Você lhes diz que a cozinha parece estar em ordem e sai pela porta do lado oposto da cozinha.",
   botoes: [{ texto: "Continuar", destino: 93 }]
}
var p18 = {
   titulo: "18",
   detalhes: "Ele aponta para uma seção logo acima do chão, que você examina. Finalmente, você escolhe um volume e senta para ler. Balthus Dire aparentemente é o terceiro de uma linhagem de Feiticeiros Senhores da Guerra que governa a Torre Negra e o Reino da Rocha Escarpada. Chegou ao poder depois da morte de seu pai, Craggen Dire, há alguns anos atrás. Os Dires são mestres de Magia Negra há gerações, mas sua força e poder duram somente no período noturno; a luz do sol é uma espécie de veneno para eles. Pouco tempo depois da morte de seu pai, Balthus Dire casou-se com Lady Lucretia, ela também uma Feiticeira de Magia Negra, e desde então eles vem reinando juntos sobre o Reino da Rocha Escarpada. Ao terminar o livro, você repara que o bibliotecário está com a mão junto ao ouvido, aparentemente escutando alguma coisa. Ele dirige a você um olhar inquisitivo. Você pode procurar outro livro útil, que possa ajudá-lo na sua empreitada ou tentar sair da biblioteca pela porta atrás dele.",
   botoes: [{ texto: "Procurar outro livro", destino: 84 }, { texto: "Sair da biblioteca pela porta atrás dele ", destino: 31 }]
}
var p19 = { //condicao de uso de feitico
   titulo: "19",
   detalhes: "A escada geme quando você põe o pé nela. Você tenta subir o mais silenciosamente possível, mas a madeira velha range sob o seu peso. De repente, um dos degraus estala, como se acionasse um dispositivo de algum tipo. Para sua surpresa, todos os degraus: viram para baixo! Você está agora de pé em uma rampa lisa e inclinadíssima! Por mais que você tente, não consegue manter o equilíbrio e acaba escorregando pela rampa, rolando de ponta cabeça. Se você quiser usar um Encanto da Levitação, poderá voar e descer, fora de perigo, na sacada em cimaa;",
   botoes: [{ texto: "Usar feitiço de levitação", destino: 363 }, { texto: "Não tenho feitiço", destino: 254 }]
}

var p20 = {//condicao p uso de feitico
   titulo: "20",
   detalhes: "O Macaco-Cachorro diz que não é permitido a ninguém entrar na Torre Negra depois que anoitece - você terá que procurar abrigo em outro lugar. Você pode se resignar a lutar. Ou pode pegar uma pedra e lançar um Encanto do Ouro dos Tolos sobre ela, oferecendo-a como uma pepita de ouro, para suborná-los, convencendo-os a deixar você entrar",
   botoes: [{ texto: "Lutar", destino: 288 }, { texto: "Usar feitiço do Ouro dos Tolos", destino: 96 }]
}

var p21 = { // condicao para aumentar pontos de sorte
   titulo: "21",
   detalhes: "<i>O que traz você a estas paragens?</i> ela pergunta. Você conta a ela sua história, evitando cuidadosamente revelar a sua verdadeira missão. Ela aconselha você a afastar-se desse lugar, caso conheça alguma magia. As criaturas que você encontrou até agora não se comparam com as que habitam o interior da Torre da Cidadela propriamente dita. Ela diz que você jamais encontrará o senhor sem conseguir primeiro o Velo e deseja sorte para você em sua missão. Some 2 pontos de SORTE pelas informações que obteve e siga adiante.",
   botoes: [{ texto: "Continuar", destino: 6 }]
}
var p22 = {
   titulo: "22",
   detalhes: "Você abre a porta e sai em um corredor longo e escuro",
   botoes: [{ texto: "Continuar", destino: 188 },]
}
var p23 = {
   titulo: "23",
   detalhes: "Você abre a porta e sai em uma passagem que continua direto para frente por algum tempo. Vira para a esquerda, depois para a direita, até que você chega a um arco à sua frente que dá para um grande aposento. Você caminha na direção do aposento e entra nele.",
   botoes: [{ texto: "Continuar", destino: 169 }]
}
var p24 = {//condicao p uso de feitico
   titulo: "24",
   detalhes: "Você prova o vinho e, enquanto está apreciando o seu sabor, ouve um ruído tilintante. Você se vira para olhar na direção de onde o ruído está vindo e fica horrorizado ao ver que as garrafas nas prateleiras estão se mexendo sozinhas. Uma garrafa voa do lugar onde está e se projeta na sua direção, errando por pouco a sua cabeça e se espatifando na parede atrás de você. Uma outra voa na sua direção, depois outra, até que você está recebendo uma chuva de garrafas vindas de todas as direções. Você toma consciência de que sua única defesa é usar o Encanto do Escudo.",
   botoes: [{ texto: "Usar Encando do Escudo", destino: 372 }, { texto: "Não possuo esse encanto", destino: 219 }]
}
var p25 = {//condição p uso de feitico
   titulo: "25",
   detalhes: "A porta abre, dando para um aposento grande e circular. Você coça a cabeça, intrigado. No centro do aposento, vê uma pequena <i>ilha</i>, cercada por um fosso largo, na qual está uma arca, trancada por ferrolhos metálicos. O fosso é largo demais para ser pulado e é muito fundo. Logo na entrada, há um pedaço de corda. Existe uma outra porta do outro lado do aposento, dando para fora dele. Você:",
   botoes: [{ texto: "Ignorar a caixa e contorna o fosso até a outra porta", destino: 206 }, { texto: "Lança um Encanto da Força e salta sobre o fosso", destino: 133 }, { texto: "Pega a corda e formular um plano", destino: 239 }]
}
var p26 = { //condicao uso de feitico
   titulo: "26",
   detalhes: "Você lançará:",
   botoes: [{ texto: "Um Encanto do Fogo", destino: 87 }, { texto: "Um Encanto da Fraqueza", destino: 342 }, { texto: "Um Encanto de Cópia de Criatura", destino: 101 }, { texto: "Voltar e escolher de novo", destino: 304 }]
}
var p27 = { //aumento barra de sorte
   titulo: "27",
   detalhes: "Quando você mostra as Peças de Ouro, as três criaturas interrompem seu caminho. Eles engasgam ao olhar para suas moedas. Uma mão invisível as agarra e coloca no chão. Elas olham para você, e uma voz pede mais. Você pega todas as suas Peças de Ouro e joga no centro do aposento. Uma voz soa, dizendo: <i>Bem, estranho, você é realmente bem-vindo na casa dos MIKS. Agradecemos o seu presente. Se está seguindo adiante, vá pela porta à sua frente, mas tome cuidado com os Ganjees. Desejamos sorte para você na sua jornada.</i> Você pode acrescentar um ponto de SORTE pelos votos de sucesso dos Miks e sair pela porta à sua frente.",
   botoes: [{ texto: "Continuar", destino: 206 }]
}
var p28 = {
   titulo: "28",
   detalhes: "Você lança o Encanto e faz aparecer uma bola de fogo nas suas mãos. Eles interrompem seu caminho e observam você atentamente. Você joga a bola na direção deles, e eles gritam de medo, rolando aterrorizados para longe de você, com medo de seus óbvios poderes. Enquanto você ainda tem controle sobre o Encanto, cria mais três bolas de fogo menores e as arremessa sobre cada um deles. Eles uivam e se dispersam, rolando pelo corredor para longe de você. Você pode agora prosseguir pela passagem da:",
   botoes: [{ texto: "Esquerda", destino: 243 }, { texto: "Direita", destino: 2 }]
}
var p29 = {
   titulo: "29",
   detalhes: "Cautelosamente, você se aproxima do homenzinho. Ao chegar perto, um único olho se abre e olha diretamente no seu rosto. Um sorriso largo se espalha de orelha a orelha na criatura e ela desaparece! <i>Bom dia para você!</i> diz uma vozinha chilreante atrás de você, e, ao voltar-se, você o vê ali, ainda sorrindo. <i>Sou O'Seamus, o Duende!</i>, ele diz, dando risinhos, e estende a mão para você. Ele parece suficientemente amigável - você:",
   botoes: [{ texto: "Apertar a mão e tentar fazer amizade", destino: 271 }, { texto: "Desembanhar espada", destino: 131 }]
}
var p30 = {//batalha
   titulo: "30",
   detalhes: "A fera é imensamente poderosa. Você desembainha a sua espada e a batalha começa:<br><br>FERA DAS GARRAS        	HABILIDADE 9	       ENERGIA 14 <br><br> Depois que você atingir a criatura pela quarta vez, aperte continuar",
   botoes: [{ texto: "Continuar", destino: 241 }]
}
var p31 = {
   titulo: "31",
   detalhes: "Você sai do aposento pela porta do outro lado, a qual abre para uma passagem curta que termina em uma grande porta de madeira. A maçaneta desta porta gira, deixando que você entre em uma grande câmara.",
   botoes: [{ texto: "Continuar", destino: 169 }]
}
var p32 = {
   titulo: "32",
   detalhes: "Passando por sobre os corpos, você se aproxima do portão e chama o porteiro, para em seguida se esconder na escuridão quando ele se aproxima. Ele vê os corpos e sai para investigar, e, enquanto isso, você aproveita para esgueirar-se rapidamente pelo portão e trancá-lo do lado de fora.",
   botoes: [{ texto: "Continuar", destino: 251 }]
}
var p33 = {
   titulo: "33",
   detalhes: "Quando você tenta se levantar, o Orca e o Goblin agarram você e o seguram no chão, enquanto o Anão avança com sua clava.",
   botoes: [{ texto: "Continuar", destino: 213 }]
}
var p34 = {
   titulo: "34",
   detalhes: "A chave gira e, retirando a tranca, você abre a caixa, encontrando outra chave, dessa vez talhada em um metal verde cintilante.",
   botoes: [{ texto: "Experimentar esta nova chave na terceira caixa", destino: 89 }, { texto: "Sair do aposento com as duas chaves ", destino: 237 }]
}
var p35 = {
   titulo: "35",
   detalhes: "Você se concentra na sua Ilusão. Você pode:",
   botoes: [{ texto: "Convencê-lo de que ele está sendo atacado por um inimigo", destino: 364 }, { texto: "fazer com que você desapareça, na esperança de que ele virá procurar por você", destino: 246 }]
}
var p36 = {
   titulo: "36",
   detalhes: "<i>Bah!</i>, diz o Gark, <i> não é tão fácil me enganar. Jogue fora estes pedaços de latão.</i> A criatura tem a idéia de que, se você está oferecendo um suborno, deve ser um invasor, o que - para um Gark - é uma demonstração assombrosa de raciocínio lógico! Ele dá um tapa em você com sua mão enorme, jogando você sem sentidos no chão. As últimas palavras que você se lembra antes de desmaiar são ditas pelo Gark orgulhoso: <i>Para a cadeia com esse aqui!</i>",
   botoes: [{ texto: "Continuar", destino: 234 }]
}
var p37 = {
   titulo: "37",
   detalhes: "Você puxa a pele e a criatura solta silvos altos. Todas as suas cabeças recuam,e ela permanece quieta, observando você. Há uma porta do outro lado do aposento, e você lentamente se desloca na direção dela. Quando você está na metade do caminho, uma das cabeças se projeta e arranca o velo das suas mãos. Mas, ao invés de atacar você, a Hidra se encolhe de volta em um dos cantos. Você segue para a porta cautelosamente.",
   botoes: [{ texto: "Continuar", destino: 229 }]
}
var p38 = {
   titulo: "38",
   detalhes: "A porta abre para uma passagem curta, calçada com pedras pequenas. A uma pequena distância mais adiante, uma porta elaboradamente entalhada assinala o fim da passagem. Mas, logo antes da porta, uma passagem lateral sai para a esquerda. Você se aproximada porta, tentando escutar quaisquer sinais de vida do lado de dentro. Quando sua mão toca a maçaneta, uma voz diz: Não bata; simplesmente entre!<i>vinda de dentro.</i>",
   botoes: [{ texto: "Entrar no aposento", destino: 132 }, { texto: "desistir desse aposento e tomar a passagem que sai para a esquerda ", destino: 306 }]
}
var p39 = {//batalha especial
   titulo: "39",
   detalhes: "Você pega o Vidro e, ao fazer isso, os Ganjees ficam ofegantes. <i>Racknee! </i> diz uma voz. <i>Você voltou! </i> E com estas palavras; uma mão invisível arranca o vidro das suas mãos, coloca-o no chão e abre a tampa. O Homem-Aranha volta-se na sua direção e solta um pequeno grunhido. Você desembainha a sua espada quando a fera avança a passos rápidos para você, furiosamente. Você terá que lutar contra esta criatura:<br><br>  HOMEM-ARANHA            	HABILIDADE 7      	ENERGIA 5 <br><br> Logo que o Homem-Aranha conseguir atingir você pela primeira vez clique em fui atingido",
   botoes: [{ texto: "Fui atingido", destino: 208 }, { texto: "Venci a luta contra o Homem-Aranha", destino: 248 }]
}
var p40 = {
   titulo: "40",
   detalhes: "Depois de vários minutos, a porta se abre lentamente, e uma criatura corcunda e deformada, com dentes podres, cabelos desgrenhados e roupas esfarrapadas, aparece na sua frente. \"Sim senhor (heh, heh) - o que posso fazer pelo senhor?\" rosna a criatura semi-humana. \"Estou sendo esperado\", você responde e passa por ele, atravessando a porta com confiança. Ele fica um pouco surpreso com seu comportamento e gagueja, sem saber se entra em conflito com você ou não. \"Onde é a recepção?\" você pergunta. Ele olha para você de soslaio com um dos olhos e faz um gesto na direção de uma bifurcação para a esquerda, a pouca distância dali. Você acreditará nele e tomará a bifurcação para a esquerda (vá para 243) ou não confiará nesta criatura imprevisível e tomará a bifurcação da direita (volte para 2)?",
   botoes: [
      { texto: "Acreditar na criatura e tomar a bifurcação para a esquerda", destino: 243 },
      { texto: "Não confiar na criatura e tomar a bifurcação para a direita", destino: 2 }
   ]
};

var p41 = {
   titulo: "41",
   detalhes: "As três mulheres se juntam, fazendo um círculo, e sussurram umas com as outras. Com um risinho, uma delas volta-se para você e diz: \"Está bem, estranho, nós vamos ajudá-lo no seu caminho.\" Ela fita você com olhos frios de pedra e aponta primeiro para você, e depois para a parede atrás dela. O aposento fica escuro, você sente uma sensação de movimento e, quando a escuridão clareia, você está em outro aposento. Vá para 257.",
   botoes: [
      { texto: "Continuar para o próximo aposento", destino: 257 }
   ]
};

var p42 = { //movimentacao mochila
   titulo: "42",
   detalhes: "Ela pisca, e os jatos de fogo desaparecem. O que você oferecerá a ela?",
   botoes: [
      { texto: "Um Espelho de Prata?", destino: 138 },
      { texto: "Uma Escova de Cabelo?", destino: 91 },
      { texto: "Um Vidro contendo o Homem-Aranha?", destino: 223 },
      { texto: "Dar desculpa e voltar para a sacada", destino: 64 } // Ou 304, dependendo da escolha anterior
   ]
};

var p43 = { //pontos de energia
   titulo: "43",
   detalhes: "Quando você lança o encanto, ele afrouxa o aperto. Gradualmente, sua força diminui, até que ele acaba por soltar o aperto e cai para trás, ofegante, no chão. Desconte mais um ponto de ENERGIA enquanto trata de seu braço ferido e risque o Encanto da Fraqueza de sua lista. Você pode prosseguir no seu caminho. Volte para 14.",
   botoes: [
      { texto: "Tratar do braço ferido e prosseguir", destino: 14 }
   ]
};

var p44 = {
   titulo: "44",
   detalhes: "O aposento pára de sacudir e você cai no chão. O armário das armas está trancado, mas você pode arrebentar a fechadura. Ou pode tirar a sua mochila e procurar uma arma para usar. O que você fará:",
   botoes: [
      { texto: "Escolher uma arma do armário?", destino: 353 },
      { texto: "Pegar um artefato na mochila?", destino: 277 }
   ]
};

var p45 = {
   titulo: "45",
   detalhes: "Se seu estômago aguentar, você poderá experimentar:",
   botoes: [
      { texto: "Um pouco da carne pendurada", destino: 166 },
      { texto: "Um pedaço de fruta", destino: 313 },
      { texto: "Uma fatia de queijo", destino: 253 },
      { texto: "Um naco de pão", destino: 97 }
   ]
};

var p46 = {
   titulo: "46",
   detalhes: "Com um gesto, você estica a mão para frente e aponta o chão sob os pés do feiticeiro. Fumaça e chamas irrompem do chão. Balthus Dire salta para trás, um pouco admirado, e em seguida fecha os olhos para se concentrar. Ao se abrirem, você vê um fogo que queima dentro das próprias pupilas, e ele avança por entre as chamas que você criou. Pegando um punhado de pedras em brasa, ele atira isso em você. Você se abaixa para se desviar (vá para 195) ou pula para o lado (vá para 74)?",
   botoes: [
      { texto: "Se abaixar para se desviar", destino: 195 },
      { texto: "Pular para o lado", destino: 74 }
   ]
};

var p47 = {//feitico
   titulo: "47",
   detalhes: "Que Encanto você usará:",
   botoes: [
      { texto: "Encanto de Cópia de Criatura?", destino: 8 },
      { texto: "Encanto da Ilusão?", destino: 173 },
      { texto: "Encanto da Levitação?", destino: 259 },
      { texto: "Recuar na direção do monumento e se esconder", destino: 209 }
   ]
};

var p48 = {
   titulo: "48",
   detalhes: "\"Nunca!\" grita o feiticeiro, voltando das sombras para enfrentar você. Dessa vez, é você quem sente o tremor do medo, ao ver que ele também se transformou - mas em uma criatura que poderia fazer com que um Demônio do Fogo ficasse paralisado. O rosto de Balthus Dire tornou-se feio e com feições de bruxa, e seus cabelos agora são pequenas serpentes que se contorcem e soltam silvos. Você fugirá desta criatura (vá para 232) ou avançará com seu Tridente (vá para 199)?",
   botoes: [
      { texto: "Fugir da criatura", destino: 232 },
      { texto: "Avançar com o Tridente", destino: 199 }
   ]
};

var p49 = {
   titulo: "49",
   detalhes: "A criatura fica olhando fixamente para você com ar inquisitivo, como se estivesse insegura em relação a você. Vá para 255.",
   botoes: [{ texto: "Continuar", destino: 255 }]
};

var p50 = {
   titulo: "50",
   detalhes: "CONTINUE.",
   botoes: [{ texto: "Continuar", destino: 164 }]
};

var p51 = {//FEITICO
   titulo: "51",
   detalhes: "Você distribui loucamente golpes com sua espada, mas não consegue atingir a criatura. Ou ela é extremamente rápida, ou não possui um corpo sólido que possa ser atingido. Seus dentes estão agora rasgando a sua carne, e você sente sangue na perna. Você terá que se proteger com sua mágica ou enfrentar uma morte certa, trazida por esta criatura que não se vê. Você lançará um Encanto da Força (vá para 301), um Encanto da Fraqueza (vá para 159) ou, se não quiser ou não puder lançar nenhum dos dois, irá para 280.",
   botoes: [
      { texto: "Lançar um Encanto da Força", destino: 301 },
      { texto: "Lançar um Encanto da Fraqueza", destino: 159 },
      { texto: "Não lançar nenhum encanto", destino: 280 }
   ]
};

var p52 = {
   titulo: "52",
   detalhes: "A porta abre e você segue adiante, batendo-a para que se feche atrás de você. Pouca distância à frente, você chega a um cruzamento de três caminhos, no qual você toma a passagem que vai na direção norte. Ela continua por vários metros, conduzindo a uma outra porta. Você pode ouvir risos e vozes alegres do outro lado. Cautelosamente, você abre a porta que dá para um grande aposento, onde um grupo de mais ou menos doze criaturas, de todas as formas, tamanhos e cores, estão se divertindo com jogos. Quando você entra no aposento, uma voz grita: \"Olhem esse deve ser Glaz-Doz-Fut!\", com o que todos eles cumprimentam você, convidando-o para juntar-se à brincadeira. Evidentemente eles estão esperando alguém e confundiram você com o convidado que está faltando. Você continua fingindo e junta-se a eles (vá para 385) ou dirá a eles que estão enganados e tentará chegar até a porta do outro lado do aposento (vá para 227)?",
   botoes: [
      { texto: "Continuar fingindo e juntar-se a eles", destino: 385 },
      { texto: "Dizer que estão enganados e tentar chegar até a porta", destino: 227 }
   ]
};

var p53 = {
   titulo: "53",
   detalhes: "\"Para que eu quero suas amoras?\" ela ri. \"Meu apetite morreu com meu corpo!\" E, quando você olha mais de perto, pode ver que ela também não é nada além de um Fantasma. Ela flutua no ar, vindo na sua direção. Vá para 194.",
   botoes: [{ texto: "Continuar", destino: 194 }]
};

var p54 = {//mochila
   titulo: "54",
   detalhes: "Você procura dentro de sua mochila. O que você pegará:",
   botoes: [
      { texto: "Um Vidro de Unguento?", destino: 287 },
      { texto: "Uma Miríade de Bolso?", destino: 160 },
      { texto: "Peças de ouro?", destino: 27 },
      { texto: "Retornar e escolher de novo", destino: 104 }
   ]
};

var p55 = {
   titulo: "55",
   detalhes: "Você segue a passagem por algum tempo. Ela vira para a direita e acaba chegando a um beco sem saída. Você pode retornar para a bifurcação e tomar a outra passagem (vá para 249) ou procurar passagens secretas (volte para 10).",
   botoes: [
      { texto: "Retornar para a bifurcação", destino: 249 },
      { texto: "Procurar passagens secretas", destino: 10 }
   ]
};

var p56 = {
   titulo: "56",
   detalhes: "O ELFO NEGRO que se aproxima de você é raquítico e maltrapilho. Ele pergunta se você é um convidado ou um aventureiro. Você diz que é um convidado que veio até embaixo para provar o vinho que ele guarda em sua famosa Adega de Vinhos. Com um certo orgulho, ele mostra a você as garrafas de safras que ele guarda para seu Senhor, o Feiticeiro. Algumas delas, ele afirma, possuem poderes mágicos. Ele pergunta se você não quer experimentar o vinho. Você prefere provar:",
   botoes: [
      { texto: "O Vinho Tinto?", destino: 120 },
      { texto: "O Vinho Branco?", destino: 163 },
      { texto: "O Vinho Rosé?", destino: 334 },
      { texto: "Recusar a oferta dele e seguir adiante no seu caminho?", destino: 95 }
   ]
};
var p57 = {//evento sorte
   titulo: "57",
   detalhes: "Teste a sua Sorte. Se você tiver sorte, vá para 150. Se não tiver, vá para 233.",
   botoes: [
      { texto: "Testar a sorte", destino: 150 },
      { texto: "Não testar a sorte", destino: 233 }
   ]
};

var p58 = {
   titulo: "58",
   detalhes: "Quando você entra, os Gremlins esvoaçam e guincham excitados, depois voam, passando por você e saindo pela porta noite adentro. Você agora está sozinho com os cálices. Você se arriscará a beber alguma coisa? Se o fizer, escolherá:",
   botoes: [
      { texto: "O líquido claro?", destino: 298 },
      { texto: "O líquido vermelho?", destino: 267 },
      { texto: "O líquido leitoso?", destino: 92 },
      { texto: "Sair e prosseguir na direção da Cidadela", destino: 156 }
   ]
};

var p59 = {
   titulo: "59",
   detalhes: "Eles ficam revoltados com seu presente e correm para o canto do aposento, se escondendo embaixo das camas. Um tanto desconcertado com o comportamento deles, você deixa o vidro no chão e segue na direção da porta do outro lado do aposento. Vá para 140.",
   botoes: [{ texto: "Continuar", destino: 140 }]
};

var p60 = {//feitico
   titulo: "60",
   detalhes: "As criaturas ficam desconfiadas quando você as pressiona, buscando informações. O Anão salta rapidamente de pé, brandindo uma clava de madeira, enquanto o Goblin e o Orca pegam espadas e olham com raiva para você. A namorada do Goblin grita e recua vários passos, enquanto os outros avançam na sua direção. Você terá que lutar contra eles. Você pode usar um Encanto Mágico:",
   botoes: [
      { texto: "Encanto da Levitação", destino: 33 },
      { texto: "Encanto da Ilusão", destino: 295 },
      { texto: "Puxar a sua espada e lutar", destino: 213 }
   ]
};

var p61 = {//possivel final
   titulo: "61",
   detalhes: "Você avança com sua espada. O Devlin pára... e salta sobre você! Você golpeia com sua espada, mas não consegue fazer nenhum mal à criatura, que está agora em cima de você. O corpo incandescente dele está queimando a sua carne e você está em grande agonia. Ainda assim, ele se mantém firme e você desmaia em choque. Você cai no chão para nunca mais acordar, e o Devlin só larga quando já tem certeza de que seu corpo está queimado além de qualquer possibilidade de recuperação. Afinal, você será mesmo a próxima refeição das criaturas da Torre Negra...",
   botoes: [{ texto: "Fim", destino: null }]
};

var p62 = {//sorte
   titulo: "62",
   detalhes: "Com o Gárgula fora de combate, você decide investigar a caixa no pedestal da criatura. Teste a sua Sorte. Se você tiver sorte, pode levar a bolsa com dez Peças de Ouro trancada lá dentro. Se não tiver sorte, não consegue abrir a caixa. Saia do aposento e vá para 140.",
   botoes: [
      { texto: "Tive sorte", destino: 140 },
      { texto: "Não tive sorte", destino: 140 }
   ]
};

var p63 = {
   titulo: "63",
   detalhes: "Você vai até o índice remissivo e verifica a referência. Ao chegar à página correta, você fica decepcionado ao descobrir que a seção foi arrancada do livro! Você pode olhar os Calacorms (vá para 263) ou verificar os Miks (vá para 135).",
   botoes: [
      { texto: "Olhar os Calacorms", destino: 263 },
      { texto: "Verificar os Miks", destino: 135 }
   ]
};
var p64 = {
   titulo: "64",
   detalhes: "Você ouve junto à porta e consegue escutar vozes esganiçadas rindo e brigando. Você experimenta a maçaneta e a porta abre. O lado de dentro é um aposento de cores vivas. Há umas poucas camas pequenas em um canto, e, espalhados pelo chão, há pequenos bonecos de várias criaturas brutas. Junto à parede do lado direito há uma caixa, e logo adiante da caixa uma porta. No meio do assoalho, e olhando para você com curiosidade, estão três pequenas criaturas. Têm aparência humana, mas possuem pele verde, orelhas pontudas e olhos muito apertados. Qual será a sua atitude? Você:",
   botoes: [
      { texto: "Desembainhará a sua espada e se preparará para lutar contra eles?", destino: 286 },
      { texto: "Procurará em sua mochila alguma coisa para oferecer a eles?", destino: 3 },
      { texto: "Caminhará confiantemente através do aposento para a porta do outro lado?", destino: 366 }
   ]
};

var p65 = {//Possivel Final
   titulo: "65",
   detalhes: "Você se ajoelha diante dele e se curva. Ele é de fato o seu senhor agora. Você falhou na sua missão.",
   botoes: [{ texto: "Fim", destino: null }]
};

var p66 = {
   titulo: "66",
   detalhes: "Eles olham um para o outro e conversam. Um deles se adianta e estende a mão com um pequeno cubo, que parece ter sido feito de algum tipo de pão ou bolo. A pedido dele, você põe isso na boca e mastiga. Quando engole, você se sente subitamente forte de novo. Retorne a seus níveis Iniciais de HABILIDADE e ENERGIA e acrescente um ponto de SORTE. Você agradece a ele pela comida e a todos pela companhia, depois parte na direção das portas. Vá para 270.",
   botoes: [{ texto: "Continuar", destino: 270 }]
};

var p67 = {//encanto
   titulo: "67",
   detalhes: "Você começa a sua luta contra a criatura. Seu primeiro golpe é certeiro e corta uma das seis cabeças. As outras cinco avançam sobre você e, para seu horror, mais duas cabeças crescem onde estava antes a cabeça morta! Uma das cabeças morde profundamente o seu braço. Você perde quatro pontos de ENERGIA. Sua espada obviamente não vai adiantar muito. Você usará um Encanto de Cópia de Criatura (vá para 143) ou alguma coisa de sua mochila (vá para 226)?",
   botoes: [
      { texto: "Usar um Encanto de Cópia de Criatura", destino: 143 },
      { texto: "Usar algo da sua mochila", destino: 226 }
   ]
};

var p68 = {
   titulo: "68",
   detalhes: "\"Por qual eu iria, hein?\" ele considera. \"Vamos ver... eu não iria por uma das duas portas à esquerda da porta de maçaneta de cobre, nem a porta à direita da de maçaneta de bronze.\" Qual delas você escolherá:",
   botoes: [
      { texto: "A porta de maçaneta de latão?", destino: 207 },
      { texto: "A porta de maçaneta de cobre?", destino: 22 },
      { texto: "A porta de maçaneta de bronze?", destino: 354 }
   ]
};

var p69 = {
   titulo: "69",
   detalhes: "A criatura não é de muita conversa, mas você consegue descobrir que está nas masmorras dos subterrâneos da Torre Negra e que provavelmente nunca será libertado, a não ser que se já dado aos Ganjees para o divertimento deles. Quando você pergunta por Balthus Dire, ele fica calado. É melhor você tentar usar um Encanto para conseguir sair dessa prisão. Vá para 193.",
   botoes: [{ texto: "Continuar", destino: 193 }]
};
var p70 = {//encanto
   titulo: "70",
   detalhes: "Você voa para cima e mantém-se longe dos botes dele, mas ele não sai do lugar onde está, e não há meio de você contorná-lo voando para chegar à porta. O Encanto acaba por se esgotar e você tem que enfrentá-lo de novo. Você:",
   botoes: [
      { texto: "Usa um Encanto da Fraqueza?", destino: 307 },
      { texto: "Usa um Encanto da Força?", destino: 264 },
      { texto: "Desembainha a sua espada?", destino: 325 }
   ]
};

var p71 = {
   titulo: "71",
   detalhes: "Você desembainha a sua espada e golpeia o tentáculo. O tentáculo não ataca de volta, como uma criatura normal, mas, ao invés disso, está tentando arrastar você para um grande buraco no chão, que está se abrindo em torno da base dele. Você não precisa jogar dados para o Tentáculo, uma vez que ele possui uma Força de Ataque de 15 e um índice de ENERGIA de 2. Jogue para o combate de maneira normal, mas, se sua própria Força de Ataque ficar abaixo de 15, não subtraia pontos de sua própria ENERGIA. Porém, se você não derrotar a criatura em três Séries de Ataque, ela conseguirá arrastar você para seu covil, e sua aventura terá terminado. Se você de fato derrotá-la, poderá arrancar o tentáculo de sua perna e prosseguir para a entrada principal da Torre Negra. Vá para 218.",
   botoes: [{ texto: "Continuar", destino: 218 }]
};

var p72 = {//possivel final
   titulo: "72",
   detalhes: "A sorte não está do seu lado. Seu primeiro olhar na direção da criatura com serpentes na cabeça foi suficiente para selar o seu destino. Você grita de angústia ao sentir que suas juntas começam a endurecer, e seus membros se tornam pesados e incontroláveis. Sob a ação do olhar da Górgona, que transforma tudo em pedra, você luta para manter o equilíbrio - mas acaba perdendo-o e cai no chão. Seu corpo petrificado se despedaça com o impacto, e você agora jaz feito em cacos diante de Balthus Dire. Você falhou na sua missão.",
   botoes: [{ texto: "Fim", destino: null }]
};

var p73 = {//feitico
   titulo: "73",
   detalhes: "Você pode tentar se livrar da Cobra de Esgoto, ou mantê-la a distância com um encanto. Se decidir lutar contra a criatura, resolva esta batalha:\n\nCOBRA DE ESGOTO\tHABILIDADE 6\tENERGIA 7\n\nSe vencer, vá para 112.\n\nSe quiser lançar um Feitiço da Força, acrescente três ao número obtido nos dados para sua Força de Ataque. Se quiser lançar um Feitiço do Fogo, vá para 282",
   botoes: [
      { texto: "Lutar contra a Cobra de Esgoto", destino: 112 },
      { texto: "Lançar um Feitiço da Força", destino: 282 },
      { texto: "Lançar um Feitiço do Fogo", destino: null }
   ]
};

var p74 = {//energia
   titulo: "74",
   detalhes: "Ao pular de lado, os olhos do feiticeiro seguem você – e a bola de fogo dele também. Ela atinge você no peito, derrubando-o no chão. A queimadura custará 4 pontos de ENERGIA. Se você ainda estiver vivo, poderá preparar outro Encanto para o seu contra-ataque.",
   botoes: [{ texto: "Continuar", destino: 377 }]
};

var p75 = {
   titulo: "75",
   detalhes: "Você cruza a soleira, fecha a porta atrás de você e espera algum tempo. Ouve as passadas se aproximarem e chegarem até a porta. Uma tagarelice incompreensível do outro lado da porta acaba diminuindo até desaparecer, e você ouve novamente as passadas, desta vez se afastando de você. Você toca a campainha para chamar o mordomo.",
   botoes: [{ texto: "Continuar", destino: 40 }]
};
var p76 = {
   titulo: "76",
   detalhes: "Enquanto você estava tirando suas Amoras da mochila, Balthus Dire ficou se concentrando em um Encanto. Ele Levanta os olhos e explode numa gargalhada. 'Amoras do sono!', ele grita. 'O que você espera que eu faça? Ponha tudo na boca?' Ele estala os dedos e seu Encanto se materializa. Vá para 191.",
   botoes: [{ texto: "Continuar", destino: 191 }]
};

var p77 = {//encanto
   titulo: "77",
   detalhes: "Balthus Dire fica surpreso com seu sucesso. 'Então!' ele exclama. 'Você se acha mais forte do que os outros, hein?' Você pode agir rapidamente e lançar um Encanto sobre ele. Qual você escolherá:",
   botoes: [
      { texto: "Um Encanto da Percepção Extra-Sensorial?", destino: 187 },
      { texto: "Um Encanto do Fogo?", destino: 46 },
      { texto: "Um Encanto de Cópia de Criatura?", destino: 349 },
      { texto: "Não lançar um encanto", destino: 355 }
   ]
};

var p78 = {
   titulo: "78",
   detalhes: "Seus olhos seguem você até a janela. Suas pupilas tornaram-se brancas como o leite. Ele inclina sua cabeça para trás, pisca uma vez e geme. Jogando a cabeça para frente, ele agora olha fixamente para você com olhos que se tornaram cor de prata brilhante! Seu olhar é hipnótico, e você terá que agir rapidamente. Você:",
   botoes: [
      { texto: "Esconde-se por trás de uma das cortinas?", destino: 324 },
      { texto: "Arranca uma das cortinas e joga por cima da cabeça dele?", destino: 124 },
      { texto: "Procura em sua mochila alguma coisa que possa usar?", destino: 277 }
   ]
};

var p79 = {
   titulo: "79",
   detalhes: "No canto mais distante do pátio, você encontra um arbusto diferente, com galhos contorcidos a partir da haste central, como se estivesse em agonia. As folhas têm a forma de diamantes, com pequenas amoras por baixo, chatas e com forma de pastilhas. Você pode levar algumas amoras com você na sua aventura e avançar um pouco mais ao longo do muro para a entrada principal da Cidadela. Vá para 218.",
   botoes: [{ texto: "Continuar", destino: 218 }]
};

var p80 = {
   titulo: "80",
   detalhes: "Quando, você salta por cima da mesa, o feiticeiro gira em torno de si mesmo. Você tropeça e desaba no chão, ao ver que ele se transformou em uma criatura bem mais perigosa do que você. Seu rosto agora é o de uma bruxa, e seu cabelo uma massa de serpentes que se contorcem e silvam para você. Você continua o seu ataque (vá para 199) ou foge dele (vá para 232)?",
   botoes: [
      { texto: "Continuar o ataque", destino: 199 },
      { texto: "Fugir dele", destino: 232 }
   ]
};

var p81 = {
   titulo: "81",
   detalhes: "O Macaco-Cachorro ri e diz a você que Kylltrog é um preguiçoso que não serve para nada, e que não vale a pena salvá-lo. Você solta um suspiro de alívio quando ele caminha de volta e grita para chamar o porteiro. Alguns momentos depois, o porteiro aparece e abre uma pequena porta para deixar você entrar. Vá para 251.",
   botoes: [{ texto: "Continuar", destino: 251 }]
};

var p82 = {//possivel fim
   titulo: "82",
   detalhes: "Você cai no fosso. Freneticamente, você tenta  agarrar a borda ao cair, mas sem êxito. Você despenca pelo poço de ponta cabeça, e sua última lembrança é sua queda final ao chocar-se contra o solo lá embaixo, o que mata você instantaneamente. Você falhou na sua missão.",
   botoes: [{ texto: "Fim", destino: null }]
};
var p83 = {
   titulo: "83",
   detalhes: "O homem é um comerciante. Você diz a ele que vocês são companheiros de profissão, e vocês conversam por algum tempo sobre preços e lucros dentro da Torre Negra. Ele diz que nunca permitiram que ele entrasse nos andares acima do térreo da Cidadela, uma vez que os comerciantes são bastante desprezados lá dentro. Você se despede e segue adiante. Vá para 245.",
   botoes: [{ texto: "Continuar", destino: 245 }]
};

var p84 = {
   titulo: "84",
   detalhes: "Ao examinar as prateleiras, você ouve uma grande movimentação atrás de você. Você se vira rapidamente, a tempo de ver criaturas semelhantes a Orcas, armadas e em guarda, materializaram-se uma após a outra diante de você. Elas avançam e cercam você. O mais alto chega o rosto perto do seu e solta um bafo de respiração diretamente sobre os seus olhos. O aposento gira e você desaba no chão, inconsciente. Vá para 234.",
   botoes: [{ texto: "Continuar", destino: 234 }]
};

var p85 = {//encanto
   titulo: "85",
   detalhes: "Você lança seu Feitiço e espera que a bola de fogo apareça na ponta da sua tocha. A tocha se acende, apenas o suficiente para que você veja que há uma porta do outro lado do aposento, mas depois se apaga de novo. Os Ganjees riem mais uma vez dos seus esforços para enganá-los. Você sente uma pancada na cabeça que volta a derrubá-lo no chão. Você perde dois pontos de ENERGIA. Você:",
   botoes: [
      { texto: "Tentará um Encanto da Ilusão?", destino: 395 },
      { texto: "Pegará alguma coisa na sua mochila?", destino: 322 },
      { texto: "Desembainhará a sua espada?", destino: 248 }
   ]
};

var p86 = {
   titulo: "86",
   detalhes: "Quando você lança o encanto, as duas criaturas ficam olhando espantadas enquanto você flutua no ar, passa sobre suas cabeças na direção do portão, sobre a muralha e para o interior da Cidadela. Você aterrissa do lado de dentro e olha à sua volta. Vá para 251. Mas tome cuida do! Eles com certeza avisarão os guardas da Cidadela. Risque o Encanto da Levitação que acabou de usar na sua Folha de Aventuras.",
   botoes: [{ texto: "Continuar", destino: 251 }]
};

var p87 = {
   titulo: "87",
   detalhes: "Você cria uma grande bola de fogo nas suas mãos e a lança sobre a criatura. Não adianta nada. O Gárgula dá um soco em você, e o golpe joga você no chão. Desconte dois pontos de ENERGIA. É melhor evitar esta fera, sair do aposento e tentar a porta do meio da sacada. Vá para 64.",
   botoes: [{ texto: "Continuar", destino: 64 }]
};

var p88 = {//possivel encanto
   titulo: "88",
   detalhes: "A porta é extremamente forte, mas cede mo pouco quando você a golpeia. Você pode tentar golpeá-la tanto tempo quanto quiser, até que ela ceda de todo. Jogue um dado para cada tentativa. Se obtiver um seis, você consegue (vá para 292). Para cada tentativa sem êxito, você perderá um ponto de ENERGIA. Se você resolver não agir dessa maneira, poderá usar o Encanto da Força (vá para 170), tentar a porta do meio (vá para 64), ou a porta na outra extremidade da sacada (vá para 304).",
   botoes: [
      { texto: "Tentar golpear novamente", destino: 292 },
      { texto: "Usar o Encanto da Força", destino: 170 },
      { texto: "Tentar a porta do meio", destino: 64 },
      { texto: "Tentar a porta na outra extremidade da sacada", destino: 304 }
   ]
};

var p89 = {
   titulo: "89",
   detalhes: "A chave gira, a fechadura se abre e você olha dentro da caixa. Lá dentro há um vidro grande que contém uma aranha. Mas não é uma aranha comum; esta criatura tem o rosto de um velho. Ele está falando com você, mas você não consegue entender o que ele está dizendo. Um barulho chama a sua atenção, você se vira e vê que a porta por onde você entrou está começando a abrir. Você põe o vidro na sua mochila e parte para a outra porta. Vá para 237.",
   botoes: [{ texto: "Continuar", destino: 237 }]
};

var p90 = {
   titulo: "90",
   detalhes: "A passagem se alarga, e você está agora andando ao longo de um rio que corre. Bem à frente, há uma mulher que parece estar lavando roupa. Ela tem uma cesta com roupas a seu lado, e há vários conjuntos de ceroula e camiseta de baixo pendurados em um varal atrás dela. Você:",
   botoes: [
      { texto: "Desembainhará a sua espada e avançará, pronto para a luta?", destino: 176 },
      { texto: "Cumprimentará ela e tentará estabelecer uma conversação?", destino: 21 },
      { texto: "Usará um Encanto de Percepção Extra-Sensorial para descobrir quem ela é?", destino: 329 }
   ]
};

var p91 = {//sorte
   titulo: "91",
   detalhes: 'Ela olha para a sua oferta e seus olhos se arregalam. "Deixe-me ver isso," ela ordena. Você avança cuidadosamente na direção dela e mostra a escova. Ela pega o objeto e passa vários minutos admirando-o. - "Isto é de fato uma obra de arte", ela diz, e se levanta da cama para experimentá-la em frente ao espelho. Ao escovar os cabelos dela, eles assumem um brilho incomum, cintilando suavemente. Ela fica fascinada com seu presente, e esta é a sua chance de sair sem ser notado pela porta existente no canto mais distante. Você pode tentar levar com você um Velo de Ouro que se encontra sobre a cama. Teste a sua Sorte. Se tiver sorte, consegue apanhá-lo rapidamente e pode sair pela outra porta (vá para 140). Se não tiver sorte, você pode Testar a sua Sorte de novo até que finalmente tenha sorte. Ou, se a sorte não estiver do seu lado, poderá ignorar o objeto que atrapalha você e sair de qualquer modo (vá para 140).',
   botoes: [
      { texto: "Tentar levar o Velo de Ouro", destino: 140 },
      { texto: "Testar a Sorte novamente", destino: 91 },
      { texto: "Ignorar o objeto e sair", destino: 140 }
   ]
};

var p92 = {//energia
   titulo: "92",
   detalhes: "O líquido leitoso cheira bem. Você toma um gole e começa a sorrir. Dá um gole maior e explode em gargalhadas - por motivo nenhum! Não é de se estranhar que os pequenos Grernlins estivessem gostando tanto. Com a cabeça leve e de bom humor, você sai do aposento para continuar em seu caminho para a Cidadela. Acrescente dois pontos de ENERGIA por este incidente reconfortante.",
   botoes: [{ texto: "Continuar", destino: 156 }]
};

var p93 = {//Mochila
   titulo: "93",
   detalhes: "Do lado de fora, você olha para sua garrafa. É uma garrafa de Essência de Erva de Porco, aparentemente útil para repelir criaturas de base em pedra. Isso pode ser útil, e você a guarda cuidadosamente em sua mochila. Seguindo em frente pelo corredor, você chega a uma outra porta, que abre, deixando que você passe para um grande aposento. Vá para 169.",
   botoes: [{ texto: "Continuar", destino: 169 }]
};

var p94 = {//energia
   titulo: "94",
   detalhes: "Você sente o seu próprio poder crescendo. Você corre na direção da porta e a golpeia firme como ombro... mas ela nem se mexe! Você perde um ponto de ENERGIA pela contusão e bate com força para chamar o guarda. Vá para 118.",
   botoes: [{ texto: "Continuar", destino: 118 }]
};
var p95 = {
   titulo: "95",
   detalhes: "No lado mais distante da Adega de Vinhos, há uma porta de madeira, que você experimenta. Ela abre para uma passagem que conduz adiante por vários metros. Vá para 367.",
   botoes: [{ texto: "Continuar", destino: 367 }]
};

var p96 = {
   titulo: "96",
   detalhes: "Eles aceitam a sua oferta e convocam o porteiro, que abre uma pequena porta dentro da porta levadiça para deixar você entrar. Você os deixa discutindo por causa da pepita de ouro. Vá para 251.",
   botoes: [{ texto: "Continuar", destino: 251 }]
};

var p97 = {//habilidade
   titulo: "97",
   detalhes: "O pão está bastante seco e sem gosto. Na verdade, está muito seco - tão seco que logo você está desesperado por alguma coisa para beber! Sua boca está ressequida e você procura freneticamente entre os alimentos do aposento algum líquido. Mas não há nada para aplacar a sua sede. Você tem que deduzir um ponto de HABILIDADE de seu índice atual, até que você encontre algum tipo de líquido que possa beber (beber o líquido mencionado não precisa ser necessariamente dado como uma opção – pode ser descrito apenas como estando presente em um aposento). Você pode agora sair do aposento, ou pela porta da parede do lado esquerdo (volte para 13), ou pela porta oposta à que você usou para entrar (vá para 281).",
   botoes: [
      { texto: "Sair pela porta à esquerda", destino: 13 },
      { texto: "Sair pela porta oposta", destino: 281 }
   ]
};

var p98 = {//feitico
   titulo: "98",
   detalhes: "O GOLEM que avança na sua direção é uma criatura que se move com lentidão, e você alcança facilmente as caixas. Enquanto você luta com as fechaduras, o GOLEM chega até você. Você pode:",
   botoes: [
      { texto: "Desembainhar a sua espada e lutar contra a criatura", destino: 303 },
      { texto: "Lançar um Encanto do Fogo", destino: 4 },
      { texto: "Lançar um Encanto de Cópia de Criatura", destino: 190 },
      { texto: "Deixar as caixas de lado e correr para a porta", destino: 237 }
   ]
};

var p99 = {
   titulo: "99",
   detalhes: "Você vai pela porta da esquerda (volte para 52) ou pela porta da direita (volte para 38)?",
   botoes: [
      { texto: "Porta da esquerda", destino: 52 },
      { texto: "Porta da direita", destino: 38 }
   ]
};

var p100 = {//feitico
   titulo: "100",
   detalhes: "Você tem um Encanto da Levitação? Se tiver, é melhor você usá-lo agora para flutuar para fora do poço. Se você levitar, poderá continuar pela muralha na direção do canto do pátio (volte para 79). Se não, vá para 276.",
   botoes: [
      { texto: "Usar Encanto da Levitação", destino: 79 },
      { texto: "Ir para 276", destino: 276 }
   ]
};

var p101 = {//batalha
   titulo: "101",
   detalhes: "Uma réplica da criatura se materializa entre vocês dois. A uma ordem sua, a batalha começa: <br><br>GÁRGULA          HABILIDADE 9        ENERGIA 10    <br><br> Se a sua criação vencer, volte para 62. Se o Gárgula que você criou perder, você resolve não enfrentar o Gárgula sozinho e sai do aposento, tentando a porta no meio da sacada. Volte para 64.",
   botoes: [
      { texto: "Continuar", destino: 62 },
      { texto: "Sair pela porta no meio da sacada", destino: 64 }
   ]
};
var p102 = {//mochuila
   titulo: "102",
   detalhes: "Eles simpatizam com o seu pedido. Três deles voltam-se na direção do outro e, com óbvia relutância, este último tira um amuleto que está em seu pescoço. 'Isso', ele diz, 'é um Amuleto Encantado. É feito de metal, mas há uma Jóia de Luz incrustada nele. Os Ganjees temem este talismã, mas sem dúvida tentarão enganar você para que o perca. Ele tem sido por algum tempo uma propriedade da qual me orgulho, mas nós, Escoteiros, somos obrigados por nossos deuses a ajudar, por isso eu o dou a você.' Você lhe agradece e coloca o Amuleto Encantado em seu pescoço. Você pode agora sair do aposento, mas talvez se sinta na obrigação, por causa deste grande presente, de dar a ele alguma coisa em troca. Se você tiver Peças de Ouro, resolva quantas você dará a ele, retire-as da sua lista e vá para 183. Se você não tiver ouro, mas der a ele um artefato que tiver recolhido, risque isso da sua lista e vá para 396. Se você não puder ou não quiser dar a ele um presente em troca, vá para 270.",
   botoes: [
      { texto: "Dar Peças de Ouro", destino: 183 },
      { texto: "Dar artefato", destino: 396 },
      { texto: "Não dar presente", destino: 270 }
   ]
};

var p103 = {//possivel fim
   titulo: "103",
   detalhes: "Você lança o seu Encanto - mas nada acontece! Você continua caindo torre abaixo e finalmente se estatela em uma queda fatal no chão lá embaixo. As horríveis criaturas roubaram sua mágica, e agora também sua vida. Você fracassou na sua missão.",
   botoes: [
      { texto: "fim", destino: null },]
};

var p104 = {
   titulo: "104",
   detalhes: "Você experimenta a maçaneta, e ela gira. A porta está empenada, e você tem que empurrá-la para que abra. O aposento no interior é algum tipo de sala de estar, com mesas, cadeiras, estantes e uma coleção de cabeças de animais empalhados na parede. De repente, uma das cabeças de animais se vira e olha para você. É alguma espécie de cachorro e late alto, em tom de advertência, tanto para você quanto para qualquer um de seus semelhantes que possa estar suficientemente próximo. Enquanto você está olhando para a cabeça, não vê um tapete que levanta vôo do chão e passa zunindo por você, raspando no seu ouvido. Você se vira rapidamente e vê uma das cadeiras lentamente se reconstituir na forma de um homem alto. 'O que você veio fazer aqui?', ele pergunta, com voz retumbante. Você:",
   botoes: [
      { texto: "Tentará falar com ele?", destino: 266 },
      { texto: "Usará um de seus Encantos?", destino: 310 },
      { texto: "Procurará em sua mochila uma arma ou um presente?", destino: 54 },
      { texto: "Sairá do aposento rapidamente e experimentará a outra porta?", destino: 25 }
   ]
};

var p105 = {//mochila
   titulo: "105",
   detalhes: "O vinho é bastante amargo e, ao saboreá-lo em sua boca, você sente uma sensação de ardência. Você cospe o vinho no chão e, para sua surpresa, um jato de chamas irrompe dos seus lábios! Você pode levar uma amostra do vinho com você e usá-lo ao invés de lançar um Encanto do Fogo, sempre que a opção de Encanto do Fogo for dada. Você segue adiante na direção de uma porta que leva mais para o interior da adega. Volte para 95.",
   botoes: [{ texto: "Continuar", destino: 95 }]
};
var p106 = {
   titulo: "106",
   detalhes: "Ela ri outra vez e diz a você que gosta de ver pessoas ficarem zangadas. De bom humor, ela acompanha você por alguns metros. A conversa é difícil. Ela vê alguma coisa nas sombras distantes e sai subitamente para investigar, permitindo que você avance para a entrada principal da Cidadela. Vá para 218.",
   botoes: [{ texto: "Continuar", destino: 218 }]
};

var p107 = {
   titulo: "107",
   detalhes: "Você pegou uma, duas, três ou quatro cabeças no seu laço. Estas cabeças lutam para se libertar, mas a criatura continua a avançar. Você começa a entrar em pânico, enquanto tenta decidir o que fazer em seguida. Vá para 184.",
   botoes: [{ texto: "Continuar", destino: 184 }]
};

var p108 = {
   titulo: "108",
   detalhes: "Você agarra a corda firmemente, recua e toma impulso na direção do rio pútrido. Subitamente, a corda passa a se movimentar e se contorcer com vontade própria! Você a larga rapidamente e cai no chão. A corda cai por cima de você e se enrola em volta de você. Você compreende que não é uma corda, mas, na realidade, uma longa COBRA DE ESGOTO, que se enrosca em torno do seu corpo e de seu pescoço. Volte para 73.",
   botoes: [{ texto: "Continuar", destino: 73 }]
};

var p109 = {
   titulo: "109",
   detalhes: "A criatura faz força contra a barreira de seu Encanto do Escudo. Para seu horror, ela é tão forte que realmente consegue romper o escudo! Está agora em cima de você, e você tem que desembainhar a sua espada. Volte para 30.",
   botoes: [{ texto: "Continuar", destino: 30 }]
};

var p110 = {//sorte
   titulo: "110",
   detalhes: "Teste a sua Sorte. Se tiver sorte, você escolhe outro nome que é conhecido deles e eles chamam o porteiro, que acaba aparecendo para deixar você entrar (vá para 251). Se não tiver sorte, fez outra tentativa errada, e eles avançam na sua direção com suas armas prontas. Você terá que lutar contra eles (vá para 288).",
   botoes: [
      { texto: "Tive Sorte", destino: 251 },
      { texto: "Lutar contra eles", destino: 288 }
   ]
};

var p111 = {//mochila
   titulo: "111",
   detalhes: "Você conseguiu desviar os olhos da criatura e agora recua para o canto, protegendo o rosto com o braço. Mas o que você pode fazer? Se tiver um Espelho de Prata Polida, poderá tirá-lo de sua mochila e segurá-lo na direção do feiticeiro (vá para 347). Se não tiver, vá para 153.",
   botoes: [
      { texto: "Usar Espelho de Prata Polida", destino: 347 },
      { texto: "Continuar", destino: 153 }
   ]
};

var p112 = {
   titulo: "112",
   detalhes: "Você se desvencilha da Cobra de Esgoto morta e tenta atravessar a água. Você chega do outro lado sem maiores incidentes, mas está com certeza ansioso para tomar um banho rápido! Você continua ao longo da passagem até chegar a uma encruzilhada, onde pode seguir em frente ou tomar a passagem da esquerda. Se for para a esquerda, vá para 212. Se quiser seguir em frente, vá para 367.",
   botoes: [
      { texto: "Seguir em frente", destino: 367 },
      { texto: "Tomar a passagem da esquerda", destino: 212 }
   ]
};

var p113 = {
   titulo: "113",
   detalhes: "Você lança o Encanto da Fraqueza sobre o feiticeiro. Ele interrompe seus passos e olha para você. Sua expressão se transforma em uma máscara de dor, e seus ombros sacodem violentamente. Algum tipo de comoção interna terrível está tendo lugar dentro dele. Você quer esperar para ver o que acontece (vá para 388) ou prefere desembainhar a sua espada e avançar (vá para 145)?",
   botoes: [
      { texto: "Esperar", destino: 388 },
      { texto: "Avançar com a espada", destino: 145 }
   ]
};

var p114 = {
   titulo: "114",
   detalhes: "Você aponta para a base do tentáculo e lança o seu encanto. Um rolo de fumaça e um clarão luminoso irrompem do buraco no solo. Um tremor percorre o tentáculo e, felizmente, ele afrouxa. Quando ele retorna para dentro do solo, você esfrega sua perna para recuperar a circulação e depois parte na direção da entrada principal da Cidadela novamente. Lembre-se de descontar seu Encanto do Fogo e vá para 218.",
   botoes: [{ texto: "Continuar", destino: 218 }]
};

var p115 = {
   titulo: "115",
   detalhes: "A sua situação não é boa. Balthus Dire avança na sua direção e está quase em cima de você. Vá para 373.",
   botoes: [{ texto: "Continuar", destino: 373 }]
};

var p116 = {
   titulo: "116",
   detalhes: "Suas mãos super poderosas agarram a maçaneta e puxam. Ela sai na sua mão. Você fecha a mão e desfere um soco no meio da porta. A madeira racha e quebra, permitindo que você entre no aposento do outro lado. Vá para 210.",
   botoes: [{ texto: "Continuar", destino: 210 }]
};

var p117 = {
   titulo: "117",
   detalhes: "Quando você puxa a sua arma, o feiticeiro faz o mesmo. Vocês estão agora próximos demais para que qualquer um dos dois possa usar mágica e terão que terminar a batalha na luta de espadas mais difícil de toda a sua vida. Vá para 337.",
   botoes: [{ texto: "Continuar", destino: 337 }]
};

var p118 = {
   titulo: "118",
   detalhes: "A porta abre e uma criatura grande e abrutalhada sai. Possui um chifre pontudo no meio da testa, e sua pele parece ser recoberta de armadura. Rosna para saber o que você quer e exige a senha antes de deixar que você entre. Você sabe a senha? Se souber, vá para 273. Se não, você terá que forçar a sua entrada (vá para 198).",
   botoes: [
      { texto: "Sei a senha", destino: 273 },
      { texto: "Forçar a entrada", destino: 198 }
   ]
};

var p119 = {//possivel Fim
   titulo: "119",
   detalhes: "Você se vira para enfrentar o poderoso feiticeiro. Mas ele desapareceu. Você gira sobre os calcanhares e o vê de pé atrás de você com um punhal afiado pronto para golpear. Você tenta saltar para esquivar-se, mas é tarde demais. A lâmina se enterra nas suas costas... Você falhou na sua missão.",
   botoes: [{ texto: "Fim", destino: null }]
};
var p120 = {//energia e sorte
   titulo: "120",
   detalhes: "Você prova o vinho e balança a cabeça afirmativamente. A safra é excelente de fato, com um sabor revigorante e rico. Você experimenta um pouco mais e começa a se sentir com a cabeça leve. Você pode acrescentar dois pontos de ENERGIA e três pontos de SORTE por ter encontrado uma bebida excelente a esse ponto. Você agradece ao Elfo e segue adiante.",
   botoes: [
      { texto: "Continuar", destino: 95 }
   ]
};

var p121 = {//energia
   titulo: "121",
   detalhes: "Quando você parte para a porta, ela abre repentinamente à sua frente. Impossibilitado de travar seu impulso, você entra pelo aposento de cabeça e acaba tropeçando e rolando pelo chão até parar. Você perde um ponto de ENERGIA por ter arranhado o seu joelho no chão de pedra.",
   botoes: [
      { texto: "Continuar", destino: 257 }
   ]
};

var p122 = {
   titulo: "122",
   detalhes: "Você tenta um ardil simples, mas ela não se deixa enganar por ele. Ela não permitirá que você siga adiante, a não ser que você use sua magia.",
   botoes: [
      { texto: "Continuar", destino: 47 }
   ]
};

var p123 = {
   titulo: "123",
   detalhes: "Você se concentra, e imagens do Calacorm atravessam a sua mente. Você vê um prato cheio de serpentes mortas, depois uma criatura de aparência semelhante com pele cinzenta - possivelmente a fêmea de sua espécie – depois sente uma grande sensação de prazer ao ver uma infeliz criatura amarrada à parede e tendo seus pés queimados por uma tocha incandescente. Em seguida, você vê o prato de serpentes de novo. Esta criatura evidentemente pensa sobre pouca coisa além dos prazeres simples de sua vida miserável, e você não saberá muito sobre como escapar. É melhor você tentar um Encanto do Ouro dos Tolos (vá para 211) ou um Encanto da Ilusão (volte para 35). Se não tiver nenhum deles, vá para 283.",
   botoes: [
      { texto: "Encanto do Ouro dos Tolos", destino: 211 },
      { texto: "Encanto da Ilusão", destino: 35 },
      {
         texto: "Nenhum dos Encantos", destino: 283
      }]
};

var p124 = {
   titulo: "124",
   detalhes: "Quando a cortina cai, a luz do dia penetra através da janela. Você compreende que perdeu toda a noção de tempo desde que entrou na Cidadela. O sol é um alívio bendito depois das muitas horas que passou na escuridão. Um baque faz com que se volte na direção de seu adversário. Ele está caído como um fardo no chão. Você dá um passo à frente, e ele solta um grito de gelar o sangue nas veias! 'A cortina! ... Seu idiota!'... ele diz, ofegante, com uma voz que evidencia fraqueza e a proximidade da morte. É óbvio que a luz do dia que você deixou entrar está minando suas forças rapidamente, e ele tenta em desespero se arrastar até as sombras. Mas está fraco demais para ir longe, e desaba no chão de bruços.",
   botoes: [
      { texto: "Continuar", destino: 400 }
   ]
};

var p125 = {//energia
   titulo: "125",
   detalhes: "Quando você começa a correr, três flechas partem na sua direção, vindas de nenhum lugar. Teste a sua Sorte. Se tiver sorte, todas elas erram o alvo, e você chega até o monumento e se abaixa atrás da pedra. Se não tiver sorte, uma das flechas penetra em seu ombro, fazendo com que você perca cinco pontos de ENERGIA antes de chegar ao abrigo do monumento.",
   botoes: [{
      texto: "Continuar", destino: 209
   }]
};

var p126 = {
   titulo: "126",
   detalhes: "Você pára para considerar a situação, em pânico. À sua frente, a passagem se bifurca para a esquerda e para a direita. Enquanto você está tentando decidir que direção tomar, três criaturas surgem da passagem do lado esquerdo. Chamar os ruídos que você ouviu de 'passos' não é inteiramente preciso, como você verá. Vá para 316.",
   botoes: [
      { texto: "Continuar", destino: 316 }]
};

var p127 = {//feitico mochila
   titulo: "127",
   detalhes: "Ela levanta a cabeça e solta um chamado no ar. Você interrompe seus passos ao ver as roupas lavadas no varal sacudirem-se no ar. Saindo do varal por si mesmas, diversas peças de roupa deslocam-se pelo ar na sua direção e, ao chegarem perto, você consegue distinguir corpos fantasmagóricos com rostos há muito já mortos dentro das roupas. 'Protejam-me, meus filhos!' ela grita - e de repente as roupas cercam você. Algumas atacam com pancadas de suas mangas, que causam uma ardência dolorosas. Um par de braços se enrosca em torno de seu pescoço, tornando a respiração difícil e apertando cada vez mais. Você distribui golpes com sua espada, mas isso causa pouco dano aos FANTASMAS. O aperto o estrangula cada vez mais, e você terá que usar a sua magia para se libertar, a não ser que tenha alguma coisa em sua mochila para oferecer à mulher. Você:",
   botoes: [
      { texto: "Oferecerá algumas Pequenas amoras a ela?", destino: 53 },
      { texto: "Oferecerá um Espelho de Prata a ela?", destino: 387 },
      { texto: "Usará um Encanto do Fogo?", destino: 240 },
      { texto: "Não tenho nenhum", destino: 194 }]
};

var p128 = {//encanto
   titulo: "128",
   detalhes: "À medida em que o Encanto começa a ter efeito, você recebe vários pensamentos, conforme eles vão passando pela mente da criatura. Além de um sentimento de medo de que seu capitão possa descobrir que ele estava dormindo em seu posto e permitiu que um invasor entrasse, há uma estranha reverência por uma Escova de Cabelo entalhada, a qual aparentemente está em algum lugar do aposento. Mas isso é tudo que você recebe, e você terá agora que se defender de seu ataque com alguma coisa.",
   botoes: [
      { texto: "Sua espada?", destino: 336 },
      { texto: "Um Encanto do Ouro dos Tolos?", destino: 36 },
      { texto: "Um Encanto de Cópia de Criatura?", destino: 262 },
      { texto: "Um Encanto da Fraqueza?", destino: 152 }
   ]
};

var p129 = {//habilidade
   titulo: "129",
   detalhes: "Você luta com a caixa por algum tempo, tentando abri-la. Você puxa da espada e golpeia a caixa, mas a única coisa que consegue é fazer sua espada perder o fio - de agora em diante, você terá que descontar um ponto de seu índice de HABILIDADE. Você não consegue abrir a caixa.",
   botoes: [
      { texto: "Tentará abrir a primeira caixa?", destino: 260 },
      { texto: "Tentará abrir a terceira caixa?", destino: 370 },
      { texto: "Deixará as caixas de lado e seguirá em frente?", destino: 237 }
   ]
};
var p130 = {
   titulo: "130",
   detalhes: "O encanto não tem qualquer efeito. Risque-o da sua lista e desembainhe a sua espada. Vá para 333.",
   botoes: [
      { texto: "Continuar", destino: 333 }]
};

var p131 = {
   titulo: "131",
   detalhes: "Você rapidamente desembainha a sua espada, apontando-a na direção do Duende. Ele lança um olhar para a lâmina e, para seu horror, ela verga molemente a partir do cabo, pendendo para baixo como se fosse um cinto de couro. Parece que você não irá muito longe agindo com agressividade. Talvez seja melhor você perguntar a ele o caminho para seguir adiante. Vá para 348.",
   botoes: [
      { texto: "Continuar", destino: 348 }]
};

var p132 = {
   titulo: "132",
   detalhes: "Você entra em um aposento que é evidentemente algum tipo de biblioteca. Há livro do chão até o teto em cada uma das paredes, e diversas mesas e cadeiras estão alinhadas no centro do aposento. Do outro lado, há um homem de pele escura sentado, que levanta os olhos de um livro para olhar para você por cima de óculos estreitos. Há uma porta atrás dele. 'Sim, o que é?' ele diz. 'Que livro você está procurando?' Você examina as várias estantes, que possuem legendas. Você pedirá a ele:",
   botoes: [
      { texto: "Biografias de Balthus Dire?", destino: 18 },
      { texto: "Segredos da Torre Negra?", destino: 238 },
      { texto: "Criaturas do Reino da Rocha Escarpada?", destino: 375 }
   ]
};

var p133 = {//sorte
   titulo: "133",
   detalhes: "Você lança seu Encanto. Com sua força recentemente adquirida, você salta facilmente para o centro do aposento por cima do fosso e rompe a fechadura da arca. Você xinga ao ver que não há nada lá dentro, a não ser uma boa quantidade de chumbo para espingarda. Você salta, de volta rapidamente por cima do fosso na direção da outra porta, uma vez que o encanto está se acabando. Teste a sua Sorte. Se você tiver sorte, vá para 206. Se não tiver, volte para 82.",
   botoes: [
      { texto: "Tive sorte", destino: 206 },
      { texto: "Não tive sorte", destino: 82 }]
};

var p134 = {
   titulo: "134",
   detalhes: "Eles ficam admirados com sua audácia. Ao invés de esperar que eles falem, você age agressivamente e exige saber como entrar na Cidadela. Eles apontam para a entrada principal, obviamente um tanto espantados com seus modos confiantes, e cochicham entre eles. O Orca diz a você que será preciso uma senha, 'Cimitarra', para entrar. Você pergunta a respeito do frasco de líquido dentro da caixa, o que faz com que eles fiquem agitados. Você os pressionará mais para obter maiores informações sobre o frasco (volte para 60), vai deixá-los de lado para ir na direção dos dois homens que você viu antes (vá para 269) ou seguirá adiante na direção da Torre Negra (vá para 245)?",
   botoes: [
      { texto: "Pressionar por informações sobre o frasco", destino: 60 },
      { texto: "Ir na direção dos dois homens", destino: 269 },
      { texto: "Seguir adiante na direção da Torre Negra", destino: 245 }
   ]
};

var p135 = {
   titulo: "135",
   detalhes: "Os Miks são mestres da ilusão, capazes de se transformarem em qualquer forma ou ser que quiserem. Não se sabe ao certo qual é a sua verdadeira natureza, pois muito poucos os viram em sua forma natural, mas eles foram descritos por fontes bastante confiáveis como criaturas magras com aparência de Elfos. São uma espécie agressiva, mas sua arma favorita é o Punhal-Agulha (uma faca fina, como um estilete), como qual eles só podem atacar a curta distância. Embora eles possam se transformar em qualquer coisa - homem, animal ou objeto - não são capazes de usar metais em seus disfarces. Eles também são incapazes de lançar suas ilusões sobre outros objetos. Vá para 326.",
   botoes: [
      { texto: "Continuar", destino: 326 }]
};

var p136 = {
   titulo: "136",
   detalhes: "Todas elas protestam veementemente, mas você explica que tem suas ordens e começa a circular pela cozinha.",
   botoes: [
      { texto: "Investigar os armários", destino: 17 },
      { texto: "Investigar o caldo no caldeirão", destino: 167 },
      { texto: "Investigar o espeto que está assando", destino: 389 }
   ]
};

var p137 = {//encanto
   titulo: "137",
   detalhes: "O homem é velho e foi atingido na cabeça por algum tipo de porrete. Ele pede remédio, mas você não tem nenhum. Você poderia usar um Encanto da Energia para recuperá-lo, e ele se oferece para ajudá-lo se você o fizer. Se você usar a sua magia, vá para 383. Se não, terá que deixá-lo e continuar ao longo da muralha (volte para 14).",
   botoes: [
      { texto: "Usar Encanto da Energia", destino: 383 },
      { texto: "Deixá-lo e continuar ao longo da muralha", destino: 14 }
   ]
};

var p138 = {//encanto
   titulo: "138",
   detalhes: "\"Para que eu quero isso?\" ela exclama. Mais uma vez, seus olhos ficam vermelhos e os jatos de fogo são disparados na sua direção. Você lançará um Encanto do Escudo (vá para 376) ou deixará o aposento e se encaminhará pelo corredor para o aposento do meio (volte para 64)?",
   botoes: [
      { texto: "Lançar Encanto do Escudo", destino: 376 },
      { texto: "Deixar o aposento e ir para o corredor", destino: 64 }
   ]
};

var p139 = {//encanto
   titulo: "139",
   detalhes: "Todas as três facas erram e se cravam profundamente na porta atrás de você. Os Giras estão quase em cima de você, e é preciso decidir se você vai lutar contra eles (vá para 346) ou lançará um Encanto. Você poderá lançar:",
   botoes: [
      { texto: "Encanto da Ilusão", destino: 244 },
      { texto: "Encanto do Fogo", destino: 28 }
   ]
};

var p140 = {
   titulo: "140",
   detalhes: "Você sai do aposento e segue por um corredor curto. Alguns metros adiante, você se encontra ao pé de uma escada. É uma escada em espiral que leva diretamente ao interior da Torre da Cidadela. Você sobe os degraus cautelosamente e acaba chegando em uma pequena plataforma com duas portas à sua frente. Você irá pela porta da esquerda (volte para 25) ou pela porta da direita (volte para 104)?",
   botoes: [
      { texto: "Pela porta da esquerda", destino: 25 },
      { texto: "Pela porta da direita", destino: 104 }
   ]
};

var p141 = {
   titulo: "141",
   detalhes: "O líquido tem um gosto salgado, e você começa a suar frio quando engole. Em seguida, você tem tremores e tenta se aprumar no altar. Porém, você cai para frente, derrubando os outros dois cálices no chão e derramando os outros líquidos. Você também acaba caindo no chão, sentindo-se extremamente mal e com os olhos turvos. Como em um sonho, você tem uma visão de uma estranha criatura musculosa com duas cabeças, uma cauda comprida e uma pele de escamas cinzentas. Tem nas mãos um grande molho de chaves. Um rato atravessa a mesa em que ela está sentada e ela grita alto... O grito acorda você com um sobressalto e você toma consciência de onde está. Você reúne suas forças e tateia em busca da maçaneta da porta - você precisa de ar fresco! Você sai da câmara, descansa alguns momentos e parte na direção da Cidadela. (Continuar 156.)",
   botoes: [
      { texto: "Continuar", destino: 156 }
   ]
};

var p142 = {
   titulo: "142",
   detalhes: "Você experimenta a maçaneta, e ela gira. Você não consegue ouvir nada vindo do interior do aposento, por isso você abre a porta para dar uma olhada. O aposento é pequeno, com um castiçal dourado em cima de uma mesa... mas, de repente, você ouve um rangido vindo do assoalho! Tarde demais, você compreende que as pedras sob os seus pés estão se mexendo para revelar um alçapão! Você cai primeiro em um poço. Quando atinge o fundo, você rola para o lado, descendo outra passagem, e continua rolando para baixo. Por mais que você tente, não consegue impedir que você role sem parar, até que acaba por chegar a uma pequena câmara, onde finalmente pára. Mas o choque foi demais para você. Enquanto o mundo escurece à sua volta, você ouve uma tagarelice excitada, e depois desmaia. Vá para 234.",
   botoes: [
      { texto: "Continuar", destino: 234 }
   ]
};

var p143 = {//encanto
   titulo: "143",
   detalhes: "Você se concentra e lança seu Encanto. Aparece um tronco de Hidra, mas apenas isso. A criatura é tão grande que um único Encanto não basta para criar uma réplica. Se tiver outro Encanto de Cópia de Criatura, você poderá usá-lo (vá para 360), do contrário poderá procurar em sua mochila alguma coisa que possa utilizar (vá para 226). Se você não puder ou não quiser fazer nenhuma dessas duas coisas, vá para 184.",
   botoes: [
      { texto: "Usar outro Encanto de Cópia de Criatura", destino: 360 },
      { texto: "Procurar algo na mochila", destino: 226 },
      { texto: "Não fazer nada", destino: 184 }
   ]
};

var p144 = {
   titulo: "144",
   detalhes: "A porta abre e você entra em um corredor estreito. Você segue por ele algum tempo, até que finalmente chega a uma outra porta: desta vez é uma porta larga entalhada, com a inscrição 'Adega de Vinhos' gravada nela. Você experimenta a maçaneta e ela abre. Você espia do lado de dentro, esticando o pescoço, e vê filas e mais filas de prateleiras cheias de garrafas contendo... vinho? O aposento é pouco iluminado pela luz de várias velas. O fato de você abrir a porta fez com que uma pequena sineta soasse, e uma figura vem se arrastando na sua direção por um dos corredores. Você desembainhará a sua espada e se preparará para se defender (vá para 154) ou verá o que este sujeito pode ter a dizer (volte para 56)?",
   botoes: [
      { texto: "Se preparar para se defender", destino: 154 },
      { texto: "Ver o que o sujeito tem a dizer", destino: 56 }
   ]
};

var p145 = {
   titulo: "145",
   detalhes: "Você desembainha a sua espada e salta por cima da mesa sobre ele. Ele, enquanto isso, está evidentemente lutando para resistir ao seu Encanto da Fraqueza... ou não? Ele esconde a cabeça nas mãos e desvia o rosto de você. Volte para 80.",
   botoes: [
      { texto: "Continuar", destino: 80 }
   ]
};

var p146 = {
   titulo: "146",
   detalhes: "Você pode pedir um favor a eles. Você Perguntará?",
   botoes: [
      { texto: "Como derrotar Balthus Dire", destino: 247 },
      { texto: "Para onde dá a porta à frente", destino: 201 },
      { texto: "Como evitar os Ganjees", destino: 102 },
      { texto: "Dizer que está fatigado - pedir ajuda", destino: 66 }
   ]
};

var p147 = {
   titulo: "147",
   detalhes: "O Golem desaba no chão e se parte em pedaços. Aliviado, você anda até as caixas e as examina. Você tentará abrir:",
   botoes: [
      { texto: "Abrir a primeira caixa", destino: 260 },
      { texto: "Abrir a segunda caixa", destino: 129 },
      { texto: "Abrir a terceira caixa", destino: 370 }
   ]
};

var p148 = {//Possivel fim
   titulo: "148",
   detalhes: "O feiticeiro rosna com desprezo. 'Então você pode culpar essa mesma gente da terra, que enviou você com essa tarefa, pela sua morte!' Com estas palavras, ele puxa um punhal afiado do cinto e o crava em seu peito. Você falhou na sua empreitada.",
   botoes: [
      { texto: "Fim", destino: null }
   ]
};

var p149 = {
   titulo: "149",
   detalhes: "Eles não estão interessados em sua companhia e sugerem que você siga o seu caminho. Você pode prosseguir na direção da Torre (vá para 245), virar para a esquerda, a fim de investigar o monumento no centro do pátio (vá para 209) ou sentar-se ao fogo de qualquer maneira (vá para 380)",
   botoes: [
      { texto: "Ir para a Torre", destino: 245 },
      { texto: "Investigar o monumento", destino: 209 },
      { texto: "Sentar-se ao fogo", destino: 380 }
   ]
};

var p150 = {//energia
   titulo: "150",
   detalhes: "Você se abaixa rapidamente para se esquivar do Tridente. Não acerta o seu pescoço, mas raspa na sua testa. Você perde dois pontos de ENERGIA e vai para 374.",
   botoes: [
      { texto: "Continuar", destino: 374 }
   ]
};

var p151 = {//energia
   titulo: "151",
   detalhes: "Os conjuntos de armaduras são de vários tamanhos e formatos, e você fica arrepiado de pensar nas criaturas estranhas para as quais eles devem ter sido feitos; talvez você ainda encontre algumas delas. Ao examinar um conjunto particularmente suntuoso, a manopla dele subitamente se ergue e bate forte em seu rosto! Você cambaleia para trás, cuspindo sangue. Você perde dois pontos de ENERGIA. Mas a armadura não se mexe mais, e você resolve que pode ser prudente continuar subindo, seja pela escada do lado esquerdo (volte para 19) ou pela escada do lado direito (vá para 197).",
   botoes: [
      { texto: "Subir pela escada do lado esquerdo", destino: 19 },
      { texto: "Subir pela escada do lado direito", destino: 197 }
   ]
};

var p152 = {
   titulo: "152",
   detalhes: "Você lança seu Encanto, e a criatura interrompe seus passos, sem entender o que aconteceu com ela. Com algum esforço, ela apanha seu machado e vem na sua direção, mas evidentemente não é um adversário tão forte quanto era antes. Você desembainha a sua espada para liquidar o Gark.\n\nGARK    HABILIDADE 5    ENERGIA 5\n\nSe você derrotar a criatura, vá para 180.",
   botoes: [
      { texto: "Continuar", destino: 180 }
   ]
};

var p153 = {//possivel fim
   titulo: "153",
   detalhes: "Você está indefeso diante da Górgona. Você tomba sem ação no canto, enquanto o feiticeiro convoca seus guardas, que aparecem alguns minutos depois. Eles pegam você e carregam para fora do aposento. O chefe deles pede instruções ao feiticeiro. 'Execute o camponês!' é sua resposta.\n\nVocê fracassou na sua missão.",
   botoes: [
      { texto: "Fim", destino: null }
   ]
};

var p154 = {
   titulo: "154",
   detalhes: "Quando você puxa a espada, a figura pára e pega alguma coisa da bolsa em sua cintura. Quando ele se aproxima mais, você pode ver que a criatura é um ELFO NEGRO; alto e magro, com orelhas em forma de ponta de flecha e uma perna aleijada. Na sua mão, ele traz um pequeno mecanismo de algum tipo. Ele vê você, manipula o mecanismo que subitamente se torna uma espada tipo estilete na sua mão! Você avançará e lutará (vá para 275) ou abaixará a espada e conversará com ele (volte para 56)?",
   botoes: [
      { texto: "Avançar e lutar", destino: 275 },
      { texto: "Abaixar a espada e conversar", destino: 56 }
   ]
};

var p155 = {
   titulo: "155",
   detalhes: "Sua mão vai até o cabo da espada. Você desembainha a lâmina. Mas não golpeia o feiticeiro. Sua própria vontade impõe que você ofereça a sua arma a ele, o que você faz. Ele aceita. Volte para 65.",
   botoes: [
      { texto: "Continuar", destino: 65 }
   ]
};

var p156 = {//feitico
   titulo: "156",
   detalhes: "Enquanto você caminha pelo pátio ao ar livre, repara que está andando ao longo de uma pequena elevação, quase que como um encanamento enterrado que fosse da Torre Negra para o templo. Você se abaixa para investigar isso; poderia ter sido feito por algum tipo de toupeira? Quando você toca na elevação, ela se retrai e, para seu horror, um longo tentáculo cinzento irrompe do solo e se enrosca em torno de sua perna! Como você lutará contra esta 'coisa'':\n\nDesembainhará a sua espada?    Volte para 71\nLançará um Encanto da Levitação?    Vá para 284\nLançará um Encanto do Fogo?    Volte para 114",
   botoes: [
      { texto: "Desembainhar a espada", destino: 71 },
      { texto: "Lançar Encanto da Levitação", destino: 284 },
      { texto: "Lançar Encanto do Fogo", destino: 114 }
   ]
};

var p157 = {
   titulo: "157",
   detalhes: "O feiticeiro grita de agonia e desvia o rosto de você, segurando a cabeça. Você se precipita para a frente, e ele se volta para enfrentar você. Você perde o ar! Ele já não é mais o feiticeiro, mas transformou-se em uma velha de rosto cruel e pele enrugada. O cabelo dele - ou melhor, dela - é agora uma massa coleante de serpentes que soltam silvos! Você insistirá no ataque (vá para 199) ou baterá em retirada rapidamente (vá para 232)?",
   botoes: [
      { texto: "Insistir no ataque", destino: 199 },
      { texto: "Bater em retirada", destino: 232 }
   ]
};

var p158 = {
   titulo: "158",
   detalhes: "A fera geme quando o encanto faz efeito. O peso imenso é de fato um fardo sem sua força normal. Ela desaba sem energia, incapaz até mesmo de se levantar do chão. Você caminha até ela e enterra a espada em seu peito. A infeliz criatura jaz morta a seus pés. Volte para 77.",
   botoes: [
      { texto: "Continuar", destino: 77 }
   ]
};

var p159 = {
   titulo: "159",
   detalhes: "Você lança seu Feitiço da Fraqueza e deixa transcorrer um tempo na esperança de que a força da criatura diminua. Mas, como seus dentes continuam a ferir você, você fica desalentado ao descobrir que o ataque da criatura está cada vez mais feroz. Você já não consegue sentir a perna. A dor é intensa. Você se sente fraco e perde a consciência quando as mandíbulas se fecham na sua garganta. Vá para 323.",
   botoes: [
      { texto: "Continuar", destino: 323 }
   ]
};

var p160 = {
   titulo: "160",
   detalhes: "A Cabeça de Cachorro voa na sua direção e arranca o engenho de sua mão. Ao examiná-lo, as outras duas criaturas parecem fascinadas. Enquanto eles estão ocupados com isso, você pode atravessar furtivamente o aposento na direção da porta no outro canto. Vá para 206.",
   botoes: [
      { texto: "Continuar", destino: 206 }
   ]
};

var p161 = {
   titulo: "161",
   detalhes: "Ela fica profundamente ofendida com sua indiferença. O Redemoinho se ergue mais uma vez, e agora ela joga você no chão. Você tenta engatinhar para longe, mas ela se coloca bem na sua frente, seja qual for a direção que você tome. Você terá que tentar enganá-la com astúcia, mas como começará?\n\nTornando sua raiva evidente para ela?    Volte para 106\nConversando com ela para tentar acalmá-la?    Vá para 390",
   botoes: [
      { texto: "Tornar raiva evidente", destino: 106 },
      { texto: "Conversar para acalmá-la", destino: 390 }
   ]
};

var p162 = {//batalha
   titulo: "162",
   detalhes: "Você sente o poder se espalhando pelo seu corpo. As criaturas vêem seus músculos proeminentes se endurecem diante de seus olhos e ficam imóveis. Sua mão agarra o cabo da espada e você puxa a lâmina com decisão. Mas, para seu desespero, sua nova força é difícil de controlar, e seu primeiro golpe com a espada faz com que a arma saia voando pelo ar e caia a vários metros de distância! Você agora terá que enfrentá-los de mãos nuas, ou poderá usar sua nova força para saltar para longe pela encosta da colina. Se você quiser lutar, os índices das criaturas são (lute com elas uma de cada vez):\n\nHABILIDADE    ENERGIA\nMACACO-CACHORRO    7    4\nCACHORRO-MACACO    6    6\n\nLide com seus índices normalmente. Você pode realmente ter uma superforça, mas está desarmado. Se vencer, poderá recuperar a sua espada. Sua força retornará ao normal. Volte para 32. Se quiser escapar, faça isso e comece de novo no dia seguinte à noite. Qualquer que seja a sua escolha, não se esqueça de anular o Encanto da Força que acabou de usar.",
   botoes: [
      { texto: "Venci a luta", destino: 32 },]
};

var p163 = {//habilidade
   titulo: "163",
   detalhes: "Você dá um gole e engasga. Esse vinho é horrível! O Elfo está olhando para você com expectativa, e você não deve insultá-lo, por isso você toma mais um gole, fazendo caretas enquanto o líquido desce. Você agradece muito a ele, mas explica rapidamente que precisa ir voltando. Você parte na direção do outro lado do aposento, mas seu estômago não consegue aguentar mais o sabor detestável. Você fica terrivelmente enjoado ao sair. Perde um ponto de HABILIDADE e dois pontos de ENERGIA pela sua náusea. Volte para 95.",
   botoes: [
      { texto: "Continuar", destino: 95 }
   ]
};
var p164 = {//possivel fim
   titulo: "164",
   detalhes: "A porta é de metal sólido, e não há quantidade de pancadas, mesmo com um Encanto da Força, que a faça sair do lugar. Você cai de joelhos. Depois de chegar tão longe, fracassou na sua missão. Impossibilitado de continuar, você terá que tentar de novo; desta vez procurando pela combinação no caminho de vinda. Você pode usar um Encanto da Levitação, se tiver, para levá-lo para fora da Cidadela. Terá que tentar de novo amanhã à noite...",
   botoes: [
      { texto: "Continuar", destino: null }
   ]
};

var p165 = {//encanto
   titulo: "165",
   detalhes: "Quando você sente a força se espalhar pelo seu corpo desembainha a espada e crava na muralha terrosa. Dessa forma você faz um apoio para os pés, para depois utilizá-lo enquanto cava o próximo, assim consegue subir pelas paredes bem rapidamente com o aumento de força que recebeu. Na metade do caminho, contudo, sua força começa a diminuir, e você compreende que está retornando ao normal. Se você deixar que isso aconteça, cairá para trás dentro do poço mais uma vez. Você pode lançar outro Encanto da Força para dar a energia suficiente para completar a sua escada (vá para 398) ou gritar pedindo ajuda (vá para 202).",
   botoes: [
      { texto: "Lançar Encanto da Força", destino: 398 },
      { texto: "Gritar por ajuda", destino: 202 }
   ]
};

var p166 = {//batalha especial
   titulo: "166",
   detalhes: "Quando você morde a carne, ouve um ganido de dor bem baixo vindo de algum lugar distante. A carne está dura e salgada, mas o gosto não é tão ruim, por isso você dá mais uma dentada. Você ouve um grito mais uma vez, e dessa vez o pedaço de carne voa da sua mão! Quando você se abaixa para pegá-lo, ele resiste. Você se dá conta de que esta carne ainda está viva e grita quando você a come! Você sente uma pontada de dor no estômago, depois outra. As duas dentadas que você comeu estão tentando a todo custo sair do seu corpo! Você cai no chão, apertando a barriga.\nA carne fará três \"ataques\" ao seu estômago antes de ser digerida. Jogue dois dados três vezes. Cada vez que o número obtido for maior do que o seu índice de HABILIDADE, desconte dois pontos de ENERGIA. Se todos os três resultados forem superiores a seu índice de HABILIDADE, o dano causado será fatal, e sua aventura chegou ao fim. Se você sobreviver, poderá sair pela porta na parede do lado esquerdo (volte para 13) ou pela porta do lado oposto ao que você entrou (vá para 281).",
   botoes: [
      { texto: "Sair pelo lado esquerdo", destino: 13 },
      { texto: "Sair pela porta oposta", destino: 281 }
   ]
};

var p167 = {//sorte
   titulo: "167",
   detalhes: "Você se inclina sobre o caldo e cheira. Argh! É de embrulhar o estômago! Você pergunta a elas que diabo é aquilo e, ao levantar os olhos, você vê que uma delas está silenciosamente fazendo sinais na direção do caldo. Você tira a cabeça de perto rapidamente, mas já é tarde demais. Um grande PEIXE ABOCANHADOR salta do caldo e dá um bote com seus dentes afiados na direção da sua cabeça. Teste a sua Sorte. Se você tiver sorte, vá para 224. Se não tiver, vá para 331.",
   botoes: [
      { texto: "Tive sorte", destino: 224 },
      { texto: "Não tive sorte", destino: 331 }
   ]
};

var p168 = {
   titulo: "168",
   detalhes: "Você tira o Amuleto e o coloca em cima da cabeça. Os Ganjees ficam ofegantes! \"Siga viagem, estranho\", diz uma voz. \"Nós não o incomodaremos. Vá pela porta no canto mais distante.\" Com estas palavras, uma porta no canto do aposento cintila levemente. Você caminha até lá e abre a porta. Vá para 328.",
   botoes: [
      { texto: "Continuar", destino: 328 }
   ]
};
var p169 = {
   titulo: "169",
   detalhes: "O aposento em que você está é uma espécie de grande salão de jantar. Uma mesa longa, de tamanho suficiente para que quarenta ou cinquenta pessoas sentem, ocupa o centro, ladeada por cadeiras. Há várias portas e passagens que dão saída do aposento, mas você está particularmente interessado em duas escadarias largas que levam, uma por cada um dos lados, até uma sacada no alto de onde se pode observar o salão. Quadros e armaduras decoram as paredes. O aposento está vazio. Você:\n\nToma a escada do lado esquerdo e sobe? Volte para 19\nToma a escada do lado direito e sobe? Vá para 197\nInvestiga os quadros? Vá para 317\nInvestiga as armaduras? Volte para 151",
   botoes: [
      { texto: "Toma a escada do lado esquerdo e sobe", destino: 19 },
      { texto: "Toma a escada do lado direito e sobe", destino: 197 },
      { texto: "Investiga os quadros", destino: 317 },
      { texto: "Investiga as armaduras", destino: 151 }
   ]
};

var p170 = {//sorte
   titulo: "170",
   detalhes: "Quando a força surge no interior do seu corpo, você arranca na direção da porta com toda a energia. Jogue um dado. Se você obtiver 1, 2 ou 3 pontos, a porta não cede, e você terá que descontar 2 pontos de ENERGIA. Se você tirar 4, 5 ou 6 pontos, você derruba a porta (vá para 292). Repita este procedimento até ter êxito ou, se você preferir, tente a porta do meio (volte para 64), ou a porta mais distante (vá para 304).",
   botoes: [
      { texto: "Derrubei a porta", destino: 292 },
      { texto: "Tentar porta do meio", destino: 64 },
      { texto: "Tentar porta mais distante", destino: 304 }
   ]
};

var p171 = {//jogos especiais
   titulo: "171",
   detalhes: "Para este jogo, você precisará de pelo menos uma Peça de Ouro. Se não tiver nenhuma, poderá usar um Encanto do Ouro dos Tolos e levar o seu Ouro dos Tolos para o Mestre de Jogos, que dará a você dez Peças de Ouro por ele. (Se você não tiver nem Peças de Ouro, nem Encantos do Ouro dos Tolos, não poderá participar do jogo.) Escolha quaisquer números que quiser entre 1 e 6, e aposte qualquer quantidade de Peças de Ouro em cada um deles. Anote a(s) sua(s) escolha(s) e a(s) sua(s) aposta(s) em um papel. Depois jogue um dado. Se o número obtido for uma de suas escolhas, você ganha cinco vezes a aposta que fez naquele número. Você pode continuar por tanto tempo que quiser ou pode passar para outro jogo, como Faca-Faquinha (vá para 365) ou Pedras Mágicas (vá para 278). Se estiver enfastiado de entrar em jogos, volte para 31. Mas você terá que jogar pelo menos uma rodada de Escolha de Seis, se você tiver Peças de Ouro ou um Encanto do Ouro dos Tolos, antes de prosseguir.",
   botoes: [
      { texto: "Jogar Faca-Faquinha", destino: 365 },
      { texto: "Jogar Pedras Mágicas ", destino: 278 },
      { texto: "Não quero mais jogar", destino: 31 }]
};

var p172 = {//encanto
   titulo: "172",
   detalhes: "Você avança e desfere um golpe na criatura. Com um ruído estridente, sua espada repica no corpo de pedra. Compreendendo que não conseguirá causar danos a ela com sua arma, você pode lançar um Encanto (volte para 26), ou usar alguma coisa que esteja na sua mochila (vá para 289).",
   botoes: [
      { texto: "Lançar Encanto", destino: 26 },
      { texto: "Usar item da mochila", destino: 289 }
   ]
};

var p173 = {
   titulo: "173",
   detalhes: "Você se concentra com toda força, e um gás verde e espesso esguicha de seu dedo na direção da criatura. Ela compreende que sua própria rotação aspirará o gás para o interior de seu Redemoinho e começa a recuar. Depois que ela se afastou o suficiente, você dispara na direção da Torre Negra. Vá para 218.",
   botoes: [
      { texto: "Continuar", destino: 218 }
   ]
};

var p174 = {//encanto
   titulo: "174",
   detalhes: "A passagem faz voltas e mais voltas, até que acaba por terminar em um lance de escadas que sobe. Você caminha escada acima e chega a uma passagem curta que termina em um beco sem saída. Ao examinar a parede, você descobre uma pequena alavanca, a qual você puxa. A face da rocha à sua frente abre um pouco e se fecha atrás de você quando você passa. Você está agora diante de uma porta trancada. Você tentará arrombá-la (vá para 268) ou lançará um Encanto da Força para arrebentá-la em pedaços (volte para 116)?",
   botoes: [
      { texto: "Arrombar a porta", destino: 268 },
      { texto: "Lançar Encanto da Força", destino: 116 }
   ]
};
var p175 = {
   titulo: "175",
   detalhes: "A criatura nunca ouviu falarem nenhum Pincus no interior da Cidadela. O Cachorro-Macaco que está segurando a clava rosna e dá um passo adiante. Você pode escolher outro nome rapidamente (volte para 110) ou se preparar para lutar contra eles (vá para 288).",
   botoes: [
      { texto: "Escolher outro nome", destino: 110 },
      { texto: "Preparar para lutar", destino: 288 }
   ]
};

var p176 = {//encanto
   titulo: "176",
   detalhes: "Quando você se aproxima, ela se volta para olhar para você. Sem se perturbar nem um pouco com a sua arma, ela diz: 'Abaixe sua arma, jovem forasteiro. Sou apenas uma velha. Não farei mal a você.' Você fará o que ela pede?\n\nSe você ignorar as palavras dela e continuar avançando Volte para 127\nSe você abaixar a espada e conversar com ela Volte para 21\nSe você parar e usar um Encanto de Percepção Extra-Sensorial Vá para 329",
   botoes: [
      { texto: "Ignorar e avançar", destino: 127 },
      { texto: "Abaixar a espada e conversar", destino: 21 },
      { texto: "Usar Encanto de Percepção Extra-Sensorial", destino: 329 }
   ]
};

var p177 = {
   titulo: "177",
   detalhes: "Você está em um corredor estreito. Ele continua por alguns metros e termina em uma porta. A meio caminho, descendo a passagem, pode-se ver um arco, de onde alguns degraus levam para baixo. Você vai prosseguir na direção da porta (volte para 5) ou se arriscará a descer as escadas (vá para 344)?",
   botoes: [
      { texto: "Prosseguir para a porta", destino: 5 },
      { texto: "Descer as escadas", destino: 344 }
   ]
};

var p178 = {
   titulo: "178",
   detalhes: "Você corre pela cozinha, perseguido pelo Devlin. Você joga cadeiras, comida, facas e terrinas sobre ele, mas nada disso adianta. Você atira uma xícara com líquido para o outro lado da cozinha e, para sua surpresa, o Devlin berra quando ela atinge seu corpo incandescente! Então, você tem uma idéia. Aproximando-se do caldeirão de caldo, você se esquiva da criatura até que vocês dois ficam correndo em volta do caldeirão, quase a ponto de se tocarem. Os dois param, se encarando com o caldeirão fumegante entre vocês. Com um grande impulso, você vira o conteúdo do caldeirão - tudo por cima da criatura, que solta um grito e desaparece, quando suas chamas se extinguem. Agora você pode verificar os armários (volte para 17), ou sair do aposento pela porta do lado oposto da cozinha (vá para 265).",
   botoes: [
      { texto: "Verificar os armários", destino: 17 },
      { texto: "Sair pela porta oposta", destino: 265 }
   ]
};

var p179 = {//encanto
   titulo: "179",
   detalhes: "Quando você sai das sombras na direção do centro do pátio, uma voz no vento grita: 'Pare! Fique onde está!' Você olha à sua volta, mas não consegue ver ninguém que esteja se dirigindo a você. Você dá mais dois passos. A voz sinistra ordena de novo que você pare, e dessa vez uma flecha zune pelo are cai próximo a seu pé esquerdo. Você pula para trás. Mas ainda assim não vê ninguém. Porém, não pode se mexer. Você:\n\nSeguirá adiante, muito cuidadosamente? Vá para 378\nDisparará na direção do monumento, no centro do pátio? Volte para 125\nLançará um Encanto do Escudo à sua volta e seguirá avançando? Vá para 341",
   botoes: [
      { texto: "Seguir adiante cuidadosamente", destino: 378 },
      { texto: "Disparar na direção do monumento", destino: 125 },
      { texto: "Lançar Encanto do Escudo", destino: 341 }
   ]
};
var p180 = {//mochila
   titulo: "180",
   detalhes: "O grande Gark jaz morto ao solo. Você espera um minuto para ver se a agitação atrairá algum guarda, mas tudo parece estar tranquilo. Você revista a criatura, mas acha pouca coisa de valor. Em uma bolsa amarrada em torno de sua cintura, há seis Peças de Ouro e uma Escova de Cabelo ornamentada. Você pode levar essas coisas com você, se quiser. Você resolve seguir adiante. Volte para 99.",
   botoes: [
      { texto: "Continuar", destino: 99 }
   ]
};

var p181 = {//energia e sorte
   titulo: "181",
   detalhes: "Você lança o Encanto no ar. Ao fazer isso, o Tapete Voador passa flutuando por você e, para sua consternação, aparece um segundo tapete idêntico e começa a voar em círculos pelo aposento. Subitamente, o ar fica cheio de objetos voadores. A Cabeça de Cachorro se desprende da parede e morde selvagemente o seu braço. Você perde dois pontos de ENERGIA. O homem, que se transformou em uma Cobra, arrasta-se até você e, dando um bote, morde a sua perna. Teste a sua Sorte. Se você tiver sorte, os dentes da Cobra apenas arranham a sua pele. Você perde mais 2 pontos de ENERGIA. Se você não tiver sorte, os dentes penetram fundo em sua perna, que começa a latejar de dor. Você compreende, num relance que deixa você cego, que a mordida é fatal, e desfalece no chão, apertando a ferida e se contorcendo em agonia. Conforme o veneno vai fazendo efeito, sua cabeça gira, e a consciência desaparece. Você falhou na sua missão. Se tiver sobrevivido, não deixará de levar cicatrizes, apesar da sorte que teve. Seu corpo está despedaçado pela dor, e você terá que oferecer um presente da sua mochila a seus oponentes (volte para 54) ou sair do aposento rapidamente pela outra porta (volte para 25).",
   botoes: [
      { texto: "Oferecer presente da mochila", destino: 54 },
      { texto: "Sair pela outra porta", destino: 25 }
   ]
};

var p182 = {//encanto
   titulo: "182",
   detalhes: "Você se sente sugado para o interior do aposento. Como que por um passe de mágica, sua tocha tremula e se apaga. O aposento está escuro como breu. De nenhum lugar, mas ainda assim de toda parte, vem um riso de escárnio que enche o aposento. 'Aventureiro tolo', diz uma outra voz, que altera o tom de alto para baixo enquanto fala, 'Bem-vindo à casa dos GANJEES! Infelizmente, será o último lugar que você verá na sua vida... Ah, mas é claro, você não está vendo nada, está?' Mas nós estamos vendo você, não estamos irmãos?' Vozes que riem chegam de toda parte à sua volta. De repente, um rosto luminoso, branco e fantasmagórico, vem voando na sua direção. Você se encolhe horrorizado, atira-se no chão e começa a se sentir muito assustado. Você perde 1 ponto de HABILIDADE, 2 de ENERGIA e 1 de sorte pelo medo.\n\nO que você pode fazer aqui:\n\nCriar um Encanto do Fogo? Volte para 85\nTentar um Encanto da Ilusão? Vá para 395\nProcurar em sua mochila algum artefato? Vá para 322\nDesembainhar a sua espada? Vá para 248",
   botoes: [
      { texto: "Criar Encanto do Fogo", destino: 85 },
      { texto: "Tentar Encanto da Ilusão", destino: 395 },
      { texto: "Procurar na mochila", destino: 322 },
      { texto: "Desembainhar a espada", destino: 248 }
   ]
};

var p183 = {
   titulo: "183",
   detalhes: "Ele agradece a você efusivamente. Você ganhou um amigo.",
   botoes: [
      { texto: "Continuar", destino: 270 }
   ]
};

var p184 = {//possivel fim
   titulo: "184",
   detalhes: "Enquanto você está decidindo o que fazer em seguida, a Hidra avança. Duas das suas cabeças se projetam e mordem você; uma no braço e outra no pescoço. Seus dedos aguçados rasgam a sua pele e penetram fundo. Tudo está perdido. Você falhou na sua missão.",
   botoes: [
      { texto: "Continuar", destino: null }]
};

var p185 = {
   titulo: "185",
   detalhes: "A porta se abre para um corredor estreito, que faz uma curva fechada para a esquerda, continua por vários metros e então termina por fim em uma porta. Você põe a mão na maçaneta. Volte para 13.",
   botoes: [
      { texto: "Contiuar", destino: 13 }
   ]
};
var p186 = {//encanto
   titulo: "186",
   detalhes: "O homem alto concorda e convence o mais baixo de que é um preço justo. O homem baixo resmunga e pragueja, oferecendo seis e depois sete Peças de Ouro, mas o preço foi fixado a oito. Você mesmo pode, se quiser, oferecer oito Peças de Ouro ao homem alto, embora tenha que fazer aparecer Ouro dos Tolos para dar a ele. Se quiser fazer isso, use um Encanto do Ouro dos Tolos e volte para 15. Se não quiser, o homem baixo acaba por concordar como preço, compra o punhal e vai embora. Você pode ficar para conversar com o homem alto (volte para 83) ou continuar no seu caminho (vá para 245).",
   botoes: [
      { texto: "Oferecer Ouro dos Tolos", destino: 15 },
      { texto: "Ficar para conversar", destino: 83 },
      { texto: "Não oferecer", destino: 245 }
   ]
};

var p187 = {//encanto
   titulo: "187",
   detalhes: "Você se concentra na mente do feiticeiro. Palavras e imagens cruzam a sua cabeça. Dois segundos depois, não há mais nada. Você levanta os olhos para Balthus Dire, que encara você fixamente. 'Não tente ler os pensamentos de Balthus Dire!', ele ordena. Você se concentra de novo, mas ainda assim não recebe nada, pois ele está bloqueando o seu Encanto. Você reflete por um segundo sobre as imagens que recebeu: um mapa embaixo da mesa de planejamento de batalha... uma sensação de horror diante de um grito altíssimo... uma luz ofuscante... um anel no dedo dele... uma espada com lâmina de navalha... e você.\n\nEle está agora sussurrando em voz bem baixa, observando você com um dos olhos. Ele ergue uma das mãos no ar e concentra seu olhar nela. Ele sacode a mão no ar, para a frente, para trás e de um lado para outro, cada vez mais rápido. Com estrondo, ele desce a mão de encontro à mesa. Você cai no chão - não de susto, mas porque o chão sob seus pés está sacudindo violentamente. O aposento inteiro parece estar jogando como um navio em uma tempestade. Embora ele esteja firmemente equilibrado e venha agora andando na sua direção, você não consegue se levantar de jeito nenhum. Sua única chance é um Encanto, se você ainda tiver algum. Em caso afirmativo, você usará:\n\nUm Encanto da Levitação? Vá para 279\nUm Encanto da Ilusão? Vá para 314\n\nMas, se você não tiver nenhum deles, volte para 115.",
   botoes: [
      { texto: "Encanto da Levitação", destino: 279 },
      { texto: "Encanto da Ilusão", destino: 314 },
      { texto: "Não tem Encanto", destino: 115 }
   ]
};

var p188 = {//encanto
   titulo: "188",
   detalhes: "Um clarão de luz súbito e intenso irrompe à sua frente. Você protege os olhos e depois os esfrega - mas não consegue ver nada! Você entra em pânico ao ouvir um ruído como um rosnado baixo. Passos de pés peludos se aproximam, e você grita de dor quando esta criatura que você não pode ver ruge e crava seus dentes aguçados na sua perna. Você:",
   botoes: [
      { texto: "Lançar Encanto da Força", destino: 301 },
      { texto: "Lançar Encanto da Fraqueza", destino: 159 },
      { texto: "Desembainhar a espada", destino: 51 }
   ]
};

var p189 = {//encanto
   titulo: "189",
   detalhes: "Você pode usar qualquer um dos seguintes Encantos:\n\nEncanto da Ilusão Vá para 319\nEncanto do Escudo Volte para 130\nEncanto da Fraqueza Volte para 43\n\nSe você não tiver nenhum deles, terá que usar sua espada. Vá para 333.",
   botoes: [
      { texto: "Encanto da Ilusão", destino: 319 },
      { texto: "Encanto do Escudo", destino: 130 },
      { texto: "Encanto da Fraqueza", destino: 43 },
      { texto: "Usar espada", destino: 333 }
   ]
};

var p190 = {//batalha
   titulo: "190",
   detalhes: "Uma cópia perfeita do Golem forma-se na sua frente. Você ordena que ela ataque o verdadeiro Golem, que está agora quase em cima de você. Resolva a batalha dos Golems:\n\nGOLEM HABILIDADE 8 ENERGIA 10\n\nSe a sua criação vencer o original, volte para 147. Se não vencer, você terá que resolver o confronto sozinho. Se vencer, poderá ir também para 147.",
   botoes: [{ texto: "Continuar", destino: 147 }]
};

var p191 = {//batalha
   titulo: "191",
   detalhes: "Você sufoca quando o Encanto se materializa diante de você. Uma réplica perfeita da sua pessoa, armado como você está, surge agora de pé na sua frente. A uma ordem do feiticeiro, seu sósia avança, e você terá que lutar contra ele. Ele possui os mesmos índices de HABILIDADE, ENERGIA e SORTE que você tem. A única vantagem que você pode ter é usar a sua SORTE para causar danos maiores ou minimizar ferimentos - seu sósia não poderá usar a SORTE dele aqui. Se você vencer, volte para 119.",
   botoes: [{ texto: "Continuar", destino: 119 }]
};

var p192 = {
   titulo: "192",
   detalhes: "Você lança o Encanto bem na hora. O projétil atinge o seu escudo mágico e se espatifa contra ele, escorrendo para o solo. Você examina a pasta que ficou no escudo para ver o que era. Você quase foi atingido por um tomate! No centro do aposento, a figura adormecida está se mexendo. Volte para 29.",
   botoes: [{ texto: "Continuar", destino: 29 }]
};

var p193 = {//encanto
   titulo: "193",
   detalhes: "Escolha um Encanto:\n\nOuro dos Tolos Vá para 211\nPercepção Extra-Sensorial Volte para 123\nIlusão Volte para 35\n\nSe você não tiver nenhum deles, vá para 283.",
   botoes: [
      { texto: "Ouro dos Tolos", destino: 211 },
      { texto: "Percepção Extra-Sensorial", destino: 123 },
      { texto: "Ilusão", destino: 35 },
      { texto: "Não tem Encanto", destino: 283 }
   ]
};

var p194 = {//possivel fim
   titulo: "194",
   detalhes: "O aperto no seu pescoço aumenta, e sua última lembrança é de medo - dessas criaturas inumanas com seus rostos há muito já mortos, felizes com a sua morte. Você falhou na sua missão.",
   botoes: [{ texto: "Recomeçar", destino: 0 }]
};

var p195 = {
   titulo: "195",
   detalhes: "Os olhos de Balthus seguem você quando você se abaixa, mas você fica protegido pela mesa de planejamento de batalha. A miniatura de bola de fogo mergulha no ar, mas passa voando por cima de sua cabeça. Você pode usar rapidamente outro Encanto para atacar. Vá para 377.",
   botoes: [{ texto: "Continuar", destino: 377 }]
};
var p196 = {
   titulo: "196",
   detalhes: "O aposento é de fato uma despensa. Num primeiro momento, os cheiros estranhos - uma mistura de comida doce, temperada e azeda - pegam você de surpresa. Há vários tipos de carne pendurada sem ganchos ao longo de uma das paredes. Uma prateleira de queijos contém mais ou menos uma dúzia de variedades de queijo, e você torce o nariz de nojo como cheiro forte dos, digamos, que estão 'maduros demais'. Há seis pães pretos em uma mesa, junto a uma faca de pão e uma tábua para cortar pão. Há duas outras portas que dão para fora da despensa. Se você estiver com fome, poderá experimentar alguma das comidas (volte para 45), do contrário poderá sair pela porta na parede do lado esquerdo (volte para 13), ou pela porta na parede do lado direito (vá para 281).",
   botoes: [
      { texto: "Experimentar alguma comida", destino: 45 },
      { texto: "Sair pela porta à esquerda", destino: 13 },
      { texto: "Sair pela porta à direita", destino: 281 }
   ]
};

var p197 = {
   titulo: "197",
   detalhes: "As escadas estão bastante gastas e estalam sob o seu peso. Cuidadosamente, você sobe até a sacada. Vá para 363.",
   botoes: [{ texto: "Continuar", destino: 363 }]
};

var p198 = {//sorte
   titulo: "198",
   detalhes: "Você pensa rapidamente, e depois enfia a mão em sua mochila e tira um punhado de ervas. Mostrando-as à criatura, você explica que é um especialista em plantas medicinais e veio tratar do bibliotecário do Senhor, que está doente, em estado crítico. O mensageiro não disse nada quanto a senhas. Será que ele vai acreditar em você? Teste a sua Sorte. Se você tiver sorte, ele acredita e deixa você entrar (volte para 177). Se não tiver, ele não quer saber quem você é, você não pode entrar sem a senha, e ele avança na sua direção com a lança em riste (vá para 290).",
   botoes: [
      { texto: "Tive sorte", destino: 177 },
      { texto: "Não tive sorte", destino: 290 }
   ]
};

var p199 = {//possivel fim
   titulo: "199",
   detalhes: "O feiticeiro se transformou em uma GÓRGONA, uma criatura extremamente perigosa, que tem o poder de transformar em pedra qualquer um que olhar em seus olhos. Ao avançar, você olha diretamente em seu rosto, e o Encanto dela é lançado. Você sente suas juntas endurecerem. Você cai no chão. Sua consciência some aos poucos, enquanto você vai se tornando uma estátua de pedra, morto aos pés de Balthus Dire... Você falhou na sua missão.",
   botoes: [{ texto: "Recomeçar", destino: 0 }]
};

var p200 = {
   titulo: "200",
   detalhes: "Ao seu primeiro movimento, a criatura parece sair de seu transe e caminha na sua direção. Ao ver isso, você pode correr para a porta do outro lado do aposento (vá para 237), ou partir na direção das caixas e arriscar-se a enfrentar este gigante silencioso (volte para 98).",
   botoes: [
      { texto: "Correr para a porta", destino: 237 },
      { texto: "Enfrentar o gigante silencioso", destino: 98 }
   ]
};

var p201 = {
   titulo: "201",
   detalhes: "Eles apontam na direção das duas portas. A da esquerda, eles dizem, leva você para a cozinha, onde os cozinheiros estarão preparando a ceia. A porta da direita dá para o Grande Salão, onde são realizados os banquetes. Vá para 270.",
   botoes: [{ texto: "Continuar", destino: 270 }]
};
var p202 = {//possivel fim
   titulo: "202",
   detalhes: "Depois de vários minutos de gritaria, você ouve vozes que se aproximam, falando em uma língua estranha. Para seu alívio, você vê quatro cabeças que espiam dentro do poço se desenharem contra o céu. Você berra para que eles consigam alguma corda. Eles conversam entre si e desaparecem. Finalmente, você ouve suas passadas rápidas retornando. Eles param mais uma vez no alto do poço e jogam sobre você, não uma corda de socorro, mas o conteúdo de um caldeirão de óleo fervente! Você terá que olhar com mais cuidado por onde anda na sua próxima aventura, porque esta está terminada. E lembre-se - estranhos não são bem-vindos na Cidadela do Caos...",
   botoes: [{ texto: "Recomeçar", destino: 0 }]
};

var p203 = {
   titulo: "203",
   detalhes: "Ao correr para as portas, você tropeça, permitindo que a criatura ganhe terreno. Ela agarra seu braço com uma das mãos e atira você para o outro lado do aposento. Você aterrisa com estrondo contra a parede, embaixo do espelho. Você agora terá que desembainhar a sua espada (volte para 16), ou se preparar para usar um Encanto (volte para 11).",
   botoes: [
      { texto: "Desembainhar a espada", destino: 16 },
      { texto: "Preparar um Encanto", destino: 11 }
   ]
};

var p204 = {
   titulo: "204",
   detalhes: "Você prende a respiração e dá um passo adiante, entrando na água lodosa. Pouco depois, você sente alguma coisa puxando a sua perna. Levantando a perna da água, você descobre que algum tipo de trepadeira se enroscou na sua perna. Você salta de volta para a margem, e a trepadeira continua agarrada. Saindo da água, uma das pontas da trepadeira se ergue, contorce-se no ar, como se estivesse olhando para você, e depois cai na água de volta com estrépito. Você compreende que não é uma trepadeira, mas sim uma longa COBRA DE ESGOTO, que agora está deslizando na sua direção. Volte para 73.",
   botoes: [{ texto: "Continuar", destino: 73 }]
};

var p205 = {//sorte batalha
   titulo: "205",
   detalhes: "O homem alto fica revoltado com seu preço, mas o outro concorda. A discussão torna-se mais intensa, e o homem alto desembainha a sua espada. O homem mais baixo faz a mesma coisa e, vendo-se ameaçado, você age igualmente. É você e o homem mais baixo contra o homem alto. Você tem que resolver esta batalha. Antes de começar cada Série de Ataque, jogue um dado. Se o número for ímpar, o homem alto atacará o mais baixo primeiro, e você, pessoalmente, poderá ignorar essa Série de Ataque. (Embora você tenha que jogar os dados para o homem baixo mesmo assim). Se o número for par, o homem alto parte para cima de você (e o mais baixo poderá ignorar a Série de Ataque). Se o homem mais baixo morrer durante a batalha, o mais alto terminará lutando contra você.\n\nHABILIDADE ENERGIA\nHOMEM ALTO 8 8\nHOMEM BAIXO 7 6\n\nQuando a batalha estiver resolvida, vá para 309, se o homem mais baixo ainda estiver vivo. Se ele tiver morrido, vá para 368.",
   botoes: [{ texto: "Venci a batalha e o homem mais baixo está vivo", destino: 309 },
   { texto: "Venci a batalha e o homem mais baixo morreu", destino: 368 }]
};
var p206 = {
   titulo: "206",
   detalhes: "Você sai pela porta e se encontra ao pé de outra escada em espiral que leva ao interior da Terra Negra. Subindo a escadaria, você acaba chegando a uma plataforma onde uma única porta é a maneira que existe para seguir adiante, sem outra opção. Você experimenta a porta. Ela abre lentamente. Volte para 182",
   botoes: [{ texto: "Continuar", destino: 182 }]
};

var p207 = {
   titulo: "207",
   detalhes: "Você abre a porta e espia a escuridão à sua frente. Você dá uns dois passos adiante, dando tempo para que seus olhos se acostumem ao escuro. Você fecha a porta atrás de você, dizendo adeus ao Duende. Volte para 188.",
   botoes: [{ texto: "Continuar", destino: 188 }]
};

var p208 = {//possivel fim
   titulo: "208",
   detalhes: "A arma do Homem-Aranha é sua mordida, que é altamente venenosa. Quando ele morde, você sente o veneno se espalhando pelo seu organismo, adormecendo seus nervos. Quando você cambaleia e cai ao chão, ele ataca repetidamente. Sua última lembrança é a cara pequena e feia dele mordendo seu pescoço. Você fracassou na sua missão.",
   botoes: { texto: "Recomeçar", destino: 0 }
};

var p209 = {
   titulo: "209",
   detalhes: "Você pousa os olhos sobre a estranha estrutura. Não parece ser uma fonte, mas alguma espécie de templo. De um lado há uma porta, que você pode investigar, ou você poderá também seguir em frente para a Cidadela propriamente dita. Se quiser fazer isso, volte para 156. Se quiser investigar, vá para 362.",
   botoes: [
      { texto: "Investigar a porta", destino: 362 },
      { texto: "Seguir em frente", destino: 156 }
   ]
};

var p210 = {//encanto
   titulo: "210",
   detalhes: "Você agora está em um aposento grande e redondo. É iluminado por uma única tocha, presa a uma das paredes. Não há mobília no aposento, exceto uma mesa de madeira rústica e uma cadeira no centro. Flutuando acima da mesa - dormindo profundamente - há um homem muito pequeno, vestido com pantalonas e camisa verdes. Ele não chega a ter mais de um metro de altura, e você não consegue acreditar que ele esteja ainda dormindo depois de sua entrada barulhenta! Você ouve um rangido e vira-se para a direita a tempo de ver uma pequena catapulta disparar um projétil de algum tipo direto na sua direção. Vai atingir você, a não ser que você use um Encanto do Escudo! Se você usar este Encanto, volte para 192. Se não puder (ou não quiser), vá para 359.",
   botoes: [
      { texto: "Usar Encanto do Escudo", destino: 192 },
      { texto: "Continuar sem usar Encanto", destino: 359 }
   ]
};

var p211 = {//encanto
   titulo: "211",
   detalhes: "Você oferece a ele as pedrinhas que transformou em ouro. 'Tudo o que eu quero está aqui embaixo', ele diz. 'Tenho comida, tenho um trabalho a fazer e, se eu ficar entediado, tenho permissão de torturar os prisioneiros para me divertir. Para que eu quero ouro?' É melhor você tentar outro Encanto. Você partirá para um Encanto de Percepção Extra-Sensorial (volte para 123) ou um Encanto da Ilusão (volte para 35)? Se você não tiver nenhum deles, vá para 283.",
   botoes: [
      { texto: "Encanto de Percepção Extra-Sensorial", destino: 123 },
      { texto: "Encanto da Ilusão", destino: 35 },
      { texto: "Não tenho nenhum feitiço", destino: 283 }
   ]
};

var p212 = {
   titulo: "212",
   detalhes: "Tomando a bifurcação da esquerda, você segue um caminho que acaba por se juntar a outra passagem que conduz para a direção norte. Você segue este novo caminho por algum tempo, até que ele acaba por se alargar. Volte para 90.",
   botoes: { texto: "Continuar", destino: 90 }
};

var p213 = {//batalha
   titulo: "213",
   detalhes: "Você desembainha a sua espada bem a tempo, já que o Anão está quase em cima de você. Lute contra um de cada vez:\n\nHABILIDADE ENERGIA\nANÃO 5 6\nGOBLIN 6 4\nORCA 7 5\n\nSe você vencer, vá para 235. Você pode Fugir durante a batalha, escapando para o monumento no centro do pátio (volte para 209).",
   botoes: [{ texto: "Venci a Batalha", destino: 235 },
   { texto: "Fugir", destino: 209 }]
};

var p214 = {
   titulo: "214",
   detalhes: "Você tira a tampa do Frasco e esparrama o líquido verde sobre a criatura. Ela rosna e grita no ar, pondo as mãos em volta do pescoço. O líquido parece estar queimando intensamente o Gárgula, e uma fumaça sobe pelo ar. Alguns momentos depois, a criatura jaz morta no chão. Volte para 62.",
   botoes: { texto: "Continuar", destino: 62 }
};

var p215 = {
   titulo: "215",
   detalhes: "Você terá que inventar alguma história para estas mulheres horrorosas. Você dirá a elas que o Capitão da Guarda ordenou que se fizesse uma inspeção na cozinha delas, depois de uns dois casos de intoxicação alimentar (volte para 136), ou dirá que pegou o caminho errado e está procurando o certo para seguir adiante (volte para 41)?",
   botoes: [
      { texto: "História do Capitão da Guarda", destino: 136 },
      { texto: "Procurando o caminho certo", destino: 41 }
   ]
};

var p216 = {//encanto
   titulo: "216",
   detalhes: "Qual será sua tática? Você pode dizer à criatura que você é um convidado (vá para 294), ou poderá tentar subornar o Gark, oferecendo três Peças de Ouro - Peças de Ouro reais - (vá para 391), ou ainda, usando um Encanto do Ouro dos Tolos, poderá criar algum ouro para oferecer a ele (volte para 36).",
   botoes: [
      { texto: "Dizer que é um convidado", destino: 294 },
      { texto: "Subornar com Peças de Ouro", destino: 391 },
      { texto: "Usar Encanto do Ouro dos Tolos", destino: 36 }
   ]
};

var p217 = {//encanto
   titulo: "217",
   detalhes: "Você gira a maçaneta o mais cuidadosamente possível, de maneira a surpreender o que quer que esteja à sua espera. Lentamente, a porta abre e você entra no aposento, que está escuro, iluminado por uma única vela trêmula. Seu sangue gela ao ver um TRIDENTE de três pontas dirigindo-se diretamente à sua garganta! Num relance, você tem que decidir o que fazer. Você:\n\nLançará um Feitiço do Escudo imediatamente? Vá para 293\nTentará rapidamente desviar-se da arma? Volte para 57",
   botoes: [
      { texto: "Lançar Feitiço do Escudo", destino: 293 },
      { texto: "Desviar-se da arma", destino: 57 }
   ]
};

var p218 = {//encanto
   titulo: "218",
   detalhes: "Há uma grande porta de madeira à sua frente, firmemente trancada. Você pode bater três vezes para chamar o guarda (volte para 118) ou usar um Encanto da Força para tentar abri-la (volte para 94).",
   botoes: [
      { texto: "Bater para chamar o guarda", destino: 118 },
      { texto: "Usar Encanto da Força", destino: 94 }
   ]
};

var p219 = {
   titulo: "219",
   detalhes: "Você se abaixa e protege a cabeça. Uma garrafa atinge você, depois outra e mais outra - mas você não sente nada! Como pode ser isso? Aí você compreende o que está acontecendo. O vinho devia conter alguma poção alucinógena que está fazendo você imaginar este ataque de garrafas. Num instante, o ruído cessa. Você levanta a cabeça para ver que, como você desconfiava, todas as garrafas estão em seus lugares nas estantes. Com grande alívio, você segue adiante e sai da Adega de Vinhos. Volte para 95.",
   botoes: [{ texto: "Continuar", destino: 95 }]
};

var p220 = {//batalha
   titulo: "220",
   detalhes: "As facas atingem o seu escudo mágico e caem ao chão. Os Giras, da mesma forma, esbarram no escudo e voltam, um tanto apalermados. Eles tagarelam entre si, mantendo você à distância enquanto seu Encanto se dissipa. Eles parecem chegar a algum tipo de acordo, e um deles rola de volta pelo corredor, presume-se que para buscar ajuda. Os outros dois pegam pequenas zarabatanas em seus cintos. Pondo algum tipo de pelotas em suas bocas primeiro, eles se preparam para fazer mira. Você terá que atacá-los primeiro com sua espada. Resolva esta batalha (lute com um de cada vez):<br><br>\n\nHABILIDADE ENERGIA\nPrimeiro Gira 7 6<br><br>\nSegundo Gira 6 5\n\n<br><br>Se você vencer, poderá tomar a passagem do lado esquerdo (vá para 243) ou a passagem do lado direito (volte para 2).",
   botoes: [{ texto: "Passagem lado direito", destino: 243 },
   { texto: "Passagem lado esquerdo", destino: 2 }]
};

var p221 = {
   titulo: "221",
   detalhes: "Quando você se adianta, ela faz um gesto peculiar com as mãos e abaixa a cabeça, resmungando muito baixo. Volte para 127.",
   botoes: { texto: "Continuar", destino: 127 }
};

var p222 = {
   titulo: "222",
   detalhes: "Ao se esgueirar pela muralha, você ouve um gemido baixo uns poucos metros adiante. Quando se aproxima, você consegue distinguir a forma de um homem no chão, obviamente sentindo dores. Ele pede socorro. Você se aproximará dele para ver o que pode fazer (volte para 137) ou vai ignorá-lo e continuar ao longo da muralha (volte para 14)?",
   botoes: [
      { texto: "Aproximar-se", destino: 137 },
      { texto: "Ignorar e continuar", destino: 14 }
   ]
};

var p223 = {
   titulo: "223",
   detalhes: "Ela faz uma careta ao olhar para a coisa pequena e feia, puxando os cobertores até o pescoço. Volte para 138.",
   botoes: { texto: "Continuar", destino: 138 }
};

var p224 = {//energia
   titulo: "224",
   detalhes: "Você rapidamente joga a cabeça para trás e evita por pouco as mandíbulas do Peixe Abocanhador. Mas você bate com a cabeça no suporte no qual pende o caldeirão. Você perde dois pontos de ENERGIA. Você fica zonzo com o golpe e, enquanto tenta recuperar os sentidos, as três velhas empurram você na direção da porta do outro lado da cozinha. \"Vai e não volta, casca de ferida!\" elas gritam enquanto empurram você pela porta. Vá para 265.",
   botoes: { texto: "Continuar", destino: 265 }
};

var p225 = {//encanto
   titulo: "225",
   detalhes: "Ele concorda inteiramente. Este artefato é extremamente valioso. O homem mais baixo explica que ele simplesmente não tem tanto dinheiro, e se afasta na escuridão. O homem alto oferece o punhal a você pelo preço de ocasião de nove Peças de Ouro. Você pode usar um Encanto de Ouro dos Tolos para fazer aparecer ouro suficiente para comprar a faca (desconte este encanto e volte para 15), ou você pode desculpar-se e seguir adiante (vá para 245).",
   botoes: [
      { texto: "Usar Encanto de Ouro dos Tolos", destino: 15 },
      { texto: "Desculpar-se e seguir adiante", destino: 245 }
   ]
};

var p226 = {//mochila
   titulo: "226",
   detalhes: "Você pode tirar de sua mochila qualquer uma das seguintes coisas, se as tiver recolhido no caminho:\n\nUm Espelho de Prata	Vá para 312\nUm Velo de Ouro	Volte para 37\nUma Miríade de Bolso	Vá para 384\n\nSe você não tiver nenhuma dessas coisas, volte para 184.",
   botoes: [
      { texto: "Um Espelho de Prata", destino: 312 },
      { texto: "Um Velo de Ouro", destino: 37 },
      { texto: "Uma Miríade de Bolso", destino: 384 },
      { texto: "Não possuo nenhum", destino: 184 }
   ]
};

var p227 = {
   titulo: "227",
   detalhes: "Eles começam a ficar muito zangados com seus modos. Os ânimos se exaltam, e eles começam a gritar. Repentinamente, você é dominado por eles. Você luta, mas um deles golpeia você na cabeça com o cabo da espada. Sua cabeça roda, e o aposento escurece, quando você perde a consciência. Vá para 234.",
   botoes: { texto: "Continuar", destino: 234 }
};

var p228 = {//feitico mochila
   titulo: "228",
   detalhes: "A porta trancada é muito forte e feita de carvalho sólido. Não é provável que você consiga arrombá-la, mas você pode tentar. Do contrário, você pode usar um Encanto da Força para arrebentá-la. A fechadura é de cobre, e você poderia tentar usar uma Chave de Cobre, se tiver uma. O que você escolherá:\n\nTentar arrombá-la?	Volte para 88\nLançar um Encanto da Força?	Volte para 170\nUsar uma Chave de Cobre?	Vá para 296",
   botoes: [
      { texto: "Tentar arrombá-la", destino: 88 },
      { texto: "Lançar um Encanto da Força", destino: 170 },
      { texto: "Usar uma Chave de Cobre", destino: 296 }
   ]
};

var p229 = {//encanto senha
   titulo: "229",
   detalhes: "Você bate a porta, fechando-a ao passar. Você segue por uma passagem curta e estreita, que dá muitas voltas e conduz você ao pé de outra escadaria, levando diretamente ao topo da Cidadela. Um letreiro na parede diz: \"PARE. Ninguém poderá passar, a não ser com ordem de Balthus Dire.\" Você percebe que está chegando a seu objetivo. Cautelosamente, você sobe as escadas até o próximo patamar, penetrando na torre superior da Cidadela. Há uma porta de metal sólido à sua frente. Você tenta a maçaneta, mas a porta está trancada. Você levanta a pequena tampa da maçaneta e vê pequenos tambores por baixo. Trata-se de uma fechadura de combinação, que só pode ser aberta por aqueles que conhecem a combinação. Você a conhece? Em caso afirmativo, vá para a seção do livro comesse mesmo número. Do contrário, você pode tentar arrombara porta (volte para 50), ou usar um Encanto da Força (volte para 164).",
   botoes: [
      { texto: "Inserir senha", destino: 401 },
      { texto: "Arrombar a porta", destino: 50 },
      { texto: "Usar Encanto da Força", destino: 164 }
   ],


};

var p230 = {//encanto
   titulo: "230",
   detalhes: "\"Veio ganhar algum dinheiro, né?\" diz o Macaco-Cachorro.\"Bem, você pode dividir um pouco dos seus lucros conosco!\" Como você não tem nada para oferecer a eles, pode tirar uma pedra de sua bolsa e lançar um Encanto do Ouro dos Tolos sobre ela, oferecendo uma pepita de ouro a eles (volte para 96), ou pode preparar-se para a batalha (vá para 288). Desconte o Encanto do Ouro dos Tolos dos seus Encantos, se você o usar.",
   botoes: [
      { texto: "Usar Encanto do Ouro dos Tolos", destino: 96 },
      { texto: "Preparar-se para a batalha", destino: 288 }
   ]
};
var p231 = {//sorte energia
   titulo: "231",
   detalhes: "Você bate na porta com o ombro. Teste a sua Sorte. Se tiver sorte, a porta cede e abre (volte para 196). Se você não tiver, você machuca o ombro - perde um ponto de ENERGIA - e tem que Testar a sua Sorte - outra vez, repetindo este procedimento até que você tenha sorte. Você perde um ponto de ENERGIA por cada tentativa sem êxito. Quando você finalmente conseguir arrombar a porta, volte para 196. Do contrário, se seu ombro começar a doer demais, você pode retornar à primeira encruzilhada que você encontrou e seguir pela outra passagem a qualquer momento (vá para 243).",
   botoes: [
      { texto: "Tive sorte", destino: 196 },
      { texto: "Retornar à encruzilhada", destino: 243 }
   ]
};

var p232 = {//sorte
   titulo: "232",
   detalhes: "Você recua horrorizado diante da criatura que está à sua frente. Lembrando-se das lendas que você ouviu contar quando criança, você compreende que está enfrentando uma GÓRGONA, cujo olhar tem o poder de transformar você em pedra! Teste a sua Sorte. Se tiver sorte, volte para 111. Se não tiver, volte para 72.",
   botoes: [
      { texto: "Tive Sorte", destino: 111 },
      { texto: "Não tive sorte", destino: 72 }
   ]
};

var p233 = {//energia
   titulo: "233",
   detalhes: "Você evita o impacto do Tridente em cheio, mas uma de suas pontas crava-se no seu ombro. Felizmente, não é o seu braço da espada. Você agarra o cabo e arranca a arma do seu ombro, gritando de dor ao fazê-lo. Você perde cinco pontos de ENERGIA pelo ferimento e vai para 374.",
   botao: { texto: "Continuar", destino: 374 }
};

var p234 = {
   titulo: "234",
   detalhes: "Você acorda em um aposento sujo, com paredes ásperas cortadas na rocha. As barras de ferro na janela e na porta confirmam que você está em algum tipo de cela de prisão, conforme você desconfiava. Não há muito que você possa fazer, além de ficar sentado no colchão de palha que está em um canto até que alguém apareça. Mais ou menos uma hora depois, você ouve o barulho de alguma coisa que se arrasta do lado de fora. Olhando através das barras da porta, você pode ver uma criatura com aparência de lagarto que se arrasta descendo o corredor, trazendo nas mãos uma moringa e uma terrina. O animal tem duas cabeças que conversam entre si enquanto ele caminha. Sua pele é cinzenta e coberta de escamas, e uma cauda longa se estende pela passagem atrás dele. Ele pára na sua porta e empurra a moringa e a terrina por uma pequena abertura para dentro de sua cela, e depois se afasta para sentar-se a uma mesa do outro lado do corredor. Você recebeu pão e caldo. Você vai comer e beber ou vai chamar esta criatura, um CALACORM? Para se servir da sua comida, vá para 397. Se quiser gritar para o Calacorm, volte para 69.",
   botoes: [
      { texto: "Comer e beber", destino: 397 },
      { texto: "Gritar para o Calacorm", destino: 69 }
   ]
};

var p235 = {//mochila
   titulo: "235",
   detalhes: "Temeroso de que a agitação possa ter atraído atenção, você espia na escuridão. Nada parece estar acontecendo. Examinando os bolsos das criaturas, você acha oito Peças de Ouro, uma chave cor de cobre e um vidro contendo um unguento escuro e cremoso. Você pode levar dois desses com você: Voltando-se para o frasco de líquido, você consegue identificar uma inscrição na tampa, em caracteres rúnicos. Seu coração salta quando você compreende que isto é uma Poção de Magik, muito rara. Há o suficiente para duas doses no frasco, e cada uma delas tem o efeito de aumentar o seu índice de MAGIA  em um ponto, permitindo que você tenha poderes para usar mais um Encanto. Você pode levar esta Poção com você para usar depois de lançar qualquer Encanto. Ao beber a Poção, você não precisa riscar esse Encanto da sua lista. Lembre-se de que esta Poção só funcionará duas vezes. Agora você pode seguir adiante, tanto na direção da Cidadela (vá para 245) quanto na dos dois homens que estão conversando sob a luz da tocha (vá para 269).",
   botoes: [
      { texto: "Seguir para a Cidadela", destino: 245 },
      { texto: "Seguir para os dois homens", destino: 269 }
   ]
};
var p236 = {
   titulo: "236",
   detalhes: "Eles aceitam as suas Amoras de bom grado, jogando-as para dentro da boca e mastigando. Alguns segundos depois, eles adormecem um por um. Quando todos os três estão dormindo, você caminha até a caixa para investigar. A tampa se abre, revelando diversas outras bonecas do lado de dentro, iguais às que estão no chão, e vários outros brinquedos de madeira. Não parece haver nada verdadeiramente de valor ali, por isso você sai do aposento pela porta do outro lado. Volte para 140.",
   botoes: [{ texto: "Continuar", destino: 140 }]
};

var p237 = {
   titulo: "237",
   detalhes: "Você abre a porta e sai em uma passagem que segue na direção leste por vários metros, terminando ao pé de uma escadaria. Você sobe as escadas e acaba chegando em uma passagem estreita. A uma pequena distância mais a1iante, você pode ver uma abertura para um aposento grande e bem iluminado. Você segue nessa direção. Volte para 169.",
   botoes: [{ texto: "Continuar", destino: 169 }]
};

var p238 = {
   titulo: "238",
   detalhes: "Ele indica uma seção das estantes, e você leva um livro para uma das mesas para ler. O livro é extremamente informativo, traçando a história da Cidadela. A Torre Negra foi construída pelo avô de Balthus Dire. À medida em que foi se tornando um santuário para as forças do mal, a lei e a ordem foram gradualmente dando lugar ao caos, devido à luta das criaturas monstruosas para ascender na hierarquia do poder. O avô de Dire acabou se vendo na necessidade de se proteger de seus próprios seguidores, criando vários sistemas de segurança entre as criaturas e seus próprios aposentos, destacando-se entre eles a Armadilha do Poço da Perdição e uma Fechadura de Combinação mágica na porta de seu próprio quarto. A combinação da fechadura é 217. Você lê mais sobre a Cidadela. Você pode então escolher entre perguntar ao homem sobre a seção dedicada a Balthus Dire (volte para 18), ou a seção das Criaturas de Rocha Escarpada (vá para 375), ou ainda sair do aposento pela porta do outro lado (volte para 31).",
   botoes: [
      { texto: "Perguntar sobre Balthus Dire", destino: 18 },
      { texto: "Criaturas de Rocha Escarpada", destino: 375 },
      { texto: "Sair pela outra porta", destino: 31 }
   ]
};

var p239 = { //feitico
   titulo: "239",
   detalhes: "Você tem uma idéia. Você faz um laço com a corda, com um nó corrediço na ponta. Girando a corda acima de sua cabeça, você tenta laçar a arca. Depois de diversas tentativas, seu laço circunda a arca, e o nó corrediço se aperta em torno dela. Você puxa e a arca se mexe. Você puxa mais, e ela cai pela borda dentro do fosso - mas, para sua decepção, o peso da caixa é enorme e arrasta você junto com ela! Se você tiver um Encanto da Levitação, use-o e vá para 379. Do contrário, volte para 82.",
   botoes: [
      { texto: "Usar Encanto da Levitação", destino: 379 },
      { texto: "Continuar", destino: 82 }
   ]
};

var p240 = {//energia
   titulo: "240",
   detalhes: "Você ergue uma mão flamejante, passando-a pelas costas da vestimenta que está apertando seu pescoço. A roupa se incendeia, e um grito silencioso sai da boca morta dentro dela. Os outros Fantasmas recuam. Você ateia fogo a mais uns dois, enquanto eles batem em retirada. Infelizmente, eles estão perto demais, e você perde dois pontos de ENERGIA pelas queimaduras que sofre. Andando cuidadosamente para a frente, você mantém os Fantasmas à distância até passar em segurança pela mulher. Volte para 6.",
   botoes: [{ texto: "Continuar", destino: 6 }]
};

var p241 = {//habilidade
   titulo: "241",
   detalhes: "Você atinge a criatura com um golpe que causa danos. Mas, para sua infelicidade, a espada fica enroscada nos pêlos compridos da fera. Você tenta puxá-la, mas a criatura golpeia a espada e a arranca das suas mãos, mandando-a para o outro lado do aposento. Você agora está indefeso. Você pode tentar continuar a luta com as mãos nuas ou lançar um Encanto da Força. Se você lutar com sua força normal sem uma arma, terá que descontar três pontos de seu índice de HABILIDADE pelo resto da luta. Se usar um Encanto da Força, poderá continuar com a HABILIDADE normal. Se você vencer, poderá recuperar a sua espada e ir para 77.",
   botoes: [
      { texto: "Lutar com as mãos nuas", destino: 77 },
   ]
};
var p242 = {
   titulo: "242",
   detalhes: "As garrafas e barriletes contêm centenas de diferentes vinhos. Alguns são extremamente velhos e valiosos. Em um dos cantos do aposento, há uma mesa posta para a degustação, com duas garrafas e copos. Você vai provar uma amostra do Vinho Tinto (volte para 24) ou do Vinho Branco (volte para 105), ou ainda não experimentará nenhum deles e seguirá adiante (volte para 95)? Se você resolver sair, poderá levar com você uma garrafa de vinho de uma das prateleiras para a viagem.",
   botoes: [
      { texto: "Provar Vinho Tinto", destino: 24 },
      { texto: "Provar Vinho Branco", destino: 105 },
      { texto: "Não provar e seguir adiante", destino: 95 }
   ]
};

var p243 = {
   titulo: "243",
   detalhes: "A passagem se estende por vários metros e depois termina em uma porta. Você escuta junto à porta e ouve uma respiração profunda e pesada vindo lá de dentro, como se alguma criatura de grande porte estivesse dormindo ali. Cuidadosamente, você experimenta a maçaneta, e a porta abre. Logo na entrada, embora o aposento esteja escuro, você consegue ver uma criatura muito grande, semelhante a um Goblin, adormecida no chão. Você pode se arriscar a entrar no aposento na ponta dos pés (vá para 352), ou retornar à encruzilhada e tentar a passagem da direita (volte para 2).",
   botoes: [
      { texto: "Entrar na ponta dos pés", destino: 352 },
      { texto: "Voltar e tentar a passagem da direita", destino: 2 }
   ]
};

var p244 = {
   titulo: "244",
   detalhes: "Quando você se concentra no seu Encanto, os Giras param. Eles estão evidentemente apreensivos em relação ao que você está planejando. De repente, diante de seus olhos peludos, você desaparece! Eles tagarelam novamente excitados. Para onde você foi? Sob a sua Ilusão da Invisibilidade, você pode continuar, escolhendo ou a passagem do lado direito (volte para 2), ou a do lado esquerdo (volte para 243), deixando os Giras procurando por você em vão.",
   botoes: [
      { texto: "Seguir pela passagem do lado direito", destino: 2 },
      { texto: "Seguir pela passagem do lado esquerdo", destino: 243 }
   ]
};

var p245 = {
   titulo: "245",
   detalhes: "Você parte na direção da Cidadela. Embora o ar da noite esteja calmo, você ouve um assobio fraco, que rapidamente fica cada vez mais alto, até que uma forte lufada de vento subitamente atinge você com tamanha força, que você mal consegue se mexer no sentido contrário. Você protege os olhos, até que a ventania diminui um pouco, e, quando você os abre, vê uma face fantasmagórica de mulher dentro do que parece ser um Redemoinho vivo. Ela move os lábios, dizendo palavras que você não consegue distinguir, mas, alguns segundos depois de ela ter terminado de falar, a mensagem chega até você. Ela parece considerar a sua aparência como ofensiva e está desafiando você com palavras agressivas. Você segura a sua espada, mas ela ri. Você vai ignorá-la e continuar (volte para 161), vai conversar com ela (vá para 390) ou usará a sua magia para se livrar dela (volte para 47)?",
   botoes: [
      { texto: "Ignorar e continuar", destino: 161 },
      { texto: "Conversar com ela", destino: 390 },
      { texto: "Usar magia para se livrar dela", destino: 47 }
   ]
};

var p246 = {//batalha
   titulo: "246",
   detalhes: "Você desaparece. Você pode, porém, ainda observar o Calacorm da sua cela. Para sua consternação, a fera não reparou que você sumiu! Você espera pacientemente, mas não adianta, e agora você começa a se preocupar, porque o Encanto em breve perderá o efeito. Você chuta a terra junto a seus pés. A criatura levanta a cabeça e corre para a porta da sua cela. Você não está em parte alguma! Ele abre a porta e entra na cela, mas, ao fazê-lo, seu Encanto começa a se dissipar. \"Tentando me enganar, hein?\", diz o Calacorm, agarrando você. Será preciso agora lutar contra a criatura:",
   combate: { oponente: "Calacorm", habilidade: 9, energia: 8 },
   botoes: [
      { texto: "Venci", destino: 174 } // Destino depende do resultado do combate
   ]
};

var p247 = {
   titulo: "247",
   detalhes: "Eles ficam chocados com seu pedido. Você pragueja ao compreender que não deveria ter revelado sua verdadeira missão a eles. Todos eles tagarelam agitados, por algum tempo, depois voltam-se na sua direção. Juntos, todos eles sopram com força. Para sua surpresa, o sopro deles é como um vento de tempestade, e você é atirado para trás de encontro à parede. Sua cabeça bate na parede áspera e rochosa, e você perde os sentidos. Volte para 234.",
   botoes: [{ texto: "Continuar", destino: 234 }]
};

var p248 = {//possivel fim - encanto
   titulo: "248",
   detalhes: "Um silêncio se espalha pelo aposento. Subitamente, um grito de gelar o sangue nas veias vem de um dos cantos, e um rosto horrível surge no ar, voando na sua direção e gritando enquanto se aproxima. Seus cabelos ficam em pé, e suas pernas tornam-se bambas. De algum modo, você consegue chegar até a porta, abri-la violentamente e disparar por ela. Porém, você se esqueceu que está no alto de uma torre, e que a sacada não tem corrimão... Você se precipita pela borda e cai diretamente. Se você tiver um Encanto da Levitação, volte para 103. Do contrário, você se estatela como um pacote na base da torre, e seu corpo despedaçado solta o último suspiro...",
   botoes: [
      { texto: "Usar Encanto da Levitação", destino: 103 },
      { texto: "Sem Encanto da Levitação", destino: null } // Narrativa indica morte
   ]
};

var p249 = {
   titulo: "249",
   detalhes: "A passagem termina à sua frente em uma porta de madeira. Há um letreiro afixado nela, dizendo 'DESPENSA'. Você cola os ouvidos junto a ela, mas não ouve nada. A porta está trancada. Se você tiver uma Chave de Cobre, poderá tentar usá-la aqui (vá para 392). Do contrário, você pode tentar arrombar a porta (volte para 231), ou retornar para a encruzilhada e seguir pela outra passagem (volte para 55).",
   botoes: [
      { texto: "Usar Chave de Cobre", destino: 392 },
      { texto: "Arrombar a porta", destino: 231 },
      { texto: "Seguir pela outra passagem", destino: 55 }
   ]
};

var p250 = { //fim
   titulo: "250",
   detalhes: "Você se concentra e, diante de seus olhos, começa a se formar um ciclone que cresce e devasta o aposento. Cadeiras, livros e todo tipo de objetos voam pelo ar e são postos a girar em torno do aposento, deixando você intacto. Você dá um passo adiante, mas pára repentinamente ao ouvir um som de uma risada alta. Você olha para o aposento e vê que o Tapete Voador e a Cabeça de Cachorro se transformaram em estátuas de pedra. Um deles provoca você. 'Nós, meu querido aventureiro, somos MIKS. Somos mestres da ilusão. Seus truques primários não podem nos enganar!' O homem, que agora se transformou em uma Cobra, deslizou pelo tapete nesse meio tempo, enroscou-se em volta da sua perna e está cravando os dentes nas suas nádegas. A dor é insuportável, e você desaba no chão, já consciente de que a mordida era venenosa. Tome cuidado com os Miks na sua próxima aventura. Esta terminou aqui...",
   botoes: [{ texto: "Continuar", destino: null }] // Narrativa indica fim da aventura
};

var p251 = {
   titulo: "251",
   detalhes: "Você caminha em frente, entrando em um pátio aberto e espaçoso, circundado por grandes muros. Há várias tochas queimando, e grupos de figuras se movimentam na escuridão. Há um monumento de algum tipo no centro do pátio - talvez uma fonte. Olhando para o outro lado do pátio, você consegue ver o que parece ser a entrada principal da torre. Você:",
   botoes: [
      { texto: "Esgueira-se pela parede na direção da torre, contornando o pátio?", destino: 222 },
      { texto: "Caminha decididamente, atravessando o pátio?", destino: 179 },
      { texto: "Vai na ponta dos pés pelas sombras, na direção de um dos grupos?", destino: 321 }
   ]
};

var p252 = {
   titulo: "252",
   detalhes: "Você laçou cinco ou seis das suas cabeças! Ela luta para se livrar do nó. Com um bote, a Miríade é arrancada da sua mão. Mas, ainda assim, a criatura foi suficientemente ameaçada para permitir que você salte na direção da porta de outro lado do aposento. Volte para 229.",
   botoes: [{ texto: "Continuar", destino: 229 }]
};

var p253 = { // habilidade energia e sorte
   titulo: "253",
   detalhes: "O queijo está realmente maduro demais, mas, ao comê-lo, você se sente estranhamente reconfortado. O sabor, uma vez dentro de sua boca, é muito apreciável, e você come diversos bocados. Você pode acrescentar um ponto de HABILIDADE, três pontos de ENERGIA e um ponto de SORTE por esta refeição, e depois pode sair. Se você decidir tentar a porta da parede de lado esquerdo, volte para 13. Se quiser experimentar a porta oposta à que você entrou, vá para 281.",
   botoes: [
      { texto: "Tentar porta lado esquerdo", destino: 13 },
      { texto: "Experimentar porta oposta", destino: 281 }
   ]
};

var p254 = {//habilidade e energia
   titulo: "254",
   detalhes: "Você rola escada abaixo, atravessa o aposento e finalmente se choca contra a parede do outro lado do salão. Você torce o cotovelo seriamente. Perde por isso um ponto de HABILIDADE e dois pontos de ENERGIA, e depois sobe pela outra escadaria. Volte para 197.",
   botoes: [{ texto: "Continuar", destino: 197 }]
};

var p255 = {//sorte
   titulo: "255",
   detalhes: "A criatura olha para você. Seus olhos se estreitam. Há uma lança longa em suas mãos, que ela rapidamente aponta na sua direção. 'Esta não é a senha!' ela grita e sai para a batalha. Teste a sua Sorte. Se você tiver sorte, pensa rapidamente em um blefe (volte para 198). Se não tiver sorte, você gagueja e a criatura avança para lutar (vá para 290).",
   botoes: [
      { texto: "Blefar (com sorte)", destino: 198 },
      { texto: "Lutar (sem sorte)", destino: 290 }
   ]
};

var p256 = {
   titulo: "256",
   detalhes: "O feiticeiro sorri. 'Então você se juntará a mim!' ele ri. 'Mas primeiro eu preciso garantir a sua lealdade genuína.' A mão dele pousa em sua testa. Ele fecha os olhos e se concentra. Você sente a sua vontade se esvaindo. Seu espírito de luta está abandonando você. Depois de alguns momentos, ele retira a mão. Você está livre na frente dele. Você se inclinará para saudá-lo como seu mestre (volte para 65) ou pegará sua espada e cravará nele (volte para 155)?",
   botoes: [
      { texto: "Saudar como mestre", destino: 65 },
      { texto: "Cravar espada", destino: 155 }
   ]
};

var p257 = {
   titulo: "257",
   detalhes: "Você olha à sua volta no aposento. Está iluminado somente pela sua tocha. Embora seja um aposento bastante grande, possui pouca mobília, com apenas urna grande rocha, cortada de modo a servir de mesa, e uma rocha menor com o formato de urna banqueta. Em um dos cantos, há urna pilha de rochas unidas por uma camada de lama. Você não consegue imaginar qual é a serventia disso, embora haja três arcas de madeira sobre ela. Então, você pula de susto quando sua tocha ilumina uma grande criatura, aparentemente também ela própria feita de rocha, de pé junto a uma porta. Possui aproximadamente uma forma humana, ainda que um tanto maior. Seus olhos estão dirigidos diretamente para você, mas você não consegue ter certeza de que ela esteja de fato vendo você! Você:",
   botoes: [
      { texto: "Correr para a outra porta", destino: 237 },
      { texto: "Tentar falar com a criatura", destino: 357 },
      { texto: "Avançar lentamente nas caixas", destino: 200 }
   ]
};

var p258 = {//ENCANTO
   titulo: "258",
   detalhes: "Nenhuma de suas ofertas é particularmente interessante para estas criaturas, que estão muito mais interessadas em você do que em seus presentes. Você tenta impressiona-las com um Encanto da Ilusão, criando um arco-íris com todas as cores de lado a lado do aposento. Eles ficam fascinados e permitem que você passe para a porta do outro lado - volte para 140. Se você não tiver um Encanto da Ilusão, terá que usar um dos seus outros Encantos para impressioná-los. Se você não possuir nenhum outro Encanto, terá que se aproximar deles – vá para 366.",
   botoes: [
      { texto: "Usar Encanto da Ilusão", destino: 140 },
      { texto: "Usar outro Encanto", destino: 366 }
   ]
};

var p259 = {
   titulo: "259",
   detalhes: "Decepcionada, ela olha enquanto você flutua no ar acima dela. Ela gira em torno de si mesma freneticamente, tentando sugar você para baixo, mas você está fora do alcance dela. Você provoca com um sorriso e um aceno de mão, depois flutua na direção da Torre Negra, aterrissando lado de fora da entrada principal. Volte para 218.",
   botoes: [{ texto: "Continuar", destino: 218 }]
};

var p260 = {
   titulo: "260",
   detalhes: "Depois de alguma insistência, a caixa abre. Há uma chave de prata lá dentro. Você:",
   botoes: [
      { texto: "Usar chave na segunda caixa", destino: 34 },
      { texto: "Usar chave na terceira caixa", destino: 299 },
      { texto: "Pegar a chave e partir para a porta de saída", destino: 237 }
   ]
};

var p261 = {
   titulo: "261",
   detalhes: "O Macaco-Cachorro pede para ver as suas ervas. Por sorte, você tinha apanhado alguns punhados de ervas no caminho, e você mostra isso a eles. Inclinando a cabeça para um lado, a criatura olha para você com desconfiança. Pergunta a você então o nome do guarda que você veio tratar – uma coisa que não estava nos seus planos! Você pensa rapidamente em um nome para enganar a criatura:",
   botoes: [
      { texto: "Kylltrog", destino: 81 },
      { texto: "Pincus", destino: 175 },
      { texto: "Blag", destino: 394 }
   ]
};

var p262 = {//batalha
   titulo: "262",
   detalhes: "Quando você lança o Encanto, um Gark idêntico, armado da mesma maneira, aparece diante de você. A uma ordem sua, a batalha começa:<br> <br> GARK        HABILIDADE 7         ENERGIA 11 <br><br>",
   botoes: [{ texto: "Venci", destino: 180 }]
};

var p263 = {
   titulo: "263",
   detalhes: "Os Calacorms são criaturas confiáveis e conformadas. São répteis grandes, com pele cinzenta, caudas longas e duas cabeças, que tagarelam sem parar uma com a outra. Eles não precisam de muita coisa, tendo poucas ambições na vida além de seus trabalhos, sua comida (eles se alimentam de serpentes mortas) e seus confortos domésticos. Bastante destoante de sua natureza plácida é o grande prazer que sentem com os gritos e a dor das torturas, além de, muito estranhamente, terem um pavor mortal de ratos, apesar de seu tamanho enorme. Vá para 326.",
   botoes: [{ texto: "Continuar", destino: 326 }]
};
var p264 = {// batalha
   titulo: "264",
   detalhes: "Seus grandes músculos se distendem e seguram firmemente o cabo da espada. Você se posiciona e enfrenta o HOMEM-RINO, pronto para a batalha. Por causa de sua força adicional, você pode jogar um dos dados de novo, quando estiver calculando a sua Força de Ataque (isto é, a sua Força de Ataque será o seu índice de HABILIDADE mais a soma de três números obtidos nos dados, ao invés dos dois normais): HOMEM-RINO        HABILIDADE 8         ENERGIA 9",
   inimigo: { tipo: "HOMEM-RINO", habilidade: 8, energia: 9 },
   botoes: [{ texto: "Venci", destino: 177 }]
};

var p265 = {
   titulo: "265",
   detalhes: "Você está em um corredor curto, que termina em uma grande porta de madeira à sua frente. Você tenta a maçaneta, e a porta abre para um grande aposento. Volte para 169.",
   botoes: [{ texto: "Continuar", destino: 169 }]
};

var p266 = {
   titulo: "266",
   detalhes: "Ele não está interessado na sua conversa ou nas suas histórias, e questiona o seu direito de estar ali. Sem aviso prévio, ele se transforma em uma Serpente, silvando para você, e desliza pelo chão na sua direção. Enquanto isso, a Cabeça de Cachorro na parede se desprendeu e está agora flutuando na sua direção pelo ar. Você usará um Encanto contra eles (vá para 310) ou procurará alguma coisa em sua mochila para usar (volte para 54)?",
   botoes: [
      { texto: "Usar Encanto", destino: 310 },
      { texto: "Procurar na mochila", destino: 54 }
   ]
};

var p267 = {//sorte
   titulo: "267",
   detalhes: "Quando você segura o cálice, o líquido fica verde, e depois marrom sujo, diante de seus olhos. Cheira a podre, mas você toma um gole. Com uma careta, você cospe tudo - você está bebendo água lamacenta! Você sai da câmara e se dirige à Cidadela. Volte para 156, mas perde um ponto de SORTE.",
   pontosPerda: { sorte: 1 },
   botoes: [{ texto: "Continuar", destino: 156 }]
};

var p268 = {
   titulo: "268",
   detalhes: "Quando você golpeia a porta, a madeira racha um pouco, mas não cede. Você tenta de novo, e dessa vez a madeira se parte ao meio. Você abre caminho e entra no aposento do outro lado. Volte para 210.",
   botoes: [{ texto: "Continuar", destino: 210 }]
};

var p269 = {
   titulo: "269",
   detalhes: "Os dois homens estão sujos e maltrapilhos. Quando se aproxima, você pode ouvi-los discutindo em voz alta sobre o preço de um punhal. O mais alto deles está obviamente tentando vender o punhal para o outro. Ele argumenta que o punhal é encantado, e vale mais do que o outro está disposto a pagar por ele. Quando você chega mais perto, ele pega você pelo braço e pergunta sua opinião sobre o preço da arma. O que você dirá:",
   botoes: [
      { texto: "Cinco Peças de Ouro?", destino: 205 },
      { texto: "Oito Peças de Ouro?", destino: 186 },
      { texto: "Dez Peças de Ouro?", destino: 225 }
   ]
};

var p270 = {
   titulo: "270",
   detalhes: "Você pode escolher a porta da esquerda ou a da direita. Se preferir a da esquerda, volte para 185. Se quiser tentar a outra porta, volte para 23.",
   botoes: [
      { texto: "Porta da Esquerda", destino: 185 },
      { texto: "Outra Porta", destino: 23 }
   ]
};

var p271 = {//habilidade
   titulo: "271",
   detalhes: "Você aperta a mão dele e se apresenta - e grita quando os nervos da sua mão e braço ficam dormentes! O'Seamus se escangalha de rir. Você perde um ponto de HABILIDADE, uma vez que estava usando seu braço da espada. Você está ficando aborrecido, mas o homenzinho continua a apertar a sua mão e rir. Uma risada vem de trás de você, e você se vira e vê o brincalhão flutuando no ar, sorrindo. Mas você está ainda apertando a mão dele diante de você... ou não está? Na realidade, você compreende agora que está freneticamente apertando a mão de um boneco empalhado que balança juntamente com seu braço enquanto você se movimenta. Você atira o boneco no chão - mas ele está grudado na sua mão! A situação é ridícula, e você está ficando muito zangado. 'Só uma brincadeirinha', diz o Duende. 'Agora, o que posso fazer por você?' Você perguntará a ele o caminho para seguir adiante (vá para 348) ou desembainhará a sua espada (volte para 131)?",
   botoes: [
      { texto: "Perguntar o caminho", destino: 348 },
      { texto: "Desembainhar a espada", destino: 131 }
   ]
};

var p272 = {//mochila
   titulo: "272",
   detalhes: "Você revista os bolsos dele e encontra oito Peças de Ouro. A Miríade de Bolso infelizmente foi danificada na luta, mas talvez você possa encontrar algum uso para ela, podendo levá-la com você. Agora você pode investigar a Adega dos Vinhos (volte para 242), ou atravessá-la e seguir adiante pela porta do outro lado do aposento (volte para 95).",
   botoes: [
      { texto: "Investigar Adega dos Vinhos", destino: 242 },
      { texto: "Atravessar e seguir adiante", destino: 95 }
   ]
};

var p273 = {
   titulo: "273",
   detalhes: "A senha:",
   botoes: [
      { texto: "Cimitarra?", destino: 371 },
      { texto: "Ganjees?", destino: 255 },
      { texto: "Kraken?", destino: 49 }
   ]
};

var p274 = {
   titulo: "274",
   detalhes: "O armário das armas está trancado, mas pode ser facilmente arrebentado. Lá dentro há várias espadas e lanças. Você vai arrebentar a fechadura e escolher uma arma (vá para 353) ou procurará em sua mochila um artefato para usar (vá para 277)?",
   botoes: [
      { texto: "Arrebentar e escolher uma arma", destino: 353 },
      { texto: "Procurar na mochila", destino: 277 }
   ]
};

var p275 = {
   titulo: "275",
   detalhes: "Você reconhece o mecanismo como sendo uma Miríade de Bolso, um objeto encantado que pode se transformar em qualquer tipo de armas e outros artefatos úteis. Vocês dois se preparam para a batalha. Você pode lutar contra ele com sua espada:\n\nELFO NEGRO HABILIDADE 8 ENERGIA 4\n\nOu você pode lançar um Encanto. Se você lançar um Encanto da Fraqueza, a HABILIDADE dele fica reduzida a cinco. Se você lançar um Encanto de Cópia de Criatura, um Elfo Negro idêntico, com uma Miríade de Bolso, lutam contra o Elfo (resolva a batalha entre eles e, se o Elfo Negro original vencer, você terá que liquidá-lo pessoalmente). Se você quiser lançar um Encanto da Ilusão, vá para 399. Se você lutar contra ele e vencer, volte para 272.",
   botoes: [
      { texto: "Lançar Encanto da Ilusão", destino: 399 },
      { texto: 'Venci', destino: 272 }
   ]
};

var p276 = {
   titulo: "276",
   detalhes: "Você cai no fundo de um poço profundo – possivelmente um manancial de água tapado. Você se recompõe e parece estar inteiro. Mas como você vai sair? Cavar apoios para os pés nas paredes do poço com sua espada levaria um tempo enorme. Você poderia lançar um Encanto da Força para ajudá-lo nessa tarefa (volte para 165) ou poderia gritar, pedindo ajuda (volte para 202). Qual dessas possibilidades você escolherá?",
   botoes: [
      { texto: "Lançar Encanto da Força", destino: 165 },
      { texto: "Gritar, pedindo ajuda", destino: 202 }
   ]
};

var p277 = {//mochila
   titulo: "277",
   detalhes: "Você sem dúvida recolheu diversos artefatos no seu caminho através da Cidadela. Você tem alguma das seguintes coisas? Se tiver, poderá usar uma delas agora:\n\nUma Aranha em um vidro Vá para 330\nUma Miríade de Bolso Vá para 315\nPequenas Amoras Volte para 76\n\nSe não tiver nenhuma dessas coisas, volte para 119.",
   botoes: [
      { texto: "Usar Uma Aranha em um vidro", destino: 330 },
      { texto: "Usar Uma Miríade de Bolso", destino: 315 },
      { texto: "Usar Pequenas Amoras", destino: 76 },
      { texto: "Não possuo nenhum", destino: 119 }
   ]
};

var p278 = {//MINIGAME habilidade
   titulo: "278",
   detalhes: "Pedras Mágicas é um jogo um tanto perigoso, mas os Prêmios são altos. Antes do jogo começar, seu Mestre de Jogos, que é um aprendiz de feiticeiro, lança um encanto sobre uma rocha, que fará com que ela exploda em algum momento posterior. Os jogadores ficam em círculo e passam a pedra de um para o outro, percorrendo a roda. Quando a pedra explode, o jogador que a estiver segurando está fora do jogo - e termina com as mãos bastante machucadas! Os jogadores que permanecem recebem outra Pedra Mágica para passar de um para o outro, e o jogo continua até que só reste um jogador. Os espectadores apostam nos jogadores, mas, antes de apostar, eles têm que contribuir com três Peças de Ouro para o dinheiro do prêmio. Neste jogo, você poderá ganhar trinta e seis Peças de Ouro, com risco de ferir suas mãos. Tendo escolhido esta opção, você terá que participar do jogo pelo menos uma vez, mas poderá continuar a jogar por tanto tempo quanto quiser. Se vencer, poderá tomar posse de trinta e seis Peças de Ouro por cada um dos jogos que participar. Se perder, terá que deduzir dois pontos de HABILIDADE e quatro pontos de ENERGIA por cada jogo.\n\nJoga-se da seguinte maneira: lance um dado para saber quantos outros jogadores se juntarão a você. Dê uma letra para cada jogador (A, B, C, etc. - você é o jogador A) e escreva tudo em uma folha de papel, na forma de um círculo. Depois, jogue outro dado para cada jogador para ver quem começa com a pedra (o número maior começa).\n\nJogue dois dados para o primeiro jogador, que tem que obter menos de doze. Siga adiante para o próximo jogador, que tem que tirar menos de onze. O terceiro jogador tem que obter menos de dez, e assim por diante. Desloque o seu lápis de letra para letra em volta do círculo para ter controle de quem está com a Pedra Mágica. Quando um jogador obtiver um número maior do que o limite estabelecido, a pedra explode, e este jogador está fora.\n\nComeça então tudo de novo (isto é, o número limite volta a ser doze), sem o perdedor. Se algum jogador tirar um número igual ao limite, a pedra explode na passagem, e você terá que repetir a rodada.\n\nQuando você tiver jogado o suficiente, poderá jogar Escolha de Seis (volte para 171), Faca- Faquinha (vá para 365) ou poderá sair do salão de jogos (volte para 31).",
   botoes: [
      { texto: "Jogar ESCOLHA DE SEIS", destino: 171 },
      { texto: "Jogar FACA-FAQUINHA", destino: 365 },
      { texto: "Sair do salão de jogos", destino: 31 }
   ]
};

var p279 = {
   titulo: "279",
   detalhes: "Você flutua no ar. O aposento continua a sacudir à sua volta, mas você pode voar livremente. Poderá se movimentar para onde quiser no aposento:\n\nPara o armário de armas? Volte para 44\nContornar rapidamente para trás do feiticeiro? Vá para 318\nNa direção da janela? Volte para 78\nPara baixo da mesa? Vá para 335",
   botoes: [
      { texto: "Ir para o armário de armas", destino: 44 },
      { texto: "Contornar rapidamente para trás do feiticeiro", destino: 318 },
      { texto: "Ir na direção da janela", destino: 78 },
      { texto: "Ir para baixo da mesa", destino: 335 }
   ]
};

var p280 = {
   titulo: "280",
   detalhes: "A criatura está atacando você impiedosamente, e não há nada que você possa fazer para evitar isso. Sua perna está coberta de sangue, e a dor é arrasadora. Você luta com a cabeça que não está vendo, mas não adianta nada. A criatura salta sobre o seu pescoço, e sua última lembrança, antes de perder os sentidos, é de suas mandíbulas se fechando sobre a sua garganta. Vá para 323.",
   botoes: [{ texto: "Continuar...", destino: 323 }]
};

var p281 = {
   titulo: "281",
   detalhes: "Você abre a porta para outro aposento e surpreende quatro pequenas criaturas sentadas no chão nu. Elas levantam-se rapidamente, chocadas com a sua chegada. Você:",
   botoes: [
      { texto: "Desembainha a sua espada e se prepara para atacar?", destino: 382 },
      { texto: "Diz a eles que está só de passagem?", destino: 285 },
      { texto: "Tenta entabular uma conversa com eles?", destino: 356 }
   ]
};

var p282 = {//energia
   titulo: "282",
   detalhes: "Você lança uma pequena bola de fogo diretamente sobre a Cobra de Esgoto, que queima seu corpo, cortando-a em duas metades. As duas metades agora atacam você e estão esmagando o seu peito. Você perde dois pontos de ENERGIA. Tentando uma estratégia diferente, você cria chamas que queimam em cada mão e as esfrega sobre os anéis de seu corpo enroscado. A criatura se contorce violentamente e afrouxa a pressão! Você encontra sua cabeça e a espreme com as suas mãos flamejantes, queimando-a fatalmente. Volte para 112.",
   botoes: [{ texto: "Continuar", destino: 112 }]
};

var p283 = {// fim de jogo
   titulo: "283",
   detalhes: "Sem magia, o seu destino está selado. Você está fadado a passar o resto dos seus dias como prisioneiro na Cidadela do Caos.\n\nVocê fracassou na sua missão.",
   botoes: [{ texto: "Recomeçar a jornada...", destino: 0 }]
};

var p284 = {//encanto
   titulo: "284",
   detalhes: "Você lança o Encanto (elimine-o da sua Lista de Encantos) e começa a sair do chão. O tentáculo não solta, e a dor em sua perna se torna insuportável. Você resolve retornar ao solo antes que a sua perna seja arrancada do corpo. Você terá que lutar contra ele com sua espada (volte para 71), ou lançar um Encanto do Fogo (volte para 114).",
   botoes: [
      { texto: "Lutar contra o tentáculo com a espada", destino: 71 },
      { texto: "Lançar um Encanto do Fogo", destino: 114 }
   ]
};

var p285 = {
   titulo: "285",
   detalhes: "Você diz a eles que não pretende fazer nenhum mal, está apenas prosseguindo em seu caminho. Eles suspiram aliviados. O aposento é esparsamente decorado com pedaços de folhagem, e um pequeno fogo queima sob um orifício no teto em um dos cantos. Há duas portas na parede oposta. As pequenas criaturas dizem que você pode seguir adiante em seu caminho tanto por uma ponta quanto pela outra. Você escolhe a porta da esquerda (volte para 185) ou a porta da direita (volte para 23)?",
   botoes: [
      { texto: "Escolher a porta da esquerda", destino: 185 },
      { texto: "Escolher a porta da direita", destino: 23 }
   ]
};

var p286 = {
   titulo: "286",
   detalhes: "As pequenas criaturas guincham e se amontoam quando você se aproxima. Você passa todas a fio de espada, mas eles não oferecem nenhuma resistência! Você fica um pouco desconfiado com essa batalha tão fácil e dirige-se para a porta do outro lado do aposento. Volte para 140.",
   botoes: [{ texto: "Continuar", destino: 140 }]
};

var p287 = {
   titulo: "287",
   detalhes: "Você oferece o Vidro do Unguento. Alguma coisa invisível arranca-o da sua mão e leva-o na direção de uma das cabeças de animais. Mãos invisíveis desatarraxam a tampa, e a cabeça fareja o unguento lá dentro. Voltando-se para você, a cabeça exclama: 'Ora, isso é apenas um bálsamo curativo de alquimista! Para que precisamos disso?' O Vidro cai no chão e se parte. Você pode:",
   botoes: [
      { texto: "Oferecer uma Miríade de Bolso", destino: 160 },
      { texto: "Oferecer algumas Peças de Ouro", destino: 27 },
      { texto: "Bater em rápida retirada e tentar a outra porta", destino: 25 }
   ]
};

var p288 = {//encanto
   titulo: "288",
   detalhes: "As duas criaturas avançam. O Macaco-Cachorro ataca você primeiro, seguido pelo Cachorro-Macaco. Você lançará um encanto ou se manterá firme e lutará? Você poderá lançar: <br><br>Macaco-Cachorro   	HABILIDADE 7   	ENERGIA 4 <br><br> Cachorro-Macaco	HABILIDADE 6	ENERGIA 6",
   botoes: [
      { texto: "Um Encanto da Força", destino: 162 },
      { texto: "Um Encanto da Levitação", destino: 86 },
      { texto: "Venci a batalha", destino: 32 },
   ]
};

var p289 = {//mochila
   titulo: "289",
   detalhes: "O que você tirará de sua mochila?",
   botoes: [
      { texto: "Um Espelho de Prata?", destino: 340 },
      { texto: "Um Frasco de Essência de Erva de Porco?", destino: 214 },
      { texto: "Um Vidro de Unguento?", destino: 305 },
      { texto: "Não possuo nenhum", destino: 304 }
   ]
};

var p290 = {//encanto
   titulo: "290",
   detalhes: "O HOMEM-RINO dá um passo adiante e desfere uma estocada com sua lança na sua direção. Você pula rapidamente e se desvia. Embora ele não esteja usando uma armadura, seu couro grosso parece ser proteção suficiente. Você tem que decidir se o enfrenta em combate ou usa a sua magia. Você desembainha a sua espada (vá para 325) ou tenta um encanto? Você pode usar:",
   botoes: [
      {texto: "Desembanhar espada", destino: 325 },
      { texto: "Um Encanto da Fraqueza", destino: 307 },
      { texto: "Um Encanto da Levitação", destino: 70 },
      { texto: "Um Encanto da Força", destino: 264 }
   ]
};

var p291 = {
   titulo: "291",
   detalhes: '"O que é isso?" pergunta uma voz fantasmagórica. Você negocia com eles. Você deixará que eles fiquem com o unguento, se eles deixarem você passar pelo aposento, já que você não está interessado neles. Uma fantasmagórica mão aparece do nada e tenta arrancar o vidro da sua mão, mas você o guarda rapidamente. "É de fato o Unguento da Cura", você ouve uma das vozes dizendo baixo. "Aceitamos a sua oferta", diz uma voz. "Deixe o Vidro onde você está e saia do aposento por esta porta". Uma porta do outro lado brilha suavemente. Você não confia neles e leva o Vidro com você até a porta. Quando você abre a porta, atira o Vidro para o outro lado do aposento e sai rapidamente. Vá para 328."',
   botoes: [
      { texto: "Continuar", destino: 328 },
   ]
};

var p292 = {//encanto
   titulo: "292",
   detalhes: "O aposento é um elegante quarto de dormir suntuosamente decorado com rendas finas e um tapete de pele. No centro do aposento, há uma grande cama de quatro colunas. Sentada e recostada na cama, evidentemente acordada pela agitação toda, está uma linda mulher, com uma aparência de sílfide, longos cabelos negros e olhos profundos e penetrantes. 'Que direito você tem de entrar aqui?' ela grita. Com estas palavras seus olhos ficam vermelhos como sangue e dois jatos de fogo líquido jorram deles diretamente sobre você. Você:",
   botoes: [
      { texto: "Cria um Encanto do Escudo para se proteger?", destino: 376 },
      { texto: "Sai do aposento rapidamente e experimenta a porta ao lado?", destino: 64 },
      { texto: "Diz ter um presente especial para ela?", destino: 42 }
   ]
};

var p293 = {
   titulo: "293",
   detalhes: "Em cima da hora, seu Encanto trava o Tridente em pleno vôo, horrivelmente próximo a seu pescoço. Ele cai no chão. Vá para 374.",
   botoes: [
      { texto: "Continuar", destino: 374 },
   ]
};

var p294 = {
   titulo: "294",
   detalhes: "O Gark se recompõe, abaixa o machado e começa a se desculpar com você por estar dormindo no posto. Por insistência dele, você concorda em não dizer nada a ninguém. A criatura se oferece para levar a sua túnica, mas você recusa o oferecimento e segue em frente. Volte para 99.",
   botoes: [
      { texto: "Continuar", destino: 99 },
   ]
};

var p295 = {
   titulo: "295",
   detalhes: "Você se concentra e começa a se transformar em um Escorpião Gigante. O Anão e o Goblin interrompem seus passos, mas o Orca se comporta como se nada tivesse acontecido. Os outros dois vêem você picar o Orca com sua cauda, mas o Orca nem se abala e chama os outros dois. Vendo que você não causou mal algum, eles sacodem suas cabeças e olham de novo, vendo então o verdadeiro você. O Orca tenta segurar você. Volte para 213.",
   botoes: [
      { texto: "Continuar", destino: 213 },
   ]
};

var p296 = {
   titulo: "296",
   detalhes: "A chave gira e a porta abre. Volte para 292.",
   botoes: [
      { texto: "Continuar", destino: 292 },
   ]
};

var p297 = {
   titulo: "297",
   detalhes: "Você bate a porta, fechando-a atrás de você, e, juntamente com alarme estridente, você ouve o som de passos, correndo rapidamente e se aproximando. O corredor à sua frente se bifurca. Você dispara e segue pelo caminho da esquerda (vá para 316) ou o da direita (volte para 2) - ou prefere retornar pela porta e chamar o mordomo (volte para 75)?",
   botoes: [
      { texto: "Caminho da esquerda ", destino: 316 },
      { texto: "Caminho da direita", destino: 2 },
      { texto: "Retornar pela porta e chamar o mordomo", destino: 75 }
   ]
};

var p298 = {
   titulo: "298",
   detalhes: "Quando suas mãos se fecham em torno do cálice, ele começa a efervescer e espumar, respingando em você quando você o ergue até seus lábios. Você tem certeza de que quer provar isso? Se não, volte para 58 e escolha outra coisa - mas se você estiver determinado, volte para 141.",
   botoes: [
      { texto: "Tenho certeza", destino: 141 },
      { texto: "Não tenho certeza", destino: 58 }
   ]
};


var p299 = {
   titulo: "299",
   detalhes: "A chave não gira, por mais que você tente. Na sua frustração, você atira a caixa no chão - e ela desaparece! Você procura à sua volta pela caixa invisível, mas não consegue achá-la em lugar nenhum. Em desespero total, você se vira na direção da porta e parte mais uma vez para a sua meta.",
   botoes: [
      { texto: "Continuar", destino: 237 }
   ]
};

var p300 = {//energia
   titulo: "300",
   detalhes: "Jogue um dado. Se você tirar um, dois ou três, então este número de facas atinge você (cada faca significa dois pontos a menos de ENERGIA). Se tirar um quatro, cinco ou seis, então elas não acertam você. Você tem que preparar-se para contra-atacar, seja com um Encanto da Ilusão (volte para 244), seja desembainhando a sua espada.",
   botoes: [
      { texto: "Lutar", destino: 346 },
      { texto: "Usar Encanto de Ilusão", destino: 244 }
   ]
};

var p301 = {
   titulo: "301",
   detalhes: "Você sente a força se espalhando pelo seu corpo. Você tenta lutar com a cabeça desta criatura, mas sua própria força parece ter também crescido e se igualado à sua. Sua perna está agora inútil e coberta de sangue. Sua força começa a se esvair e, quando isso acontece, as mandíbulas da criatura se fecham sobre a sua garganta. A consciência vai sumindo.",
   botoes: [
      { texto: "Continuar", destino: 323 }
   ]
};

var p302 = {
   titulo: "302",
   detalhes: "Elas ordenam que você leve uma bandeja de comida por uma porta na parede do outro lado para o Grande Salão e a deixe na mesa, pois os Ganjees logo estarão lá para ceia. Elas também advertem você para que não espere pelo Ganjees, ou provavelmente você terminará sendo a próxima refeição. Você leva a bandeja e sai pela porta distante. Feliz por ter saído da repulsiva cozinha delas, você segue uma passagem adiante, pára para deixar a bandeja e continua para uma outra porta. Você experimenta a maçaneta e ela gira.",
   botoes: [
      { texto: "Continuar", destino: 169 }
   ]
};

var p303 = {//habilidade e batalha
   titulo: "303",
   detalhes: "O Golem avança, e você o golpeia com sua espada, mas ela atinge uma rocha sólida e retine ruidosamente. Você terá que resolver esta batalha e deduzir um ponto de HABILIDADE durante a luta: <br><br> GOLEM        HABILIDADE 8         ENERGIA 10",
   botoes: [
      { texto: "Venci", destino: 147 }
   ]
};

var p304 = {
   titulo: "304",
   detalhes: "A porta se abre, e você penetra no aposento. É bastante grande e está decorado com vários entalhes. Parece ser alguma coisa como o estúdio de um artista, e há diversas estátuas inacabadas de pedra alinhadas na parede. No centro do aposento, há um grande GÁRGULA de pedra sobre uma caixa entalhada em pedra. Quando você entra no aposento, a criatura faz ruído ao virar a cabeça na sua direção. Lentamente, ele desperta para a vida, descendo do seu pedestal. Está bloqueando o seu caminho pelo aposento para uma porta do outro lado.",
   botoes: [
      { texto: "Desembainhar a sua espada e avançar?", destino: 172 },
      { texto: "Preparar-se para lançar um Encanto?", destino: 26 },
      { texto: "Procurar em sua mochila alguma coisa para usar?", destino: 289 },
      { texto: "Sair rapidamente deste aposento e tentar a porta de meio?", destino: 64 }
   ]
};

var p305 = {//energia
   titulo: "305",
   detalhes: "Você joga o Vidro no Gárgula. Ele se parte, mas não causa nenhum dano. A criatura dá um soco em você que o atinge no peito, jogando você no chão. Você perde dois pontos de ENERGIA. É melhor você sair deste aposento rapidamente e seguir pela sacada para a porta do meio.",
   botoes: [
      { texto: "Continuar", destino: 64 }
   ]
};

var p306 = {
   titulo: "306",
   detalhes: "A uma pequena distância, há uma porta que bloqueia a passagem. Na realidade, é apenas uma meia- porta, e chega só até a cintura em você. Um letreiro na porta aponta para adiante e diz 'Somente Jogadores'. Você vai empurrar e abrir esta porta (volte para 52) ou voltará e entrará no aposento da porta ornamentada (volte para 132)?",
   botoes: [
      { texto: "Empurrar e abrir esta porta", destino: 52 },
      { texto: "Entrar no aposento da porta ornamentada", destino: 132 }
   ]
};

var p307 = {//energia e batalha
   titulo: "307",
   detalhes: "Quando você lança o Encanto, a criatura avança sobre você e fere seu braço com a lança. Você perde dois pontos de ENERGIA. Depois o Encanto da Fraqueza começa a fazer efeito. A criatura fica lenta e começa a bufar e ofegar. Você desembainha a sua espada e avança para liquidá-la.<br><br> HOMEM-RINO         HABILIDADE 4         ENERGIA 7 <br><br>",
   botoes: [
      { texto: "VENCI", destino: 177 }
   ]
};

var p308 = {
   titulo: "308",
   detalhes: "A maçaneta gira e você entra em um cômodo às escuras.",
   botoes: [
      { texto: "Continuar", destino: 257 }
   ]
};

var p309 = {//mini game
   titulo: "309",
   detalhes: "Vocês dois revistam os bolsos do homem alto. Você encontra vinte Peças de Ouro, as quais vocês repartem igualmente, e tiram a sorte para ver quem fica com o punhal; cara, você leva, coroa, ele leva (jogue uma moeda para isso). Se você ficar com o punhal, volte para 15. Se não, volte para 245.",
   botoes: [
      { texto: "Cara", destino: 15 },
      { texto: "Coroa", destino: 245 }
   ]
};

var p310 = {//encanto
   titulo: "310",
   detalhes: "Você usará:",
   botoes: [
      { texto: "Um Encanto de Cópia de Criatura?", destino: 181 },
      { texto: "Um Encanto da Ilusão?", destino: 250 },
      { texto: "Um Encanto de Percepção Extra-Sensorial?", destino: 393 },
      { texto: "Não possuo nenhum encanto", destino: 104 }
   ]
};

var p311 = {//encanto
   titulo: "311",
   detalhes: "Você se concentra ao máximo, murmurando as palavras mágicas do seu Encanto. Uma das velhas nota sua atitude e grita para as outras duas. Você lança seu Encanto – mas nada acontece! Você olha para as velhas bruxas, que estão sorrindo para você. 'Não podemos permitir que você use magia contra o nosso bichinho de estimação'; diz uma delas. Você desperdiçou um Encanto. Elimina um (à sua escolha) da sua lista de Encantos. Agora o Devlin está praticamente em cima de você, e você terá que se abaixar para se proteger (volte para 178) ou desembainhar a sua espada (volte para 61).",
   botoes: [
      { texto: "Se abaixar para se proteger", destino: 178 },
      { texto: "Desembainhar a sua espada", destino: 61 }
   ]
};

var p312 = {
   titulo: "312",
   detalhes: "Você segura o seu Espelho no alto. Isso parece ter pouco efeito sobre a criatura, que continua a avançar. Uma das cabeças se projeta e derruba o espelho, despedaçando-o no chão. Você tenta decidir o que fazer em seguida.",
   botoes: [
      { texto: "Continuar", destino: 184 }
   ]
};

var p313 = {//energia e encanto
   titulo: "313",
   detalhes: "A fruta é doce e suculenta. Você come uma, depois outra - o sabor é delicioso! Você ganha dois pontos de ENERGIA. Mas, para sua surpresa, quando você tenta limpar a garganta depois, nenhum som sai da sua boca. Você comeu uma Fruta do Silêncio. Seu efeito peculiar é apenas temporário, mas você não será capaz de falar adequadamente por algum tempo, embora consiga se fazer entender, apesar de uma certa dificuldade. Isso significa, na prática, que não poderá usar a sua magia (da próxima vez que for dada uma opção de Encantos), mas, depois disso, voltará ao normal. Você pode continuar pela porta da parede à esquerda (volte para 13), ou pela porta oposta a que você acabou de usar para entrar (volte para 281).",
   botoes: [
      { texto: "Continuar pela porta da parede à esquerda", destino: 13 },
      { texto: "Continuar pela porta oposta", destino: 281 }
   ]
};

var p314 = {
   titulo: "314",
   detalhes: "Você tenta se concentrar, criando a ilusão de que o feiticeiro está igualmente em um aposento que sacode. O Encanto é lançado (e você tem que eliminá-lo de sua lista), mas não faz efeito; você não consegue se concentrar totalmente. Balthus Dire está quase em cima de você.",
   botoes: [
      { texto: "Continuar", destino: 373 }
   ]
};

var p315 = {//habilidade
   titulo: "315",
   detalhes: "Balthus Dire cai em um estado de concentração, enquanto você brinca com a sua Miríade de Bolso. Você aperta um botão, e sai dela uma luz cintilante, que se estende até o comprimento de uma espada. Isso é uma Espada Solar e acrescentará quatro pontos à sua HABILIDADE quando você lutar com ela! Você se volta para enfrentar o feiticeiro, que está se concentrando em um Encanto há algum tempo.",
   botoes: [
      { texto: "Continuar", destino: 191 }
   ]
};

var p316 = {//sorte
   titulo: "316",
   detalhes: "As passadas que você ouviu - que realmente deveriam ser chamadas de 'mãozadas' – pertencem a três GIRAS, que agora rolam descendo a passagem na sua direção, o que faz com que você recue de volta para a porta. Estas criaturas são animais peculiares que têm, ao invés de pernas, um segundo par de mãos. Eles se deslocam dando cambalhotas a um ritmo bem acelerado. Suas cabeças - ou pelo menos seus rostos - estão colocados no centro do peito. Embora não sejam muito práticos como espadachins, tendo em vista seus meios de movimentação inadequados, são excelentes lançadores de facas. Pegando facas em seus cintos enquanto se movimentam em círculos, eles podem dispará-las em velocidade de fogo rápido, como rodas-de-santa-catarina. No momento, três facas desse tipo estão cruzando o ar na sua direção. Você pode usar um Encanto do Escudo para se proteger (volte para 220), ou Testar a sua Sorte. Se você optar por esta última alternativa e tiver sorte, volte para 139. Se não tiver, volte para 300.",
   botoes: [
      { texto: "Usar Encanto do Escudo", destino: 220 },
      { texto: "Tive sorte", destino: 139 },
      { texto: "Não tive sorte", destino: 300 }
   ]
};

var p317 = {//sorte e energia
   titulo: "317",
   detalhes: "Os quadros são retratos de vários Senhores e Condes de destaque no Reino da Rocha Escarpada. Atrás de uma cadeira, na cabeceira da mesa, há um retrato do próprio Balthus Dire. Ele realmente aparenta ser um adversário poderoso. Acrescente um ponto de SORTE pela advertência da sua aparência, mas você terá que perder um ponto de ENERGIA pelo medo que ele inspira. Você pode agora continuar pela escadaria do lado esquerdo (volte para 19), ou pela escadaria do lado direito (volte para 197).",
   botoes: [
      { texto: "Continuar pela escadaria do lado esquerdo", destino: 19 },
      { texto: "Continuar pela escadaria do lado direito", destino: 197 }
   ]
};

var p318 = {
   titulo: "318",
   detalhes: "O feiticeiro está demonstrando sinais de exaustão mental e reage com lentidão quando você pára atrás dele. Você nota que ele está usando um anel de ouro com um grande rubi incrustado no dedo indicador da sua mão direita, que pende a seu lado. Você pode ou tentar arrancar o anel do dedo dele (vá para 381), desembainhar rapidamente a sua espada, ou procurar em sua mochila um artefato para usar (volte para 277).",
   botoes: [
      { texto: "Tentar arrancar o anel do dedo dele", destino: 381 },
      { texto: "Desembainhar a sua espada ou procurar em sua mochila um artefato para usar", destino: 277 }
   ]
};

var p319 = {//energia
   titulo: "319",
   detalhes: "Você se concentra no seu braço. Ele começa a endurecer e adquire a cor metálica e fosca do ferro. Os olhos do velho ficam arregalados ao ver seu antebraço de ferro. Você luta para se livrar, mas ainda assim os dentes dele continuam cravados. Você perde dois pontos de ENERGIA e tem que eliminar o Encanto da Ilusão. A sua ilusão evidentemente foi pouco convincente. Você lança mão da sua espada. Vá para 333.",
   botoes: [
      { texto: "Continuar", destino: 333 }
   ]
};

var p320 = {//encanto
   titulo: "320",
   detalhes: "Você se concentra fortemente, mas, por mais que tente, não consegue interceptar nenhum dos pensamentos de Balthus Dire - ele está bloqueando o seu Encanto! Você pode continuar com um Encanto da Ilusão (vá para 332), um Encanto da Fraqueza (volte para 113) ou pode desembainhar a sua espada para atacá-lo (vá para 351).",
   botoes: [
      { texto: "Continuar com Encanto da Ilusão", destino: 332 },
      { texto: "Continuar com Encanto da Fraqueza", destino: 113 },
      { texto: "Desembainhar a sua espada", destino: 351 }
   ]
};

var p321 = {
   titulo: "321",
   detalhes: "Cautelosamente, e mantendo-se fora da área visível, você se esgueira pelas bordas do pátio na escuridão. Há dois grupos de criaturas à sua frente. À direita, você pode ver duas figuras de aparência humana conversando sob uma tocha presa à parede. À esquerda, um grupo de quatro criaturas, de variadas formas e tamanhos, está sentado em volta de uma fogueira, comendo. Você abordará os dois embaixo da tocha (volte para 269) ou o grupo em volta da fogueira (vá para 339)?",
   botoes: [
      { texto: "Abordar os dois embaixo da tocha", destino: 269 },
      { texto: "Abordar o grupo em volta da fogueira", destino: 339 }
   ]
};

var p322 = {//mochila
   titulo: "322",
   detalhes: "O que você vai tirar de sua mochila?",
   botoes: [
      { texto: "Uma Aranha em um Vidro?", destino: 39 },
      { texto: "Um Amuleto Encantado?", destino: 168 },
      { texto: "Um Vidro de Unguento?", destino: 291 },
      { texto: "Desembainhar a sua espada e enfrentá-los", destino: 248 }
   ]
};

var p323 = {//mochila
   titulo: "323",
   detalhes: "Você desperta e olha em torno de si. À medida que sua memória volta, você fica admirado de estar vendo. A sua perna está sensível, mas não há ferimento! Você ouve um risinho frouxo vindo de um lugar acima de você e subitamente a coisa toda faz sentido...\n\nAutuando acima de você está O'Seamus, agora rindo alto. A coisa toda foi uma grande brincadeira! Você fica furioso e salta de pé, mas, ao olhar para o engraçado homenzinho que rola pelo ar em gargalhadas histéricas, você não tem remédios e não ver o lado engraçado da coisa também. Você dá um risinho, depois mais uma risada, e acaba rindo alto. Por algum tempo, vocês dois se acabam de dar gargalhadas, até que as lágrimas rolam pelos seus rostos.\n\nQuando os dois conseguem se controlar, vocês acabam se sentando para conversar. Ele é um homenzinho agradável. Antes de você sair, ele diz: 'Você é realmente um cara legal. O caminho à sua frente, porém, está cheio de perigos. Mas talvez estas coisas possam ajudá-lo.' Com um movimento da mão, ele faz com que apareçam uma espada e um prato na mesa. A espada é uma espada mágica de batalha que acrescentará um ponto ao resultado dos dados quando você estiver determinando a sua Força de Ataque. O prato é, na realidade, um Espelho de Prata de excelente qualidade. Você pode levar essas coisas com você, mas terá que deixar a sua espada velha para trás. Saia do aposento pela:\n\nPorta de maçaneta de latão? Vá para 386\nPorta de maçaneta de cobre? Volte para 144\nPorta de maçaneta de bronze? Vá para 338",
   botoes: [
      { texto: "Porta de maçaneta de latão", destino: 386 },
      { texto: "Porta de maçaneta de cobre", destino: 144 },
      { texto: "Porta de maçaneta de bronze", destino: 338 }
   ]
};

var p324 = {
   titulo: "324",
   detalhes: "\"Você não pode se esconder de mim!\" ele grita. Isso é de fato verdade, e você toma consciência de que poderia estar em perigo, uma vez que você não consegue vê-lo. Vá para 369.",
   botoes: [
      { texto: "Continuar", destino: 369 }
   ]
};

var p325 = {//batalha
   titulo: "325",
   detalhes: "A criatura é um tanto volumosa e desajeitada, e fica bufando furiosamente enquanto você se esquiva de seus golpes. Você desembainha a sua espada e luta:\n\nHOMEM-RINO HABILIDADE 8 ENERGIA 9\n\nSe você derrotá-la, poderá entrar na Cidadela. Volte para 177.",
   botoes: [
      { texto: "VENCI", destino: 177 },
      { texto: "PERDI", destino: 0 }
   ]
};

var p326 = {
   titulo: "326",
   detalhes: "Você recoloca o livro no lugar. Você continuará folheando livros (volte para 84) ou sairá pela porta do outro lado, atrás do bibliotecário (volte para 31)?",
   botoes: [
      { texto: "Continuar folheando livros", destino: 84 },
      { texto: "Sair pela porta atrás do bibliotecário", destino: 31 }
   ]
};

var p327 = {//inventario
   titulo: "327",
   detalhes: "Eles pegam a sua Miríade de Bolso e brincam com ela alegremente. Enquanto eles estão devidamente distraídos, você pode esgueirar-se, passando por eles, na direção da porta. Vá para 366. Risque seu presente da sua Lista de Equipamentos.",
   botoes: [
      { texto: "Passar por eles em direção à porta", destino: 366 }
   ]
};

var p328 = {//encanto
   titulo: "328",
   detalhes: "Você fecha a porta atrás de você e chega ao pé de outra escadaria, que sobe em espirais para o interior da torre. Subindo os degraus, você chega a uma outra sacada, onde uma única porta é a alternativa que existe para seguir adiante. Ao experimentar a porta, ela abre facilmente. Mas, quando você empurra a porta, um ruído alto de silvos vem lá de dentro. Você entra e fica gelado, ao ver uma imensa HIDRA de seis cabeças se arrastando na sua direção sobre os corpos das vítimas anteriores! Suas seis cabeças de serpente atacam você com seus dentes aguçados e cruéis. Você fica encurralado em um canto. O que você fará:\n\nDesembainhará a sua Espada e lutará contra a criatura? Volte para 67\nUsará um Encanto de Cópia de Criatura? Volte para 143\nUsará alguma coisa da sua mochila? Volte para 226",
   botoes: [
      { texto: "Lutar contra a criatura", destino: 67 },
      { texto: "Usar um Encanto de Cópia de Criatura", destino: 143 },
      { texto: "Usar algo da sua mochila", destino: 226 }
   ]
};

var p329 = {
   titulo: "329",
   detalhes: "Você se concentra na mente dela e fica chocada ao descobrir que ela não está viva, como parece, mas que já morreu há muitos anos. Desde que um incêndio violento - uma maldição lançada sobre ela por Balthus Dire em pessoa, por ela não ter cumprido as ordens de lavar suas vestes a tempo para uma reunião importante - matou-a e às suas crianças, seu corpo espectral foi condenado a lavar roupas eternamente. Ela é de fato uma pobre miserável. Você agora repara que ela está ficando zangada e desconfiada com a sua presença. Ela está murmurando alguma cantilena muito baixo. Você tentará conversar com ela (volte para 21) ou tentará passar rapidamente por ela seguindo o caminho (volte para 221)?",
   botoes: [
      { texto: "Conversar com ela", destino: 21 },
      { texto: "Passar rapidamente pelo caminho", destino: 221 }
   ]
};

var p330 = {//batalha especial
   titulo: "330",
   detalhes: "O feiticeiro grita de pavor quando você exibe o Vidro. Sentindo que esta pequena criatura pode ser um aliado valioso, você abre o Vidro e a solta. A expressão do feiticeiro se transforma em um sorriso dissimulado e, enquanto você observa, o pequeno Homem-Aranha avança, não na direção de Balthus Dire, mas na sua direção! Você terá que lutar contra ele:\n\nHOMEM-ARANHA HABILIDADE 7 ENERGIA 5\n\nLogo que a criatura causar algum ferimento em você, volte para 208. Se você a derrotar sem sofrer ferimentos, volte para 119.",
   botoes: [
      { texto: "Tive ferimentos", destino: 208 },
      { texto: "Derrotei a criatura sem sofrer ferimentos", destino: 119 }
   ]
};

var p331 = {//habilidade e energia
   titulo: "331",
   detalhes: "Os dentes afiados do Peixe Abocanhador cravam-se no seu rosto e nariz, quando você tenta se esquivar. Você perde um ponto de HABILIDADE e três pontos de ENERGIA enquanto trata da sua face ensanguentada. As três velhas bruxas aproximam-se de você, contornando o caldeirão, e empurram você na direção da porta do outro lado da cozinha. Colocando você porta afora, elas insultam e provocam você. Volte para 265.",
   botoes: [
      { texto: "Continuar", destino: 265 }
   ]
};

var p332 = {
   titulo: "332",
   detalhes: "O queixo de Balthus Dire cai quando acontece uma transformação diante dos olhos dele. Seu corpo cresce de tamanho e força. Sua pele passa a ser de um vermelho vivo, e nascem chifres da pele esticada de sua testa. Seus dentes são afiados espinhos negros, e sua língua, agora bipartida, silva ameaçadoramente na direção dele. Você agora aparece diante dele como um DEMÔNIO DO FOGO, e você agarra o Tridente que está no chão para servir de arma para você. O feiticeiro foge de você horrorizado. Você pode saltar por sobre a mesa para atacá-lo (volte para 80) ou exigir que ele cancele seus planos de conquista e se renda a você (volte para 48).",
   botoes: [
      { texto: "Atacar saltando sobre a mesa", destino: 80 },
      { texto: "Exigir rendição", destino: 48 }
   ]
};

var p333 = {//energia
   titulo: "333",
   detalhes: "Você desembainha a sua espada e se prepara para cortá-lo em pedaços. Ele levanta os olhos para você com uma expressão que faz com que acredite que ele não está completamente no controle das suas ações. Com pena, você bate na cabeça dele com o cabo da espada, fazendo com que ele uive e solte o seu braço. Você o deixa gemendo no chão, cuidando da sua cabeça. Você perde mais dois pontos de ENERGIA pelo dano que ele causou ao seu braço e segue adiante. Volte para 14.",
   botoes: [
      { texto: "Continuar", destino: 14 }
   ]
};

var p334 = {
   titulo: "334",
   detalhes: "Você toma dois goles. Não é ruim! Você enche a boca, mas, ao fazê-lo, fica imaginando porque o Elfo está rindo. De repente, ele pergunta se você é realmente um convidado. Embora sua mente esteja confirmando que você é de fato um convidado, sua voz está dizendo que não é, que você veio para pôr um fim nos planos de conquista de Balthus Dire! Você pragueja ao compreender que o vinho deve conter uma dose de Soro da Verdade. O Elfo Negro agora sabe da sua missão e deve ser impedido de dizer a outros. Você desembainha a sua espada e, ao fazê-lo, ele puxa um pequeno mecanismo metálico da bolsa presa em volta da cintura dele. Com um toque, isso se transforma em uma arma de lâmina em serra. Volte para 275.",
   botoes: [
      { texto: "Continuar", destino: 275 }
   ]
};

var p335 = {
   titulo: "335",
   detalhes: "Há uma gaveta secreta fixada sob a mesa, levemente aberta, e, aparecendo fora da gaveta, há um rolo de pergaminho. Você pega o rolo e enfia em sua túnica. Mas você pode ouvir Balthus murmurando bem baixo. Um Encanto! Mas o que será agora? E o que você pode fazer? De repente, ele começa a correr em torno da mesa, tocando cada um dos lados na passagem. A cada toque, a mesa reage com um ruído de rachadura.",
   botoes: [
      { texto: "Continuar", destino: 342 }
   ]
};

var p336 = {// batalha
   titulo: "336",
   detalhes: "GARK HABILIDADE 7 ENERGIA 11\nDepois de quatro Séries de Ataque, você poderá Fugir por uma das portas do outro lado do aposento (volte para 99), ou então poderá continuar e lutar até a morte. Se ficar e vencer, volte para 180.",
   botoes: [
      { texto: "Venci a luta", destino: 180 },
      { texto: "Fugir", destino: 99 }
   ]
};

var p337 = {//batalha inventario habilidade
   titulo: "337",
   detalhes: "O feiticeiro é de fato tão bom espadachim quanto mágico. Resolva sua batalha: <br><br>BALTHUSDIRE   HABILIDADE 12      ENERGIA 19 <br>\nSe você tiver conseguido roubar o anel do feiticeiro, poderá descontar 2 pontos da sua HABILIDADE, pois ele estava usando o Anel dos Espadachins. Se você derrotar Balthus Dire, vá para 400.",
   botoes: [
      { texto: "Continuar", destino: 400 }
   ]
};

var p338 = {
   titulo: "338",
   detalhes: "A porta abre para uma passagem. Você segue a passagem sempre em frente por algum tempo, passando por muitas curvas na rocha. Você encontra outra passagem que vem da direita, mas segue adiante direto. Finalmente, o caminho acaba se alargando. Volte para 90.",
   botoes: [
      { texto: "Continuar", destino: 90 }
   ]
};

var p339 = {
   titulo: "339",
   detalhes: "Há um time eclético sentado em volta do fogo. Um Orca como rosto coberto de verrugas está distribuindo magros bocados de carne mal passada para os outros. Um Anão de pele verde rosna e reclama do tamanho de seu pedaço, enquanto dois Goblins - homem e mulher - estão se acariciando. Eles riem e se sacodem, e de vez em quando ela dá um tapa na cara feia do macho, causando ainda mais risos. Quando você se aproxima, eles param e olham para você com rostos pouco amigáveis. Olham com desprezo para a sua aparência asseada, e a Goblin fêmea cochicha algum comentário para seu companheiro. Na frente do Anão, você pode ver uma caixa aberta. Você distingue com dificuldade um frasco de líquido dentro dela.",
   botoes: [
      { texto: "Sentar com eles em torno do fogo", destino: 134 },
      { texto: "Perguntar se pode se unir a eles", destino: 149 }
   ]
};

var p340 = {//inventario
   titulo: "340",
   detalhes: "Você segura o espelho no alto, mas a criatura simplesmente desfere um golpe contra ele, despedaçando-o no chão. É melhor você sair desse aposento rápido e tentar a porta do meio da sacada. Volte para 64.",
   botoes: [
      { texto: "Continuar", destino: 64 }
   ]
};

var p341 = {
   titulo: "341",
   detalhes: "Você lança o Encanto em torno de si mesmo e avança. Quatro ou cinco flechas voam na sua direção, mas param no ar a um metro de distância antes de atingir você, caindo inofensivamente ao chão. Você chega até o monumento. Lembre-se de eliminar o Encanto do Escudo da sua lista. Volte para 209.",
   botoes: [
      { texto: "Continuar", destino: 209 }
   ]
};

var p342 = {//fim de jogo
   titulo: "342",
   detalhes: "O feiticeiro afasta-se da mesa e ri. 'Agora você está em minhas mãos, camponês!' ele exulta. Cautelosamente, você sai de debaixo da mesa. Isto é, você tenta sair. Mas você não consegue passar do limite das bordas da mesa. Ele criou paredes invisíveis que agora prendem você embaixo da mesa! Por mais que tente, não consegue romper estas barreiras. Você agora é prisioneiro dele. Você falhou na sua missão...",
   botoes: [
      { texto: "Continuar", destino: 0 }
   ]
};

var p343 = {
   titulo: "343",
   detalhes: "Um pouco mais adiante pela passagem, você chega a uma outra bifurcação, onde você pode ir para a esquerda (volte para 55) ou para a direita (volte para 249).",
   botoes: [
      { texto: "Ir para a esquerda", destino: 55 },
      { texto: "Ir para a direita", destino: 249 }
   ]
};

var p344 = {
   titulo: "344",
   detalhes: "Você desce os degraus. O ar está fresco e estagnado. Há uma porta ao pé da escadaria. Você tentará a porta (volte para 7) ou subirá as escadas de volta para ir até a porta para o andar térreo (volte para 5)?",
   botoes: [
      { texto: "Tentar a porta", destino: 7 },
      { texto: "Subir as escadas", destino: 5 }
   ]
};

var p345 = {
   titulo: "345",
   detalhes: "A criatura geme quando o Encanto faz efeito. Seu enorme peso tornou-se agora um fardo terrível para ela. Ela ainda se arrasta na sua direção, mas você consegue desviar-se e contorná-la, partindo na direção da porta do outro lado do aposento. Volte para 140.",
   botoes: [
      { texto: "Continuar", destino: 140 }
   ]
};

var p346 = {//batalha
   titulo: "346",
   detalhes: "Quando os Giras vêem você desembainhar a sua espada, param e tagarelam com muita agitação. Um deles - evidentemente o líder - manda o menor subir a passagem de volta (presumivelmente para buscar ajuda). Os outros dois puxam facas e rolam lentamente na sua direção. Resolva esta batalha (lute com um de cada vez):\nHABILIDADE ENERGIA\nPrimeiro GIRA 7 6\nSegundo GIRA 6 5\nSe você vencer, poderá seguir pela passagem do lado esquerdo (volte para 243) ou pela passagem do lado direito (volte para 2).",
   botoes: [
      { texto: "Ir para a esquerda", destino: 243 },
      { texto: "Ir para a direita", destino: 2 }
   ]
};

var p347 = {
   titulo: "347",
   detalhes: "A Górgona olha para o espelho e grita. Você arrisca dar uma olhada na criatura, seus olhos subindo a partir dos pés. Mas a Górgona desapareceu, e em seu lugar está Balthus Dire, mais uma vez diante de você. Volte para 12.",
   botoes: [
      { texto: "Continuar", destino: 12 }
   ]
};

var p348 = {
   titulo: "348",
   detalhes: "\"Oh, eu não iria nesta direção\", diz O'Seamus. \"Não é uma região agradável.\" Estas três portas são o único caminho para seguir adiante. Duas delas são muito perigosas, e a terceira tem um cheiro muito forte. No lado oposto do aposento, há três portas. Uma tem uma maçaneta de latão, outra tem uma maçaneta de cobre, e a terceira tem uma maçaneta de bronze. Qual delas você escolherá:\nA porta de maçaneta de latão? Volte para 207\nA porta de maçaneta de cobre? Volte para 22\nA porta de maçaneta de bronze? Vá para 354\nOu você pedirá o conselho dele? Volte para 68",
   botoes: [
      { texto: "Escolher a porta de maçaneta de latão", destino: 207 },
      { texto: "Escolher a porta de maçaneta de cobre", destino: 22 },
      { texto: "Escolher a porta de maçaneta de bronze", destino: 354 },
      { texto: "Pedir conselho", destino: 68 }
   ]
};

var p349 = {
   titulo: "349",
   detalhes: "Uma réplica de Balthus Dire se materializa na sua frente. O próprio Dire levanta uma sobrancelha. 'Ataque!' você ordena ao sósia, que se volta para o centro do aposento e avança. A dois metros do feiticeiro, ele pára e segura a cabeça com as mãos, atordoado, vira-se e vem na sua direção! O feiticeiro ri. 'Este jogo pode ter dois participantes!' diz Dire. Você se concentra, e a réplica recebe suas ordens de retornar na direção de Dire. O sósia acaba por interromper a sua aproximação e age conforme as suas ordens. Isso continua por algum tempo, e você compreende que vocês dois têm o poder de controlar a criatura, mas somente dentro de uma certa distância. A coisa continua para frente e para trás, até que o Encanto começa a perder o efeito. O sósia pouco a pouco vai desaparecendo. A concentração foi de certa forma exaustiva para você. Você levanta os olhos e vê Balthus Dire erguer as mãos para o teto e depois deixá-las cair com força sobre a mesa. Que magia ele estará usando agora? Volte para 157.",
   botoes: [
      { texto: "Continuar", destino: 157 }
   ]
};

var p350 = {
   titulo: "350",
   detalhes: "Você tenta um estratagema simples para se livrar dela, na esperança de que ela não seja muito inteligente. Olhando na direção das sombras,você afirma estar vendo uma oura criatura semelhante. Ela garante que você está enganado, mas você é convincente. Ela parte para investigar, permitindo que você corra para a entrada da Cidadela. Volte para 218.",
   botoes: [
      { texto: "Continuar", destino: 218 }
   ]
};

var p351 = {//batalha
   titulo: "351",
   detalhes: "Quando você avança com sua espada desembainhada, o feiticeiro puxa uma cimitarra do seu cinto. 'Sim', ele diz com prazer, 'ficarei muito contente de terminar isso com armas!' E, com estas palavras, ele salta por sobre a mesa na sua direção. A batalha que se seguirá será uma luta até a morte:\nBALTHUS DIRE       HABILIDADE 12     ENERGIA 19\nSe você matar o feiticeiro, vá para 400.",
   botoes: [
      { texto: "VENCI", destino: 400 }
   ]
};

var p352 = {
   titulo: "352",
   detalhes: "Você entra no aposento na ponta dos pés. Está escuro lá dentro, e o ar está úmido. Há um poste de madeira rústica pregado em uma das paredes, com diversos ganchos nele. Há duas portas na parede do outro lado que levam adiante. No poste, pendurado, há um espelho improvisado, mas, quando sua tocha ilumina o espelho, seu reflexo é projetado sobre os olhos do gigante adormecido, que grunhe e se mexe. Um dos olhos se abre, depois o outro, ele salta de pé! Ele pega uma acha, que usava como travesseiro, e rapidamente retira a bainha de couro, revelando uma afiada cabeça de bronze. Esta criatura gigantesca é um GARK! Grandes e brutos, os Garks são meio Goblins, meio Gigantes, cruzados por senhores feiticeiros por sua índole agressiva. Embora um tanto estúpidos, são criaturas bastante violentas e de natureza guerreira. Você:\nVai dar uma corrida na direção das portas? Volte para 203\nDesembainhará a espada, pronto para a luta? Volte para 16\nPedirá desculpas por perturbar a criatura? Volte para 216\nVai se preparar para usar um Encanto? Volte para 11",
   botoes: [
      { texto: "Dar uma corrida na direção das portas", destino: 203 },
      { texto: "Desembainhar a espada", destino: 16 },
      { texto: "Pedir desculpas", destino: 216 },
      { texto: "Preparar para usar um Encanto", destino: 11 }
   ]
};

var p353 = {//batalha especial
   titulo: "353",
   detalhes: "Há muitas armas mortais no interior do armário, mas uma espada com o fio azulado chama a sua atenção. Balthus Dire vê você pegar esta espada e fica louco de raiva. 'Não toque nesta arma!' ele grita. Mas é tarde demais. Você já está com ela na mão. 'Assim seja,' ele diz, tirando uma cimitarra de seu próprio cinto e avançando na sua direção. Você toma consciência de que a batalha que se seguirá será uma luta até a morte. BALTHUS DIRE HABILIDADE 12 ENERGIA 19 A sua nova arma é uma espada encantada que acrescentará 2 pontos ao resultado de seus dados jogados para determinar a sua Força do Ataque. Se você vencer, vá para 400.",
   botoes: [
      { texto: "Venci", destino: 400 }
   ]
};

var p354 = {
   titulo: "354",
   detalhes: "Você abre a porta e entra em outro aposento, feliz por ter deixado para trás a aborrecida criaturinha. Volte para 188.",
   botoes: [
      { texto: "Continuar", destino: 188 }
   ]
};

var p355 = {
   titulo: "355",
   detalhes: "Se você não quiser (ou não puder) usar a sua magia, terá que confiar na sua espada. Desembainhe a sua espada e volte para 351.",
   botoes: [
      { texto: "Continuar", destino: 351 }
   ]
};

var p356 = {//energia e sorte
   titulo: "356",
   detalhes: "Eles ficam um tanto aliviados por saber que você não tem intenção de fazer mal a eles e voltam a sentar-se no chão, convidando você para se juntar a eles. O aposento é pequeno e simples, com folhagens espalhadas pelas paredes, possivelmente com o intuito de servir de decoração, embora as folhas estejam agora murchas e há muito tempo mortas. Um pequeno fogo arde em um dos cantos, embaixo de um orifício no teto. Há duas portas na parede de fronte a você; uma à esquerda, a outra à direita. Você senta para bater um papo. Você descobre que as pequenas criaturas magérrimas se denominam ESCOTEIROS e são de fato um grupo agradável, que brinca e ri com você. Você resolve não se arriscar a dizer muito sobre a sua missão, mas faz perguntas genéricas sobre o lugar. Balthus Dire é o senhor da casa e passa a maior parte do tempo lá no alto na Cidadela. A senhora sua esposa é uma feiticeira lindíssima que é muito vaidosa e aprecia as coisas que o dinheiro e o poder podem proporcionar. Há muitas criaturas cruéis no interior da Cidadela, mas é preciso tomar cuidado especial com os Ganjees, que vagueiam pela Torre à noite. Você acaba levantando, agradece pela conversa e se prepara para seguir adiante. Você pode adicionar 2 pontos de ENERGIA e 1 ponto de SORTE pelo descanso e pelas informações que obteve. Os Escoteiros oferecem também a você o direito de receber deles um favor antes de ir embora, pois eles também apreciaram a sua companhia. Você pode:\nLevar a sério a oferta deles Volte para 146\nDecidir não se arriscar e sair pela porta da esquerda Volte para 185\nSair pela porta da direita Volte para 23",
   botoes: [
      { texto: "Levar a sério a oferta deles", destino: 146 },
      { texto: "Decidir não se arriscar e sair pela porta da esquerda", destino: 185 },
      { texto: "Sair pela porta da direita", destino: 23 }
   ]
};

var p357 = {
   titulo: "357",
   detalhes: "A criatura é aparentemente surda-muda. Você a saúda em todas as línguas que conhece, mas ela continua de pé em silêncio. Você se desloca na direção do centro do aposento. Volte para 200.",
   botoes: [
      { texto: "Continuar", destino: 200 }
   ]
};

var p358 = {
   titulo: "358",
   detalhes: "Infelizmente, você não está muito em posição de fazer ameaças vãs. O feiticeiro simplesmente ri alto e aperta mais. Ele diz a você que reconsidere, do contrário será morte certa. Você continuará a recusar a oferta, por não querer se tornar um traidor de seus compatriotas (volte para 148), ou concordará em se submeter ao comando dele (volte para 256)?",
   botoes: [
      { texto: "Recusar a oferta", destino: 148 },
      { texto: "Concordar em se submeter ao comando", destino: 256 }
   ]
};

var p359 = {
   titulo: "359",
   detalhes: "Você tenta se esquivar, mas não consegue evitar o impacto em cheio do projétil, que atinge você na testa e se derrama por toda a sua cara. Você fica imóvel, esperando talvez pelo início de algum tipo de reação ácida, mas o líquido pastoso simplesmente pinga do seu rosto no chão. Cautelosamente, você o toca, primeiro com o dedo, depois com a língua. Você acaba de ser atingido por um tomate maduro! Mais uma vez, você se volta para enfrentar a figura adormecida. Volte para 29.",
   botoes: [
      { texto: "Continuar", destino: 29 }
   ]
};

var p360 = {//batalha
   titulo: "360",
   detalhes: "Você lança outro Encanto. Sua Hidra parcialmente formada cresce um pouco mais, mas ainda não está completa. Você precisará de mais um Encanto de Cópia de Criatura para formar a criatura inteira. Se você quiser lançar este terceiro Encanto, faça isso e deixe as Hidras lutarem até a morte. HIDRA HABILIDADE 10 ENERGIA 17 Se a sua criação vencer, volte para 229. Se a sua criatura perder, ou se você não possuir Encantos suficientes para completar a criação, você terá que decidir o que fazer em seguida (volte para 184).",
   botoes: [
      { texto: "Minha criatura venceu", destino: 229 },
      { texto: "Minha criatura perdeu", destino: 184 }
   ]
};

var p361 = {//sorte
   titulo: "361",
   detalhes: "A porta abre novamente mas, quando você faz isso, ouve o ruído ensurdecedor de uma campainha de alarme! Teste a sua Sorte. Se você tiver sorte, volte para 297. Se você não tiver sorte, volte para 126.",
   botoes: [
      { texto: "Tive sorte", destino: 297 },
      { texto: "Não tive sorte", destino: 126 }
   ]
};

var p362 = {
   titulo: "362",
   detalhes: "A porta abre, e o pequeno aposento no interior é iluminado a luz de vela. Cautelosamente, você olha lá para dentro e vê uma cena estranha. Sobre um altar de pedra no meio do aposento, há três cálices de prata, cada um contendo um líquido de cor diferente: um claro, outro vermelho e outro leitoso. Há três pequenas criaturas aladas, semelhantes a gremlins, que esvoaçam em torno do altar, todas chilreando excitadamente. De vez em quando, uma delas pousa no altar e toma um gole do líquido leitoso. A porta aberta range nas dobradiças e assusta os seres. Eles dão uma volta para olhar para você e ficam muito excitados. Você pode entrar no cômodo (volte para 58) ou fechar a porta rapidamente e prosseguir na direção da Cidadela (volte para 156).",
   botoes: [
      { texto: "Entrar no cômodo", destino: 58 },
      { texto: "Fechar a porta e prosseguir para a Cidadela", destino: 156 }
   ]
};

var p363 = {
   titulo: "363",
   detalhes: "Há três portas ao longo da sacada. Você experimentará:",
   botoes: [
      { texto: "A porta da esquerda?", destino: 228 },
      { texto: "A porta do centro?", destino: 64 },
      { texto: "A porta da direita?", destino: 304 }
   ]
};

var p364 = {
   titulo: "364",
   detalhes: "Quando seu Encanto faz efeito, você vê um pequeno camundongo correr na direção da mesa. Você pragueja ao compreender que o Encanto pode não ter funcionado devidamente. Mas você volta a ter esperança quando uma das cabeças do Calacorm vê o camundongo e parece ficar horrorizado! A outra cabeça nota o bicho subitamente, e ambas as gargantas berram juntas! A criatura pula para cima da mesa, e o Calacorm grita aterrorizado enquanto o inofensivo ratinho se aproxima, farejando distraidamente o chão. Você deixa o Calacorm sofrer por alguns momentos e depois berra, dizendo que você dará sumiço no rato para ele, se ele libertar você. Ele concorda rapidamente e joga as chaves para você. Você abre a porta, sai, pega a sua espada, que estava encostada na parede, e vai embora pela passagem. A uma distância segura, você rompe o Encanto, e o camundongo desaparece. Volte para 174.",
   botoes: [
      { texto: "Continuar", destino: 174 }
   ]
};

var p365 = {//mini game especial  encanto
   titulo: "365",
   detalhes: "Você escolheu um jogo de azar mortal que é proibido por lei na maioria dos reinos. Uma vez que você escolheu jogar, terá que participar de pelo menos um jogo, mas poderá continuar, se quiser. Seu Mestre de Jogos é um aprendiz de feiticeiro e selecionou uma variedade de prêmios para você. Se você sobreviver, poderá ter direito a: dois Encantos extras (os quais você pode escolher da lista no começo do livro), ou cinquenta Peças de Ouro, ou um Escudo de Armas Encantado (que permitirá que você desconte dois pontos do número obtido nos dados jogados para urna criatura, quando se estiver determinando a sua Força de Ataque). O jogo consiste no seguinte: há seis punhais sobre uma mesa. Uma é a arma verdadeira, enquanto as outras cinco possuem lâminas de mola, que não lhe causarão nenhum mal. Você está jogando contra uma das criaturas no salão e somente um de você dois sobreviverá. Cada um na sua vez, vocês terão que escolher um dos punhais e cravá-lo em seu próprio peito. Se o punhal for real, é morte certa. Se for uma imitação, terá que ser devolvido à mesa para ser misturado de novo aos outros cinco. O jogo continua até que um de vocês selecione o punhal verdadeiro e se esfaqueie no coração, e assim o sobrevivente poderá se apossar do prêmio. Seu adversário escolherá primeiro. Jogue um dado para ele. Depois, faça o mesmo para você. Quando um de vocês obtiver um seis, a verdadeira adaga foi escolhida. Se for você, terá se matado! Agora que sabe as regras do jogo, você só pode fugir de participar do jogo pelo menos uma vez lançando um Encanto da Ilusão (volte para 9). Do contrário, você terá que jogar. Depois de ter jogado, você pode jogar Escolha de Seis (volte para 171), Pedras Mágicas (volte para 278) ou dizer adeus a seus 'amigos' e sair do salão (volte para 31).",
   botoes: [
      { texto: "Fugir do jogo com Encanto da Ilusão", destino: 9 },
      { texto: "Participar do jogo ESCOLHA DE SEIS", destino: 171 },
      { texto: "Jogar PEDRAS MAGICAS", destino: 278 },
      { texto: "Dizer adeus", destino: 31 },
   ]
};


var p366 = {
   titulo: "366",
   detalhes: "Quando você passa pelas pequenas criaturas, elas ficam olhando para você silenciosamente. Elas parecem simplesmente achar que você é interessante. Você sente que alguma coisa não vai bem por aqui. Volte para 140.",
   botoes: [
      { texto: "Continuar", destino: 140 }
   ]
};

var p367 = {
   titulo: "367",
   detalhes: "Alguma distância adiante na passagem, você chega a uma junção de quatro caminhos. Você toma o caminho do norte, que acaba chegando a uma grande porta de madeira. Você não consegue ouvir nada escutando pelo buraco da fechadura. Você tentará abrir a porta lentamente e sem ruído (volte para 308) ou derrubá-la à força (volte para 121)?",
   botoes: [
      { texto: "Abrir a porta lentamente", destino: 308 },
      { texto: "Derrubar a porta à força", destino: 121 }
   ]
};

var p368 = {//inventario
   titulo: "368",
   detalhes: "Você revista os dois bolsos deles e acha vinte e oito Peças de Ouro, que leva consigo. Quando você está prestes a prosseguir, lembra-se do punhal - a fonte da desavença - e o apanha. Volte para 15.",
   botoes: [
      { texto: "Continuar", destino: 15 }
   ]
};

var p369 = {//fim de jogo
   titulo: "369",
   detalhes: "Você tem que ver o que ele está fazendo. Quando você tenta espiar por trás da cortina, sente que ela se enrola em torno de você, como se houvesse vento - mas não há. A cortina está se apertando em volta de você. Você luta, mas o pano pesado está envolvendo você. Está em torno da sua garganta e da sua cabeça, e você está com dificuldade para respirar. Você ainda continua a lutar, mas sem resultado. Você começa a se sentir tonto, sabendo que, logo que você perder a consciência, a batalha será dele. Mas não há nada que você possa fazer. Seu mundo fica escuro... Você falhou na sua missão.",
   botoes: [
      { texto: "Reiniciar a aventura", destino: 0 }
   ]
};

var p370 = {//energia
   titulo: "370",
   detalhes: "A caixa é solidamente construída, e você não consegue arrebentar a fechadura com as mãos. Você desembainha a sua espada para tentar quebrá-la a golpes de lâmina e, ao fazer isso, a caixa cai sobre a sua canela, fazendo um corte feio. Desconte dois pontos de ENERGIA. A sua espada não arrebentará a fechadura. Você:\n\n- Tentará abrir a primeira caixa? Volte para 260\n- Tentará abrir a segunda caixa? Volte para 129\n- Esquecerá as caixas e prosseguirá? Volte para 237",
   botoes: [
      { texto: "Tentar abrir a primeira caixa", destino: 260 },
      { texto: "Tentar abrir a segunda caixa", destino: 129 },
      { texto: "Esquecer as caixas e prosseguir", destino: 237 }
   ]
};

var p371 = {
   titulo: "371",
   detalhes: "A criatura grunhe e abre a porta para deixar você entrar. Volte para 177.",
   botoes: [
      { texto: "Continuar", destino: 177 }
   ]
};

var p372 = {
   titulo: "372",
   detalhes: "Ao lançar seu Encanto do Escudo, uma garrafa ainda atinge você no ombro. Você não sente nada. Alguma coisa não está muito certa, e você tenta cancelar o Encanto. Infelizmente, ele já foi lançado, e você pode ver as garrafas se quebrando de encontro a seu escudo mágico. A garrafa que acabou de atingir você desapareceu. Você xinga ao compreender que o vinho que você acabou de provar deveria ter algumas propriedades alucinógenas, e que você está imaginando o ataque das garrafas. Quando esta idéia lhe ocorre, as garrafas param de vir sobre você. Você pisca e olha de novo. Todas as garrafas estão em seus lugares nas estantes, como é normal! Você resolve seguir adiante. Volte para 95.",
   botoes: [
      { texto: "Continuar", destino: 95 }
   ]
};

var p373 = {
   titulo: "373",
   detalhes: "Balthus Dire se ajoelha a seu lado. Ele agarra seus pulsos com uma das mãos, e você pode sentir sua grande força física, comparável a seus evidentes poderes mágicos. 'Camponês', ele diz, 'você é realmente um adversário de valor. Seu poder é maior do que o da maioria dos magos. É uma vergonha permitir que tamanho talento seja desperdiçado. Posso matar você agora ou oferecer uma outra opção. Una-se a mim nos meus planos para conquistar o Vale dos Salgueiros. Ele será domínio seu quando tivermos êxito. O que você diz?'\n\nQual é a sua resposta?\n\n- 'Nunca. Não me voltarei contra os meus compatriotas!' Volte para 148\n- 'Aceito a sua oferta.' (Você planeja enganá-lo assim que ele libertar você) Volte para 256\n- 'Balthus Dire, você é um ser maligno! Eu ainda não estou derrotado!' (Você planeja lançar outro Encanto sobre ele). Volte para 358",
   botoes: [
      { texto: "Nunca. Não me voltarei contra os meus compatriotas!", destino: 148 },
      { texto: "Aceito a sua oferta. (Planejo enganá-lo)", destino: 256 },
      { texto: "Balthus Dire, você é um ser maligno! Eu ainda não estou derrotado! (Planejo lançar outro Encanto)", destino: 358 }
   ]
};

var p374 = {//encanto
   titulo: "374",
   detalhes: "Enquanto se recompõe, depois do susto, você olha em torno do aposento. Trata-se obviamente de alguma espécie de Quartel-General Militar. Rolos com mapas estratégicos pendem das paredes, assim como retratos de generais do passado. Uma estante em um dos cantos guarda centenas de volumes encadernados em couro. Cortinas ornamentadas cobrem uma grande janela. Em um armário, ao longo de uma das paredes, há lanças e espadas de variados e mortais tamanhos e formas. No centro do aposento, há uma maquete de uma paisagem que você reconhece como sendo o Vale dos Salgueiros. Exércitos de tropas em miniatura estão posicionados na maquete. Este deve ser o plano de invasão!\n\nRecostado na mesa, com os olhos fixos em você, está o próprio Balthus Dire! Sua estatura em si já é formidável. Tendo mais de dois metros de altura, ele tem a constituição de um boi, com ombros largos e braços musculosos. Na sua túnica de batalha em couro, com tiras largas nos punhos, guarnecidas de pregos, ele tem mais a aparência de um soldado do que do feiticeiro que realmente é.\n\n'Camponês insolente!' ele rosna. 'Você acha que pode medir forças com Balthus Dire?' Com estas palavras, ele estala os dedos, e você ouve um grunhido atrás de você. Você se vira e vê uma criatura grotesca que se desloca em sua direção. Seu corpo peludo tem quatro braços, cada um deles terminado em um gancho de terrível aparência. Ao se aproximar, vem golpeando o ar à sua frente. 'Ora, acho que você não é adversário nem mesmo para uma FERA DAS GARRAS!' ri Dire.\n\nVocê:\n\n- Desembainhará a sua espada para se defender? Volte para 30\n- Lançará um Encanto do Escudo? Volte para 109\n- Lançará um Encanto da Fraqueza? Volte para 158",
   botoes: [
      { texto: "Desembainhar a espada", destino: 30 },
      { texto: "Lançar um Encanto do Escudo", destino: 109 },
      { texto: "Lançar um Encanto da Fraqueza", destino: 158 }
   ]
};

var p375 = {
   titulo: "375",
   detalhes: "Ele indica um livro na prateleira que é uma lista alfabética de todos os tipos de criaturas. Você consultará a seção sobre:\n\n- Calacorms? Volte para 263\n- Miks? Volte para 135\n- Ganjees? Volte para 63",
   botoes: [
      { texto: "Calacorms", destino: 263 },
      { texto: "Miks", destino: 135 },
      { texto: "Ganjees", destino: 63 }
   ]
};


var p376 = {//fim de jogo
   titulo: "376",
   detalhes: "Você lança seu Encanto do Escudo. Que lástima, este Encanto não faz efeito contra armas mágicas! Os jatos de fogo atravessam seu escudo diretamente e queimam ao penetrar seus olhos. Gritando de dor, você tomba no chão. A cortina da morte cai sobre você. Você falhou na sua missão."
};

var p377 = {
   titulo: "377",
   detalhes: "Você se controla e se concentra. Qual será o seu próximo ataque?\n\n- Um Encanto da Ilusão? Volte para 332\n- Um Encanto da Fraqueza? Volte para 113\n- Um Encanto da Percepção Extra-Sensorial? Volte para 320\n- Nenhum desses? Volte para 355",
   botoes: [
      { texto: "Encanto da Ilusão", destino: 332 },
      { texto: "Encanto da Fraqueza", destino: 113 },
      { texto: "Encanto da Percepção Extra-Sensorial", destino: 320 },
      { texto: "Nenhum desses", destino: 355 }
   ]
};

var p378 = {//energia
   titulo: "378",
   detalhes: "Você dá alguns passos adiante, e uma outra flecha erra por pouco o seu pé. Mais uns poucos passos e uma flecha rasga a sua túnica, arranhando o seu antebraço. Você ainda não consegue ver ninguém, nem ver de onde as flechas estão vindo. Depois de mais alguns passos, surge mais uma flecha, mas esta rasga a sua perna. Você grita alto - e terá que descontar quatro pontos de ENERGIA - mas você já está quase no monumento, que servirá de proteção para você. Você salta para frente e se esconde atrás dele até que as flechas parem de vir. Volte para 209.",
   botoes: [
      { texto: "Continuar", destino: 209 }
   ]
};

var p379 = {
   titulo: "379",
   detalhes: "Você solta a corda e flutua no ar. Pousando de volta no chão, na borda do fosso, você xinga a armadilha demoníaca preparada para aventureiros gananciosos como você. Você segue até a porta oposta à da sua entrada e experimenta a maçaneta. Volte para 206.", botoes: [
      { texto: "Continuar", destino: 206 }
   ]
};

var p380 = {
   titulo: "380",
   detalhes: "Quando você senta, eles se levantam. O Anão pega uma clava e salta sobre você, enquanto o Goblin e o Orca apanham espadas. A namorada do Goblin dá um grito e sai do caminho, retirando-se para a escuridão. Volte para 213.",
   botoes: [
      { texto: "Continuar", destino: 213 }
   ]
};

var p381 = {//sorte e inventario
   titulo: "381",
   detalhes: "Teste a sua Sorte. Se você tiver sorte, o anel desliza para fora do dedo dele, e você agora o tem em suas mãos. Se você não tiver sorte, o anel prende e não sai. Ao puxar o anel, você faz com que Balthus Dire entre em ação e se volte contra você com sua espada. Volte para 337.",
   botoes: [
      { texto: "Continuar", destino: 337 }
   ]
};

var p382 = {
   titulo: "382",
   detalhes: "Eles correm pelo aposento em pânico, esbarrando uns nos outros e gritando: 'Ai, meu Deus, ai, minha nossa, este estranho parece malvado, onde estão as nossas armas?' Você ri da desordem deles e guarda a sua espada. Eles se acalmam e ficam olhando para você. Você pode seguir adiante (volte para 285) ou conversar com eles (volte para 356).",
   botoes: [
      { texto: "Seguir adiante ", destino: 285 },
      { texto: "Conversar com eles ", destino: 356 }
   ]
};

var p383 = {//energia
   titulo: "383",
   detalhes: "A força do velho começa a retornar à medida em que o Encanto da Energia vai fazendo efeito (desconte este Encanto dos seus Encantos). Ele conta para você que foi espancado na cabeça por cruéis Ganjees, que têm prazer em fazer maldades. Você conduz a conversa no sentido da Cidadela propriamente dita. De repente, sem nenhuma razão visível, uma pontada de dor o atinge por dentro. Seus olhos ficam estreitos e ele se atira para frente, cravando seus dentes - dentes afiados, diga-se de passagem – no seu braço. Você perde dois pontos de ENERGIA. Você o golpeará com sua espada (volte para 333) ou usará um Encanto Mágico para se libertar (volte para 189)?",
   botoes: [
      { texto: "Golpear com a espada", destino: 285 },
      { texto: "Usar encanto", destino: 189 }
   ]
};

var p384 = {//jogar dados
   titulo: "384",
   detalhes: "Você brinca com o mecanismo e, subitamente, uma linha longa e fina se desenrola da haste. Você resolve tentar laçar as cabeças da criatura com a linha, que possui um gancho em uma das extremidades. Você lança a linha sobre a criatura. Jogue um dado. Se você obtiver cinco ou seis, volte para 252. Se obtiver um, dois, três ou quatro, volte para 107.",
   botoes: [
      { texto: "5 6 ", destino: 252 },
      { texto: "1234", destino: 107 }
   ],
   jogarDado: true,
   destinoDado: {
      cincoSeis: 252,
      umQuatro: 107
   }
};

var p385 = {//energia
   titulo: "385",
   detalhes: "Eles dão tapinhas nas suas costas e boas-vindas. Uma criatura magra, de pele escura, põe uma caneca de aguardente na sua mão. Você bebe o oferecido de uma só vez. Outra caneca vem. Acrescente dois pontos de ENERGIA, uma vez que a bebida é bastante reconfortante. Em seguida, eles convidam você para participar dos jogos deles. Você jogará:\n\n- Faca-Faquinha? Volte para 365\n- Pedras Mágicas? Volte para 278\n- Escolha de Seis? Volte para 171",
   botoes: [
      { texto: "Faca-Faquinha", destino: 365 },
      { texto: "Pedras Mágicas", destino: 278 },
      { texto: "Escolha de Seis", destino: 171 }
   ]
};

var p386 = {
   titulo: "386",
   detalhes: "Do lado de fora da porta, a passagem continua em declive, e você a segue por algum tempo. Você repara que há um cheiro desagradável que fica cada vez mais forte à medida que você avança. Afinal, você chega a uma abertura. Olhando por ela, e tapando o nariz, você pode ver um grande esgoto a descoberto que corre transversalmente à passagem. Há uma corda que pende do teto. Você atravessará o esgoto (volte para 204) ou tentará agarrar a corda e se valer dela para passar para o outro lado (volte para 108)?",
   botoes: [
      { texto: "Atravessar o esgoto", destino: 204 },
      { texto: "Agarrar a corda", destino: 108 }
   ]
};

var p387 = {
   titulo: "387",
   detalhes: "À simples menção de um Espelho de Prata, ela se levanta, ergue as mãos e ordena a seus Fantasmas que parem. Você dá a ela o Espelho, e ela diz que você pode seguir o seu caminho. Você tem sorte de estar vivo. Volte para 6.",
   botoes: [
      { texto: "Continuar", destino: 6 }
   ]
};

var p388 = {
   titulo: "388",
   detalhes: "Todo o seu corpo se tensiona com o esforço. Alguns momentos depois, ele recupera a compostura e mais uma vez olha para você. 'Fraqueza!' ele ironiza, 'Certamente você não achava que poderia me derrotar com um mero Encanto da Fraqueza.' Ele obviamente conseguiu vencer o Encanto e agora se prepara para desferir um contra-ataque. Volte para 157.",
   botoes: [
      { texto: "Continuar", destino: 157 }
   ]
};

var p389 = {
   titulo: "389",
   detalhes: "Quando você se aproxima do espeto, uma das velhas joga um pó no fogo, e as três se afastam, dando risadas. Você está em guarda. Você observa o fogo começando a rugir, e as chamas crescendo ameaçadoramente. Subitamente, várias das labaredas saltam do fogo e tomam a forma de um DEVLIN, uma criatura do tamanho de um Anão, feita do próprio fogo! As três bruxas apontam para você, e o Devlin avança. Você:\n\n- Desembainha a sua espada e se prepara para lutar contra ele? Volte para 61\n- Procura um lugar para se proteger? Volte para 178\n- Prepara um Encanto? Volte para 311",
   botoes: [
      { texto: "Desembainhar a espada", destino: 61 },
      { texto: "Procurar um lugar para se proteger", destino: 178 },
      { texto: "Preparar um Encanto", destino: 311 }
   ]
};

var p390 = {//teste de sorte
   titulo: "390",
   detalhes: "Ele começa a atormentar você, derrubando-o com uma lufada de vento a cada vez que você se levanta. Teste a sua Sorte. Se você tiver sorte, volte para 350. Se não tiver sorte, volte para 122.",
   botoes: [
      { texto: "Tive sorte", destino: 350 },
      { texto: "Não tive sorte", destino: 122 }
   ]
};

var p391 = {
   titulo: "391",
   detalhes: "O Gark pega as suas três Peças de Ouro, coloca-as em uma bolsa presa em volta da cintura e mostra o caminho para seguir na direção das portas. Ele pergunta se você gostaria de ir para a Biblioteca (porta da direita) ou para o Salão de Jogos (porta da esquerda). Volte para 99.",
   botoes: [
      { texto: "Continuar", destino: 99 },
   ]
};

var p392 = {
   titulo: "392",
   detalhes: "A chave gira, e a porta se abre. Volte para 196.",
   botoes: [
      { texto: "Continuar", destino: 196 }
   ]
};

var p393 = {
   titulo: "393",
   detalhes: "Você lança o seu Encanto e se concentra nas três criaturas em transformação. As imagens passam à sua frente. Quando você as junta, compreende que estas criaturas são MIKS, capazes de se transformarem em qualquer ser vivo ou coisa que queiram. Eles estão pensando em você e não estão nem um pouco preocupados com a sua presença - mais provavelmente eles vêem você como um divertimento. Com bastante frequência, porém, eles pensam em ouro, e suas emoções indicam uma grande ganância. Talvez este seja o seu passaporte para a segurança. Se você tiver Peças de Ouro, volte para 27. Se você não tiver ouro, é melhor você sair do aposento rapidamente e tentar a outra porta. Volte para 25.",
   botoes: [
      { texto: "Tenho peças de ouro", destino: 350 },
      { texto: "Sair e tentar outra porta", destino: 122 }
   ]
};

var p394 = {
   titulo: "394",
   detalhes: "As criaturas se entreolham, como se o nome não lhes fosse estranho, mas elas não pudessem lembrar exatamente de onde o conheciam. Você rapidamente acrescenta que ele está na turma do primeiro andar. Eles dão de ombros e acabam por decidir que você deve estar dizendo a verdade. O Macaco-Cachorro chama o porteiro, que finalmente aparece para deixar você entrar. Volte para 251.",
   botoes: [
      { texto: "Continuar", destino: 251 },

   ]
};

var p395 = {//energia e encanto
   titulo: "395",
   detalhes: "Você lança o Encanto e se concentra, criando uma ilusão de que você é um poderoso feiticeiro e que está começando a se cansar das gozações deles. Mas nada acontece! Mais uma vez, um riso de escárnio chega a você vindo de todos os lados. 'Nós também somos criaturas mágicas,' diz uma voz, 'embora não sejamos tão amadores quanto você!' Repentinamente, você sente um golpe no meio das costas que joga você no meio do aposento. Você perde dois pontos de ENERGIA. Você procurará em sua mochila alguma coisa para usar (volte para 322) ou desembainhará a sua espada (volte para 248)? Se você não tiver tentado ainda um Encanto do Fogo sobre eles, poderá fazer isso (volte para 85).",
   botoes: [
      { texto: "Procurar algo na mochila", destino: 322 },
      { texto: "Desembainhar a espada", destino: 248 },
      { texto: "Encanto de Fogo", destino: 85 }
   ]
};

var p396 = {
   titulo: "396",
   detalhes: 'Continuar',
   botoes: [
      { texto: "Procurar algo na mochila", destino: 183 },
   ]
};


var p397 = {//enegia
   titulo: "397",
   detalhes: "Não é uma refeição muito farta, mas você estava com fome e com sede, e esta oferta repõe dois pontos de ENERGIA. Agora você pode chamar o Calacorm (volte para 69), ou escolher um Encanto para tentar sair desta situação (volte para 193).",
   botoes: [
      { texto: "Chamar o Calacorn", destino: 69 },
      { texto: "Escolher um encanto", destino: 248 },
   ]
};

var p398 = {
   titulo: "398",
   detalhes: "Você lança o encanto, e sua força retorna, permitindo que você acabe de subir os degraus. Quando você chega no alto, os efeitos desaparecem mais uma vez. Você pode agora seguir ao longo da muralha na direção da Torre Negra. Volte para 79.",
   botoes: [
      { texto: "Continuar", destino: 79 },

   ]
};

var p399 = {
   titulo: "399",
   detalhes: "Você lança o Encanto. O Elfo se aproxima e, ao fazê-lo, a Miríade de Bolso desaparece da sua mão! Ele fica em pé diante de você, aparentemente indefeso, nervosamente decidindo se luta ou se foge. Você pode se mexer depressa e eliminá-lo: <br><br> ELFO NEGRO	   HABILIDADE 4   	ENERGIA 4",
   botoes: [
      { texto: "Venci", destino: 272 },

   ],
   oponente: {
      nome: "ELFO NEGRO",
      habilidade: 4,
      energia: 4
   },
   destinoVitoria: 272
};

var p400 = {
   titulo: "400",
   detalhes: "Balthus Dire, caído a seus pés, está morto. Sua missão foi cumprida! O Vale dos Salgueiros está livre de ataques - por enquanto, pelo menos.<br><br> FIM DE JOGO!<br> Parabéns, você conseguiu!",
   botoes: [
      { texto: "REINICIAR", destino: 0 },
   ]
};

var p401 = {
   titulo: "Inserir Senha",
   detalhes: "Digite a senha:",
   campoEntrada: {
      tipo: "password",
      placeholder: "Digite a senha"
   },
   senhaCorreta: "217" // Adicione a senha desejada aqui
};



function abrirPagina() {

   window.location.href = 'paginainicial.html';
}



var paginas = [introducao, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10,
   p11, p12, p13, p14, p15, p16, p17, p18, p19, p20,
   p21, p22, p23, p24, p25, p26, p27, p28, p29, p30,
   p31, p32, p33, p34, p35, p36, p37, p38, p39, p40,
   p41, p42, p43, p44, p45, p46, p47, p48, p49, p50,
   p51, p52, p53, p54, p55, p56, p57, p58, p59, p60,
   p61, p62, p63, p64, p65, p66, p67, p68, p69, p70,
   p71, p72, p73, p74, p75, p76, p77, p78, p79, p80,
   p81, p82, p83, p84, p85, p86, p87, p88, p89, p90,
   p91, p92, p93, p94, p95, p96, p97, p98, p99,
   p100, p101, p102, p103, p104, p105, p106, p107, p108, p109, p110, p111, p112, p113, p114, p115,
   p116, p117, p118, p119, p120, p121, p122, p123,
   p124, p125, p126, p127, p128, p129, p130, p131,
   p132, p133, p134, p135, p136, p137, p138, p139,
   p140, p141, p142, p143, p144, p145, p146, p147,
   p148, p149, p150, p151, p152, p153, p154, p155,
   p156, p157, p158, p159, p160, p161, p162, p163,
   p164, p165, p166, p167, p168, p169, p170, p171,
   p172, p173, p174, p175, p176, p177, p178, p179,
   p180, p181, p182, p183, p184, p185, p186, p187,
   p188, p189, p190, p191, p192, p193, p194, p195,
   p196, p197, p198, p199, p200, p201, p202, p203,
   p204, p205, p206, p207, p208, p209, p210, p211,
   p212, p213, p214, p215, p216, p217, p218, p219,
   p220, p221, p222, p223, p224, p225, p226, p227,
   p228, p229, p230, p231, p232, p233, p234, p235,
   p236, p237, p238, p239, p240, p241, p242, p243,
   p244, p245, p246, p247, p248, p249, p250, p251,
   p252, p253, p254, p255, p256, p257, p258, p259,
   p260, p261, p262, p263, p264, p265, p266, p267,
   p268, p269, p270, p271, p272, p273, p274, p275,
   p276, p277, p278, p279, p280, p281, p282, p283,
   p284, p285, p286, p287, p288, p289, p290, p291,
   p292, p293, p294, p295, p296, p297, p298, p299,
   p300, p301, p302, p303, p304, p305, p306, p307,
   p308, p309, p310, p311, p312, p313, p314, p315,
   p316, p317, p318, p319, p320, p321, p322, p323,
   p324, p325, p326, p327, p328, p329, p330, p331,
   p332, p333, p334, p335, p336, p337, p338, p339,
   p340, p341, p342, p343, p344, p345, p346, p347,
   p348, p349, p350, p351, p352, p353, p354, p355,
   p356, p357, p358, p359, p360, p361, p362, p363,
   p364, p365, p366, p367, p368, p369, p370, p371,
   p372, p373, p374, p375, p376, p377, p378, p379,
   p380, p381, p382, p383, p384, p385, p386, p387,
   p388, p389, p390, p391, p392, p393, p394, p395,
   p396, p397, p398, p399, p400, p401]


let indicepg = 1



function iniciar() {
   if (indicepg < paginas.length) {
      capa.innerHTML = `<h1>${paginas[indicepg].titulo}</h1><p>${paginas[indicepg].detalhes}</p>`;

      if (paginas[indicepg].campoEntrada && paginas[indicepg] === p401) {
         // Cria dinamicamente um input
         var inputElement = document.createElement("input");
         inputElement.type = paginas[indicepg].campoEntrada.tipo || "text";
         inputElement.placeholder = paginas[indicepg].campoEntrada.placeholder || "";
         capa.appendChild(inputElement);

         // Verifica se o botão "Confirmar" já foi criado
         var botaoConfirmar = document.querySelector("#botaoConfirmar401");
         if (!botaoConfirmar) {
            // Se não foi criado, cria o botão "Confirmar" e associa o evento
            botaoConfirmar = document.createElement("button");
            botaoConfirmar.id = "botaoConfirmar401"; // Adiciona um ID para identificação
            botaoConfirmar.textContent = "Confirmar";
            botaoConfirmar.onclick = function funcaodeconfirma() {
               var senhaDigitada = inputElement.value;

               // Verifica se a senha digitada está correta
               if (senhaDigitada === p401.senhaCorreta) {
                  // Senha correta, redireciona para o destino desejado
                  indicepg = 217;
                  iniciar();
               } else {
                  // Senha incorreta, exibe um alerta
                  alert("Senha incorreta. Tente novamente.");
               }
            };

            capa.appendChild(botaoConfirmar);

         }

      }

      if (paginas[indicepg].botoes && paginas[indicepg].botoes.length > 0) {
         paginas[indicepg].botoes.forEach(botaoInfo => {
            var botao = document.createElement("button");
            botao.textContent = botaoInfo.texto;

            botao.onclick = function () {
               if (botaoInfo.destino >= 0 && botaoInfo.destino < paginas.length) {
                  indicepg = botaoInfo.destino;
                  iniciar();
               } else if (botaoInfo.acao) { // Verifica se há uma ação associada ao botão
                  // Executa a ação associada ao botão
                  botaoInfo.acao();
               }
            };

            capa.appendChild(botao);
         });
      }
   }
}





//------------------ JOGO DE DADOS -----------------------------------------//
var res = window.document.getElementById('dado')
var img = window.document.getElementById('imgdado')
function clicou() {
   var dado = Number(Math.floor(Math.random() * 6) + 1)
   img.src = dado + '.png'



}
/*----------------------------------------------------------------------------*/

