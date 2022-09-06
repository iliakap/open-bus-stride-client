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
 * @interface SiriVehicleLocationWithRelatedPydanticModel
 */
export interface SiriVehicleLocationWithRelatedPydanticModel {
    /**
     * 
     * @type {number}
     * @memberof SiriVehicleLocationWithRelatedPydanticModel
     */
    id?: number;
    /**
     * 
     * @type {number}
     * @memberof SiriVehicleLocationWithRelatedPydanticModel
     */
    siriSnapshotId?: number;
    /**
     * 
     * @type {number}
     * @memberof SiriVehicleLocationWithRelatedPydanticModel
     */
    siriRideStopId?: number;
    /**
     * 
     * @type {Date}
     * @memberof SiriVehicleLocationWithRelatedPydanticModel
     */
    recordedAtTime?: Date;
    /**
     * 
     * @type {number}
     * @memberof SiriVehicleLocationWithRelatedPydanticModel
     */
    lon?: number;
    /**
     * 
     * @type {number}
     * @memberof SiriVehicleLocationWithRelatedPydanticModel
     */
    lat?: number;
    /**
     * 
     * @type {number}
     * @memberof SiriVehicleLocationWithRelatedPydanticModel
     */
    bearing?: number;
    /**
     * 
     * @type {number}
     * @memberof SiriVehicleLocationWithRelatedPydanticModel
     */
    velocity?: number;
    /**
     * 
     * @type {number}
     * @memberof SiriVehicleLocationWithRelatedPydanticModel
     */
    distanceFromJourneyStart?: number;
    /**
     * 
     * @type {number}
     * @memberof SiriVehicleLocationWithRelatedPydanticModel
     */
    distanceFromSiriRideStopMeters?: number;
    /**
     * 
     * @type {string}
     * @memberof SiriVehicleLocationWithRelatedPydanticModel
     */
    siriSnapshotSnapshotId?: string;
    /**
     * 
     * @type {number}
     * @memberof SiriVehicleLocationWithRelatedPydanticModel
     */
    siriRouteId?: number;
    /**
     * 
     * @type {number}
     * @memberof SiriVehicleLocationWithRelatedPydanticModel
     */
    siriRouteLineRef?: number;
    /**
     * 
     * @type {number}
     * @memberof SiriVehicleLocationWithRelatedPydanticModel
     */
    siriRouteOperatorRef?: number;
    /**
     * 
     * @type {number}
     * @memberof SiriVehicleLocationWithRelatedPydanticModel
     */
    siriRideId?: number;
    /**
     * 
     * @type {string}
     * @memberof SiriVehicleLocationWithRelatedPydanticModel
     */
    siriRideJourneyRef?: string;
    /**
     * 
     * @type {Date}
     * @memberof SiriVehicleLocationWithRelatedPydanticModel
     */
    siriRideScheduledStartTime?: Date;
    /**
     * 
     * @type {string}
     * @memberof SiriVehicleLocationWithRelatedPydanticModel
     */
    siriRideVehicleRef?: string;
    /**
     * 
     * @type {number}
     * @memberof SiriVehicleLocationWithRelatedPydanticModel
     */
    siriRideFirstVehicleLocationId?: number;
    /**
     * 
     * @type {number}
     * @memberof SiriVehicleLocationWithRelatedPydanticModel
     */
    siriRideLastVehicleLocationId?: number;
    /**
     * 
     * @type {number}
     * @memberof SiriVehicleLocationWithRelatedPydanticModel
     */
    siriRideDurationMinutes?: number;
    /**
     * 
     * @type {number}
     * @memberof SiriVehicleLocationWithRelatedPydanticModel
     */
    siriRideGtfsRideId?: number;
}

/**
 * Check if a given object implements the SiriVehicleLocationWithRelatedPydanticModel interface.
 */
