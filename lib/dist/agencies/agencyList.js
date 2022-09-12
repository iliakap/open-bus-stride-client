"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var agencyList = [
    {
        agency_id: "2",
        agency_name: "רכבת ישראל",
        agency_url: "http://www.rail.co.il",
        agency_timezone: "Asia/Jerusalem",
        agency_lang: "he",
        agency_phone: "",
        agency_fare_url: ""
    },
    {
        agency_id: "3",
        agency_name: "אגד",
        agency_url: "http://www.egged.co.il",
        agency_timezone: "Asia/Jerusalem",
        agency_lang: "he",
        agency_phone: "",
        agency_fare_url: ""
    },
    {
        agency_id: "4",
        agency_name: "אגד תעבורה",
        agency_url: "http://www.egged-taavura.co.il",
        agency_timezone: "Asia/Jerusalem",
        agency_lang: "he",
        agency_phone: "",
        agency_fare_url: ""
    },
    {
        agency_id: "5",
        agency_name: "דן",
        agency_url: "http://www.dan.co.il",
        agency_timezone: "Asia/Jerusalem",
        agency_lang: "he",
        agency_phone: "",
        agency_fare_url: ""
    },
    {
        agency_id: "6",
        agency_name: "ש.א.מ",
        agency_url: "http://www.nazareth-unbs.com",
        agency_timezone: "Asia/Jerusalem",
        agency_lang: "he",
        agency_phone: "",
        agency_fare_url: ""
    },
    {
        agency_id: "7",
        agency_name: "נסיעות ותיירות",
        agency_url: "http://www.ntt-buses.com",
        agency_timezone: "Asia/Jerusalem",
        agency_lang: "he",
        agency_phone: "",
        agency_fare_url: ""
    },
    {
        agency_id: "8",
        agency_name: "גי.בי.טורס",
        agency_url: "http://www.gb-tours.com",
        agency_timezone: "Asia/Jerusalem",
        agency_lang: "he",
        agency_phone: "",
        agency_fare_url: ""
    },
    {
        agency_id: "10",
        agency_name: "מועצה אזורית אילות",
        agency_url: "https://www.eilot.org.il/bus/",
        agency_timezone: "Asia/Jerusalem",
        agency_lang: "he",
        agency_phone: "",
        agency_fare_url: ""
    },
    {
        agency_id: "14",
        agency_name: "נתיב אקספרס",
        agency_url: "http://www.nateevexpress.com",
        agency_timezone: "Asia/Jerusalem",
        agency_lang: "he",
        agency_phone: "",
        agency_fare_url: ""
    },
    {
        agency_id: "15",
        agency_name: "מטרופולין",
        agency_url: "http://www.metropoline.com",
        agency_timezone: "Asia/Jerusalem",
        agency_lang: "he",
        agency_phone: "",
        agency_fare_url: ""
    },
    {
        agency_id: "16",
        agency_name: "סופרבוס",
        agency_url: "http://www.superbus.co.il",
        agency_timezone: "Asia/Jerusalem",
        agency_lang: "he",
        agency_phone: "",
        agency_fare_url: ""
    },
    {
        agency_id: "18",
        agency_name: "קווים",
        agency_url: "http://www.kavim-t.co.il",
        agency_timezone: "Asia/Jerusalem",
        agency_lang: "he",
        agency_phone: "",
        agency_fare_url: ""
    },
    {
        agency_id: "20",
        agency_name: "כרמלית",
        agency_url: "http://www.carmelithaifa.co.il",
        agency_timezone: "Asia/Jerusalem",
        agency_lang: "he",
        agency_phone: "",
        agency_fare_url: ""
    },
    {
        agency_id: "21",
        agency_name: "כפיר",
        agency_url: "https://www.cfir.co.il/",
        agency_timezone: "Asia/Jerusalem",
        agency_lang: "he",
        agency_phone: "",
        agency_fare_url: ""
    },
    {
        agency_id: "23",
        agency_name: "גלים",
        agency_url: "http://www.galeem.co.il/",
        agency_timezone: "Asia/Jerusalem",
        agency_lang: "he",
        agency_phone: "",
        agency_fare_url: ""
    },
    {
        agency_id: "24",
        agency_name: "מועצה אזורית גולן",
        agency_url: "https://www.golan.org.il/",
        agency_timezone: "Asia/Jerusalem",
        agency_lang: "he",
        agency_phone: "",
        agency_fare_url: ""
    },
    {
        agency_id: "25",
        agency_name: "אלקטרה אפיקים",
        agency_url: "http://www.afikim-t.co.il/",
        agency_timezone: "Asia/Jerusalem",
        agency_lang: "he",
        agency_phone: "",
        agency_fare_url: ""
    },
    {
        agency_id: "31",
        agency_name: "דן בדרום",
        agency_url: "http://www.danbadarom.co.il/",
        agency_timezone: "Asia/Jerusalem",
        agency_lang: "he",
        agency_phone: "",
        agency_fare_url: ""
    },
    {
        agency_id: "32",
        agency_name: "דן באר שבע",
        agency_url: "http://www.danbr7.co.il/",
        agency_timezone: "Asia/Jerusalem",
        agency_lang: "he",
        agency_phone: "",
        agency_fare_url: ""
    },
    {
        agency_id: "33",
        agency_name: "כבל אקספרס",
        agency_url: "https://cableexpress.co",
        agency_timezone: "Asia/Jerusalem",
        agency_lang: "he",
        agency_phone: "",
        agency_fare_url: ""
    },
    {
        agency_id: "34",
        agency_name: "תנופה",
        agency_url: "https://www.tnufa-t.com/",
        agency_timezone: "Asia/Jerusalem",
        agency_lang: "he",
        agency_phone: "",
        agency_fare_url: ""
    },
    {
        agency_id: "35",
        agency_name: "בית שמש אקספרס",
        agency_url: "http://www.bs-exp.co.il/",
        agency_timezone: "Asia/Jerusalem",
        agency_lang: "he",
        agency_phone: "",
        agency_fare_url: ""
    },
    {
        agency_id: "37",
        agency_name: "אקסטרה",
        agency_url: "https://extrapt.co.il/",
        agency_timezone: "Asia/Jerusalem",
        agency_lang: "he",
        agency_phone: "",
        agency_fare_url: ""
    },
    {
        agency_id: "38",
        agency_name: "אקסטרה ירושלים",
        agency_url: "https://extrapt.co.il/",
        agency_timezone: "Asia/Jerusalem",
        agency_lang: "he",
        agency_phone: "",
        agency_fare_url: ""
    },
    {
        agency_id: "42",
        agency_name: "ירושלים-רמאללה איחוד",
        agency_url: "http://www.ramallahbus.com/ar",
        agency_timezone: "Asia/Jerusalem",
        agency_lang: "he",
        agency_phone: "",
        agency_fare_url: ""
    },
    {
        agency_id: "44",
        agency_name: "ירושלים-אבו-תור-ענאתא איחוד",
        agency_url: "http://www.atabuses.com/ar",
        agency_timezone: "Asia/Jerusalem",
        agency_lang: "he",
        agency_phone: "",
        agency_fare_url: ""
    },
    {
        agency_id: "45",
        agency_name: "ירושלים-אלווסט איחוד",
        agency_url: "http://www.centerbuses.com/ar",
        agency_timezone: "Asia/Jerusalem",
        agency_lang: "he",
        agency_phone: "",
        agency_fare_url: ""
    },
    {
        agency_id: "47",
        agency_name: "ירושלים-הר הזיתים",
        agency_url: "http://mountofolivesbus.com/?lang=ar",
        agency_timezone: "Asia/Jerusalem",
        agency_lang: "he",
        agency_phone: "",
        agency_fare_url: ""
    },
    {
        agency_id: "49",
        agency_name: "ירושלים - עיסאוויה מחנה שעפאט איחוד",
        agency_url: "http://www.shufatbus.com",
        agency_timezone: "Asia/Jerusalem",
        agency_lang: "he",
        agency_phone: "",
        agency_fare_url: ""
    },
    {
        agency_id: "50",
        agency_name: "ירושלים-דרום איחוד",
        agency_url: "http://www.south-buses.com",
        agency_timezone: "Asia/Jerusalem",
        agency_lang: "he",
        agency_phone: "",
        agency_fare_url: ""
    },
    {
        agency_id: "51",
        agency_name: "ירושלים-צור באהר איחוד",
        agency_url: "http://www.surbaherbus.com",
        agency_timezone: "Asia/Jerusalem",
        agency_lang: "he",
        agency_phone: "",
        agency_fare_url: ""
    },
    {
        agency_id: "91",
        agency_name: "מוניות מטרו קו",
        agency_url: "http://www.metrokav.com",
        agency_timezone: "Asia/Jerusalem",
        agency_lang: "he",
        agency_phone: "",
        agency_fare_url: ""
    },
    {
        agency_id: "93",
        agency_name: "מוניות מאיה יצחק שדה",
        agency_url: "http://www.bus.gov.il",
        agency_timezone: "Asia/Jerusalem",
        agency_lang: "he",
        agency_phone: "",
        agency_fare_url: ""
    },
    {
        agency_id: "97",
        agency_name: "אודליה מוניות בעמ",
        agency_url: "http://www.bus.gov.il",
        agency_timezone: "Asia/Jerusalem",
        agency_lang: "he",
        agency_phone: "",
        agency_fare_url: ""
    },
    {
        agency_id: "98",
        agency_name: "מוניות רב קווית 4-5",
        agency_url: "https://isrssl.isrcorp.co.il:8093/taxi_45",
        agency_timezone: "Asia/Jerusalem",
        agency_lang: "he",
        agency_phone: "",
        agency_fare_url: ""
    },
];
exports.default = agencyList;
