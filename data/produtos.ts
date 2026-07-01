// =============================================================================
// data/produtos.ts — BANCO DE DADOS LOCAL DOS PRODUTOS
// =============================================================================
// Separamos os DADOS da INTERFACE. Assim, MenuScreen e ProductDetailScreen
// usam a MESMA fonte de informação — evita duplicar nome, preço, imagem, etc.
//
// Nesta aula nova, cada produto ganhou campos extras:
//   - about: descrição completa (seção "Sobre" na tela de detalhe)
//   - ingredients: lista de ingredientes (seção "Ingredientes")
// =============================================================================

// -----------------------------------------------------------------------------
// TIPO Product — formato de cada item do cardápio
// -----------------------------------------------------------------------------
export type Product = {
    id: string;
    name: string;
    description: string; // texto curto (lista do cardápio)
    about: string; // texto longo (tela de detalhe)
    price: string;
    image: number;
    ingredients: string[]; // array de strings com cada ingrediente
};

// --- COMBOS ---
export const combos: Product[] = [
    {
        id: 'combo-1',
        name: 'McOferta Média Big Mac Duplo',
        description: 'Quatro hambúrgueres (100% carne bovina), alface americana...',
        about:
            'Quatro hambúrgueres (100% carne bovina), alface americana, queijo fatiado sabor cheddar, molho especial, cebola, picles e pão com gergilim, acompanhamento e bebida.',
        price: 'R$ 39,90',
        image: require('../images/combo-big-mac-duplo.png'),
        ingredients: [
            'Pão com gergilim',
            'Hambúrguer de carne 100% bovina',
            'Alface americana',
            'Queijo fatiado sabor cheddar',
            'Molho especial',
            'Cebola',
            'Picles',
        ],
    },
    {
        id: 'combo-2',
        name: 'Novo Brabo Melt Onion Rings',
        description: 'Dois hambúrgueres de carne 100% bovina, méquinese, a exclu...',
        about:
            'Dois hambúrgueres de carne 100% bovina, méquinese, cebola crispy, onion rings, pão brioche, acompanhamento e bebida.',
        price: 'R$ 41,50',
        image: require('../images/combo-brabo-melt-onion-rings.png'),
        ingredients: [
            'Pão brioche',
            'Hambúrguer de carne 100% bovina',
            'Méquinese',
            'Cebola crispy',
            'Onion rings',
            'Queijo cheddar',
        ],
    },
    {
        id: 'combo-3',
        name: 'McCrispy Chicken Elite',
        description: 'Composto por pão tipo brioche com batata, molho Honey&Fire, ...',
        about:
            'Composto por pão tipo brioche com batata, molho Honey&Fire, bacon em fatias, alface, tomate, cebola roxa e sobrecoxa de frango empanada, acompanhamento e bebida.',
        price: 'R$ 39,90',
        image: require('../images/combo-mcrispy-elite.png'),
        ingredients: [
            'Pão brioche',
            'Sobrecoxa de frango empanada',
            'Molho Honey&Fire',
            'Bacon em fatias',
            'Alface',
            'Tomate',
            'Cebola roxa',
        ],
    },
    {
        id: 'combo-4',
        name: 'Duplo Cheddar McMelt',
        description: 'Dois hambúrgueres (100% carne bovina), molho lácteo com queij...',
        about:
            'Dois hambúrgueres (100% carne bovina), molho lácteo com queijo tipo cheddar, cebola ao molho shoyu, pão escuro com gergelim, acompanhamento e bebida.',
        price: 'R$ 36,20',
        image: require('../images/combo-duplo-cheddar-mcmelt.png'),
        ingredients: [
            'Pão escuro com gergelim',
            'Hambúrguer de carne 100% bovina',
            'Molho lácteo com queijo cheddar',
            'Cebola ao molho shoyu',
        ],
    },
];

