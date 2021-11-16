import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'weather-details',
  templateUrl: './weatherDetails.component.html',
  styleUrls: ['./weatherDetails.component.scss']
})

export class WeatherDetails implements OnInit {
  @Input() weatherData: data[];
  // temperature: string;
  // wind: string; 
  // humidity: string;
  noResult: string;
  result:any;
  city: string;
  notMatched: boolean=true;
  matched: boolean=true;


  ngOnInit() {
  
    
  }
  onChange() {
    /****fisrt solution ****

   switch(this.city.toLowerCase()) {
     case "san jose": {
      this.notMatched=false;
      this.temperature = this.weatherData[0]["temperature"];
      this.wind = this.weatherData[0]["wind"];
      this.humidity = this.weatherData[0]["humidity"];
      break;
     }
     case "seattle": {
      this.notMatched=false;
      this.temperature = this.weatherData[1]["temperature"];
      this.wind = this.weatherData[1]["wind"];
      this.humidity = this.weatherData[1]["humidity"];
      break;
     }
     case "seatle": {
      this.notMatched=false;
      this.temperature = this.weatherData[1]["temperature"];
      this.wind = this.weatherData[1]["wind"];
      this.humidity = this.weatherData[1]["humidity"];
      break;
     }
     case "new york": {
      this.notMatched=false;
      this.temperature = this.weatherData[2]["temperature"];
      this.wind = this.weatherData[2]["wind"];
      this.humidity = this.weatherData[2]["humidity"];
      break;
     }
     case "chicago": {
      this.notMatched=false;
      this.temperature = this.weatherData[3]["temperature"];
      this.wind = this.weatherData[3]["wind"];
      this.humidity = this.weatherData[3]["humidity"];
      break;
     }
     case "atlanta": {
      this.notMatched=false;
      this.temperature = this.weatherData[4]["temperature"];
      this.wind = this.weatherData[4]["wind"];
      this.humidity = this.weatherData[4]["humidity"];
      break;
     }
     case "austin": {
      this.notMatched=false;
      this.temperature = this.weatherData[5]["temperature"];
      this.wind = this.weatherData[5]["wind"];
      this.humidity = this.weatherData[5]["humidity"];
      break;
     }
     case "denver": {
      this.notMatched=false;
      this.temperature = this.weatherData[6]["temperature"];
      this.wind = this.weatherData[6]["wind"];
      this.humidity = this.weatherData[6]["humidity"];
      break;
     }
     
     

     default:{
       this.notMatched=true;
       this.noResult="No Results Found";
       break;

     }
   }
*/
   /***improved solution *******************  **/
   //on doit parcourir et chercher dans la tablel weatherdat le nom de la ville entré dan sle champ 

this.result = this.weatherData.find( cityInformation => cityInformation.name.toLowerCase() == this.city.toLowerCase()


  )
 
  if (this.result) {
    this.matched = true;
    // this.temperature = this.result.temperature;
    //   this.wind = this.result.wind;
    //   this.humidity = this.result.humidity;
   

  }
  else {
   
    this.matched = false
    this.noResult = "No Results Found";
  }

}
  

  

}

interface data {
  name: string;
  temperature: string;
  wind: string;
  humidity: string;
}