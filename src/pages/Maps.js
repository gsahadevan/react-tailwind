import React from 'react';
import {Map, GeoJSON} from 'react-leaflet';
import PageTitle from '../components/Typography/PageTitle';
import mapData from '../assets/maps/germany_states.geo.json';

function Maps() {
    const mapStyle = {
        height: '640px',
        width: '480px'
    };
    // const covidData = {
    //     'DE-BW': 637267,
    //     'DE-BY': 825707,
    //     'DE-BE': 225044,
    //     'DE-BB': 125353,
    //     'DE-HB': 35470,
    //     'DE-HH': 99067,
    //     'DE-HE': 356564,
    //     'DE-MV': 53588,
    //     'DE-NI': 329369,
    //     'DE-NW': 1016517,
    //     'DE-RP': 193819,
    //     'DE-SL': 49990,
    //     'DE-ST': 112902,
    //     'DE-SN': 321620,
    //     'DE-SH': 82287,
    //     'DE-TH': 153593
    // };

    const onEachState = (feature, layer) => {
        // console.log(feature);
    };

    return (
        <>
            <PageTitle>Maps</PageTitle>

            <div className="flex flex-row">
                <div className="bg-white rounded shadow-xl dark:bg-gray-800 dark:text-gray-300">
                    {/* Center is the lat lng value of the center of the country */}
                    {/* Zoom level was obtained by trial and error */}
                    {/* ref: https://leafletjs.com/examples/choropleth/ */}
                    <Map style={mapStyle} zoom={6} center={[51, 10]} zoomControl={false} minZoom={6} maxZoom={6}>
                        <GeoJSON data={mapData.features} onEachFeature={onEachState} />
                    </Map>
                </div>
                <div className="flex-1 bg-gray-800 text-gray-300 rounded shadow-xl dark:bg-gray-800 dark:text-gray-300 mx-4 px-4 py-2">
                    Should represent covid data
                </div>
            </div>
        </>
    );
}

export default Maps;
