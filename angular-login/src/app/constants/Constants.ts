import { Injectable } from '@angular/core';
@Injectable()
export class Constants {
    // single point to switch urls
    public readonly API_ENDPOINT: string = 'domain/api';
    public readonly API_MOCK_ENDPOINT: string = 'mock-domain/api';
}
