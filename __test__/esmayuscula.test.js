const isUpperCase = require('../utils/esmayuscula');

test('The string HELLO should return true', () => {

    expect(isUpperCase('HELLO')).toBe(true);

})

test('The string hello should return false', () => {

    expect(isUpperCase('hello')).toBe(false);
    
})