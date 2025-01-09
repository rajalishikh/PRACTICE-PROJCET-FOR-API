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

        // running loop for show  features
        const bring_li_list=document.createElement('ul')
       for(let x of data.features){
            console.log(x)
           
            const create_li=document.createElement('li')
            create_li.innerText=x;
            bring_li_list.appendChild(create_li)
           
        }
         // ending loop for show  features
        console.log("loaded data",data);
        const create_container2=document.createElement('div')
        create_container2.innerHTML=`
        <div class="card bg-base-100 w-96 shadow-xl">
   <figure>
    <img
      src='${data?.image?data.image :"Data is not found"}'
      alt="Image is not found" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">Features</h2>
    // dynamic list container start 
    <div class='list_container text-[#585858] text-sm'></div>
    // dynamic list container End
    <p>If a dog chews shoes whose shoes does he choose?</p>
  </div>
</div>
        `
        // appending part
        // now I understand where should I use query and getElement
        const find_li_container=create_container2.querySelector('.list_container')
        find_li_container.appendChild(bring_li_list)
        find_container.appendChild(create_container2)

    }

}

// call the data 
bring_data()