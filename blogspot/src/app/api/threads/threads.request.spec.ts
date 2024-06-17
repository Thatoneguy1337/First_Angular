import { TestBed } from '@angular/core/testing'
import { ThreadRequest } from './threads.request'

describe('ThreadRequest', () => {

    let service: ThreadRequest;


    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ThreadRequest);
    });

    it('should be created', ()=> {
        expect(service).toBeTruthy();
    });

})



