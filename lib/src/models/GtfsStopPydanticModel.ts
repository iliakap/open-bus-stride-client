/* tslint:disable */
/* eslint-disable */
/**
 * Open Bus Stride API
 * ### Follow planned and real-time bus statistics 🚌  Welcome to The Public Knowledge Workshop\'s Stride project. We provide usable and accurate data about the Israeli public transportation system.  For background on the project and some more detailed documentation and usage guides, see [STRIDE.md](https://github.com/hasadna/open-bus-pipelines/blob/main/STRIDE.md).  Looking for a specific use-case?  * Take a look at the **user cases** APIs below. * Try one of our existing [jupyter notebooks](https://github.com/hasadna/open-bus-stride-client/blob/main/README.md#using-the-interactive-jupyter-notebooks). * Don\'t see your use-case covered here? Please [open us a ticket](https://github.com/login?return_to=https%3A%2F%2Fgithub.com%2Fhasadna%2Fopen-bus%2Fissues%2Fnew)!  Queries are by default limited to 100 results per query, this limit can be increased up to 500,000 results. Please try to set appropriate query parameters to limit the results to reduce load on our DB. If you do need to get large number of results (up to 500,000) it\'s recommended to use one of these methods:  1. Use HTTP streaming and JSON streaming decoder, this method is most efficient and provide accurate results.    Our [Stride Python Client iterate method](https://github.com/hasadna/open-bus-stride-client#usage) uses this method. 2. Use combination of limit / offset parameters to get results by page. This method may be less accurate because    it depends on data remaining unchanged between requests.  For more advanced usage-  * Use **gtfs** for data about the planned lines timetables.  * Use **siri** for data about lines real-time * See [Open Bus Stride Data Model](https://github.com/hasadna/open-bus-stride-db/blob/main/DATA_MODEL.md) for description of field and table names. * See [Open Bus Stride ETL Processes](https://github.com/hasadna/open-bus-pipelines/blob/main/STRIDE_ETL_PROCESSES.md) for description of the ETL processes which fetch and aggregate the data. * See [MOT Developer Information](https://www.gov.il/BlobFolder/generalpage/gtfs_general_transit_feed_specifications/he/GTFS%20-%20Developer%20Information.pdf) for description of the source fields as published by the Israel Ministry of Transportation. 
 *
 * The version of the OpenAPI document: 27c984e00a79647a9a948a1e66fa3db55150e5c2
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
 * @interface GtfsStopPydanticModel
 */
export interface GtfsStopPydanticModel {
    /**
     * 
     * @type {number}
     * @memberof GtfsStopPydanticModel
     */
    id: number;
    /**
     * 
     * @type {Date}
     * @memberof GtfsStopPydanticModel
     */
    date: Date;
    /**
     * 
     * @type {number}
     * @memberof GtfsStopPydanticModel
     */
    code: number;
    /**
     * 
     * @type {number}
     * @memberof GtfsStopPydanticModel
     */
    lat?: number;
    /**
     * 
     * @type {number}
     * @memberof GtfsStopPydanticModel
     */
    lon?: number;
    /**
     * 
     * @type {string}
     * @memberof GtfsStopPydanticModel
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof GtfsStopPydanticModel
     */
    city?: string;
}

/**
 * Check if a given object implements the GtfsStopPydanticModel interface.
 */
export function instanceOfGtfsStopPydanticModel(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "date" in value;
    isInstance = isInstance && "code" in value;

    return isInstance;
}

export function GtfsStopPydanticModelFromJSON(json: any): GtfsStopPydanticModel {
    return GtfsStopPydanticModelFromJSONTyped(json, false);
}

export function GtfsStopPydanticModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): GtfsStopPydanticModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'date': (new Date(json['date'])),
        'code': json['code'],
        'lat': !exists(json, 'lat') ? undefined : json['lat'],
        'lon': !exists(json, 'lon') ? undefined : json['lon'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'city': !exists(json, 'city') ? undefined : json['city'],
    };
}

export function GtfsStopPydanticModelToJSON(value?: GtfsStopPydanticModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'date': (value.date.toISOString().substr(0,10)),
        'code': value.code,
        'lat': value.lat,
        'lon': value.lon,
        'name': value.name,
        'city': value.city,
    };
}

