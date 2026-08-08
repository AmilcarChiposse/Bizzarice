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

const allItems = [...dadosCorpo, ...dadosComidas];
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
    renderizarCards(dadosCorpo, 'corpo-grid');
    renderizarCards(dadosComidas, 'comidas-grid');
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