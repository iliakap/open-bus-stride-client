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
import type { GtfsAgencyPydanticModel, GtfsRidePydanticModel, GtfsRideStopPydanticModel, GtfsRideWithRelatedPydanticModel, GtfsRoutePydanticModel, GtfsStopPydanticModel } from '../models';
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
export declare class GtfsApi extends runtime.BaseAPI {
    /**
     * List of gtfs agencies.
     * List
     */
    gtfsAgenciesListGetRaw(requestParameters: GtfsAgenciesListGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<GtfsAgencyPydanticModel>>>;
    /**
     * List of gtfs agencies.
     * List
     */
    gtfsAgenciesListGet(requestParameters?: GtfsAgenciesListGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<GtfsAgencyPydanticModel>>;
    /**
     * Return a single gtfs ride stop based on id
     * Get
     */
    gtfsRideStopsGetGetRaw(requestParameters: GtfsRideStopsGetGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GtfsRideStopPydanticModel>>;
    /**
     * Return a single gtfs ride stop based on id
     * Get
     */
    gtfsRideStopsGetGet(requestParameters: GtfsRideStopsGetGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GtfsRideStopPydanticModel>;
    /**
     * List of gtfs ride stops.
     * List
     */
    gtfsRideStopsListGetRaw(requestParameters: GtfsRideStopsListGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<GtfsRideStopPydanticModel>>>;
    /**
     * List of gtfs ride stops.
     * List
     */
    gtfsRideStopsListGet(requestParameters?: GtfsRideStopsListGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<GtfsRideStopPydanticModel>>;
    /**
     * Return a single gtfs ride based on id
     * Get
     */
    gtfsRidesGetGetRaw(requestParameters: GtfsRidesGetGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GtfsRidePydanticModel>>;
    /**
     * Return a single gtfs ride based on id
     * Get
     */
    gtfsRidesGetGet(requestParameters: GtfsRidesGetGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GtfsRidePydanticModel>;
    /**
     * List of gtfs rides.
     * List
     */
    gtfsRidesListGetRaw(requestParameters: GtfsRidesListGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<GtfsRideWithRelatedPydanticModel>>>;
    /**
     * List of gtfs rides.
     * List
     */
    gtfsRidesListGet(requestParameters?: GtfsRidesListGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<GtfsRideWithRelatedPydanticModel>>;
    /**
     * Return a single gtfs route based on id
     * Get
     */
    gtfsRoutesGetGetRaw(requestParameters: GtfsRoutesGetGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GtfsRoutePydanticModel>>;
    /**
     * Return a single gtfs route based on id
     * Get
     */
    gtfsRoutesGetGet(requestParameters: GtfsRoutesGetGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GtfsRoutePydanticModel>;
    /**
     * List of gtfs routes.
     * List
     */
    gtfsRoutesListGetRaw(requestParameters: GtfsRoutesListGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<GtfsRoutePydanticModel>>>;
    /**
     * List of gtfs routes.
     * List
     */
    gtfsRoutesListGet(requestParameters?: GtfsRoutesListGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<GtfsRoutePydanticModel>>;
    /**
     * Return a single gtfs stop based on id
     * Get
     */
    gtfsStopsGetGetRaw(requestParameters: GtfsStopsGetGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GtfsStopPydanticModel>>;
    /**
     * Return a single gtfs stop based on id
     * Get
     */
    gtfsStopsGetGet(requestParameters: GtfsStopsGetGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GtfsStopPydanticModel>;
    /**
     * List of gtfs stops.
     * List
     */
    gtfsStopsListGetRaw(requestParameters: GtfsStopsListGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<GtfsStopPydanticModel>>>;
    /**
     * List of gtfs stops.
     * List
     */
    gtfsStopsListGet(requestParameters?: GtfsStopsListGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<GtfsStopPydanticModel>>;
}
