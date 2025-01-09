// bring the data
const bring_data=async()=>{
    const load_data=await fetch('https://openapi.programming-hero.com/api/ai/tools');
    const load_data_transform_in_js=await load_data.json();
    show_data(load_data_transform_in_js.data.tools)
}
const show_data=(loader_data)=>{
    console.log(loader_data)
    for(let data of loader_data){
        console.log(data)
    }

}

// call the data 
bring_data()