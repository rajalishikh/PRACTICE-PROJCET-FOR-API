// bring the data
const bring_data=async()=>{
    const load_data=await fetch('https://openapi.programming-hero.com/api/ai/tools');
    const load_data_transform_in_js=await load_data.json();
    show_data(load_data_transform_in_js.data.tools)
}
const show_data=(loader_data)=>{
    loader_data=loader_data.slice(0,6)
    
    const find_container=document.getElementById('main_container')
    for(let data of loader_data){
        
        console.log("loaded data",data);
        const create_container2=document.createElement('div')
        create_container2.innerHTML=`
        <div class="card bg-base-100 w-96 shadow-xl">
  
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
  </div>
</div>
        `
        find_container.appendChild(create_container2)

    }

}

// call the data 
bring_data()