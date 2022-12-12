"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * Open Bus Stride API
 * ### Follow planned and real-time bus statistics 🚌  Welcome to The Public Knowledge Workshop\'s Stride project. We provide usable and accurate data about the Israeli public transportation system.  For background on the project and some more detailed documentation and usage guides, see [STRIDE.md](https://github.com/hasadna/open-bus-pipelines/blob/main/STRIDE.md).  Looking for a specific use-case?  * Take a look at the **user cases** APIs below. * Try one of our existing [jupyter notebooks](https://github.com/hasadna/open-bus-stride-client/blob/main/README.md#using-the-interactive-jupyter-notebooks). * Don\'t see your use-case covered here? Please [open us a ticket](https://github.com/login?return_to=https%3A%2F%2Fgithub.com%2Fhasadna%2Fopen-bus%2Fissues%2Fnew)!  Queries are by default limited to 100 results per query, this limit can be increased up to 500,000 results. Please try to set appropriate query parameters to limit the results to reduce load on our DB. If you do need to get large number of results (up to 500,000) it\'s recommended to use one of these methods:  1. Use HTTP streaming and JSON streaming decoder, this method is most efficient and provide accurate results.    Our [Stride Python Client iterate method](https://github.com/hasadna/open-bus-stride-client#usage) uses this method. 2. Use combination of limit / offset parameters to get results by page. This method may be less accurate because    it depends on data remaining unchanged between requests.  For more advanced usage-  * Use **gtfs** for data about the planned lines timetables.  * Use **siri** for data about lines real-time * See [Open Bus Stride Data Model](https://github.com/hasadna/open-bus-stride-db/blob/main/DATA_MODEL.md) for description of field and table names. * See [Open Bus Stride ETL Processes](https://github.com/hasadna/open-bus-pipelines/blob/main/STRIDE_ETL_PROCESSES.md) for description of the ETL processes which fetch and aggregate the data. * See [MOT Developer Information](https://www.gov.il/BlobFolder/generalpage/gtfs_general_transit_feed_specifications/he/GTFS%20-%20Developer%20Information.pdf) for description of the source fields as published by the Israel Ministry of Transportation.
 *
 * The version of the OpenAPI document: 20f7a103d49baa393442a36e8e5f615645853aba
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SiriRideStopWithRelatedPydanticModelToJSON = exports.SiriRideStopWithRelatedPydanticModelFromJSONTyped = exports.SiriRideStopWithRelatedPydanticModelFromJSON = exports.instanceOfSiriRideStopWithRelatedPydanticModel = void 0;
var runtime_1 = require("../runtime");
/**
 * Check if a given object implements the SiriRideStopWithRelatedPydanticModel interface.
 */
