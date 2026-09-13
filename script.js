const dadosCorpo = [
    {
        id: 'corpo-1',
        titulo: 'Artrópodes nos olhos',
        descricao: 'Existe uma grande chance de você ter artrópodes microscópicos vivendo ao redor dos seus cílios e a quantidade deles aumenta conforme a idade, embora sejam inofensivos.',
        badge: 'Categoria: Corpo Humano',
        nivel: 'Nível: Baixo',
        detalhe: 'Eles ficam em áreas delicadas do olho e, na maioria das vezes, não causam danos. A presença deles é tão comum que quase passa despercebida.',
        categoria: 'Corpo Humano'
    },
    {
        id: 'corpo-2',
        titulo: 'Cera de ouvido protetora',
        descricao: 'A cera é produzida naturalmente para proteger o sistema auditivo contra poeira e possui propriedades antibacterianas.',
        badge: 'Categoria: Corpo Humano',
        nivel: 'Nível: Médio',
        detalhe: 'É uma barreira natural que ajuda a reduzir a entrada de sujeira e micro-organismos. Por isso, remover tudo demais pode deixar o ouvido vulnerável.',
        categoria: 'Corpo Humano'
    },
    {
        id: 'corpo-3',
        titulo: 'Superlotação de bactérias',
        descricao: 'Cada centímetro quadrado da pele humana possui, em média, 32 milhões de bactérias e a boca abriga centenas de espécies diferentes.',
        badge: 'Categoria: Corpo Humano',
        nivel: 'Nível: Alto',
        detalhe: 'A nossa microbiota faz parte do sistema imunológico e ajuda a manter o corpo em equilíbrio, embora pareça assustador à primeira vista.',
        categoria: 'Corpo Humano'
    },
    {
        id: 'corpo-4',
        titulo: 'A origem do chulé',
        descricao: 'O mau cheiro não vem do suor em si, mas das bactérias que se alimentam do líquido e liberam gases fedorentos.',
        badge: 'Categoria: Corpo Humano',
        nivel: 'Nível: Alto',
        detalhe: 'O cheiro surge quando o suor entra em contato com a microbiota da pele, especialmente em áreas mais quentes e abafadas.',
        categoria: 'Corpo Humano'
    },
    {
        id: 'corpo-5',
        titulo: 'Troca de pele constante',
        descricao: 'O corpo humano perde centenas de milhares de partículas de pele por hora e isso se acumula ao longo da vida.',
        badge: 'Categoria: Corpo Humano',
        nivel: 'Nível: Médio',
        detalhe: 'Essa renovação constante é um processo natural de proteção e manutenção da pele, ainda que pareça um pouco grotesco.',
        categoria: 'Corpo Humano'
    },
    {
        id: 'corpo-6',
        titulo: 'Ereção pós-morte',
        descricao: 'O fenômeno conhecido como “anjo da luxúria” pode acontecer após a morte quando a gravidade altera o fluxo sanguíneo.',
        badge: 'Categoria: Corpo Humano',
        nivel: 'Nível: Muito Alto',
        detalhe: 'Esse efeito é raro, mas entra na lista das curiosidades mais estranhas porque faz o corpo parecer agir contra a própria morte.',
        categoria: 'Corpo Humano'
    }
];

