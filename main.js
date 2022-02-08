import input from 'input';

const shopping = [
    'Apples',
    'Bananas',
    'Pears',
    'Oranges',
];


async function main() {
    console.log('Here is your shopping list');
    console.log('===========================');
    for( let element of shopping) {
        console.log(element);
    }
}

main();