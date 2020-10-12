import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import mapMarkerImg from '../images/map-marker.svg';
import '../styles/pages/orphanage-map.css';

/*
https://docs.mapbox.com/api/maps/#styles
Mapbox styles:
    mapbox://styles/mapbox/streets-v11
    mapbox://styles/mapbox/outdoors-v11
    mapbox://styles/mapbox/light-v10
    mapbox://styles/mapbox/dark-v10
    mapbox://styles/mapbox/satellite-v9
    mapbox://styles/mapbox/satellite-streets-v11
*/
//const myMap = "https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"; 
const myMap = `https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`; 

function OrphanagesMap() {
    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Map Marker"/>
                    <h2>Escolha um orfanato no mapa.</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Campo Mourão -</strong>
                    <span>Paraná</span>
                </footer>
            </aside>

            <Map 
                center={[-24.0427725,-52.461213]}
                zoom={10}
                style={{ width: '100%', height: '100%' }}
            >
                {/*<TileLayer url=/>*/}
                <TileLayer 
                  url={myMap} 
                />
            
            </Map>


            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#FFF" />
            </Link>
        </div>
        
    );
};

export default OrphanagesMap;

