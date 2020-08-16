main =()=>
{
    const dropDownList=document.querySelector("#location")

    dropDownList.addEventListener("change", function(){
        const endPoint=`http://api.weatherstack.com/current?access_key=7a139abc67be15873497c6a4bfe3c49e&query=${dropDownList.value}`
        console.log(endPoint)

        //This code is used to get a response from the REST API.
        fetch(endPoint) //asynchronous 

       .then(response=>response.json())
       .then (data=>{

            const div = document.querySelector("#displayWeather");
            div.innerHTML=`The current temperature in ${dropDownList.value} is ${data.current.temperature}`;
            div.innerHTML+=`<br>The current weather description is ${data.current.weather_descriptions[0]} <br>`;
        
            //Dynamically created elements
            const weatherImg = document.createElement("img");
            weatherImg.setAttribute("src",data.current.weather_icons[0]);
            div.appendChild(weatherImg);// must append!

       })
       .catch(()=>{console.log(`Error :${err}`)});

        /*
        .then(function(response){

            response.json() // async operation 
            .then(function(data){

            const div = document.querySelector("#displayWeather");
            div.innerHTML=`The current temperature in ${dropDownList.value} is ${data.current.temperature}`;
            div.innerHTML+=`<br>The current weather description is ${data.current.weather_descriptions[0]} <br>`;
        
            //Dynamically created elements
            const weatherImg = document.createElement("img");
            weatherImg.setAttribute("src",data.current.weather_icons[0]);
            div.appendChild(weatherImg);// must append!
        
            })
            .catch(function(err){
                console.log(`Error :${err}`)
            })
        })
        .catch(function(err){
            console.log(`Error :${err}`)
        })
        */

    });
}
main();