const dadosComidas = [
    {
        id: 'comida-1',
        titulo: 'O queijo vivo (Casu marzu)',
        descricao: 'Feito com leite de ovelha na Itália, leva larvas vivas de moscas que fermentam o alimento até quase a decomposição.',
        badge: 'Categoria: Comidas Bizarras',
        nivel: 'Nível: Muito Alto',
        detalhe: 'Esse prato precisa ser consumido enquanto as larvas ainda se movem, o que o torna um dos alimentos mais controversos do mundo.',
        categoria: 'Comidas Bizarras'
    },
    {
        id: 'comida-2',
        titulo: 'Sapo energético',
        descricao: 'Uma receita peruana feita no liquidificador com caldo de feijão branco, babosa, mel e um sapo sem ossos e sem olhos.',
        badge: 'Categoria: Comidas Bizarras',
        nivel: 'Nível: Alto',
        detalhe: 'Essa iguaria foi criada com a intenção de despertar energia, mas a imagem de um sapo no liquidificador já basta para causar arrepios.',
        categoria: 'Comidas Bizarras'
    },
    {
        id: 'comida-3',
        titulo: 'Peixe decomposto do Alasca',
        descricao: 'Alguns nativos enterram a cabeça do peixe dentro de um saco plástico até amaciar para consumi-la crua.',
        badge: 'Categoria: Comidas Bizarras',
        nivel: 'Nível: Muito Alto',
        detalhe: 'Essa preparação, feita como parte de uma tradição alimentar, é potencialmente perigosa e exige extremo cuidado.',
        categoria: 'Comidas Bizarras'
    },
    {
        id: 'comida-4',
        titulo: 'O peixe baiacu alucinógeno',
        descricao: 'No Japão, o baiacu é servido após o cozinheiro retirar a bolsa de tetrodotoxina e espalhar uma pequena quantidade do veneno.',
        badge: 'Categoria: Comidas Bizarras',
        nivel: 'Nível: Muito Alto',
        detalhe: 'A experiência é tão arriscada que é tratada como uma mistura de gastronomia e perigo extremo.',
        categoria: 'Comidas Bizarras'
    },
    {
        id: 'comida-5',
        titulo: 'O cachorro afrodisíaco',
        descricao: 'Na Coreia, consome-se sopa de cachorro com legumes sob a crença de que o prato aumenta a potência sexual.',
        badge: 'Categoria: Comidas Bizarras',
        nivel: 'Nível: Alto',
        detalhe: 'A tradição faz parte de uma prática cultural antiga, embora seja vista com estranhamento por boa parte do mundo.',
        categoria: 'Comidas Bizarras'
    },
    {
        id: 'comida-6',
        titulo: 'Vinho de cobra',
        descricao: 'Fabricado no Vietnã com aguardente de arroz e uma cobra colocada ainda viva dentro da garrafa.',
        badge: 'Categoria: Comidas Bizarras',
        nivel: 'Nível: Muito Alto',
        detalhe: 'A ideia é que o álcool dilua o veneno da cobra, mas o resultado é um dos drinks mais extremos da gastronomia.',
        categoria: 'Comidas Bizarras'
    }
];

function criarColecaoEditorial(categoria, itens) {
    return itens.map((item, index) => ({
        id: `${categoria.toLowerCase().replace(/[^a-z]+/g, '-')}-${index + 1}`,
        titulo: item[0],
        descricao: item[1],
        detalhe: item[2] || item[1],
        badge: `Categoria: ${categoria}`,
        nivel: 'Leitura informativa',
        categoria
    }));
}

const dadosHistoria = criarColecaoEditorial('História Bizarra', [
    ['A guerra que durou menos de uma hora', 'Um conflito histórico terminou tão depressa que ainda surpreende quem conhece a sua cronologia.', 'A duração exacta e o contexto político ajudam a separar o facto documentado das versões simplificadas.'],
    ['O rei que declarou guerra a animais', 'Em diferentes épocas, animais chegaram a ser tratados como inimigos em decisões oficiais.', 'Estes episódios mostram como leis, crenças e medo podiam influenciar sociedades antigas.'],
    ['A profissão de despertador humano', 'Antes dos alarmes acessíveis, algumas pessoas trabalhavam a acordar vizinhos para o turno da manhã.', 'O serviço era feito com batidas nas janelas e tornou-se desnecessário com a popularização dos relógios.'],
    ['O julgamento de animais na Idade Média', 'Há registos de tribunais que atribuíram responsabilidade a animais por danos ou acidentes.', 'Os julgamentos reflectiam crenças jurídicas e religiosas muito diferentes das actuais.'],
    ['Cidades construídas sobre cidades', 'Muitos centros urbanos cresceram em camadas, escondendo ruas e edifícios de épocas anteriores.', 'A arqueologia usa essas camadas para compreender mudanças na vida quotidiana e no poder.'],
    ['O calendário que saltou dias', 'A mudança entre calendários fez com que alguns países passassem directamente para uma nova data.', 'A alteração serviu para alinhar o calendário civil com o ano solar e provocou confusão na época.'],
    ['O correio enviado por submarino', 'Em certos momentos da história, cartas e encomendas foram transportadas por rotas submarinas pouco comuns.', 'Estas soluções surgiram quando as rotas convencionais eram lentas, perigosas ou estavam interrompidas.'],
    ['O mapa que enganou gerações', 'Mapas antigos misturavam observações reais com ilhas e territórios que nunca existiram.', 'A comparação com mapas posteriores mostra como rumores e erros de navegação influenciaram a geografia.']
]);

