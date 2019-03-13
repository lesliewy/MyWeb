
describe('fileutil.js: ', function () {
  it('isExistFile() should work fine.', function () {
    expect(isExistFile("aa")).toBe(true)
    expect(isExistFile('bb')).toBe(false)
  })
})

/*
describe('fileutils.js: ', function () {
  it('add() should work fine.', function () {
    expect(add(1, 2)).toBe(3);
    expect(add(2, 3)).toBe(3);
  })
})
*/
