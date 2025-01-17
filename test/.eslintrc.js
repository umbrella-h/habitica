module.exports = {
  extends: [
    'habitrpg/lib/mocha',
  ],
  globals: {
    _: true,
    chai: true,
    expect: true,
    sinon: true,
    sandbox: true
  },
  rules: {
    'import/no-extraneous-dependencies': 'off',
  }
}
