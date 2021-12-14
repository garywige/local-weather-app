import { BehaviorSubject, Observable } from 'rxjs'
import { of } from 'rxjs'

import { ICurrentWeather } from '../interfaces'
import { Coordinates } from './coordinates'
import { IWeatherService } from './weather.service'

export const fakeWeather: ICurrentWeather = {
  city: 'Simi Valley',
  country: 'US',
  date: 1485789600,
  image: '',
  temperature: 280.32,
  description: 'light intensity drizzle',
}

export class WeatherServiceFake implements IWeatherService {
  readonly currentWeather$: BehaviorSubject<ICurrentWeather>

  constructor() {
    this.currentWeather$ = new BehaviorSubject<ICurrentWeather>({} as ICurrentWeather)
  }

  public getCurrentWeather(city: string, country: string): Observable<ICurrentWeather> {
    return of(fakeWeather)
  }

  public getCurrentWeatherByCoords(coords: Coordinates): Observable<ICurrentWeather> {
    return of(fakeWeather)
  }

  updateCurrentWeather(search: string | number, country?: string) {
    throw new Error('not implemented')
  }
}
