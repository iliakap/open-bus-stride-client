/* tslint:disable */
/* eslint-disable */
/**
 * Open Bus Stride API
 * ### Follow planned and real-time bus statistics 🚌  Welcome to The Public Knowledge Workshop\'s Stride project. We provide usable and accurate data about the Israeli public transportation system.  For background on the project and some more detailed documentation and usage guides, see [STRIDE.md](https://github.com/hasadna/open-bus-pipelines/blob/main/STRIDE.md).  Looking for a specific use-case?  * Take a look at the **user cases** APIs below. * Try one of our existing [jupyter notebooks](https://github.com/hasadna/open-bus-stride-client/blob/main/README.md#using-the-interactive-jupyter-notebooks). * Don\'t see your use-case covered here? Please [open us a ticket](https://github.com/login?return_to=https%3A%2F%2Fgithub.com%2Fhasadna%2Fopen-bus%2Fissues%2Fnew)!  Queries are by default limited to 100 results per query, this limit can be increased up to 500,000 results. Please try to set appropriate query parameters to limit the results to reduce load on our DB. If you do need to get large number of results (up to 500,000) it\'s recommended to use one of these methods:  1. Use HTTP streaming and JSON streaming decoder, this method is most efficient and provide accurate results.    Our [Stride Python Client iterate method](https://github.com/hasadna/open-bus-stride-client#usage) uses this method. 2. Use combination of limit / offset parameters to get results by page. This method may be less accurate because    it depends on data remaining unchanged between requests.  For more advanced usage-  * Use **gtfs** for data about the planned lines timetables.  * Use **siri** for data about lines real-time * See [Open Bus Stride Data Model](https://github.com/hasadna/open-bus-stride-db/blob/main/DATA_MODEL.md) for description of field and table names. * See [Open Bus Stride ETL Processes](https://github.com/hasadna/open-bus-pipelines/blob/main/STRIDE_ETL_PROCESSES.md) for description of the ETL processes which fetch and aggregate the data. * See [MOT Developer Information](https://www.gov.il/BlobFolder/generalpage/gtfs_general_transit_feed_specifications/he/GTFS%20-%20Developer%20Information.pdf) for description of the source fields as published by the Israel Ministry of Transportation. 
 *
 * The version of the OpenAPI document: cb9ded7762b2840b0f4ecb9487f325ce4743dd94
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
 * @interface GtfsRideStopPydanticModel
 */
export interface GtfsRideStopPydanticModel {
    /**
     * 
     * @type {number}
     * @memberof GtfsRideStopPydanticModel
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof GtfsRideStopPydanticModel
     */
    gtfsStopId: number;
    /**
     * 
     * @type {number}
     * @memberof GtfsRideStopPydanticModel
     */
    gtfsRideId: number;
    /**
     * 
     * @type {Date}
     * @memberof GtfsRideStopPydanticModel
     */
    arrivalTime?: Date;
    /**
     * 
     * @type {Date}
     * @memberof GtfsRideStopPydanticModel
     */
    departureTime?: Date;
    /**
     * 
     * @type {number}
     * @memberof GtfsRideStopPydanticModel
     */
    stopSequence?: number;
    /**
     * 
     * @type {number}
     * @memberof GtfsRideStopPydanticModel
     */
    pickupType?: number;
    /**
     * 
     * @type {number}
     * @memberof GtfsRideStopPydanticModel
     */
    dropOffType?: number;
    /**
     * 
     * @type {number}
     * @memberof GtfsRideStopPydanticModel
     */
    shapeDistTraveled?: number;
}

/**
 * Check if a given object implements the GtfsRideStopPydanticModel interface.
 */
export function instanceOfGtfsRideStopPydanticModel(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "gtfsStopId" in value;
    isInstance = isInstance && "gtfsRideId" in value;

    return isInstance;
}

export function GtfsRideStopPydanticModelFromJSON(json: any): GtfsRideStopPydanticModel {
    return GtfsRideStopPydanticModelFromJSONTyped(json, false);
}

export function GtfsRideStopPydanticModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): GtfsRideStopPydanticModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'gtfsStopId': json['gtfs_stop_id'],
        'gtfsRideId': json['gtfs_ride_id'],
        'arrivalTime': !exists(json, 'arrival_time') ? undefined : (new Date(json['arrival_time'])),
        'departureTime': !exists(json, 'departure_time') ? undefined : (new Date(json['departure_time'])),
        'stopSequence': !exists(json, 'stop_sequence') ? undefined : json['stop_sequence'],
        'pickupType': !exists(json, 'pickup_type') ? undefined : json['pickup_type'],
        'dropOffType': !exists(json, 'drop_off_type') ? undefined : json['drop_off_type'],
        'shapeDistTraveled': !exists(json, 'shape_dist_traveled') ? undefined : json['shape_dist_traveled'],
    };
}

export function GtfsRideStopPydanticModelToJSON(value?: GtfsRideStopPydanticModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'gtfs_stop_id': value.gtfsStopId,
        'gtfs_ride_id': value.gtfsRideId,
        'arrival_time': value.arrivalTime === undefined ? undefined : (value.arrivalTime.toISOString()),
        'departure_time': value.departureTime === undefined ? undefined : (value.departureTime.toISOString()),
        'stop_sequence': value.stopSequence,
        'pickup_type': value.pickupType,
        'drop_off_type': value.dropOffType,
        'shape_dist_traveled': value.shapeDistTraveled,
    };
}

