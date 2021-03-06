/* SELECTORS */

export const getAllTrips = ({trips}) => trips;

export const getFilteredTrips = ({trips, filters}) => {
  let output = trips;

  // filter by search phrase
  if(filters.searchPhrase){
    const pattern = new RegExp(filters.searchPhrase, 'i');
    output = output.filter(trip => pattern.test(trip.name));
  }

  // TODO - filter by duration
  if(filters.duration){
    const pattern = new RegExp(filters.duration, 'i');
    output= output.filter (trip => pattern.test(trip.days));
  }
  // TODO - filter by tags
  if(filters.tags){
    const pattern = new RegExp(filters.tags, 'i');
    output = output.filter(trip => pattern.test(trip.tags));
  }

  // TODO - sort by cost descending (most expensive goes first)
  if(filters.cost >= 0){
    // const pattern = new RegExp(filters.cost, 'i');
    // output = output.filter(trip => pattern.test(trip.cost));
    output.sort(getFilteredTrips);
  } else if (filters.cost < 0)
  {
    return ('Error');
  }

  return output;
};

export const getTripById = ({trips}, tripId) => {
  let filtered = trips;

  // TODO - filter trips by tripId
  filtered = filtered.filter(function(trip) {
    return trip.id == trip.Id;
  });

  console.log('filtering trips by tripId:', tripId, filtered);
  return filtered.length ? filtered[0] : {error: true};
};

export const getTripsForCountry = ({trips}, countryCode) => {
  let filtered = trips;

  // TODO - filter trips by countryCode
  filtered = filtered.filter(function(trip) {
    return trip.country.code == countryCode;
  });

  console.log('filtering trips by countryCode:', countryCode, filtered);
  return filtered.length ? filtered : [{error: true}];
};

/* ACTIONS */

/*
// action name creator
const reducerName = 'trips';
const createActionName = name => `app/${reducerName}/${name}`;

// action types


// action creators


// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
 */