export function instanceOfSiriVehicleLocationWithRelatedPydanticModel(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SiriVehicleLocationWithRelatedPydanticModelFromJSON(json: any): SiriVehicleLocationWithRelatedPydanticModel {
    return SiriVehicleLocationWithRelatedPydanticModelFromJSONTyped(json, false);
}

export function SiriVehicleLocationWithRelatedPydanticModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): SiriVehicleLocationWithRelatedPydanticModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'siriSnapshotId': !exists(json, 'siri_snapshot_id') ? undefined : json['siri_snapshot_id'],
        'siriRideStopId': !exists(json, 'siri_ride_stop_id') ? undefined : json['siri_ride_stop_id'],
        'recordedAtTime': !exists(json, 'recorded_at_time') ? undefined : (new Date(json['recorded_at_time'])),
        'lon': !exists(json, 'lon') ? undefined : json['lon'],
        'lat': !exists(json, 'lat') ? undefined : json['lat'],
        'bearing': !exists(json, 'bearing') ? undefined : json['bearing'],
        'velocity': !exists(json, 'velocity') ? undefined : json['velocity'],
        'distanceFromJourneyStart': !exists(json, 'distance_from_journey_start') ? undefined : json['distance_from_journey_start'],
        'distanceFromSiriRideStopMeters': !exists(json, 'distance_from_siri_ride_stop_meters') ? undefined : json['distance_from_siri_ride_stop_meters'],
        'siriSnapshotSnapshotId': !exists(json, 'siri_snapshot__snapshot_id') ? undefined : json['siri_snapshot__snapshot_id'],
        'siriRouteId': !exists(json, 'siri_route__id') ? undefined : json['siri_route__id'],
        'siriRouteLineRef': !exists(json, 'siri_route__line_ref') ? undefined : json['siri_route__line_ref'],
        'siriRouteOperatorRef': !exists(json, 'siri_route__operator_ref') ? undefined : json['siri_route__operator_ref'],
        'siriRideId': !exists(json, 'siri_ride__id') ? undefined : json['siri_ride__id'],
        'siriRideJourneyRef': !exists(json, 'siri_ride__journey_ref') ? undefined : json['siri_ride__journey_ref'],
        'siriRideScheduledStartTime': !exists(json, 'siri_ride__scheduled_start_time') ? undefined : (new Date(json['siri_ride__scheduled_start_time'])),
        'siriRideVehicleRef': !exists(json, 'siri_ride__vehicle_ref') ? undefined : json['siri_ride__vehicle_ref'],
        'siriRideFirstVehicleLocationId': !exists(json, 'siri_ride__first_vehicle_location_id') ? undefined : json['siri_ride__first_vehicle_location_id'],
        'siriRideLastVehicleLocationId': !exists(json, 'siri_ride__last_vehicle_location_id') ? undefined : json['siri_ride__last_vehicle_location_id'],
        'siriRideDurationMinutes': !exists(json, 'siri_ride__duration_minutes') ? undefined : json['siri_ride__duration_minutes'],
        'siriRideGtfsRideId': !exists(json, 'siri_ride__gtfs_ride_id') ? undefined : json['siri_ride__gtfs_ride_id'],
    };
}

export function SiriVehicleLocationWithRelatedPydanticModelToJSON(value?: SiriVehicleLocationWithRelatedPydanticModel | null): any {
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
        'recorded_at_time': value.recordedAtTime === undefined ? undefined : (value.recordedAtTime.toISOString()),
        'lon': value.lon,
        'lat': value.lat,
        'bearing': value.bearing,
        'velocity': value.velocity,
        'distance_from_journey_start': value.distanceFromJourneyStart,
        'distance_from_siri_ride_stop_meters': value.distanceFromSiriRideStopMeters,
        'siri_snapshot__snapshot_id': value.siriSnapshotSnapshotId,
        'siri_route__id': value.siriRouteId,
        'siri_route__line_ref': value.siriRouteLineRef,
        'siri_route__operator_ref': value.siriRouteOperatorRef,
        'siri_ride__id': value.siriRideId,
        'siri_ride__journey_ref': value.siriRideJourneyRef,
        'siri_ride__scheduled_start_time': value.siriRideScheduledStartTime === undefined ? undefined : (value.siriRideScheduledStartTime.toISOString()),
        'siri_ride__vehicle_ref': value.siriRideVehicleRef,
        'siri_ride__first_vehicle_location_id': value.siriRideFirstVehicleLocationId,
        'siri_ride__last_vehicle_location_id': value.siriRideLastVehicleLocationId,
        'siri_ride__duration_minutes': value.siriRideDurationMinutes,
        'siri_ride__gtfs_ride_id': value.siriRideGtfsRideId,
    };
}
