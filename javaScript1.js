
const button=document.querySelector(".button");
const input=document.querySelector(".searchInput");
const arr=["clear","clouds","drizzle","haze","humidity","mist","rain","snow","wind"];

const checkWeather =async function(city){
    try{
        input.placeholder="enter city";
        const url="https://api.openweathermap.org/data/2.5/weather?&units=metric&appid=";
        const api_key="3a380aee191b035de423911469948981";
        var place=`&q=${city}`;
        const response=await fetch(url+api_key+place);
        
        
        var data=await response.json();
        console.log(data);
        
        let climate=data.weather[0].main.toLowerCase();
        let temperature=Math.round(data.main.temp);
        let windSpeed=Math.round(data.wind.speed*3.6);
        let hmdt=data.main.humidity;
        //if(a.includes(climate))
        if(arr.some(a=>a.toLowerCase()===climate.toLowerCase())){
            document.querySelector("#climate").src=`images/${climate}.png`;
        }else{
            document.querySelector("#climate").src="images/haze.png";
        }
        document.querySelector(".city").innerHTML=city;
        document.querySelector(".temp").innerHTML=temperature+"°C";
        document.querySelector(".wind").innerHTML=windSpeed+"km/h";
        document.querySelector(".humidity").innerHTML=hmdt+"%";
        document.querySelector(".isClimate").innerHTML=climate;
    }
    catch(e){
        input.placeholder="enter correct city";
    }
}


checkWeather("bangalore");

button.addEventListener("click",()=>{
    if(input.value!==""){
        checkWeather(input.value);
        input.value="";
    }
})
