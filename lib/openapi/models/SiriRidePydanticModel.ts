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
 * @interface SiriRidePydanticModel
 */
export interface SiriRidePydanticModel {
    /**
     * 
     * @type {number}
     * @memberof SiriRidePydanticModel
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof SiriRidePydanticModel
     */
    siriRouteId: number;
    /**
     * 
     * @type {string}
     * @memberof SiriRidePydanticModel
     */
    journeyRef: string;
    /**
     * 
     * @type {Date}
     * @memberof SiriRidePydanticModel
     */
    scheduledStartTime: Date;
    /**
     * 
     * @type {string}
     * @memberof SiriRidePydanticModel
     */
    vehicleRef?: string;
    /**
     * 
     * @type {Date}
     * @memberof SiriRidePydanticModel
     */
    updatedFirstLastVehicleLocations?: Date;
    /**
     * 
     * @type {number}
     * @memberof SiriRidePydanticModel
     */
    firstVehicleLocationId?: number;
    /**
     * 
     * @type {number}
     * @memberof SiriRidePydanticModel
     */
    lastVehicleLocationId?: number;
    /**
     * 
     * @type {Date}
     * @memberof SiriRidePydanticModel
     */
    updatedDurationMinutes?: Date;
    /**
     * 
     * @type {number}
     * @memberof SiriRidePydanticModel
     */
    durationMinutes?: number;
    /**
     * 
     * @type {number}
     * @memberof SiriRidePydanticModel
     */
    journeyGtfsRideId?: number;
    /**
     * 
     * @type {number}
     * @memberof SiriRidePydanticModel
     */
    routeGtfsRideId?: number;
    /**
     * 
     * @type {number}
     * @memberof SiriRidePydanticModel
     */
    gtfsRideId?: number;
}

/**
 * Check if a given object implements the SiriRidePydanticModel interface.
 */
export function instanceOfSiriRidePydanticModel(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "siriRouteId" in value;
    isInstance = isInstance && "journeyRef" in value;
    isInstance = isInstance && "scheduledStartTime" in value;

    return isInstance;
}

export function SiriRidePydanticModelFromJSON(json: any): SiriRidePydanticModel {
    return SiriRidePydanticModelFromJSONTyped(json, false);
}

export function SiriRidePydanticModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): SiriRidePydanticModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'siriRouteId': json['siri_route_id'],
        'journeyRef': json['journey_ref'],
        'scheduledStartTime': (new Date(json['scheduled_start_time'])),
        'vehicleRef': !exists(json, 'vehicle_ref') ? undefined : json['vehicle_ref'],
        'updatedFirstLastVehicleLocations': !exists(json, 'updated_first_last_vehicle_locations') ? undefined : (new Date(json['updated_first_last_vehicle_locations'])),
        'firstVehicleLocationId': !exists(json, 'first_vehicle_location_id') ? undefined : json['first_vehicle_location_id'],
        'lastVehicleLocationId': !exists(json, 'last_vehicle_location_id') ? undefined : json['last_vehicle_location_id'],
        'updatedDurationMinutes': !exists(json, 'updated_duration_minutes') ? undefined : (new Date(json['updated_duration_minutes'])),
        'durationMinutes': !exists(json, 'duration_minutes') ? undefined : json['duration_minutes'],
        'journeyGtfsRideId': !exists(json, 'journey_gtfs_ride_id') ? undefined : json['journey_gtfs_ride_id'],
        'routeGtfsRideId': !exists(json, 'route_gtfs_ride_id') ? undefined : json['route_gtfs_ride_id'],
        'gtfsRideId': !exists(json, 'gtfs_ride_id') ? undefined : json['gtfs_ride_id'],
    };
}

export function SiriRidePydanticModelToJSON(value?: SiriRidePydanticModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'siri_route_id': value.siriRouteId,
        'journey_ref': value.journeyRef,
        'scheduled_start_time': (value.scheduledStartTime.toISOString()),
        'vehicle_ref': value.vehicleRef,
        'updated_first_last_vehicle_locations': value.updatedFirstLastVehicleLocations === undefined ? undefined : (value.updatedFirstLastVehicleLocations.toISOString()),
        'first_vehicle_location_id': value.firstVehicleLocationId,
        'last_vehicle_location_id': value.lastVehicleLocationId,
        'updated_duration_minutes': value.updatedDurationMinutes === undefined ? undefined : (value.updatedDurationMinutes.toISOString()),
        'duration_minutes': value.durationMinutes,
        'journey_gtfs_ride_id': value.journeyGtfsRideId,
        'route_gtfs_ride_id': value.routeGtfsRideId,
        'gtfs_ride_id': value.gtfsRideId,
    };
}

