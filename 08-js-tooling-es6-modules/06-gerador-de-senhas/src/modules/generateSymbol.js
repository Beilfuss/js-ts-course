

export default function generateSymbol() {
    const symbols = '~!@#$%^&*()_+´-={}|[]\:";`<>?,./';

    const index = Math.floor(Math.random() * symbols.length);

    return symbols[index];
}