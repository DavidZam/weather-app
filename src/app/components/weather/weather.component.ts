import { Component, inject } from '@angular/core';
import { WeatherRepository } from '../../repository/weather.repository';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [],
  providers: [WeatherRepository],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent {
  mainWeather = '';
  country = '';

  weatherRepository = inject(WeatherRepository);

  ngOnInit() {
    this.weatherRepository.getMainWeather().subscribe((weatherInformation: any) => {
      this.mainWeather = weatherInformation.mainWeather;
      this.country = weatherInformation.country;
    });
  }
}
