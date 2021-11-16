import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'weather-details',
  templateUrl: './weatherDetails.component.html',
  styleUrls: ['./weatherDetails.component.scss']
})

export class WeatherDetails implements OnInit {
  @Input() weatherData: data[];
  temperature: string;
  wind: string; 
  humidity: string;
  noResult: string;
  city: string;
  notMatch: boolean=true;

  ngOnInit() {
  
    
  }
  onChange() {

    /****fisrt solution ****
   switch(this.city.toLowerCase()) {
     case "san jose": {
      this.notMatch=false;
      this.temperature = this.weatherData[0]["temperature"];
      this.wind = this.weatherData[0]["wind"];
      this.humidity = this.weatherData[0]["humidity"];
      break;
     }
     case "seatle": {
      this.notMatch=false;
      this.temperature = this.weatherData[1]["temperature"];
      this.wind = this.weatherData[1]["wind"];
      this.humidity = this.weatherData[1]["humidity"];
      break;
     }
     case "seatle": {
      this.notMatch=false;
      this.temperature = this.weatherData[1]["temperature"];
      this.wind = this.weatherData[1]["wind"];
      this.humidity = this.weatherData[1]["humidity"];
      break;
     }
     case "new york": {
      this.notMatch=false;
      this.temperature = this.weatherData[2]["temperature"];
      this.wind = this.weatherData[2]["wind"];
      this.humidity = this.weatherData[2]["humidity"];
      break;
     }
     case "chicago": {
      this.notMatch=false;
      this.temperature = this.weatherData[3]["temperature"];
      this.wind = this.weatherData[3]["wind"];
      this.humidity = this.weatherData[3]["humidity"];
      break;
     }
     case "atlanta": {
      this.notMatch=false;
      this.temperature = this.weatherData[4]["temperature"];
      this.wind = this.weatherData[4]["wind"];
      this.humidity = this.weatherData[4]["humidity"];
      break;
     }
     case "austin": {
      this.notMatch=false;
      this.temperature = this.weatherData[5]["temperature"];
      this.wind = this.weatherData[5]["wind"];
      this.humidity = this.weatherData[5]["humidity"];
      break;
     }
     case "denver": {
      this.notMatch=false;
      this.temperature = this.weatherData[6]["temperature"];
      this.wind = this.weatherData[6]["wind"];
      this.humidity = this.weatherData[6]["humidity"];
      break;
     }
     
     

     default:{
       this.notMatch=true;
       this.noResult="No Results Found";
       break;

     }
   }
   **/
   
  }

  

}

interface data {
  name: string;
  temperature: string;
  wind: string;
  humidity: string;
}