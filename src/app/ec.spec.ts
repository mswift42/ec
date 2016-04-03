import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {EcApp} from '../app/ec';

beforeEachProviders(() => [EcApp]);

describe('App: Ec', () => {
  it('should have the `defaultMeaning` as 42', inject([EcApp], (app: EcApp) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([EcApp], (app: EcApp) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});

