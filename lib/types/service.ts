export type ServiceTime = {
  name: string;
  time: string;
  location: string;
};

export type ServiceTimesData = {
  intro?: string;
  services: ServiceTime[];
};
