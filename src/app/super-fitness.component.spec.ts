import {
    beforeEachProviders,
    describe,
    expect,
    it,
    inject
} from '@angular/core/testing';
import {SuperFitnessAppComponent} from '../app/super-fitness.component';

beforeEachProviders(() => [SuperFitnessAppComponent]);

describe('App: SuperFitness', () => {
    it('should create the app',
        inject([SuperFitnessAppComponent], (app:SuperFitnessAppComponent) => {
            expect(app).toBeTruthy();
        })
    );

    it('should have as title \'super-fitness works!\'',
        inject([SuperFitnessAppComponent], (app:SuperFitnessAppComponent) => {
            expect(app.title).toEqual('Super Fitness');
        })
    );
});
