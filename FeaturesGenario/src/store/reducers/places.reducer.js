import {ADD_PLACE, LOAD_PLACE} from '../actions/places.actions';

import Place from '../../models/PlaceModels';

const initialState = {
  places: [],
};

export default (state = initialState, action) => {
  console.warn(action.payload);
  switch (action.type) {
    case ADD_PLACE:
      const place = new Place(
        action.payload.id.toString(),
        action.payload.title,
        action.payload.image,
        action.payload.address,
        action.payload.lat,
        action.payload.lng,
      );
      return {
        ...state,
        places: state.places.concat(place),
      };
    case LOAD_PLACE:
      console.log('places', action.places);
      return {
        ...state,
        places: action.places.map(item => {
          return new Place(
            item.id,
            item.title,
            item.image,
            item.address,
            item.lat,
            item.lng,
          );
        }),
      };
    default:
      return state;
  }
};
