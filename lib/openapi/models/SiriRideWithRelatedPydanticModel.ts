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
 * @interface SiriRideWithRelatedPydanticModel
 */
export interface SiriRideWithRelatedPydanticModel {
    /**
     * 
     * @type {number}
     * @memberof SiriRideWithRelatedPydanticModel
     */
    id?: number;
    /**
     * 
     * @type {number}
     * @memberof SiriRideWithRelatedPydanticModel
     */
    siriRouteId?: number;
    /**
     * 
     * @type {string}
     * @memberof SiriRideWithRelatedPydanticModel
     */
    journeyRef?: string;
    /**
     * 
     * @type {Date}
     * @memberof SiriRideWithRelatedPydanticModel
     */
    scheduledStartTime?: Date;
    /**
     * 
     * @type {string}
     * @memberof SiriRideWithRelatedPydanticModel
     */
    vehicleRef?: string;
    /**
     * 
     * @type {Date}
     * @memberof SiriRideWithRelatedPydanticModel
     */
    updatedFirstLastVehicleLocations?: Date;
    /**
     * 
     * @type {number}
     * @memberof SiriRideWithRelatedPydanticModel
     */
    firstVehicleLocationId?: number;
    /**
     * 
     * @type {number}
     * @memberof SiriRideWithRelatedPydanticModel
     */
    lastVehicleLocationId?: number;
    /**
     * 
     * @type {Date}
     * @memberof SiriRideWithRelatedPydanticModel
     */
    updatedDurationMinutes?: Date;
    /**
     * 
     * @type {number}
     * @memberof SiriRideWithRelatedPydanticModel
     */
    durationMinutes?: number;
    /**
     * 
     * @type {number}
     * @memberof SiriRideWithRelatedPydanticModel
     */
    journeyGtfsRideId?: number;
    /**
     * 
     * @type {number}
     * @memberof SiriRideWithRelatedPydanticModel
     */
    routeGtfsRideId?: number;
    /**
     * 
     * @type {number}
     * @memberof SiriRideWithRelatedPydanticModel
     */
    gtfsRideId?: number;
    /**
     * 
     * @type {number}
     * @memberof SiriRideWithRelatedPydanticModel
     */
    siriRouteLineRef?: number;
    /**
     * 
     * @type {number}
     * @memberof SiriRideWithRelatedPydanticModel
     */
    siriRouteOperatorRef?: number;
    /**
     * 
     * @type {number}
     * @memberof SiriRideWithRelatedPydanticModel
     */
    gtfsRideGtfsRouteId?: number;
    /**
     * 
     * @type {string}
     * @memberof SiriRideWithRelatedPydanticModel
     */
    gtfsRideJourneyRef?: string;
    /**
     * 
     * @type {Date}
     * @memberof SiriRideWithRelatedPydanticModel
     */
    gtfsRideStartTime?: Date;
    /**
     * 
     * @type {Date}
     * @memberof SiriRideWithRelatedPydanticModel
     */
    gtfsRideEndTime?: Date;
    /**
     * 
     * @type {Date}
     * @memberof SiriRideWithRelatedPydanticModel
     */
    gtfsRouteDate?: Date;
    /**
     * 
     * @type {number}
     * @memberof SiriRideWithRelatedPydanticModel
     */
    gtfsRouteLineRef?: number;
    /**
     * 
     * @type {number}
     * @memberof SiriRideWithRelatedPydanticModel
     */
    gtfsRouteOperatorRef?: number;
    /**
     * 
     * @type {string}
     * @memberof SiriRideWithRelatedPydanticModel
     */
    gtfsRouteRouteShortName?: string;
    /**
     * 
     * @type {string}
     * @memberof SiriRideWithRelatedPydanticModel
     */
    gtfsRouteRouteLongName?: string;
    /**
     * 
     * @type {string}
     * @memberof SiriRideWithRelatedPydanticModel
     */
    gtfsRouteRouteMkt?: string;
    /**
     * 
     * @type {string}
     * @memberof SiriRideWithRelatedPydanticModel
     */
    gtfsRouteRouteDirection?: string;
    /**
     * 
     * @type {string}
     * @memberof SiriRideWithRelatedPydanticModel
     */
    gtfsRouteRouteAlternative?: string;
    /**
     * 
     * @type {string}
     * @memberof SiriRideWithRelatedPydanticModel
     */
    gtfsRouteAgencyName?: string;
    /**
     * 
     * @type {string}
     * @memberof SiriRideWithRelatedPydanticModel
     */
    gtfsRouteRouteType?: string;
}

/**
 * Check if a given object implements the SiriRideWithRelatedPydanticModel interface.
 */
