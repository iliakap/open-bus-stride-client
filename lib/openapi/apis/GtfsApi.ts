/* tslint:disable */
/* eslint-disable */
/**
 * Open Bus Stride API
 * ### Follow planned and real-time bus statistics 🚌  Welcome to The Public Knowledge Workshop\'s Stride project. We provide usable and accurate data about the Israeli public transportation system.  For background on the project and some more detailed documentation and usage guides, see [STRIDE.md](https://github.com/hasadna/open-bus-pipelines/blob/main/STRIDE.md).  Looking for a specific use-case?  * Take a look at the **user cases** APIs below. * Try one of our existing [jupyter notebooks](https://github.com/hasadna/open-bus-stride-client/blob/main/README.md#using-the-interactive-jupyter-notebooks). * Don\'t see your use-case covered here? Please [open us a ticket](https://github.com/login?return_to=https%3A%2F%2Fgithub.com%2Fhasadna%2Fopen-bus%2Fissues%2Fnew)!  Queries are by default limited to 100 results per query, this limit can be increased up to 500,000 results. Please try to set appropriate query parameters to limit the results to reduce load on our DB. If you do need to get large number of results (up to 500,000) it\'s recommended to use one of these methods:  1. Use HTTP streaming and JSON streaming decoder, this method is most efficient and provide accurate results.    Our [Stride Python Client iterate method](https://github.com/hasadna/open-bus-stride-client#usage) uses this method. 2. Use combination of limit / offset parameters to get results by page. This method may be less accurate because    it depends on data remaining unchanged between requests.  For more advanced usage-  * Use **gtfs** for data about the planned lines timetables.  * Use **siri** for data about lines real-time * See [Open Bus Stride Data Model](https://github.com/hasadna/open-bus-stride-db/blob/main/DATA_MODEL.md) for description of field and table names. * See [Open Bus Stride ETL Processes](https://github.com/hasadna/open-bus-pipelines/blob/main/STRIDE_ETL_PROCESSES.md) for description of the ETL processes which fetch and aggregate the data. * See [MOT Developer Information](https://www.gov.il/BlobFolder/generalpage/gtfs_general_transit_feed_specifications/he/GTFS%20-%20Developer%20Information.pdf) for description of the source fields as published by the Israel Ministry of Transportation. 
 *
 * The version of the OpenAPI document: 161d1ee7535e16c2bff40d97e829ee1ed9f59bae
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  GtfsAgencyPydanticModel,
  GtfsRidePydanticModel,
  GtfsRideStopPydanticModel,
  GtfsRideWithRelatedPydanticModel,
  GtfsRoutePydanticModel,
  GtfsStopPydanticModel,
  HTTPValidationError,
} from '../models';
import {
    GtfsAgencyPydanticModelFromJSON,
    GtfsAgencyPydanticModelToJSON,
    GtfsRidePydanticModelFromJSON,
    GtfsRidePydanticModelToJSON,
    GtfsRideStopPydanticModelFromJSON,
    GtfsRideStopPydanticModelToJSON,
    GtfsRideWithRelatedPydanticModelFromJSON,
    GtfsRideWithRelatedPydanticModelToJSON,
    GtfsRoutePydanticModelFromJSON,
    GtfsRoutePydanticModelToJSON,
    GtfsStopPydanticModelFromJSON,
    GtfsStopPydanticModelToJSON,
    HTTPValidationErrorFromJSON,
    HTTPValidationErrorToJSON,
} from '../models';

export interface GtfsAgenciesListGetRequest {
    limit?: number;
    offset?: number;
    dateFrom?: Date;
    dateTo?: Date;
}

export interface GtfsRideStopsGetGetRequest {
    id: number;
}

export interface GtfsRideStopsListGetRequest {
    limit?: number;
    offset?: number;
    getCount?: boolean;
    gtfsStopIds?: string;
    gtfsRideIds?: string;
}

export interface GtfsRidesGetGetRequest {
    id: number;
}

export interface GtfsRidesListGetRequest {
    limit?: number;
    offset?: number;
    getCount?: boolean;
    gtfsRouteId?: number;
    journeyRefPrefix?: string;
    startTimeFrom?: Date;
    startTimeTo?: Date;
    gtfsRouteDateFrom?: Date;
    gtfsRouteDateTo?: Date;
    gtfsRouteLineRefs?: string;
    gtfsRouteOperatorRefs?: string;
    gtfsRouteRouteShortName?: string;
    gtfsRouteRouteLongNameContains?: string;
    gtfsRouteRouteMkt?: string;
    gtfsRouteRouteDirection?: string;
    gtfsRouteRouteAlternative?: string;
    gtfsRouteAgencyName?: string;
    gtfsRouteRouteType?: string;
    orderBy?: string;
}

export interface GtfsRoutesGetGetRequest {
    id: number;
}

export interface GtfsRoutesListGetRequest {
    limit?: number;
    offset?: number;
    getCount?: boolean;
    dateFrom?: Date;
    dateTo?: Date;
    lineRefs?: string;
    operatorRefs?: string;
    routeShortName?: string;
    routeLongNameContains?: string;
    routeMkt?: string;
    routeDirection?: string;
    routeAlternative?: string;
    agencyName?: string;
    routeType?: string;
    orderBy?: string;
}

export interface GtfsStopsGetGetRequest {
    id: number;
}

export interface GtfsStopsListGetRequest {
    limit?: number;
    offset?: number;
    getCount?: boolean;
    dateFrom?: Date;
    dateTo?: Date;
    code?: number;
    city?: string;
}

/**
 * 
 */