const dadosAnimais = criarColecaoEditorial('Animais Bizarros', [
    ['Animais que sobrevivem quase sem água', 'Algumas espécies obtêm a humidade necessária dos alimentos e reduzem drasticamente a perda de água.', 'O rato-canguru é um exemplo conhecido de adaptação a ambientes muito secos.'],
    ['Criaturas que regeneram partes do corpo', 'Axolotes e algumas estrelas-do-mar conseguem reconstruir estruturas perdidas.', 'A regeneração depende da espécie e não significa que todos os tecidos se recomponham da mesma forma.'],
    ['Animais que parecem extraterrestres', 'O peixe-diabrete, o tardígrado e o tubarão-frade têm formas que parecem saídas de ficção científica.', 'As suas características resultam de adaptações a ambientes e modos de vida específicos.'],
    ['Os animais mais estranhos dos oceanos', 'Nas profundezas vivem peixes luminosos, lulas transparentes e criaturas com mandíbulas incomuns.', 'A pressão, a escuridão e a escassez de alimento moldaram formas de vida muito diferentes.'],
    ['Animais que mudam de cor', 'Camaleões, polvos e alguns peixes alteram a aparência para comunicar, esconder-se ou regular a temperatura.', 'A mudança pode envolver pigmentos, células reflectoras ou alterações físicas na pele.'],
    ['Animais que vivem em condições extremas', 'Tardígrados, micróbios e alguns insectos suportam frio, calor, secura ou radiação fora do comum.', 'A resistência varia conforme a fase da vida e as condições exactas do ambiente.'],
    ['O peixe que caminha fora de água', 'Alguns peixes conseguem usar as barbatanas para se deslocar em terra durante curtos períodos.', 'Essa capacidade ajuda a procurar alimento ou escapar de ambientes temporariamente desfavoráveis.'],
    ['A ave que dorme enquanto voa', 'Algumas aves migratórias conseguem descansar partes do cérebro durante o voo.', 'O mecanismo permite longas viagens, embora o sono seja mais curto e fragmentado.']
]);

const dadosCiencia = criarColecaoEditorial('Ciência Bizarra', [
    ['O que aconteceria se a Terra parasse de girar?', 'A rotação influencia os ventos, os oceanos e a duração dos dias.', 'Uma paragem súbita teria efeitos devastadores; uma desaceleração gradual produziria mudanças muito diferentes.'],
    ['Por que o céu é azul?', 'A luz solar espalha-se na atmosfera e as frequências azuis são dispersas com maior intensidade.', 'Ao amanhecer e ao entardecer, o percurso da luz muda e permite que tons vermelhos dominem o céu.'],
    ['O que aconteceria se não houvesse Lua?', 'A Lua influencia as marés e ajuda a estabilizar a inclinação do eixo terrestre.', 'Sem ela, os ecossistemas costeiros e a estabilidade climática poderiam mudar ao longo do tempo.'],
    ['É possível chover animais?', 'Há relatos de peixes e pequenos animais que caíram do céu durante tempestades intensas.', 'Trombas de água e correntes ascendentes podem transportar animais, embora o fenómeno seja raro.'],
    ['Por que existem vulcões?', 'Vulcões surgem quando o calor interno da Terra permite que material fundido alcance a superfície.', 'Eles podem formar ilhas, renovar solos e alterar o clima quando libertam grandes quantidades de partículas.'],
    ['Como surgem os relâmpagos?', 'Descargas eléctricas acontecem quando cargas acumuladas nas nuvens encontram um caminho para se equilibrar.', 'O trovão resulta da expansão rápida do ar aquecido pela descarga.'],
    ['É possível viajar no tempo?', 'A física mostra que o tempo pode passar a ritmos diferentes conforme a velocidade e a gravidade.', 'Isto não significa que seja possível visitar livremente o passado, mas confirma efeitos relativísticos medidos.'],
    ['Por que o gelo flutua?', 'A água expande-se ao congelar e o gelo fica menos denso do que a água líquida.', 'Essa propriedade ajuda a proteger a vida aquática durante períodos frios.']
]);

