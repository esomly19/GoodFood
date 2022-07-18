const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
    await prisma.plat.upsert({
        where: { nom: 'Pennes au pesto' },
        update: {},
        create: {
            prix_ttc: 8,
            nom: 'Pennes au pesto',
            list_ingredient: ["pates","pesto","huile d'olive"],
            restaurant_id: null,
            image: '/images/penne-pesto.webp',
            cuisine: 'italienne',
            tags: ['pates','italien','plat'],
            supplements: ['{"ingredient":"parmesan","prix":1.5}',],
            description:"Nos pennes au pesto revisitées par nos chefs étoilés sauront vous surpendre par leurs saveurs venues d'italie. "
        },
    })
    await prisma.plat.upsert({
        where: { nom: 'Tagliatelles bolognaise' },
        update: {},
        create: {
            prix_ttc: 9.5,
            nom: 'Tagliatelles bolognaise',
            list_ingredient: ["pates","tomate","viande hachée de boeuf"],
            restaurant_id: null,
            image: '/images/bolognaise.webp',
            cuisine: 'italienne',
            tags: ['pates','italien','plat'],
            supplements: ['{"ingredient":"parmesan","prix":1.5}',],
            description:"Nos tagliatelles bolognaise revisitées par nos chefs étoilés sauront vous surpendre par leurs saveurs venues d'italie. "
        },
    })
    await prisma.plat.upsert({
        where: { nom: 'Pennes à la tomate' },
        update: {},
        create: {
            prix_ttc: 6.5,
            nom: 'Pennes à la tomate',
            list_ingredient: ["pates","sauce tomate"],
            restaurant_id: null,
            image: '/images/penne-tomato.webp',
            cuisine: 'italienne',
            tags: ['pates','italien','plat'],
            supplements: ['{"ingredient":"parmesan","prix":1.5}',],
            description:"Nos pennes à la tomate revisitées par nos chefs étoilés sauront vous surpendre par leurs saveurs venues d'italie. "
        },
    })
    await prisma.plat.upsert({
        where: { nom: 'Pizza margherita' },
        update: {},
        create: {
            prix_ttc: 10.5,
            nom: 'Pizza margherita',
            list_ingredient: ["pate à pizza","sauce tomate","mozzarela"],
            restaurant_id: null,
            image: '/images/pizza.webp',
            cuisine: 'italienne',
            tags: ['pizza','italien','plat'],
            supplements: ['{"ingredient":"basilic","prix":0.5}',],
            description:"Notre pizza margherita revisitée par nos chefs étoilés saura vous surpendre par ça saveurs venues d'italie. "
        },
    })
    await prisma.plat.upsert({
        where: { nom: 'Gyoza' },
        update: {},
        create: {
            prix_ttc: 7,
            nom: 'Gyoza',
            list_ingredient: ["pates","farce","épices"],
            restaurant_id: null,
            image: '/images/gyoza.webp',
            cuisine: 'japonaise',
            tags: ['pates','japonais','plat'],
            supplements: ['{"ingredient":"gyoza","prix":1.5}',],
            description:"Nos 6 gyozas revisitées par nos chefs étoilés sauront vous surpendre par leurs saveurs venues du pays du soleil levant. "
        },
    })
    await prisma.plat.upsert({
        where: { nom: 'Fish and chips' },
        update: {},
        create: {
            prix_ttc: 8.75,
            nom: 'Fish and chips',
            list_ingredient: ["poisson","panure","frites"],
            restaurant_id: null,
            image: '/images/fish-and-chips.webp',
            cuisine: 'anglaises',
            tags: ['frites','anglais',"poisson",'plat'],
            supplements: ['{"ingredient":"ketchup","prix":1}','{"ingredient":"mayonaise","prix":1}','{"ingredient":"tartare","prix":1}'],
            description:"Notre fish and chips revisité par nos chefs étoilés sera vous surpendre par ses saveurs venues d'outre Manche. "
        },
    })
    await prisma.plat.upsert({
        where: { nom: 'Poulet frit et frites' },
        update: {},
        create: {
            prix_ttc: 8.75,
            nom: 'Poulet frit et frites',
            list_ingredient: ["poulet","panure","frites"],
            restaurant_id: null,
            image: '/images/poulet.webp',
            cuisine: 'americaine',
            tags: ['americain','poulet','plat'],
            supplements: ['{"ingredient":"ketchup","prix":1}','{"ingredient":"mayonaise","prix":1}','{"ingredient":"tartare","prix":1}'],
            description:"Notre poulet frit revisité par nos chefs étoilés sera vous surpendre par ses saveurs venues d'outre Atlantique. "
        },
    })
    await prisma.plat.upsert({
        where: { nom: 'Choucroute' },
        update: {},
        create: {
            prix_ttc: 8.75,
            nom: 'Choucroute',
            list_ingredient: ["choucroute","porc",'bière','pomme de terre'],
            restaurant_id: 4,
            image: '/images/choucroute.webp',
            cuisine: 'alsacienne',
            tags: ['alsace','plat'],
            supplements: [],
            description:"Notre choucroute revisitée par nos chefs étoilés sera vous surpendre par ses saveurs de nos régions. "
        },
    })
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
