import input from 'input';

function recursion(i) {
    console.log(i);
    recursion(i+1);
}

async function main() {
    recursion(0);
}

main();