const dadosLugares = criarColecaoEditorial('Lugares Bizarros', [
    ['As cidades abandonadas mais impressionantes', 'Algumas cidades ficaram vazias por guerras, acidentes ambientais, crises económicas ou mudanças de actividade.', 'As ruínas ajudam a contar a história das pessoas que viveram nesses locais.'],
    ['Lugares onde quase ninguém vive', 'Desertos, ilhas remotas e regiões polares têm populações muito reduzidas.', 'O clima e a distância tornam a vida quotidiana dependente de preparação e infra-estruturas especiais.'],
    ['Ilhas com histórias misteriosas', 'Ilhas isoladas deram origem a relatos de naufrágios, espécies únicas e comunidades singulares.', 'A distância favorece lendas, mas também preserva pistas históricas importantes.'],
    ['Os lugares mais estranhos da Terra', 'Cavernas gigantes, lagos coloridos e formações rochosas desafiam a intuição.', 'A geologia e a química explicam muitas paisagens que parecem artificiais.'],
    ['Aldeias construídas em locais improváveis', 'Há comunidades erguidas em falésias, encostas e regiões sujeitas a condições difíceis.', 'A localização costuma estar ligada à defesa, à água, à agricultura ou ao comércio.'],
    ['Lugares que parecem cenários de filmes', 'Paisagens naturais e cidades históricas podem parecer inventadas pela sua escala e aparência.', 'Fotografias impressionantes ganham ainda mais interesse quando acompanhadas pelo contexto do lugar.'],
    ['A montanha que muda de cor', 'Algumas montanhas exibem cores intensas devido a minerais, erosão e alterações na luz.', 'A geologia do local explica o espectáculo sem precisar de fenómenos sobrenaturais.'],
    ['O lago que parece uma piscina', 'Há lagos com águas tão transparentes ou coloridas que parecem cenários artificiais.', 'A profundidade, os minerais e os organismos presentes determinam a aparência da água.']
]);

const dadosMisterios = criarColecaoEditorial('Mistérios e Fenómenos', [
    ['Luzes estranhas no céu', 'Avistamentos luminosos podem ter origem em fenómenos atmosféricos, aeronaves ou interpretações equivocadas.', 'Investigar exige registos, localização, horário e comparação com explicações conhecidas.'],
    ['O som misterioso do oceano', 'Sons submarinos de grande alcance já foram registados por sensores científicos.', 'Muitos foram explicados por gelo, actividade vulcânica ou animais, enquanto outros permanecem em estudo.'],
    ['O desaparecimento de uma expedição', 'Algumas expedições ficaram famosas por desaparecerem em regiões difíceis de alcançar.', 'As hipóteses devem ser comparadas com mapas, clima, equipamento e provas disponíveis.'],
    ['Pedras que parecem mover-se sozinhas', 'Em certos lagos secos, pedras deixam longos rastos no solo sem que alguém as empurre.', 'Gelo fino, vento e água podem combinar-se para explicar o movimento observado.'],
    ['O mistério das construções antigas', 'Monumentos antigos continuam a gerar perguntas sobre técnicas, organização e finalidade.', 'A arqueologia procura respostas em ferramentas, materiais, inscrições e contexto cultural.'],
    ['Lendas que nasceram de factos reais', 'Algumas histórias populares preservam uma memória distorcida de eventos, lugares ou pessoas reais.', 'Distinguir tradição oral de evidência histórica é essencial para compreender a origem da narrativa.'],
    ['O navio encontrado sem tripulação', 'Navios abandonados alimentaram teorias sobre desaparecimentos e acidentes no mar.', 'Cada caso precisa ser analisado com registos de navegação, clima e evidências físicas.'],
    ['O enigma dos sons repetidos', 'Sons registados em cavernas, montanhas ou oceanos podem parecer mensagens quando não têm origem clara.', 'A acústica do ambiente e equipamentos de medição ajudam a testar explicações possíveis.']
]);