function instanceOfSiriRideStopWithRelatedPydanticModel(value) {
    var isInstance = true;
    return isInstance;
}
exports.instanceOfSiriRideStopWithRelatedPydanticModel = instanceOfSiriRideStopWithRelatedPydanticModel;
function SiriRideStopWithRelatedPydanticModelFromJSON(json) {
    return SiriRideStopWithRelatedPydanticModelFromJSONTyped(json, false);
}
exports.SiriRideStopWithRelatedPydanticModelFromJSON = SiriRideStopWithRelatedPydanticModelFromJSON;
function SiriRideStopWithRelatedPydanticModelFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': !(0, runtime_1.exists)(json, 'id') ? undefined : json['id'],
        'siriStopId': !(0, runtime_1.exists)(json, 'siri_stop_id') ? undefined : json['siri_stop_id'],
        'siriRideId': !(0, runtime_1.exists)(json, 'siri_ride_id') ? undefined : json['siri_ride_id'],
        'order': !(0, runtime_1.exists)(json, 'order') ? undefined : json['order'],
        'gtfsStopId': !(0, runtime_1.exists)(json, 'gtfs_stop_id') ? undefined : json['gtfs_stop_id'],
        'nearestSiriVehicleLocationId': !(0, runtime_1.exists)(json, 'nearest_siri_vehicle_location_id') ? undefined : json['nearest_siri_vehicle_location_id'],
        'siriStopCode': !(0, runtime_1.exists)(json, 'siri_stop__code') ? undefined : json['siri_stop__code'],
        'siriRideSiriRouteId': !(0, runtime_1.exists)(json, 'siri_ride__siri_route_id') ? undefined : json['siri_ride__siri_route_id'],
        'siriRideJourneyRef': !(0, runtime_1.exists)(json, 'siri_ride__journey_ref') ? undefined : json['siri_ride__journey_ref'],
        'siriRideScheduledStartTime': !(0, runtime_1.exists)(json, 'siri_ride__scheduled_start_time') ? undefined : (new Date(json['siri_ride__scheduled_start_time'])),
        'siriRideVehicleRef': !(0, runtime_1.exists)(json, 'siri_ride__vehicle_ref') ? undefined : json['siri_ride__vehicle_ref'],
        'siriRideUpdatedFirstLastVehicleLocations': !(0, runtime_1.exists)(json, 'siri_ride__updated_first_last_vehicle_locations') ? undefined : (new Date(json['siri_ride__updated_first_last_vehicle_locations'])),
        'siriRideFirstVehicleLocationId': !(0, runtime_1.exists)(json, 'siri_ride__first_vehicle_location_id') ? undefined : json['siri_ride__first_vehicle_location_id'],
        'siriRideLastVehicleLocationId': !(0, runtime_1.exists)(json, 'siri_ride__last_vehicle_location_id') ? undefined : json['siri_ride__last_vehicle_location_id'],
        'siriRideUpdatedDurationMinutes': !(0, runtime_1.exists)(json, 'siri_ride__updated_duration_minutes') ? undefined : (new Date(json['siri_ride__updated_duration_minutes'])),
        'siriRideDurationMinutes': !(0, runtime_1.exists)(json, 'siri_ride__duration_minutes') ? undefined : json['siri_ride__duration_minutes'],
        'siriRideJourneyGtfsRideId': !(0, runtime_1.exists)(json, 'siri_ride__journey_gtfs_ride_id') ? undefined : json['siri_ride__journey_gtfs_ride_id'],
        'siriRideRouteGtfsRideId': !(0, runtime_1.exists)(json, 'siri_ride__route_gtfs_ride_id') ? undefined : json['siri_ride__route_gtfs_ride_id'],
        'siriRideGtfsRideId': !(0, runtime_1.exists)(json, 'siri_ride__gtfs_ride_id') ? undefined : json['siri_ride__gtfs_ride_id'],
        'gtfsStopDate': !(0, runtime_1.exists)(json, 'gtfs_stop__date') ? undefined : (new Date(json['gtfs_stop__date'])),
        'gtfsStopCode': !(0, runtime_1.exists)(json, 'gtfs_stop__code') ? undefined : json['gtfs_stop__code'],
        'gtfsStopLat': !(0, runtime_1.exists)(json, 'gtfs_stop__lat') ? undefined : json['gtfs_stop__lat'],
        'gtfsStopLon': !(0, runtime_1.exists)(json, 'gtfs_stop__lon') ? undefined : json['gtfs_stop__lon'],
        'gtfsStopName': !(0, runtime_1.exists)(json, 'gtfs_stop__name') ? undefined : json['gtfs_stop__name'],
        'gtfsStopCity': !(0, runtime_1.exists)(json, 'gtfs_stop__city') ? undefined : json['gtfs_stop__city'],
        'nearestSiriVehicleLocationSiriSnapshotId': !(0, runtime_1.exists)(json, 'nearest_siri_vehicle_location__siri_snapshot_id') ? undefined : json['nearest_siri_vehicle_location__siri_snapshot_id'],
        'nearestSiriVehicleLocationSiriRideStopId': !(0, runtime_1.exists)(json, 'nearest_siri_vehicle_location__siri_ride_stop_id') ? undefined : json['nearest_siri_vehicle_location__siri_ride_stop_id'],
        'nearestSiriVehicleLocationRecordedAtTime': !(0, runtime_1.exists)(json, 'nearest_siri_vehicle_location__recorded_at_time') ? undefined : (new Date(json['nearest_siri_vehicle_location__recorded_at_time'])),
        'nearestSiriVehicleLocationLon': !(0, runtime_1.exists)(json, 'nearest_siri_vehicle_location__lon') ? undefined : json['nearest_siri_vehicle_location__lon'],
        'nearestSiriVehicleLocationLat': !(0, runtime_1.exists)(json, 'nearest_siri_vehicle_location__lat') ? undefined : json['nearest_siri_vehicle_location__lat'],
        'nearestSiriVehicleLocationBearing': !(0, runtime_1.exists)(json, 'nearest_siri_vehicle_location__bearing') ? undefined : json['nearest_siri_vehicle_location__bearing'],
        'nearestSiriVehicleLocationVelocity': !(0, runtime_1.exists)(json, 'nearest_siri_vehicle_location__velocity') ? undefined : json['nearest_siri_vehicle_location__velocity'],
        'nearestSiriVehicleLocationDistanceFromJourneyStart': !(0, runtime_1.exists)(json, 'nearest_siri_vehicle_location__distance_from_journey_start') ? undefined : json['nearest_siri_vehicle_location__distance_from_journey_start'],
        'nearestSiriVehicleLocationDistanceFromSiriRideStopMeters': !(0, runtime_1.exists)(json, 'nearest_siri_vehicle_location__distance_from_siri_ride_stop_meters') ? undefined : json['nearest_siri_vehicle_location__distance_from_siri_ride_stop_meters'],
        'gtfsRideStopGtfsStopId': !(0, runtime_1.exists)(json, 'gtfs_ride_stop__gtfs_stop_id') ? undefined : json['gtfs_ride_stop__gtfs_stop_id'],
        'gtfsRideStopGtfsRideId': !(0, runtime_1.exists)(json, 'gtfs_ride_stop__gtfs_ride_id') ? undefined : json['gtfs_ride_stop__gtfs_ride_id'],
        'gtfsRideStopArrivalTime': !(0, runtime_1.exists)(json, 'gtfs_ride_stop__arrival_time') ? undefined : (new Date(json['gtfs_ride_stop__arrival_time'])),
        'gtfsRideStopDepartureTime': !(0, runtime_1.exists)(json, 'gtfs_ride_stop__departure_time') ? undefined : (new Date(json['gtfs_ride_stop__departure_time'])),
        'gtfsRideStopStopSequence': !(0, runtime_1.exists)(json, 'gtfs_ride_stop__stop_sequence') ? undefined : json['gtfs_ride_stop__stop_sequence'],
        'gtfsRideStopPickupType': !(0, runtime_1.exists)(json, 'gtfs_ride_stop__pickup_type') ? undefined : json['gtfs_ride_stop__pickup_type'],
        'gtfsRideStopDropOffType': !(0, runtime_1.exists)(json, 'gtfs_ride_stop__drop_off_type') ? undefined : json['gtfs_ride_stop__drop_off_type'],
        'gtfsRideStopShapeDistTraveled': !(0, runtime_1.exists)(json, 'gtfs_ride_stop__shape_dist_traveled') ? undefined : json['gtfs_ride_stop__shape_dist_traveled'],
        'gtfsRideGtfsRouteId': !(0, runtime_1.exists)(json, 'gtfs_ride__gtfs_route_id') ? undefined : json['gtfs_ride__gtfs_route_id'],
        'gtfsRideJourneyRef': !(0, runtime_1.exists)(json, 'gtfs_ride__journey_ref') ? undefined : json['gtfs_ride__journey_ref'],
        'gtfsRideStartTime': !(0, runtime_1.exists)(json, 'gtfs_ride__start_time') ? undefined : (new Date(json['gtfs_ride__start_time'])),
        'gtfsRideEndTime': !(0, runtime_1.exists)(json, 'gtfs_ride__end_time') ? undefined : (new Date(json['gtfs_ride__end_time'])),
        'gtfsRouteDate': !(0, runtime_1.exists)(json, 'gtfs_route__date') ? undefined : (new Date(json['gtfs_route__date'])),
        'gtfsRouteLineRef': !(0, runtime_1.exists)(json, 'gtfs_route__line_ref') ? undefined : json['gtfs_route__line_ref'],
        'gtfsRouteOperatorRef': !(0, runtime_1.exists)(json, 'gtfs_route__operator_ref') ? undefined : json['gtfs_route__operator_ref'],
        'gtfsRouteRouteShortName': !(0, runtime_1.exists)(json, 'gtfs_route__route_short_name') ? undefined : json['gtfs_route__route_short_name'],
        'gtfsRouteRouteLongName': !(0, runtime_1.exists)(json, 'gtfs_route__route_long_name') ? undefined : json['gtfs_route__route_long_name'],
        'gtfsRouteRouteMkt': !(0, runtime_1.exists)(json, 'gtfs_route__route_mkt') ? undefined : json['gtfs_route__route_mkt'],
        'gtfsRouteRouteDirection': !(0, runtime_1.exists)(json, 'gtfs_route__route_direction') ? undefined : json['gtfs_route__route_direction'],
        'gtfsRouteRouteAlternative': !(0, runtime_1.exists)(json, 'gtfs_route__route_alternative') ? undefined : json['gtfs_route__route_alternative'],
        'gtfsRouteAgencyName': !(0, runtime_1.exists)(json, 'gtfs_route__agency_name') ? undefined : json['gtfs_route__agency_name'],
        'gtfsRouteRouteType': !(0, runtime_1.exists)(json, 'gtfs_route__route_type') ? undefined : json['gtfs_route__route_type'],
    };
}
exports.SiriRideStopWithRelatedPydanticModelFromJSONTyped = SiriRideStopWithRelatedPydanticModelFromJSONTyped;
function SiriRideStopWithRelatedPydanticModelToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'siri_stop_id': value.siriStopId,
        'siri_ride_id': value.siriRideId,
        'order': value.order,
        'gtfs_stop_id': value.gtfsStopId,
        'nearest_siri_vehicle_location_id': value.nearestSiriVehicleLocationId,
        'siri_stop__code': value.siriStopCode,
        'siri_ride__siri_route_id': value.siriRideSiriRouteId,
        'siri_ride__journey_ref': value.siriRideJourneyRef,
        'siri_ride__scheduled_start_time': value.siriRideScheduledStartTime === undefined ? undefined : (value.siriRideScheduledStartTime.toISOString()),
        'siri_ride__vehicle_ref': value.siriRideVehicleRef,
        'siri_ride__updated_first_last_vehicle_locations': value.siriRideUpdatedFirstLastVehicleLocations === undefined ? undefined : (value.siriRideUpdatedFirstLastVehicleLocations.toISOString()),
        'siri_ride__first_vehicle_location_id': value.siriRideFirstVehicleLocationId,
        'siri_ride__last_vehicle_location_id': value.siriRideLastVehicleLocationId,
        'siri_ride__updated_duration_minutes': value.siriRideUpdatedDurationMinutes === undefined ? undefined : (value.siriRideUpdatedDurationMinutes.toISOString()),
        'siri_ride__duration_minutes': value.siriRideDurationMinutes,
        'siri_ride__journey_gtfs_ride_id': value.siriRideJourneyGtfsRideId,
        'siri_ride__route_gtfs_ride_id': value.siriRideRouteGtfsRideId,
        'siri_ride__gtfs_ride_id': value.siriRideGtfsRideId,
        'gtfs_stop__date': value.gtfsStopDate === undefined ? undefined : (value.gtfsStopDate.toISOString().substr(0, 10)),
        'gtfs_stop__code': value.gtfsStopCode,
        'gtfs_stop__lat': value.gtfsStopLat,
        'gtfs_stop__lon': value.gtfsStopLon,
        'gtfs_stop__name': value.gtfsStopName,
        'gtfs_stop__city': value.gtfsStopCity,
        'nearest_siri_vehicle_location__siri_snapshot_id': value.nearestSiriVehicleLocationSiriSnapshotId,
        'nearest_siri_vehicle_location__siri_ride_stop_id': value.nearestSiriVehicleLocationSiriRideStopId,
        'nearest_siri_vehicle_location__recorded_at_time': value.nearestSiriVehicleLocationRecordedAtTime === undefined ? undefined : (value.nearestSiriVehicleLocationRecordedAtTime.toISOString()),
        'nearest_siri_vehicle_location__lon': value.nearestSiriVehicleLocationLon,
        'nearest_siri_vehicle_location__lat': value.nearestSiriVehicleLocationLat,
        'nearest_siri_vehicle_location__bearing': value.nearestSiriVehicleLocationBearing,
        'nearest_siri_vehicle_location__velocity': value.nearestSiriVehicleLocationVelocity,
        'nearest_siri_vehicle_location__distance_from_journey_start': value.nearestSiriVehicleLocationDistanceFromJourneyStart,
        'nearest_siri_vehicle_location__distance_from_siri_ride_stop_meters': value.nearestSiriVehicleLocationDistanceFromSiriRideStopMeters,
        'gtfs_ride_stop__gtfs_stop_id': value.gtfsRideStopGtfsStopId,
        'gtfs_ride_stop__gtfs_ride_id': value.gtfsRideStopGtfsRideId,
        'gtfs_ride_stop__arrival_time': value.gtfsRideStopArrivalTime === undefined ? undefined : (value.gtfsRideStopArrivalTime.toISOString()),
        'gtfs_ride_stop__departure_time': value.gtfsRideStopDepartureTime === undefined ? undefined : (value.gtfsRideStopDepartureTime.toISOString()),
        'gtfs_ride_stop__stop_sequence': value.gtfsRideStopStopSequence,
        'gtfs_ride_stop__pickup_type': value.gtfsRideStopPickupType,
        'gtfs_ride_stop__drop_off_type': value.gtfsRideStopDropOffType,
        'gtfs_ride_stop__shape_dist_traveled': value.gtfsRideStopShapeDistTraveled,
        'gtfs_ride__gtfs_route_id': value.gtfsRideGtfsRouteId,
        'gtfs_ride__journey_ref': value.gtfsRideJourneyRef,
        'gtfs_ride__start_time': value.gtfsRideStartTime === undefined ? undefined : (value.gtfsRideStartTime.toISOString()),
        'gtfs_ride__end_time': value.gtfsRideEndTime === undefined ? undefined : (value.gtfsRideEndTime.toISOString()),
        'gtfs_route__date': value.gtfsRouteDate === undefined ? undefined : (value.gtfsRouteDate.toISOString().substr(0, 10)),
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
exports.SiriRideStopWithRelatedPydanticModelToJSON = SiriRideStopWithRelatedPydanticModelToJSON;