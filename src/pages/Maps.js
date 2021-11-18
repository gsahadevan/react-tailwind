import React, {useState} from 'react';
import {Map, GeoJSON, Marker, Tooltip} from 'react-leaflet';
import PageTitle from '../components/Typography/PageTitle';
import mapData from '../assets/maps/germany.geo.json';
import mapDataStates from '../assets/maps/germany_states.geo.json';
import mapDataDistricts from '../assets/maps/germany_districts.geo.json';
import mapDataCounties from '../assets/maps/germany_counties.geo.json';
import worldMap from '../assets/maps/world.geo.json';
import MapsD3 from '../components/MapsD3';
import SectionTitle from '../components/Typography/SectionTitle';
import WorldMap from '../components/MapsD3/WorldMap';

function Maps() {
    const [property, setProperty] = useState('pop_est');
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
        // console.log(layer);
    };

    const handleMoveEnd = () => {
        console.log('move end');
    };

    const onClick = (e) => {
        console.log(e);
    };

    return (
        <>
            <PageTitle>Maps</PageTitle>
            <div className="flex items-stretch space-x-4">
                <div className="w-1/3">
                    <div className="bg-white rounded shadow-xl dark:bg-gray-800 dark:text-gray-300 p-4">
                        <p className="mb-4 font-semibold text-gray-800 dark:text-gray-300">D3 - Germany</p>
                        <MapsD3 mapData={mapDataStates.features} />
                    </div>
                </div>
            </div>

            <div className="flex flex-row my-5">
                    <div className="bg-white rounded shadow-xl dark:bg-gray-800 dark:text-gray-300 p-4">
                        <p className="mb-4 font-semibold text-gray-800 dark:text-gray-300">D3 - World Map</p>
                        <WorldMap data={worldMap} property={property} />
                        <h2>Select property to highlight</h2>
                        <select value={property} onChange={(event) => setProperty(event.target.value)}>
                            <option value="pop_est">Population</option>
                            <option value="name_len">Name length</option>
                            <option value="gdp_md_est">GDP</option>
                        </select>
                    </div>
            </div>

            <SectionTitle>React Leaflet</SectionTitle>
            <div className="flex flex-row my-5">
                <div className="bg-white rounded shadow-xl dark:bg-gray-800 dark:text-gray-300">
                    {/* Center is the lat lng value of the center of the country */}
                    {/* Zoom level was obtained by trial and error */}
                    {/* ref: https://leafletjs.com/examples/choropleth/ */}
                    <Map
                        style={mapStyle}
                        center={[51, 10]}
                        zoom={6}
                        minZoom={6}
                        maxZoom={6}
                        zoomControl={false}
                        doubleClickZoom={false}
                        dragging={false}
                        tap={false}
                        attributionControl={false}
                        onMoveEnd={handleMoveEnd}
                        onEachFeature={onEachState}
                        onclick={onClick}
                    >
                        <GeoJSON data={mapDataStates.features} onEachFeature={onEachState} />
                        {/* <Marker position={[52, 13]}>
                            <Tooltip>I appear on mouse over</Tooltip>
                        </Marker> */}
                    </Map>
                </div>
                <div className="flex-1 bg-gray-800 text-gray-300 rounded shadow-xl dark:bg-gray-800 dark:text-gray-300 ml-4 px-4 py-2">
                    Should represent covid data
                </div>
            </div>
        </>
    );
}

export default Maps;