const dadosSabia = criarColecaoEditorial('Você Sabia?', [
    ['Um dia em Vénus é mais longo que o seu ano', 'Vénus gira tão lentamente que completa uma rotação em mais tempo do que leva a orbitar o Sol.', 'É uma curiosidade astronómica que mostra como duração do dia e duração do ano são conceitos diferentes.'],
    ['Os polvos têm três corações', 'Dois corações enviam sangue para as brânquias e um envia sangue para o resto do corpo.', 'O coração principal deixa de bater durante a natação, razão pela qual os polvos preferem deslocar-se no fundo.'],
    ['A memória não é uma gravação perfeita', 'Recordar envolve reconstruir informações a partir de pistas e experiências.', 'Por isso, duas pessoas podem lembrar-se do mesmo acontecimento de formas diferentes.'],
    ['O cheiro da chuva tem um nome', 'Petrichor é o termo usado para o aroma associado à chuva depois de um período seco.', 'O odor vem da combinação de óleos vegetais, solo e compostos libertados no ar.'],
    ['O mel pode durar muito tempo', 'A baixa humidade e a acidez dificultam o crescimento de muitos microrganismos no mel.', 'A conservação depende de estar bem fechado e de não ser contaminado por água.'],
    ['As árvores comunicam de várias formas', 'Raízes, fungos e compostos químicos ajudam plantas a trocar sinais no ambiente.', 'Esta comunicação não é uma conversa humana, mas uma rede de respostas biológicas observáveis.']
]);

const dadosCorpoEditorial = criarColecaoEditorial('Corpo Humano', [
    ['Por que temos soluços?', 'O soluço é uma contracção involuntária do diafragma seguida de um som característico.', 'Comer depressa, mudanças de temperatura e irritação do diafragma podem desencadear episódios passageiros.'],
    ['Por que sonhamos?', 'Os sonhos aparecem com frequência durante o sono REM, quando a actividade cerebral se aproxima da vigília.', 'Ainda existem diferentes hipóteses sobre a função dos sonhos, incluindo memória e processamento emocional.'],
    ['Por que temos arrepios?', 'Arrepios são uma resposta involuntária ligada ao frio, ao medo ou a emoções intensas.', 'A contracção de pequenos músculos junto aos pelos é um vestígio de respostas mais úteis em animais com mais pelo.'],
    ['Por que algumas pessoas espirram ao olhar para o Sol?', 'O reflexo fótico do espirro faz algumas pessoas espirrar quando olham para uma luz intensa.', 'A causa exacta ainda é estudada, mas parece envolver sinais cruzados entre nervos próximos.'],
    ['O que acontece quando dormimos?', 'Durante o sono, o corpo alterna fases que ajudam a recuperar energia e a organizar memórias.', 'Temperatura, hormonas e actividade cerebral mudam ao longo da noite.'],
    ['Por que sentimos cócegas?', 'Cócegas envolvem receptores da pele e uma resposta cerebral influenciada por surpresa e contexto.', 'É difícil fazer cócegas a si próprio porque o cérebro prevê o movimento e reduz a surpresa.'],
    ['Como funciona a memória?', 'Memória envolve codificar, guardar e recuperar informação, e não funciona como um arquivo imutável.', 'A atenção, o sono e a repetição influenciam a capacidade de aprender e recordar.']
]);

const dadosComidasEditorial = criarColecaoEditorial('Comidas Bizarras', [
    ['As comidas mais estranhas do mundo', 'Ingredientes e preparações considerados incomuns mostram como a alimentação varia entre culturas.', 'O que parece estranho depende de hábitos, disponibilidade local e história familiar.'],
    ['Alimentos que parecem perigosos', 'Alguns alimentos exigem preparação rigorosa porque contêm toxinas ou podem estragar rapidamente.', 'Conhecer a origem e o modo correcto de preparação é mais importante do que o aspecto do prato.'],
    ['Por que algumas culturas comem insectos?', 'Insectos podem ser uma fonte de proteína e fazem parte de tradições alimentares em várias regiões.', 'A escolha está ligada ao ambiente, à disponibilidade de alimentos e aos costumes locais.'],
    ['Os queijos mais incomuns do mundo', 'Técnicas de fermentação e maturação criaram queijos com aromas, texturas e aparências inesperadas.', 'Cada tradição usa microrganismos e métodos próprios para transformar o leite.'],
    ['Frutas que parecem não existir', 'Há frutas com formas, cores e sabores tão diferentes que parecem inventadas.', 'A diversidade resulta de adaptação natural, selecção agrícola e ambientes específicos.'],
    ['Pratos tradicionais que surpreendem estrangeiros', 'Receitas familiares podem causar estranheza a quem não conhece a sua história.', 'Compreender o contexto cultural ajuda a olhar para a comida para além da primeira impressão.']
]);

const allItems = [...dadosCorpo, ...dadosComidas, ...dadosHistoria, ...dadosAnimais, ...dadosCiencia, ...dadosLugares, ...dadosMisterios, ...dadosSabia, ...dadosCorpoEditorial, ...dadosComidasEditorial];
let likes = JSON.parse(localStorage.getItem('planeta-bizarro-likes') || '{}');
let currentTheme = localStorage.getItem('planeta-theme') || 'dark';

