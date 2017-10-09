import expect from 'expect';

const actionsMap = {
};

Object.keys(actionsMap).forEach((key) => {
  const { constant, method } = actionsMap[key];
  describe(`${key}()`, () => {
    it('creates an object', () => {
      expect(method()).toBeAn(Object);
    });
    it('creates the right type', () => {
      expect(method().type).toBe(constant);
    });
    it('sets the first argument as a payload', () => {
      const target = {};
      expect(method(target).payload).toBe(target);
    });
  });
});
