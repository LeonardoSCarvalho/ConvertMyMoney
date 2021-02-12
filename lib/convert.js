module.exports = (cotacao, qtda) => {
    return parseFloat((cotacao * qtda).toFixed(2));
}