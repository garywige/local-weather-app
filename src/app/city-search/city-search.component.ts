import { Component } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'
import { debounceTime, filter, tap } from 'rxjs'

import { WeatherService } from '../weather/weather.service'

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.css'],
})
export class CitySearchComponent {
  search: FormControl

  constructor(private weatherService: WeatherService) {
    this.search = new FormControl('', [Validators.minLength(2), Validators.required])

    this.search.valueChanges
      .pipe(
        debounceTime(1000),
        filter(() => !this.search.invalid),
        tap((searchValue: string) => this.doSearch(searchValue))
      )
      .subscribe()
  }

  doSearch(searchValue: string) {
    const userInput = searchValue.split(',').map((s) => s.trim())

    this.weatherService.updateCurrentWeather(
      userInput[0],
      userInput.length > 1 ? userInput[1] : undefined
    )
  }
}
