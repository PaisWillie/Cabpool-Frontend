import {CarpoolRide, User} from '../types/Types';

const CalculateFare = () => {
  // TODO: Implement
};

const CalculateTotalDistance = (
  carpoolRide: CarpoolRide,
  user: User,
): number => {
  const userTrip = carpoolRide.rides.find(ride => ride.user.id === user.id);
  return (
    userTrip?.parts.reduce((total, part) => total + part.distance, 0) ?? -1
  );
};

export {CalculateFare, CalculateTotalDistance};
