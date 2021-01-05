import rootReducer from '../../reducers/index';

describe('rootReducers', () => {
  it('should be a function', () => {
    const result = rootReducer;
    expect(typeof result).toBe('function');
  });
});
