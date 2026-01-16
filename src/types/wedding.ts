export interface WeddingDetails {
  groom: {
    fullName: string;
    father: string;
    mother: string;
  };
  bride: {
    fullName: string;
    father: string;
    mother: string;
  };
  event: {
    date: Date;
    time?: string;
    venue: {
      name: string;
      address: string;
      mapLink?: string;
    };
  };
}
