import React from "react"
import Style from "./BoxMap.module.css"
import BoxFull from "./BoxFull"
import { MapContainer, TileLayer } from "react-leaflet"


export default function BoxMap({ header, setMap, startingPosition, startingZoom, button, children, additions, ...props }) {
    return (
        <BoxFull
            header={header}
            childrenClassName={Style.BoxMapContents}
            {...props}
        >
            <MapContainer
                center={startingPosition}
                zoom={startingZoom}
                className={Style.MapContainer}
                whenCreated={setMap}
            >
                <TileLayer
                    attribution='(c) <a href="https://osm.org/copyright">OpenStreetMap contributors</a>'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {additions}
                <div className={"leaflet-top leaflet-right"}>
                    <div className={"leaflet-control"}>
                        {button}
                    </div>
                </div>
            </MapContainer>
        </BoxFull>
    )
}