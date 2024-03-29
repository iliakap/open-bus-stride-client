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
/**
 *
 * @export
 * @interface SiriRideStopWithRelatedPydanticModel
 */
export interface SiriRideStopWithRelatedPydanticModel {
    /**
     *
     * @type {number}
     * @memberof SiriRideStopWithRelatedPydanticModel
     */
    id?: number;
    /**
     *
     * @type {number}
     * @memberof SiriRideStopWithRelatedPydanticModel
     */
    siriStopId?: number;
    /**
     *
     * @type {number}
     * @memberof SiriRideStopWithRelatedPydanticModel
     */
    siriRideId?: number;
    /**
     *
     * @type {number}
     * @memberof SiriRideStopWithRelatedPydanticModel
     */
    order?: number;
    /**
     *
     * @type {number}
     * @memberof SiriRideStopWithRelatedPydanticModel
     */
    gtfsStopId?: number;
    /**
     *
     * @type {number}
     * @memberof SiriRideStopWithRelatedPydanticModel
     */
    nearestSiriVehicleLocationId?: number;
    /**
     *
     * @type {number}
     * @memberof SiriRideStopWithRelatedPydanticModel
     */
    siriStopCode?: number;
    /**
     *
     * @type {number}
     * @memberof SiriRideStopWithRelatedPydanticModel
     */
    siriRideSiriRouteId?: number;
    /**
     *
     * @type {string}
     * @memberof SiriRideStopWithRelatedPydanticModel
     */
    siriRideJourneyRef?: string;
    /**
     *
     * @type {Date}
     * @memberof SiriRideStopWithRelatedPydanticModel
     */
    siriRideScheduledStartTime?: Date;
    /**
     *
     * @type {string}
     * @memberof SiriRideStopWithRelatedPydanticModel
     */
    siriRideVehicleRef?: string;
    /**
     *
     * @type {Date}
     * @memberof SiriRideStopWithRelatedPydanticModel
     */
    siriRideUpdatedFirstLastVehicleLocations?: Date;
    /**
     *
     * @type {number}
     * @memberof SiriRideStopWithRelatedPydanticModel
     */
    siriRideFirstVehicleLocationId?: number;
    /**
     *
     * @type {number}
     * @memberof SiriRideStopWithRelatedPydanticModel
     */
    siriRideLastVehicleLocationId?: number;
    /**
     *
     * @type {Date}
     * @memberof SiriRideStopWithRelatedPydanticModel
     */
    siriRideUpdatedDurationMinutes?: Date;
    /**
     *
     * @type {number}
     * @memberof SiriRideStopWithRelatedPydanticModel
     */
    siriRideDurationMinutes?: number;
    /**
     *
     * @type {number}
     * @memberof SiriRideStopWithRelatedPydanticModel
     */
    siriRideJourneyGtfsRideId?: number;
    /**
     *
     * @type {number}
     * @memberof SiriRideStopWithRelatedPydanticModel
     */
    siriRideRouteGtfsRideId?: number;
    /**
     *
     * @type {number}
     * @memberof SiriRideStopWithRelatedPydanticModel
     */
    siriRideGtfsRideId?: number;
    /**
     *
     * @type {Date}
     * @memberof SiriRideStopWithRelatedPydanticModel
     */
    gtfsStopDate?: Date;
    /**
     *
     * @type {number}
     * @memberof SiriRideStopWithRelatedPydanticModel
     */
    gtfsStopCode?: number;
    /**
     *
     * @type {number}
     * @memberof SiriRideStopWithRelatedPydanticModel
     */
    gtfsStopLat?: number;
    /**
     *
     * @type {number}
     * @memberof SiriRideStopWithRelatedPydanticModel
     */
    gtfsStopLon?: number;
    /**
     *
     * @type {string}
     * @memberof SiriRideStopWithRelatedPydanticModel
     */
    gtfsStopName?: string;
    /**
     *
     * @type {string}
     * @memberof SiriRideStopWithRelatedPydanticModel
     */
    gtfsStopCity?: string;
    /**
     *
     * @type {number}
     * @memberof SiriRideStopWithRelatedPydanticModel
     */
    nearestSiriVehicleLocationSiriSnapshotId?: number;
    /**
     *
     * @type {number}
     * @memberof SiriRideStopWithRelatedPydanticModel
     */
    nearestSiriVehicleLocationSiriRideStopId?: number;
    /**
     *
     * @type {Date}
     * @memberof SiriRideStopWithRelatedPydanticModel
     */
    nearestSiriVehicleLocationRecordedAtTime?: Date;
    /**
     *
     * @type {number}
     * @memberof SiriRideStopWithRelatedPydanticModel
     */
    nearestSiriVehicleLocationLon?: number;
    /**
     *
     * @type {number}
     * @memberof SiriRideStopWithRelatedPydanticModel
     */
    nearestSiriVehicleLocationLat?: number;
    /**
     *
     * @type {number}
     * @memberof SiriRideStopWithRelatedPydanticModel
     */
    nearestSiriVehicleLocationBearing?: number;
    /**
     *
     * @type {number}
     * @memberof SiriRideStopWithRelatedPydanticModel
     */
    nearestSiriVehicleLocationVelocity?: number;
    /**
     *
     * @type {number}
     * @memberof SiriRideStopWithRelatedPydanticModel
     */
    nearestSiriVehicleLocationDistanceFromJourneyStart?: number;
    /**
     *
     * @type {number}
     * @memberof SiriRideStopWithRelatedPydanticModel
     */
    nearestSiriVehicleLocationDistanceFromSiriRideStopMeters?: number;
    /**
     *
     * @type {number}
     * @memberof SiriRideStopWithRelatedPydanticModel
     */
    gtfsRideStopGtfsStopId?: number;
    /**
     *
     * @type {number}
     * @memberof SiriRideStopWithRelatedPydanticModel
     */
    gtfsRideStopGtfsRideId?: number;
    /**
     *
     * @type {Date}
     * @memberof SiriRideStopWithRelatedPydanticModel
     */
    gtfsRideStopArrivalTime?: Date;
    /**
     *
     * @type {Date}
     * @memberof SiriRideStopWithRelatedPydanticModel
     */
    gtfsRideStopDepartureTime?: Date;
    /**
     *
     * @type {number}
     * @memberof SiriRideStopWithRelatedPydanticModel
     */
    gtfsRideStopStopSequence?: number;
    /**
     *
     * @type {number}
     * @memberof SiriRideStopWithRelatedPydanticModel
     */
    gtfsRideStopPickupType?: number;
    /**
     *
     * @type {number}
     * @memberof SiriRideStopWithRelatedPydanticModel
     */
    gtfsRideStopDropOffType?: number;
    /**
     *
     * @type {number}
     * @memberof SiriRideStopWithRelatedPydanticModel
     */
    gtfsRideStopShapeDistTraveled?: number;
    /**
     *
     * @type {number}
     * @memberof SiriRideStopWithRelatedPydanticModel
     */
    gtfsRideGtfsRouteId?: number;
    /**
     *
     * @type {string}
     * @memberof SiriRideStopWithRelatedPydanticModel
     */
    gtfsRideJourneyRef?: string;
    /**
     *
     * @type {Date}
     * @memberof SiriRideStopWithRelatedPydanticModel
     */
    gtfsRideStartTime?: Date;
    /**
     *
     * @type {Date}
     * @memberof SiriRideStopWithRelatedPydanticModel
     */
    gtfsRideEndTime?: Date;
    /**
     *
     * @type {Date}
     * @memberof SiriRideStopWithRelatedPydanticModel
     */
    gtfsRouteDate?: Date;
    /**
     *
     * @type {number}
     * @memberof SiriRideStopWithRelatedPydanticModel
     */
    gtfsRouteLineRef?: number;
    /**
     *
     * @type {number}
     * @memberof SiriRideStopWithRelatedPydanticModel
     */
    gtfsRouteOperatorRef?: number;
    /**
     *
     * @type {string}
     * @memberof SiriRideStopWithRelatedPydanticModel
     */
    gtfsRouteRouteShortName?: string;
    /**
     *
     * @type {string}
     * @memberof SiriRideStopWithRelatedPydanticModel
     */
    gtfsRouteRouteLongName?: string;
    /**
     *
     * @type {string}
     * @memberof SiriRideStopWithRelatedPydanticModel
     */
    gtfsRouteRouteMkt?: string;
    /**
     *
     * @type {string}
     * @memberof SiriRideStopWithRelatedPydanticModel
     */
    gtfsRouteRouteDirection?: string;
    /**
     *
     * @type {string}
     * @memberof SiriRideStopWithRelatedPydanticModel
     */
    gtfsRouteRouteAlternative?: string;
    /**
     *
     * @type {string}
     * @memberof SiriRideStopWithRelatedPydanticModel
     */
    gtfsRouteAgencyName?: string;
    /**
     *
     * @type {string}
     * @memberof SiriRideStopWithRelatedPydanticModel
     */
    gtfsRouteRouteType?: string;
}
/**
 * Check if a given object implements the SiriRideStopWithRelatedPydanticModel interface.
 */
export declare function instanceOfSiriRideStopWithRelatedPydanticModel(value: object): boolean;
export declare function SiriRideStopWithRelatedPydanticModelFromJSON(json: any): SiriRideStopWithRelatedPydanticModel;
export declare function SiriRideStopWithRelatedPydanticModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): SiriRideStopWithRelatedPydanticModel;
export declare function SiriRideStopWithRelatedPydanticModelToJSON(value?: SiriRideStopWithRelatedPydanticModel | null): any;
