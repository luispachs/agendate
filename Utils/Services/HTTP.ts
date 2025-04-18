async function GET(url:string,body:object,secure:boolean = false)
{
    let config:HTTPConfiguration= {
        method:"GET",
        body: JSON.stringify(body),
        headers:{
            "Content-Type":"application/json"
        }
    }
    if(secure){
        config.headers.Authorization = `Bearer ${sessionStorage.getItem("UUID")}`
    }
    
    let response= await fetch(url,config)
    return await  response.json();

}
async function POST(url:string,body:object,secure:boolean = false){
    let config:HTTPConfiguration= {
        method:"POST",
        body: JSON.stringify(body),
        headers:{
            "Content-Type":"application/json"
        }
    }

    if(secure){
        config.headers.Authorization = `Bearer ${sessionStorage.getItem("UUID")}`
    }
    
    let response= await fetch(url,config)
    return await response.json();
}
async function DELETE(url:string,body:object,secure:boolean = false){
    let config:HTTPConfiguration= {
        method:"DELETE",
        body: JSON.stringify(body),
        headers:{
            "Content-Type":"application/json"
        }
    }
    if(secure){
        config.headers.Authorization = `Bearer ${sessionStorage.getItem("UUID")}`
    }
    
    let response= await fetch(url,config)
    return response.json();
}
async function PUT(url:string,body:object,secure:boolean = false){
    let config:HTTPConfiguration= {
        method:"PUT",
        body: JSON.stringify(body),
        headers:{
            "Content-Type":"application/json"
        }
    }
    if(secure){
        config.headers.Authorization = `Bearer ${sessionStorage.getItem("UUID")}`
    }

    let response= await fetch(url,config)
    return await response.json();
}


export {GET,POST,DELETE,PUT}