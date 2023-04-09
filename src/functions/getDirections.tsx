import {decode} from '@mapbox/polyline';
import Config from 'react-native-config';
import {coordinates} from '../types/MapsTypes';

const getDirections = async (
  startLoc: string,
  destinationLoc: string,
): Promise<coordinates> => {
  try {
    const KEY = Config.GOOGLE_MAPS_API_KEY;
    let resp = await fetch(
      `https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc}&destination=${destinationLoc}&key=${KEY}`,
    );
    if (resp.status !== 200) {
      console.log(resp.status);
      return [];
    }
    let respJson = await resp.json();

    let points = decode(respJson.routes[0].overview_polyline.points);
    let coords = points.map((point, _) => {
      return {
        latitude: point[0],
        longitude: point[1],
      };
    });
    return coords;
  } catch (error: any) {
    return error;
  }
};

export default getDirections;
