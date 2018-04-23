let fns = require('./alex.functions.js');

describe('unit test', () => {
    test('should return get request', () => {
        expect(fns.setActiveBlog(23)).toEqual('get request')
    })
    test('should return 0', () => {
        expect(fns.setActiveBlog(26)).toEqual(0)
    })
    test('should add clap', () => {
        expect(fns.addClaps()).toEqual(1)
    })
    test('should return true', () => {
        expect(fns.handleToggle()).toEqual(true)
    })
    test('should not be false', () => {
        expect(fns.handleToggle()).not.toEqual(false)
    })
})