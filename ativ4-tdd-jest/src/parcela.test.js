const juros= require('./juros')

describe('teste juros', () => {
    it('paga-se 5% de juros até 30 dias de atraso', () => {
        const dias = [...Array(29).keys()]
        //const dias = [30]
        const parcela = 100
        expect(juros.calcParcela(parcela, dias)).toEqual(105)
    })

    // it('paga-se 10% de juros de 31 até 60 dias de atraso', () => {
    //     const dias = [1, 2, 3, 0]
    //     expect(juros.juros(dias)).toEqual(0)
    // })

    // it('paga-se 15% de juros a partir de 60 dias de atraso', () => {
    //     const dias = [1, 2, 3, 4, 5, 6, 7]
    //     expect(juros.juros(dias)).toEqual(56)
    // })
})
