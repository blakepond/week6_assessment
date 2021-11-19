const {shuffleArray} = require('./utils')

describe('shuffleArray should shuffle', () => {
    test("shuffleArray should be an array", ()=> {
        let shuffledArray = shuffleArray();
        expect(typeof shuffledArray).toBe('array')
    })
})