class RESTAPI
{
    getAPIData(endPoint)
    {
        return new Promise((resolve, reject)=>{

            fetch(endPoint)
            .then(response=>response.json())
            .then(data=>{
    
                console.log(data)
                return data
            })
            .catch(()=>{console.log(`Error :${err}`)});

        })

    }
}

export default RESTAPI