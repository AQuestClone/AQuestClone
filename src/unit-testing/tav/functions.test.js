const fns = require('./functions.js');

describe('Check Hover State', () => {
    test('Expect hovered to equal 1 on first hover', () => {
        let hovered = 0;
        expect(fns.toggleHover(hovered)).toBe(1);
    })

    test('Expect hovered to equal 2 on hover leave', () => {
        let hovered = 1;
        expect(fns.toggleHover(hovered)).toBe(2);
    })

    test('Expect hovered to go to 1 on any hover', () => {
        let hovered = 2;
        expect(fns.toggleHover(hovered)).toBe(1);
    })

    test('Expect hovered to not change if hovered is 3', () => {
        let hovered = 3;
        expect(fns.toggleHover(hovered)).toBe(3);
    })

    test('Expect a menu click to change hovered to 3', () => {
        let hovered = 1;
        expect(fns.toggleMenu(hovered)).toBe(3);
    })

    test('Expect a menu close to change hovered to 1', () => {
        let hovered = 3;
        expect(fns.toggleMenu(hovered)).toBe(1);
    })
})