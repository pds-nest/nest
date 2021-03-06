import { getDistance } from "geolib"
import osmZoomLevels from "../utils/osmZoomLevels"
import Coordinates from "./Coordinates"
import { SerializationError } from "./Errors"


/**
 * An area on a map, defined by a `center` and a `radius` in meters.
 */
export default class MapArea {
    radius
    center

    /**
     * @param radius - The radius of the area in meters.
     * @param center - The center of the area.
     */
    constructor(radius, center) {
        this.radius = radius
        this.center = center
    }

    /**
     * Create a new {@link MapArea} from the [zoom level of OpenStreetMaps][1], assuming the window is
     * ~400 pixels large.
     *
     * [1]: https://wiki.openstreetmap.org/wiki/Zoom_levels
     *
     * @param zoom
     * @param center
     * @returns {MapArea}
     */
    static fromZoomLevel(zoom, center) {
        return new MapArea(osmZoomLevels[zoom], center)
    }

    static rawRegex = /^< (?<radius>[0-9.]+) (?<lat>[0-9.-]+) (?<lng>[0-9.-]+)$/

    static fromRaw(data) {
        const match = this.rawRegex.exec(data)

        if(!match) throw new SerializationError(data)

        const radius = Number(match.groups.radius)
        const lat = Number(match.groups.lat)
        const lng = Number(match.groups.lng)
        const center = new Coordinates(lat, lng)

        return new MapArea(radius, center)
    }

    /**
     * @returns {string}
     */
    toString() {
        return `< ${this.radius} ${this.center.toString()}`
    }

    /**
     * Render the {@link MapArea} as an human-readable string.
     *
     * @returns {string}
     */
    toHumanString() {
        if(this.radius >= 2000) {
            const kmRadius = Math.round(this.radius / 1000)
            return `< ${kmRadius}km ${this.center.toHumanString()}`
        }
        return `< ${this.radius}m ${this.center.toHumanString()}`
    }

    /**
     * Check if a pair of coordinates is included in the area.
     *
     * @param coords - The coordinates to check.
     * @returns {boolean}
     */
    includes(coords) {
        return getDistance(this.center.toGeolib(), coords.toGeolib()) <= this.radius
    }
}
