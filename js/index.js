
let months=['Jan','Feb','March','April','May','June','July','August','Sep','Oct','Nov','Dec']
let countryWeather;
let srchWeather =document.getElementById('srchWeather')
let  body=document.getElementById('body')
async function weatherApi(term){

let weatherData= await fetch (`https://api.weatherapi.com/v1/forecast.json?key=d9d0478ec9fb44b68af30943230708&q=${term}&days=3&aqi=no&alerts=no`)
countryWeather= await weatherData.json()
console.log(countryWeather);
}




srchWeather.addEventListener('input', async function(){

  
if (this.value.length >2) {
  await weatherApi(this.value)
  let month= countryWeather.forecast.forecastday[0].date[5]+countryWeather.forecast.forecastday[0].date[6]
  let day=countryWeather.forecast.forecastday[0].date[8]+countryWeather.forecast.forecastday[0].date[9]
  
  console.log(Number (day));
  var cartona=`
  <div class="col-md-4">
         <div class="d-flex justify-content-center cardhead px-2 py-2">
        
           <div class="text-light"><span> ${Number(day)}</span> ${months[Number (month)- 1]}</div>
         </div>
         <div class="px-2 cardbody">
           <div class="py-3 fs-3 text-light">${countryWeather.location.name}</div>
           <div class="wdeg text-light d-flex justify-content-between">
             <div class="wdeg">${countryWeather.forecast.forecastday[0].day.maxtemp_c}</div>
             <div><img class="w-100" src="https://${countryWeather.current.condition.icon}" alt=""></div>
           </div>
           <Span class="text-info">${countryWeather.forecast.forecastday[0].day.condition.text}</Span>
           <div class="py-3 w-75 d-flex justify-content-between">
             <span class="text-light"><img src="images/icon-umberella.png" alt=""> 20%</span>
             <span class="text-light"><img src="images/icon-wind.png" alt=""> 18km/h</span>
             <span class="text-light"><img src="images/icon-compass.png" alt=""> East</span>
           </div>
         </div>
       </div>

       <div class="col-md-4">
         <div>
         <div class="text-center cardhead2 px-2 py-2">
           <div class="text-light"><span> ${Number(day)+1}</span> ${months[Number (month)- 1]}</div>
           
         </div>
         <div class="px-2 cardbody2 text-center py-5">
           <div class="pb-3"><img src="https://${countryWeather.forecast.forecastday[1].day.condition.icon}" alt=""></div>
           <div class="py-3">
           <div class="text-white fs-3 fw-bold">${countryWeather.forecast.forecastday[1].day.maxtemp_c}</div>
           <div class="text-light">${countryWeather.forecast.forecastday[1].day.mintemp_c}</div>
         </div>
           <Span class="text-info">${countryWeather.forecast.forecastday[1].day.condition.text}</Span>
          
         </div>
       </div>
       </div>


       <div class="col-md-4 ">
         <div>
         <div class="text-center cardhead3 px-2 py-2">
           <div class="text-light">${Number(day)+2}</span> ${months[Number (month)- 1]}</div>
           
         </div>
         <div class="px-2 cardbody3 text-center py-5">
           <div class="pb-3"><img src="https://${countryWeather.forecast.forecastday[2].day.condition.icon}" alt=""></div>
           <div class="py-3">
           <div class="text-white fs-3 fw-bold">${countryWeather.forecast.forecastday[2].day.maxtemp_c}</div>
           <div class="text-light">${countryWeather.forecast.forecastday[2].day.mintemp_c}</div>
         </div>
           <Span class="text-info">${countryWeather.forecast.forecastday[2].day.condition.text}</Span>
          
         </div>
       </div>
       </div>
`
   

  body.innerHTML=cartona
  console.log(month)
  
}
 


})

  


 