export class GtfsApi extends runtime.BaseAPI {

    /**
     * List of gtfs agencies.
     * List 
     */
    async gtfsAgenciesListGetRaw(requestParameters: GtfsAgenciesListGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<GtfsAgencyPydanticModel>>> {
        const queryParameters: any = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        if (requestParameters.dateFrom !== undefined) {
            queryParameters['date_from'] = (requestParameters.dateFrom as any).toISOString().substr(0,10);
        }

        if (requestParameters.dateTo !== undefined) {
            queryParameters['date_to'] = (requestParameters.dateTo as any).toISOString().substr(0,10);
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/gtfs_agencies/list`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GtfsAgencyPydanticModelFromJSON));
    }

    /**
     * List of gtfs agencies.
     * List 
     */
    async gtfsAgenciesListGet(requestParameters: GtfsAgenciesListGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<GtfsAgencyPydanticModel>> {
        const response = await this.gtfsAgenciesListGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Return a single gtfs ride stop based on id
     * Get 
     */
    async gtfsRideStopsGetGetRaw(requestParameters: GtfsRideStopsGetGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GtfsRideStopPydanticModel>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling gtfsRideStopsGetGet.');
        }

        const queryParameters: any = {};

        if (requestParameters.id !== undefined) {
            queryParameters['id'] = requestParameters.id;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/gtfs_ride_stops/get`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GtfsRideStopPydanticModelFromJSON(jsonValue));
    }

    /**
     * Return a single gtfs ride stop based on id
     * Get 
     */
    async gtfsRideStopsGetGet(requestParameters: GtfsRideStopsGetGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GtfsRideStopPydanticModel> {
        const response = await this.gtfsRideStopsGetGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List of gtfs ride stops.
     * List 
     */
    async gtfsRideStopsListGetRaw(requestParameters: GtfsRideStopsListGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<GtfsRideStopPydanticModel>>> {
        const queryParameters: any = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        if (requestParameters.getCount !== undefined) {
            queryParameters['get_count'] = requestParameters.getCount;
        }

        if (requestParameters.gtfsStopIds !== undefined) {
            queryParameters['gtfs_stop_ids'] = requestParameters.gtfsStopIds;
        }

        if (requestParameters.gtfsRideIds !== undefined) {
            queryParameters['gtfs_ride_ids'] = requestParameters.gtfsRideIds;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/gtfs_ride_stops/list`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GtfsRideStopPydanticModelFromJSON));
    }

    /**
     * List of gtfs ride stops.
     * List 
     */
    async gtfsRideStopsListGet(requestParameters: GtfsRideStopsListGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<GtfsRideStopPydanticModel>> {
        const response = await this.gtfsRideStopsListGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Return a single gtfs ride based on id
     * Get 
     */
    async gtfsRidesGetGetRaw(requestParameters: GtfsRidesGetGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GtfsRidePydanticModel>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling gtfsRidesGetGet.');
        }

        const queryParameters: any = {};

        if (requestParameters.id !== undefined) {
            queryParameters['id'] = requestParameters.id;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/gtfs_rides/get`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GtfsRidePydanticModelFromJSON(jsonValue));
    }

    /**
     * Return a single gtfs ride based on id
     * Get 
     */
    async gtfsRidesGetGet(requestParameters: GtfsRidesGetGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GtfsRidePydanticModel> {
        const response = await this.gtfsRidesGetGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List of gtfs rides.
     * List 
     */
    async gtfsRidesListGetRaw(requestParameters: GtfsRidesListGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<GtfsRideWithRelatedPydanticModel>>> {
        const queryParameters: any = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        if (requestParameters.getCount !== undefined) {
            queryParameters['get_count'] = requestParameters.getCount;
        }

        if (requestParameters.gtfsRouteId !== undefined) {
            queryParameters['gtfs_route_id'] = requestParameters.gtfsRouteId;
        }

        if (requestParameters.journeyRefPrefix !== undefined) {
            queryParameters['journey_ref_prefix'] = requestParameters.journeyRefPrefix;
        }

        if (requestParameters.startTimeFrom !== undefined) {
            queryParameters['start_time_from'] = (requestParameters.startTimeFrom as any).toISOString();
        }

        if (requestParameters.startTimeTo !== undefined) {
            queryParameters['start_time_to'] = (requestParameters.startTimeTo as any).toISOString();
        }

        if (requestParameters.gtfsRouteDateFrom !== undefined) {
            queryParameters['gtfs_route__date_from'] = (requestParameters.gtfsRouteDateFrom as any).toISOString().substr(0,10);
        }

        if (requestParameters.gtfsRouteDateTo !== undefined) {
            queryParameters['gtfs_route__date_to'] = (requestParameters.gtfsRouteDateTo as any).toISOString().substr(0,10);
        }

        if (requestParameters.gtfsRouteLineRefs !== undefined) {
            queryParameters['gtfs_route__line_refs'] = requestParameters.gtfsRouteLineRefs;
        }

        if (requestParameters.gtfsRouteOperatorRefs !== undefined) {
            queryParameters['gtfs_route__operator_refs'] = requestParameters.gtfsRouteOperatorRefs;
        }

        if (requestParameters.gtfsRouteRouteShortName !== undefined) {
            queryParameters['gtfs_route__route_short_name'] = requestParameters.gtfsRouteRouteShortName;
        }

        if (requestParameters.gtfsRouteRouteLongNameContains !== undefined) {
            queryParameters['gtfs_route__route_long_name_contains'] = requestParameters.gtfsRouteRouteLongNameContains;
        }

        if (requestParameters.gtfsRouteRouteMkt !== undefined) {
            queryParameters['gtfs_route__route_mkt'] = requestParameters.gtfsRouteRouteMkt;
        }

        if (requestParameters.gtfsRouteRouteDirection !== undefined) {
            queryParameters['gtfs_route__route_direction'] = requestParameters.gtfsRouteRouteDirection;
        }

        if (requestParameters.gtfsRouteRouteAlternative !== undefined) {
            queryParameters['gtfs_route__route_alternative'] = requestParameters.gtfsRouteRouteAlternative;
        }

        if (requestParameters.gtfsRouteAgencyName !== undefined) {
            queryParameters['gtfs_route__agency_name'] = requestParameters.gtfsRouteAgencyName;
        }

        if (requestParameters.gtfsRouteRouteType !== undefined) {
            queryParameters['gtfs_route__route_type'] = requestParameters.gtfsRouteRouteType;
        }

        if (requestParameters.orderBy !== undefined) {
            queryParameters['order_by'] = requestParameters.orderBy;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/gtfs_rides/list`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GtfsRideWithRelatedPydanticModelFromJSON));
    }

    /**
     * List of gtfs rides.
     * List 
     */
    async gtfsRidesListGet(requestParameters: GtfsRidesListGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<GtfsRideWithRelatedPydanticModel>> {
        const response = await this.gtfsRidesListGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Return a single gtfs route based on id
     * Get 
     */
    async gtfsRoutesGetGetRaw(requestParameters: GtfsRoutesGetGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GtfsRoutePydanticModel>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling gtfsRoutesGetGet.');
        }

        const queryParameters: any = {};

        if (requestParameters.id !== undefined) {
            queryParameters['id'] = requestParameters.id;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/gtfs_routes/get`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GtfsRoutePydanticModelFromJSON(jsonValue));
    }

    /**
     * Return a single gtfs route based on id
     * Get 
     */
    async gtfsRoutesGetGet(requestParameters: GtfsRoutesGetGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GtfsRoutePydanticModel> {
        const response = await this.gtfsRoutesGetGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List of gtfs routes.
     * List 
     */
    async gtfsRoutesListGetRaw(requestParameters: GtfsRoutesListGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<GtfsRoutePydanticModel>>> {
        const queryParameters: any = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        if (requestParameters.getCount !== undefined) {
            queryParameters['get_count'] = requestParameters.getCount;
        }

        if (requestParameters.dateFrom !== undefined) {
            queryParameters['date_from'] = (requestParameters.dateFrom as any).toISOString().substr(0,10);
        }

        if (requestParameters.dateTo !== undefined) {
            queryParameters['date_to'] = (requestParameters.dateTo as any).toISOString().substr(0,10);
        }

        if (requestParameters.lineRefs !== undefined) {
            queryParameters['line_refs'] = requestParameters.lineRefs;
        }

        if (requestParameters.operatorRefs !== undefined) {
            queryParameters['operator_refs'] = requestParameters.operatorRefs;
        }

        if (requestParameters.routeShortName !== undefined) {
            queryParameters['route_short_name'] = requestParameters.routeShortName;
        }

        if (requestParameters.routeLongNameContains !== undefined) {
            queryParameters['route_long_name_contains'] = requestParameters.routeLongNameContains;
        }

        if (requestParameters.routeMkt !== undefined) {
            queryParameters['route_mkt'] = requestParameters.routeMkt;
        }

        if (requestParameters.routeDirection !== undefined) {
            queryParameters['route_direction'] = requestParameters.routeDirection;
        }

        if (requestParameters.routeAlternative !== undefined) {
            queryParameters['route_alternative'] = requestParameters.routeAlternative;
        }

        if (requestParameters.agencyName !== undefined) {
            queryParameters['agency_name'] = requestParameters.agencyName;
        }

        if (requestParameters.routeType !== undefined) {
            queryParameters['route_type'] = requestParameters.routeType;
        }

        if (requestParameters.orderBy !== undefined) {
            queryParameters['order_by'] = requestParameters.orderBy;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/gtfs_routes/list`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GtfsRoutePydanticModelFromJSON));
    }

    /**
     * List of gtfs routes.
     * List 
     */
    async gtfsRoutesListGet(requestParameters: GtfsRoutesListGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<GtfsRoutePydanticModel>> {
        const response = await this.gtfsRoutesListGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Return a single gtfs stop based on id
     * Get 
     */
    async gtfsStopsGetGetRaw(requestParameters: GtfsStopsGetGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GtfsStopPydanticModel>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling gtfsStopsGetGet.');
        }

        const queryParameters: any = {};

        if (requestParameters.id !== undefined) {
            queryParameters['id'] = requestParameters.id;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/gtfs_stops/get`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GtfsStopPydanticModelFromJSON(jsonValue));
    }

    /**
     * Return a single gtfs stop based on id
     * Get 
     */
    async gtfsStopsGetGet(requestParameters: GtfsStopsGetGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GtfsStopPydanticModel> {
        const response = await this.gtfsStopsGetGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List of gtfs stops.
     * List 
     */
    async gtfsStopsListGetRaw(requestParameters: GtfsStopsListGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<GtfsStopPydanticModel>>> {
        const queryParameters: any = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        if (requestParameters.getCount !== undefined) {
            queryParameters['get_count'] = requestParameters.getCount;
        }

        if (requestParameters.dateFrom !== undefined) {
            queryParameters['date_from'] = (requestParameters.dateFrom as any).toISOString().substr(0,10);
        }

        if (requestParameters.dateTo !== undefined) {
            queryParameters['date_to'] = (requestParameters.dateTo as any).toISOString().substr(0,10);
        }

        if (requestParameters.code !== undefined) {
            queryParameters['code'] = requestParameters.code;
        }

        if (requestParameters.city !== undefined) {
            queryParameters['city'] = requestParameters.city;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/gtfs_stops/list`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GtfsStopPydanticModelFromJSON));
    }

    /**
     * List of gtfs stops.
     * List 
     */
    async gtfsStopsListGet(requestParameters: GtfsStopsListGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<GtfsStopPydanticModel>> {
        const response = await this.gtfsStopsListGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
