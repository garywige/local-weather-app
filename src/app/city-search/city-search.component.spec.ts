import { ComponentFixture, TestBed } from '@angular/core/testing'

import { WeatherService } from '../weather/weather.service'
import { WeatherServiceFake } from '../weather/weather.service.fake'
import { CitySearchComponent } from './city-search.component'

describe('CitySearchComponent', () => {
  let component: CitySearchComponent
  let fixture: ComponentFixture<CitySearchComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CitySearchComponent],
      providers: [
        {
          provide: WeatherService,
          useClass: WeatherServiceFake,
        },
      ],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(CitySearchComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
