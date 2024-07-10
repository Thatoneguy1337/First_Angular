import { TestBed } from "@angular/core/testing";

import { likePostRequest } from "./likes.request";

describe('likePostRequest', ()=>{
    let service: likePostRequest;

    beforeEach(() => {
        TestBed.configureTestingModule({})
        service = TestBed.inject(likePostRequest)
    })

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});






