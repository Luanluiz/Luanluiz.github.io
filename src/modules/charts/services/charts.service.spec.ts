import { TestBed } from '@angular/core/testing';

import { ChartsService } from '@app/modules/dashboard/charts/serives/charts.service';

describe('ChartsService', () => {
    let chartsService: ChartsService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ChartsService],
        });
        chartsService = TestBed.inject(ChartsService);
    });

    describe('getCharts$', () => {
        it('should return Observable<Charts>', () => {
            chartsService.getCharts$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
