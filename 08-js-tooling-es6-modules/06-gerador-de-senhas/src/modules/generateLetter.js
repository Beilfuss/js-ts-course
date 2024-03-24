

export default function generateLetter() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    const index = Math.floor(Math.random() * alphabet.length);

    return alphabet[index];
}