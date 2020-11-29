// Angular Modules
import { Injectable } from '@angular/core';
import { Constants } from '../constants/Constants';
import { QueryStringParameters } from '../helpers/query-string-parameters';
import { UrlBuilder } from '../helpers/url-builder';


@Injectable()
// Returns the api endpoints urls to use in services in a consistent way
export class ApiEndpointsService {

    constructor(private constants: Constants) { }

    public getLoginEndpoint = (): string => this.createUrl('userLogin.json', true);
 

    private createUrl(action: string, isMockAPI: boolean = false): string {
        const urlBuilder: UrlBuilder = new UrlBuilder(
            isMockAPI ? this.constants.API_MOCK_ENDPOINT : this.constants.API_ENDPOINT,
            action
        );
        return urlBuilder.toString();
    }

    // URL WITH QUERY PARAMS
    private createUrlWithQueryParameters(action: string, queryStringHandler?: (queryStringParameters: QueryStringParameters) => void): string {
        const urlBuilder: UrlBuilder = new UrlBuilder(this.constants.API_ENDPOINT, action);
        // Push extra query string params
        if (queryStringHandler) {
            queryStringHandler(urlBuilder.queryString);
        }
        return urlBuilder.toString();
    }

    // URL WITH PATH VARIABLES
    private createUrlWithPathVariables(action: string, pathVariables: any[] = []): string {
        let encodedPathVariablesUrl: string = '';
        // Push extra path variables
        for (const pathVariable of pathVariables) {
            if (pathVariable !== null) {
                encodedPathVariablesUrl += `/${encodeURIComponent(pathVariable.toString())}`;
            }
        }
        const urlBuilder: UrlBuilder = new UrlBuilder(this.constants.API_ENDPOINT, `${action}${encodedPathVariablesUrl}`);
        return urlBuilder.toString();
    }
}