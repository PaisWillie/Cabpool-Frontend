type Taxi = {
  id: number;
  capacity: number;
};

type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  password: string;
  imageURL: string;
};

type TripPart = {
  numberOfPassengers: number;
  distance: number;
};

type UserTrip = {
  user: User;
  parts: TripPart[];
};

type CarpoolRide = {
  id: number;
  rides: UserTrip[];
  taxi: Taxi;
};

type CarpoolOffer = {
  id: number;
  dedicatedUser: User;
  taxi: Taxi;
};

type Rating = {
  id: number;
  user: User;
  author: User;
  rating: number;
  comment: string;
};

export type {Taxi, User, CarpoolRide, CarpoolOffer, Rating};
