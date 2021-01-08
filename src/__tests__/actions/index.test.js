import { SEARCH_RECIPE, searchRecipe } from '../../actions/index';

describe('actions', () => {
  it('contains SEARCH_RECIPE variable', () => {
    expect(SEARCH_RECIPE).toBe('SEARCH_RECIPE');
  });

  it('searchRecipe returns an object with payload', () => {
    const result = searchRecipe('mango');
    expect(result.payload).toBe('mango');
  });

  it('searchRecipe returns an object with type', () => {
    const result = searchRecipe('mango');
    expect(result.type).toBe(SEARCH_RECIPE);
  });
});
