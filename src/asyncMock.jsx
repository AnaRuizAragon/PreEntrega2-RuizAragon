const products = [
    {
        id: 'Evil West',
        name: 'Evil West',
        price: 6500,
        category: 'Consola',
        img: './src/img/evil west.webp',
        stock: 25,
        description: 'Una amenaza oscura consume el Viejo Oeste. En solitario o en cooperativo, lucha con estilo en combates explosivos y viscerales contra monstruosidades sedientas de sangre. Erradica las hordas vampíricas con tu guantelete alimentado por rayos y conviértete en un Superhéroe del Lejano Oeste.'
    },
    {
        id: 'Sonic Frontiers',
        name: 'Sonic Frontiers',
        price: 8000,
        category: 'Consola',
        img: './src/img/sonic.webp',
        stock: 25,
        description: '¡Experimenta a Sonic como nunca antes!'
    },
    {
        id: 'Dreamlight Valley',
        name: 'Dreamlight Valley',
        price: 3475,
        category: 'Consola',
        img: './src/img/dreamlight.webp',
        stock: 25,
        description: 'Explora un mundo lleno de la magia de Disney a medida que descubres ricas historias y construyes el vecindario perfecto junto a los héroes y villanos de Disney y Pixar en este nuevo juego de aventuras de simulación de vida. Bienvenido a Disney Dreamlight Valley.'
    },
    {
        id: 'Valkirye Elysium',
        name: 'Valkirye Elysium',
        price: 4500,
        category: 'Consola',
        img: './src/img/valkyrie.webp',
        stock: 25,
        description: 'Hace mucho tiempo, Ragnarok, el Fin de los Tiempos, se cernía sobre los reinos. El Padre Todopoderoso Odín, con lo último de sus fuerzas, creó un emisario de la redención, Valkyrie; su única tarea es la salvación de un mundo condenado.'
    },
    {
        id: 'Inscryption',
        name: 'Inscryption',
        price: 900,
        category: 'PC',
        img: './src/img/inscryption.webp',
        stock: 25,
        description: 'Inscryption es un juego de cartas, una odisea negra como la tinta que mezcla el «roguelike» de creación de mazos, puzles de estilo «escape room» y terror psicológico en un batido con un toque de sangre. Pero más oscuros aún son los secretos inscritos en las cartas...'
    },
    {
        id: 'Kena: Bridge of Spirits',
        name: 'Kena: Bridge of Spirits',
        price: 2000,
        category: 'PC',
        img: './src/img/kena.webp',
        stock: 25,
        description: 'Una aventura de acción basada en una historia que combina la exploración con el combate vertiginoso. Desenreda el pasado en la piel de Kena, una joven guía espiritual en búsqueda del sagrado Santuario de la montaña.'
    },
    {
        id: 'Tunic',
        name: 'Tunic',
        price: 2100,
        category: 'PC',
        img: './src/img/tunic.webp',
        stock: 25,
        description: 'Explora un reino repleto de leyendas olvidadas, poderes ancestrales y feroces monstruos en TUNIC, un juego de acción isométrico sobre un pequeño zorro que emprende una gran aventura.'
    },
    {
        id: 'We Are OFK',
        name: 'We Are OFK',
        price: 224,
        category: 'PC',
        img: './src/img/we are ofk.webp',
        stock: 25,
        description: 'De la banda de pop indie OFK, llega la historia de cómo cuatro amigos se reunieron para lanzar su primer EP sin estrellar sus teléfonos contra la pared de la frustración. Una serie interactiva de sus orígenes sobre los sueños, el amor y los altos alquileres en Los Ángeles.'
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (productCategory) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.category === productCategory))
        }, 500)
    })
}