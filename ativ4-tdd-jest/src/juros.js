module.exports = {
calcParcela(parcela, dias) {
    
    if (dias > 0 && dias <= 30) {
        const juros = 1.05
        return parcela * juros
    }
    
    
    
}

}