// --- LANCHES ---
export const lanches: Product[] = [
    {
        id: 'lanche-1',
        name: 'Big Mac',
        description: 'Quatro hambúrgueres (100% carne bovina), alface americana...',
        about:
            'Dois hambúrgueres (100% carne bovina), alface americana, queijo fatiado sabor cheddar, molho especial, cebola, picles e pão com gergilim.',
        price: 'R$ 39,90',
        image: require('../images/lanche-big-mac.png'),
        ingredients: [
            'Pão com gergilim',
            'Hambúrguer de carne 100% bovina',
            'Alface americana',
            'Queijo fatiado sabor cheddar',
            'Molho especial',
            'Cebola',
            'Picles',
        ],
    },
    {
        id: 'lanche-2',
        name: 'Duplo Quarterão',
        description: 'Dois hambúrgueres de carne 100% bovina, méquinese, a exclu...',
        about:
            'Dois hambúrgueres de carne 100% bovina, méquinese, cebola, picles, queijo cheddar, pão com gergilim.',
        price: 'R$ 41,50',
        image: require('../images/lanche-duplo-quarterao.png'),
        ingredients: [
            'Pão com gergilim',
            'Hambúrguer de carne 100% bovina',
            'Méquinese',
            'Cebola',
            'Picles',
            'Queijo cheddar',
        ],
    },
    {
        id: 'lanche-3',
        name: 'McMelt',
        description: 'Composto por pão tipo brioche com batata, molho Honey&Fire, ...',
        about:
            'Hambúrguer de carne 100% bovina, molho lácteo com queijo tipo cheddar, cebola ao molho shoyu e pão escuro com gergelim.',
        price: 'R$ 39,90',
        image: require('../images/lanche-mcmelt.png'),
        ingredients: [
            'Pão escuro com gergelim',
            'Hambúrguer de carne 100% bovina',
            'Molho lácteo com queijo cheddar',
            'Cebola ao molho shoyu',
        ],
    },
    {
        id: 'lanche-4',
        name: 'McNífico Bacon',
        description: 'Dois hambúrgueres (100% carne bovina), molho lácteo com queij...',
        about:
            'Dois hambúrgueres (100% carne bovina), molho lácteo com queijo tipo cheddar, bacon, cebola, tomate, alface e pão com gergilim.',
        price: 'R$ 36,20',
        image: require('../images/lanche-mcnifico-bacon.png'),
        ingredients: [
            'Pão com gergilim',
            'Hambúrguer de carne 100% bovina',
            'Bacon',
            'Queijo cheddar',
            'Alface',
            'Tomate',
            'Cebola',
        ],
    },
];

// --- FRITAS ---
export const fritas: Product[] = [
    {
        id: 'fritas-1',
        name: 'Fritas Grande',
        description: 'Batatas fritas crocantes e sequinhas. Vem bastante!',
        about: 'Batatas fritas crocantes e sequinhas. Porção grande, ideal para compartilhar.',
        price: 'R$ 10,90',
        image: require('../images/fritas-grande.png'),
        ingredients: ['Batata', 'Óleo vegetal', 'Sal'],
    },
    {
        id: 'fritas-2',
        name: 'Fritas Média',
        description: 'Batatas fritas crocantes e sequinhas. Vem bastante!',
        about: 'Batatas fritas crocantes e sequinhas. Porção média, perfeita para um lanche.',
        price: 'R$ 9,90',
        image: require('../images/fritas-media.png'),
        ingredients: ['Batata', 'Óleo vegetal', 'Sal'],
    },
    {
        id: 'fritas-3',
        name: 'Fritas Pequena',
        description: 'Batatas fritas crocantes e sequinhas. Vem bastante!',
        about: 'Batatas fritas crocantes e sequinhas. Porção pequena, leve e prática.',
        price: 'R$ 5,90',
        image: require('../images/fritas-pequena.png'),
        ingredients: ['Batata', 'Óleo vegetal', 'Sal'],
    },
];

// --- BEBIDAS ---
export const bebidas: Product[] = [
    {
        id: 'bebida-1',
        name: 'Coca-Cola',
        description: 'Coca-cola gelada para acompanhar seu lanche.',
        about: 'Coca-Cola gelada para acompanhar seu lanche. Refrescante e clássica.',
        price: 'R$ 5,90',
        image: require('../images/coca-cola.png'),
        ingredients: ['Água gaseificada', 'Açúcar', 'Extrato de noz de cola', 'Corante caramelo'],
    },
    {
        id: 'bebida-2',
        name: 'Fanta Laranja',
        description: 'Fanta laranja gelada para acompanhar seu lanche.',
        about: 'Fanta Laranja gelada para acompanhar seu lanche. Sabor cítrico e refrescante.',
        price: 'R$ 5,90',
        image: require('../images/fanta-laranja.png'),
        ingredients: ['Água gaseificada', 'Açúcar', 'Suco de laranja', 'Corante natural'],
    },
    {
        id: 'bebida-3',
        name: 'Água Mineral',
        description: 'Água mineral sem gás para acompanhar seu lanche.',
        about: 'Água mineral sem gás. Leve, natural e hidratante.',
        price: 'R$ 5,90',
        image: require('../images/agua.png'),
        ingredients: ['Água mineral natural'],
    },
];

// Junta TODOS os produtos em um único array (útil para buscar por id)
const todosOsProdutos: Product[] = [
    ...combos,
    ...lanches,
    ...fritas,
    ...bebidas,
];

// -----------------------------------------------------------------------------
// getProdutos — retorna produtos de uma categoria (usado na MenuScreen)
// -----------------------------------------------------------------------------
export function getProdutos(categoria: string): Product[] {
    switch (categoria) {
        case 'Combos':
            return combos;
        case 'Lanches':
            return lanches;
        case 'Fritas':
            return fritas;
        case 'Bebidas':
            return bebidas;
        default:
            return combos;
    }
}

// -----------------------------------------------------------------------------
// getProdutoById — busca UM produto pelo id (usado na ProductDetailScreen)
// -----------------------------------------------------------------------------
// Quando navegamos com navigation.navigate('ProductDetail', { productId: 'combo-1' }),
// a tela de detalhe recebe só o ID e usa esta função para achar o produto completo.
export function getProdutoById(id: string): Product | undefined {
    return todosOsProdutos.find((produto) => produto.id === id);
}
