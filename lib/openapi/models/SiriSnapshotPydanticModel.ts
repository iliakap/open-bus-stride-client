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
import type { SiriSnapshotEtlStatusEnum } from './SiriSnapshotEtlStatusEnum';
import {
    SiriSnapshotEtlStatusEnumFromJSON,
    SiriSnapshotEtlStatusEnumFromJSONTyped,
    SiriSnapshotEtlStatusEnumToJSON,
} from './SiriSnapshotEtlStatusEnum';

/**
 * 
 * @export
 * @interface SiriSnapshotPydanticModel
 */
export interface SiriSnapshotPydanticModel {
    /**
     * 
     * @type {number}
     * @memberof SiriSnapshotPydanticModel
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof SiriSnapshotPydanticModel
     */
    snapshotId: string;
    /**
     * 
     * @type {SiriSnapshotEtlStatusEnum}
     * @memberof SiriSnapshotPydanticModel
     */
    etlStatus: SiriSnapshotEtlStatusEnum;
    /**
     * 
     * @type {Date}
     * @memberof SiriSnapshotPydanticModel
     */
    etlStartTime?: Date;
    /**
     * 
     * @type {Date}
     * @memberof SiriSnapshotPydanticModel
     */
    etlEndTime?: Date;
    /**
     * 
     * @type {string}
     * @memberof SiriSnapshotPydanticModel
     */
    error?: string;
    /**
     * 
     * @type {number}
     * @memberof SiriSnapshotPydanticModel
     */
    numSuccessfulParseVehicleLocations?: number;
    /**
     * 
     * @type {number}
     * @memberof SiriSnapshotPydanticModel
     */
    numFailedParseVehicleLocations?: number;
    /**
     * 
     * @type {number}
     * @memberof SiriSnapshotPydanticModel
     */
    numAddedSiriRides?: number;
    /**
     * 
     * @type {number}
     * @memberof SiriSnapshotPydanticModel
     */
    numAddedSiriRideStops?: number;
    /**
     * 
     * @type {number}
     * @memberof SiriSnapshotPydanticModel
     */
    numAddedSiriRoutes?: number;
    /**
     * 
     * @type {number}
     * @memberof SiriSnapshotPydanticModel
     */
    numAddedSiriStops?: number;
    /**
     * 
     * @type {Date}
     * @memberof SiriSnapshotPydanticModel
     */
    lastHeartbeat?: Date;
    /**
     * 
     * @type {string}
     * @memberof SiriSnapshotPydanticModel
     */
    createdBy?: string;
}

/**
 * Check if a given object implements the SiriSnapshotPydanticModel interface.
 */
export function instanceOfSiriSnapshotPydanticModel(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "snapshotId" in value;
    isInstance = isInstance && "etlStatus" in value;

    return isInstance;
}

export function SiriSnapshotPydanticModelFromJSON(json: any): SiriSnapshotPydanticModel {
    return SiriSnapshotPydanticModelFromJSONTyped(json, false);
}

export function SiriSnapshotPydanticModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): SiriSnapshotPydanticModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'snapshotId': json['snapshot_id'],
        'etlStatus': SiriSnapshotEtlStatusEnumFromJSON(json['etl_status']),
        'etlStartTime': !exists(json, 'etl_start_time') ? undefined : (new Date(json['etl_start_time'])),
        'etlEndTime': !exists(json, 'etl_end_time') ? undefined : (new Date(json['etl_end_time'])),
        'error': !exists(json, 'error') ? undefined : json['error'],
        'numSuccessfulParseVehicleLocations': !exists(json, 'num_successful_parse_vehicle_locations') ? undefined : json['num_successful_parse_vehicle_locations'],
        'numFailedParseVehicleLocations': !exists(json, 'num_failed_parse_vehicle_locations') ? undefined : json['num_failed_parse_vehicle_locations'],
        'numAddedSiriRides': !exists(json, 'num_added_siri_rides') ? undefined : json['num_added_siri_rides'],
        'numAddedSiriRideStops': !exists(json, 'num_added_siri_ride_stops') ? undefined : json['num_added_siri_ride_stops'],
        'numAddedSiriRoutes': !exists(json, 'num_added_siri_routes') ? undefined : json['num_added_siri_routes'],
        'numAddedSiriStops': !exists(json, 'num_added_siri_stops') ? undefined : json['num_added_siri_stops'],
        'lastHeartbeat': !exists(json, 'last_heartbeat') ? undefined : (new Date(json['last_heartbeat'])),
        'createdBy': !exists(json, 'created_by') ? undefined : json['created_by'],
    };
}

export function SiriSnapshotPydanticModelToJSON(value?: SiriSnapshotPydanticModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'snapshot_id': value.snapshotId,
        'etl_status': SiriSnapshotEtlStatusEnumToJSON(value.etlStatus),
        'etl_start_time': value.etlStartTime === undefined ? undefined : (value.etlStartTime.toISOString()),
        'etl_end_time': value.etlEndTime === undefined ? undefined : (value.etlEndTime.toISOString()),
        'error': value.error,
        'num_successful_parse_vehicle_locations': value.numSuccessfulParseVehicleLocations,
        'num_failed_parse_vehicle_locations': value.numFailedParseVehicleLocations,
        'num_added_siri_rides': value.numAddedSiriRides,
        'num_added_siri_ride_stops': value.numAddedSiriRideStops,
        'num_added_siri_routes': value.numAddedSiriRoutes,
        'num_added_siri_stops': value.numAddedSiriStops,
        'last_heartbeat': value.lastHeartbeat === undefined ? undefined : (value.lastHeartbeat.toISOString()),
        'created_by': value.createdBy,
    };
}