export function instanceOfSiriRideWithRelatedPydanticModel(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SiriRideWithRelatedPydanticModelFromJSON(json: any): SiriRideWithRelatedPydanticModel {
    return SiriRideWithRelatedPydanticModelFromJSONTyped(json, false);
}

export function SiriRideWithRelatedPydanticModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): SiriRideWithRelatedPydanticModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'siriRouteId': !exists(json, 'siri_route_id') ? undefined : json['siri_route_id'],
        'journeyRef': !exists(json, 'journey_ref') ? undefined : json['journey_ref'],
        'scheduledStartTime': !exists(json, 'scheduled_start_time') ? undefined : (new Date(json['scheduled_start_time'])),
        'vehicleRef': !exists(json, 'vehicle_ref') ? undefined : json['vehicle_ref'],
        'updatedFirstLastVehicleLocations': !exists(json, 'updated_first_last_vehicle_locations') ? undefined : (new Date(json['updated_first_last_vehicle_locations'])),
        'firstVehicleLocationId': !exists(json, 'first_vehicle_location_id') ? undefined : json['first_vehicle_location_id'],
        'lastVehicleLocationId': !exists(json, 'last_vehicle_location_id') ? undefined : json['last_vehicle_location_id'],
        'updatedDurationMinutes': !exists(json, 'updated_duration_minutes') ? undefined : (new Date(json['updated_duration_minutes'])),
        'durationMinutes': !exists(json, 'duration_minutes') ? undefined : json['duration_minutes'],
        'journeyGtfsRideId': !exists(json, 'journey_gtfs_ride_id') ? undefined : json['journey_gtfs_ride_id'],
        'routeGtfsRideId': !exists(json, 'route_gtfs_ride_id') ? undefined : json['route_gtfs_ride_id'],
        'gtfsRideId': !exists(json, 'gtfs_ride_id') ? undefined : json['gtfs_ride_id'],
        'siriRouteLineRef': !exists(json, 'siri_route__line_ref') ? undefined : json['siri_route__line_ref'],
        'siriRouteOperatorRef': !exists(json, 'siri_route__operator_ref') ? undefined : json['siri_route__operator_ref'],
        'gtfsRideGtfsRouteId': !exists(json, 'gtfs_ride__gtfs_route_id') ? undefined : json['gtfs_ride__gtfs_route_id'],
        'gtfsRideJourneyRef': !exists(json, 'gtfs_ride__journey_ref') ? undefined : json['gtfs_ride__journey_ref'],
        'gtfsRideStartTime': !exists(json, 'gtfs_ride__start_time') ? undefined : (new Date(json['gtfs_ride__start_time'])),
        'gtfsRideEndTime': !exists(json, 'gtfs_ride__end_time') ? undefined : (new Date(json['gtfs_ride__end_time'])),
        'gtfsRouteDate': !exists(json, 'gtfs_route__date') ? undefined : (new Date(json['gtfs_route__date'])),
        'gtfsRouteLineRef': !exists(json, 'gtfs_route__line_ref') ? undefined : json['gtfs_route__line_ref'],
        'gtfsRouteOperatorRef': !exists(json, 'gtfs_route__operator_ref') ? undefined : json['gtfs_route__operator_ref'],
        'gtfsRouteRouteShortName': !exists(json, 'gtfs_route__route_short_name') ? undefined : json['gtfs_route__route_short_name'],
        'gtfsRouteRouteLongName': !exists(json, 'gtfs_route__route_long_name') ? undefined : json['gtfs_route__route_long_name'],
        'gtfsRouteRouteMkt': !exists(json, 'gtfs_route__route_mkt') ? undefined : json['gtfs_route__route_mkt'],
        'gtfsRouteRouteDirection': !exists(json, 'gtfs_route__route_direction') ? undefined : json['gtfs_route__route_direction'],
        'gtfsRouteRouteAlternative': !exists(json, 'gtfs_route__route_alternative') ? undefined : json['gtfs_route__route_alternative'],
        'gtfsRouteAgencyName': !exists(json, 'gtfs_route__agency_name') ? undefined : json['gtfs_route__agency_name'],
        'gtfsRouteRouteType': !exists(json, 'gtfs_route__route_type') ? undefined : json['gtfs_route__route_type'],
    };
}

export function SiriRideWithRelatedPydanticModelToJSON(value?: SiriRideWithRelatedPydanticModel | null): any {
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
        'scheduled_start_time': value.scheduledStartTime === undefined ? undefined : (value.scheduledStartTime.toISOString()),
        'vehicle_ref': value.vehicleRef,
        'updated_first_last_vehicle_locations': value.updatedFirstLastVehicleLocations === undefined ? undefined : (value.updatedFirstLastVehicleLocations.toISOString()),
        'first_vehicle_location_id': value.firstVehicleLocationId,
        'last_vehicle_location_id': value.lastVehicleLocationId,
        'updated_duration_minutes': value.updatedDurationMinutes === undefined ? undefined : (value.updatedDurationMinutes.toISOString()),
        'duration_minutes': value.durationMinutes,
        'journey_gtfs_ride_id': value.journeyGtfsRideId,
        'route_gtfs_ride_id': value.routeGtfsRideId,
        'gtfs_ride_id': value.gtfsRideId,
        'siri_route__line_ref': value.siriRouteLineRef,
        'siri_route__operator_ref': value.siriRouteOperatorRef,
        'gtfs_ride__gtfs_route_id': value.gtfsRideGtfsRouteId,
        'gtfs_ride__journey_ref': value.gtfsRideJourneyRef,
        'gtfs_ride__start_time': value.gtfsRideStartTime === undefined ? undefined : (value.gtfsRideStartTime.toISOString()),
        'gtfs_ride__end_time': value.gtfsRideEndTime === undefined ? undefined : (value.gtfsRideEndTime.toISOString()),
        'gtfs_route__date': value.gtfsRouteDate === undefined ? undefined : (value.gtfsRouteDate.toISOString().substr(0,10)),
        'gtfs_route__line_ref': value.gtfsRouteLineRef,
        'gtfs_route__operator_ref': value.gtfsRouteOperatorRef,
        'gtfs_route__route_short_name': value.gtfsRouteRouteShortName,
        'gtfs_route__route_long_name': value.gtfsRouteRouteLongName,
        'gtfs_route__route_mkt': value.gtfsRouteRouteMkt,
        'gtfs_route__route_direction': value.gtfsRouteRouteDirection,
        'gtfs_route__route_alternative': value.gtfsRouteRouteAlternative,
        'gtfs_route__agency_name': value.gtfsRouteAgencyName,
        'gtfs_route__route_type': value.gtfsRouteRouteType,
    };
}