function escapeSvgText(value) {
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
}

function criarImagemIlustrada(item) {
    const paleta = item.categoria === 'Corpo Humano'
        ? ['#0b1020', '#04d9ff', '#ff2d95']
        : ['#1c0b2d', '#7c3aed', '#39ff14'];

    const legenda = {
        'corpo-1': 'Olho',
        'corpo-2': 'Ouvido',
        'corpo-3': 'Bactérias',
        'corpo-4': 'Chulé',
        'corpo-5': 'Pele',
        'corpo-6': 'Laboratório',
        'comida-1': 'Queijo',
        'comida-2': 'Sapo',
        'comida-3': 'Peixe',
        'comida-4': 'Baiacu',
        'comida-5': 'Sopa',
        'comida-6': 'Cobra'
    };

    const label = legenda[item.id] || item.titulo;
    const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480">
            <rect width="640" height="480" rx="34" fill="${paleta[0]}"/>
            <rect x="42" y="42" width="556" height="396" rx="28" fill="none" stroke="${paleta[2]}" stroke-width="3" opacity="0.55"/>
            <circle cx="516" cy="118" r="92" fill="${paleta[1]}" opacity="0.28"/>
            <path d="M160 350c38-92 142-124 220-70" stroke="${paleta[2]}" stroke-width="12" fill="none" stroke-linecap="round"/>
            <path d="M188 194c30-56 98-82 148-56" stroke="${paleta[1]}" stroke-width="10" fill="none" stroke-linecap="round"/>
            <circle cx="245" cy="214" r="54" fill="${paleta[2]}" opacity="0.92"/>
            <circle cx="245" cy="214" r="20" fill="#0b1020"/>
            <rect x="122" y="128" width="248" height="168" rx="20" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.18)"/>
            <text x="50%" y="58%" text-anchor="middle" fill="${paleta[2]}" font-family="Arial, sans-serif" font-size="36" font-weight="700">${escapeSvgText(label)}</text>
            <text x="50%" y="72%" text-anchor="middle" fill="rgba(255,255,255,0.86)" font-family="Arial, sans-serif" font-size="22">${escapeSvgText(item.categoria)}</text>
        </svg>
    `;

    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function renderizarCards(dados, elementoId) {
    const container = document.getElementById(elementoId);
    const query = document.getElementById('searchInput').value.trim().toLowerCase();
    const filtrados = dados.filter(item => {
        const texto = `${item.titulo} ${item.descricao} ${item.badge} ${item.nivel} ${item.categoria}`.toLowerCase();
        return texto.includes(query);
    });

    container.innerHTML = '';

    if (!filtrados.length) {
        container.innerHTML = '<p class="empty-state">Nenhuma curiosidade combina com a busca.</p>';
        return;
    }

    filtrados.forEach(item => {
        const card = document.createElement('article');
        card.classList.add('card');
        card.dataset.id = item.id;
        const imageSrc = item.imagem || criarImagemIlustrada(item);
        card.innerHTML = `
            <div class="card-media">
                <img src="${imageSrc}" alt="${item.titulo}">
            </div>
            <div class="card-badge">${item.badge}</div>
            <h3>${item.titulo}</h3>
            <p>${item.descricao}</p>
            <div class="card-meta">
                <span>${item.categoria}</span>
                <span>${item.nivel}</span>
            </div>
            <div class="card-actions">
                <button class="like-btn" data-id="${item.id}" aria-label="Curtir curiosidade">
                    🤢 <span class="like-count">${likes[item.id] || 0}</span>
                </button>
                <button class="details-btn" data-id="${item.id}">Ver detalhes</button>
            </div>
        `;

        container.appendChild(card);
    });

    observarCards();
}

function observarCards() {
    const cards = document.querySelectorAll('.card');
    if (!('IntersectionObserver' in window)) {
        cards.forEach(card => card.classList.add('is-visible'));
        return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    cards.forEach(card => observer.observe(card));
}

function setFeaturedCuriosity(item) {
    const featured = document.getElementById('featuredText');
    const banner = document.getElementById('featured-curiosity');
    featured.textContent = `${item.titulo}: ${item.detalhe}`;
    banner.classList.remove('is-active');
    requestAnimationFrame(() => banner.classList.add('is-active'));
}

function abrirModal(item) {
    document.getElementById('modalTitle').textContent = item.titulo;
    document.getElementById('modalDescription').textContent = item.detalhe;
    document.getElementById('modalBadge').textContent = item.badge;
    document.getElementById('modalCategory').textContent = item.categoria;
    document.getElementById('modalLevel').textContent = item.nivel;

    const modal = document.getElementById('detailModal');
    modal.classList.remove('hidden');
    modal.setAttribute('aria-hidden', 'false');
}

function fecharModal() {
    const modal = document.getElementById('detailModal');
    modal.classList.add('hidden');
    modal.setAttribute('aria-hidden', 'true');
}

function aplicarTema(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    currentTheme = theme;
    localStorage.setItem('planeta-theme', theme);
    const button = document.getElementById('themeToggle');
    button.textContent = theme === 'dark' ? '☀️' : '🌙';
}

function alternarTema() {
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    aplicarTema(nextTheme);
}

function atualizarLikes(id) {
    likes[id] = (likes[id] || 0) + 1;
    localStorage.setItem('planeta-bizarro-likes', JSON.stringify(likes));
    const button = document.querySelector(`.like-btn[data-id="${id}"]`);
    if (button) {
        const count = button.querySelector('.like-count');
        count.textContent = likes[id];
    }
}

function renderizarTudo() {
    renderizarCards(allItems.slice(0, 6), 'destaques-grid');
    renderizarCards(dadosHistoria, 'historia-grid');
    renderizarCards(dadosAnimais, 'animais-grid');
    renderizarCards(dadosSabia, 'sabia-grid');
    renderizarCards([...dadosCorpo, ...dadosCorpoEditorial].slice(0, 8), 'corpo-grid');
    renderizarCards(dadosCiencia, 'ciencia-grid');
    renderizarCards([...dadosComidas, ...dadosComidasEditorial].slice(0, 8), 'comidas-grid');
    renderizarCards(dadosLugares, 'lugares-grid');
    renderizarCards(dadosMisterios, 'misterios-grid');
}

document.addEventListener('DOMContentLoaded', () => {
    aplicarTema(currentTheme);
    renderizarTudo();
    setFeaturedCuriosity(allItems[0]);

    document.getElementById('searchInput').addEventListener('input', renderizarTudo);

    const navbar = document.querySelector('.navbar');
    const atualizarNavbarCompacta = () => {
        navbar.classList.toggle('compact', window.scrollY > 90);
    };
    window.addEventListener('scroll', atualizarNavbarCompacta);
    atualizarNavbarCompacta();

    document.getElementById('randomBtn').addEventListener('click', () => {
        const item = allItems[Math.floor(Math.random() * allItems.length)];
        setFeaturedCuriosity(item);
        document.querySelectorAll('.card').forEach(card => card.classList.remove('highlight-card'));
        const selected = document.querySelector(`.card[data-id="${item.id}"]`);
        if (selected) {
            selected.classList.add('highlight-card');
            selected.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    });

    document.getElementById('themeToggle').addEventListener('click', alternarTema);
    document.getElementById('modalClose').addEventListener('click', fecharModal);
    document.getElementById('detailModal').addEventListener('click', (event) => {
        if (event.target.id === 'detailModal') {
            fecharModal();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            fecharModal();
        }
    });

    // Menu mobile
    const menuToggle = document.getElementById('menuToggle');
    const navWrapper = document.querySelector('.nav-wrapper');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navWrapper.classList.toggle('active');
            const isActive = navWrapper.classList.contains('active');
            menuToggle.setAttribute('aria-expanded', isActive);
        });

        // Fechar menu ao clicar em um link
        const navLinks = document.querySelectorAll('.nav-links a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navWrapper.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', false);
            });
        });

        // Fechar menu ao clicar fora
        document.addEventListener('click', (event) => {
            if (!event.target.closest('.navbar')) {
                navWrapper.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', false);
            }
        });
    }

    document.addEventListener('click', (event) => {
        const likeButton = event.target.closest('.like-btn');
        if (likeButton) {
            event.preventDefault();
            atualizarLikes(likeButton.dataset.id);
            return;
        }

        const detailsButton = event.target.closest('.details-btn');
        if (detailsButton) {
            const item = allItems.find(entry => entry.id === detailsButton.dataset.id);
            if (item) {
                abrirModal(item);
            }
        }
    });
});