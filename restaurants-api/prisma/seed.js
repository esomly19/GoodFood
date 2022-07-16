const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
    await prisma.restaurant.upsert({
        where: { ville:"Nancy" },
        update: {},
        create: {
            ville:"Nancy",
            pays:"FRANCE",
            adresse:"2 All. du Rond Pré",
            tel:"0607080908",
            lat:48.675505,
            lng:6.154985
        },
    });
    await prisma.restaurant.upsert({
        where: { ville:"Paris" },
        update: {},
        create: {
            ville:"Paris",
            pays:"FRANCE",
            adresse:"2 Rue Darcy",
            tel:"0607080908",
            lat:48.867867934550965,
            lng:2.3786191260746854
        },
    });
    await prisma.restaurant.upsert({
        where: { ville:"Metz" },
        update: {},
        create: {
            ville:"Metz",
            pays:"FRANCE",
            adresse:"2a Av. de Lattre de Tassigny",
            tel:"0607080908",
            lat:49.11109782496489,
            lng:6.16824704064312
        },
    });
    await prisma.restaurant.upsert({
        where: { ville:"Strasbourg" },
        update: {},
        create: {
            ville:"Strasbourg",
            pays:"FRANCE",
            adresse:"11 Rue de Dettwiller",
            tel:"0607080908",
            lat:48.595525450896545,
            lng:7.720509546842581
        },
    });
    await prisma.restaurant.upsert({
        where: { ville:"Nantes" },
        update: {},
        create: {
            ville:"Nantes",
            pays:"FRANCE",
            adresse:"4-6 Rue de l'Ancienne Monnaie",
            tel:"0607080908",
            lat:47.21481295370859,
            lng: -1.5523942403690183
        },
    });
    await prisma.restaurant.upsert({
        where: { ville:"Bordeaux" },
        update: {},
        create: {
            ville:"Bordeaux",
            pays:"FRANCE",
            adresse:"30 Rue des Frères Bonie",
            tel:"0607080908",
            lat:44.83591222556838,
            lng: -0.5803388594610503
        },
    });
    await prisma.restaurant.upsert({
        where: { ville:"Lyon" },
        update: {},
        create: {
            ville:"Lyon",
            pays:"FRANCE",
            adresse:"24 Rue du Président Édouard Herriot",
            tel:"0607080908",
            lat:45.766559601585925,
            lng: 4.8341867270667285
        },
    });
    await prisma.restaurant.upsert({
        where: { ville:"Montpellier" },
        update: {},
        create: {
            ville:"Montpellier",
            pays:"FRANCE",
            adresse:"15 Cr Gambetta",
            tel:"0607080908",
            lat:43.60583345482433,
            lng: 3.8730700047918436
        },
    });
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
