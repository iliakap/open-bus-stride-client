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
 * @interface SiriVehicleLocationPydanticModel
 */
export interface SiriVehicleLocationPydanticModel {
    /**
     * 
     * @type {number}
     * @memberof SiriVehicleLocationPydanticModel
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof SiriVehicleLocationPydanticModel
     */
    siriSnapshotId: number;
    /**
     * 
     * @type {number}
     * @memberof SiriVehicleLocationPydanticModel
     */
    siriRideStopId: number;
    /**
     * 
     * @type {Date}
     * @memberof SiriVehicleLocationPydanticModel
     */
    recordedAtTime: Date;
    /**
     * 
     * @type {number}
     * @memberof SiriVehicleLocationPydanticModel
     */
    lon: number;
    /**
     * 
     * @type {number}
     * @memberof SiriVehicleLocationPydanticModel
     */
    lat: number;
    /**
     * 
     * @type {number}
     * @memberof SiriVehicleLocationPydanticModel
     */
    bearing: number;
    /**
     * 
     * @type {number}
     * @memberof SiriVehicleLocationPydanticModel
     */
    velocity: number;
    /**
     * 
     * @type {number}
     * @memberof SiriVehicleLocationPydanticModel
     */
    distanceFromJourneyStart: number;
    /**
     * 
     * @type {number}
     * @memberof SiriVehicleLocationPydanticModel
     */
    distanceFromSiriRideStopMeters?: number;
}

/**
 * Check if a given object implements the SiriVehicleLocationPydanticModel interface.
 */
export function instanceOfSiriVehicleLocationPydanticModel(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "siriSnapshotId" in value;
    isInstance = isInstance && "siriRideStopId" in value;
    isInstance = isInstance && "recordedAtTime" in value;
    isInstance = isInstance && "lon" in value;
    isInstance = isInstance && "lat" in value;
    isInstance = isInstance && "bearing" in value;
    isInstance = isInstance && "velocity" in value;
    isInstance = isInstance && "distanceFromJourneyStart" in value;

    return isInstance;
}

export function SiriVehicleLocationPydanticModelFromJSON(json: any): SiriVehicleLocationPydanticModel {
    return SiriVehicleLocationPydanticModelFromJSONTyped(json, false);
}

export function SiriVehicleLocationPydanticModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): SiriVehicleLocationPydanticModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'siriSnapshotId': json['siri_snapshot_id'],
        'siriRideStopId': json['siri_ride_stop_id'],
        'recordedAtTime': (new Date(json['recorded_at_time'])),
        'lon': json['lon'],
        'lat': json['lat'],
        'bearing': json['bearing'],
        'velocity': json['velocity'],
        'distanceFromJourneyStart': json['distance_from_journey_start'],
        'distanceFromSiriRideStopMeters': !exists(json, 'distance_from_siri_ride_stop_meters') ? undefined : json['distance_from_siri_ride_stop_meters'],
    };
}

export function SiriVehicleLocationPydanticModelToJSON(value?: SiriVehicleLocationPydanticModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'siri_snapshot_id': value.siriSnapshotId,
        'siri_ride_stop_id': value.siriRideStopId,
        'recorded_at_time': (value.recordedAtTime.toISOString()),
        'lon': value.lon,
        'lat': value.lat,
        'bearing': value.bearing,
        'velocity': value.velocity,
        'distance_from_journey_start': value.distanceFromJourneyStart,
        'distance_from_siri_ride_stop_meters': value.distanceFromSiriRideStopMeters,
    };
}

