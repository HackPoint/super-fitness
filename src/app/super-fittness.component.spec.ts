import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { SuperFittnessAppComponent } from '../app/super-fittness.component';

beforeEachProviders(() => [SuperFittnessAppComponent]);

describe('App: SuperFittness', () => {
  it('should create the app',
      inject([SuperFittnessAppComponent], (app: SuperFittnessAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'super-fittness works!\'',
      inject([SuperFittnessAppComponent], (app: SuperFittnessAppComponent) => {
    expect(app.title).toEqual('super-fittness works!');
  }));
});
