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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface GtfsRoutePydanticModel
 */
export interface GtfsRoutePydanticModel {
    /**
     * 
     * @type {number}
     * @memberof GtfsRoutePydanticModel
     */
    id: number;
    /**
     * 
     * @type {Date}
     * @memberof GtfsRoutePydanticModel
     */
    date: Date;
    /**
     * 
     * @type {number}
     * @memberof GtfsRoutePydanticModel
     */
    lineRef: number;
    /**
     * 
     * @type {number}
     * @memberof GtfsRoutePydanticModel
     */
    operatorRef: number;
    /**
     * 
     * @type {string}
     * @memberof GtfsRoutePydanticModel
     */
    routeShortName?: string;
    /**
     * 
     * @type {string}
     * @memberof GtfsRoutePydanticModel
     */
    routeLongName?: string;
    /**
     * 
     * @type {string}
     * @memberof GtfsRoutePydanticModel
     */
    routeMkt?: string;
    /**
     * 
     * @type {string}
     * @memberof GtfsRoutePydanticModel
     */
    routeDirection?: string;
    /**
     * 
     * @type {string}
     * @memberof GtfsRoutePydanticModel
     */
    routeAlternative?: string;
    /**
     * 
     * @type {string}
     * @memberof GtfsRoutePydanticModel
     */
    agencyName?: string;
    /**
     * 
     * @type {string}
     * @memberof GtfsRoutePydanticModel
     */
    routeType?: string;
}

/**
 * Check if a given object implements the GtfsRoutePydanticModel interface.
 */
export function instanceOfGtfsRoutePydanticModel(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "date" in value;
    isInstance = isInstance && "lineRef" in value;
    isInstance = isInstance && "operatorRef" in value;

    return isInstance;
}

export function GtfsRoutePydanticModelFromJSON(json: any): GtfsRoutePydanticModel {
    return GtfsRoutePydanticModelFromJSONTyped(json, false);
}

export function GtfsRoutePydanticModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): GtfsRoutePydanticModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'date': (new Date(json['date'])),
        'lineRef': json['line_ref'],
        'operatorRef': json['operator_ref'],
        'routeShortName': !exists(json, 'route_short_name') ? undefined : json['route_short_name'],
        'routeLongName': !exists(json, 'route_long_name') ? undefined : json['route_long_name'],
        'routeMkt': !exists(json, 'route_mkt') ? undefined : json['route_mkt'],
        'routeDirection': !exists(json, 'route_direction') ? undefined : json['route_direction'],
        'routeAlternative': !exists(json, 'route_alternative') ? undefined : json['route_alternative'],
        'agencyName': !exists(json, 'agency_name') ? undefined : json['agency_name'],
        'routeType': !exists(json, 'route_type') ? undefined : json['route_type'],
    };
}

export function GtfsRoutePydanticModelToJSON(value?: GtfsRoutePydanticModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'date': (value.date.toISOString().substr(0,10)),
        'line_ref': value.lineRef,
        'operator_ref': value.operatorRef,
        'route_short_name': value.routeShortName,
        'route_long_name': value.routeLongName,
        'route_mkt': value.routeMkt,
        'route_direction': value.routeDirection,
        'route_alternative': value.routeAlternative,
        'agency_name': value.agencyName,
        'route_type': value.routeType,
    };
}

