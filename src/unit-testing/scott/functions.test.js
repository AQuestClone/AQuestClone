var fns = require('./functions.js');

describe('Check Visibility',() => {
    test('expect visibility to be true when location is on screen', () => {
        let location = {
            bottom: 1,
            left: 200,
            right: 1,
            top: 600,
          }

          expect(fns.checkVisibility(location)).toBeTruthy();
    })
    test('visibility should be false when too far up ', () => {
        let location = {
            bottom: -1,
            left: 200,
            right: 1,
            top: 600,
          }

          expect(fns.checkVisibility(location)).toBeFalsy();
    })
    test('visibility should be false when too far down ', () => {
        let location = {
            bottom: 1,
            left: 200,
            right: 1,
            top: 1000,
          }

          expect(fns.checkVisibility(location)).toBeFalsy();
    })
    test('visibility should be false when too far right ', () => {
        let location = {
            bottom: 1,
            left: 2000,
            right: 1,
            top: 600,
          }

          expect(fns.checkVisibility(location)).toBeFalsy();
    })
    test('visibility should be false when too far left ', () => {
        let location = {
            bottom: 1,
            left: 200,
            right: -1,
            top: 600,
          }

          expect(fns.checkVisibility(location)).toBeFalsy();
    })
})