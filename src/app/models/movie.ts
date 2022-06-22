export interface Movie {
  id: string;
  titleType: string;
  primaryTitle: string;
  originalTitle: string;
  isAdult: boolean;
  startYear: number;
  endYear?: number;
  runtimeMinutes?: number;
  genres?: string;
}