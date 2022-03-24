//https://ricardometring.com/javascript-replace-special-characters

const str = 'ÁÉÍÓÚáéíóúâêîôûàèìòùÇç/.,~!@#$%&_-12345';
const normalizeText = (str: string)=> str.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, '').toLowerCase();

export default normalizeText;
