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
        const bring_li_list=document.createElement('ol')
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
        <div onclick='show_details("${data.id}")' class="card bg-base-100 w-96 shadow-xl">
   <figure>
    <img
      src='${data?.image?data.image :"Data is not found"}'
      alt="Image is not found" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">Features</h2>
    
    <div class='list_container text-[#585858] text-sm '></div>
    <hr>
    
    <h1>${data.name}</h1>
    <div class='flex gap-2'>
    <img
          src="image/vector-illustration-red-calendar-icon_874723-223.avif"
          alt=""
          srcset=""
          class='w-4'
        />
    <P>${data.published_in}</p>
    </div>
    
    
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
// call the api of details part 
const show_details=async(id)=>{
  const bring_data=await fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`)
  const con_json=await bring_data.json()
  show_details_2(con_json.data)
}
// show the details part in my project 

const show_details_2=(details)=>{
  console.log(details)
  console.log("my pricing",details.pricing[0].price)
  my_modal_4.showModal()
  const find_container=document.getElementById('container_design')
  
  find_container.innerHTML=`
  <div class="flex justify-between gap-2 bg-[#FFFFFF]">
            <!-- first dib -->
            <div
              class="bg-[#EB57570D] p-8 w-[487px] border border-red-500 rounded-xl"
            >
              <div>
                <h1 class="text-[#111111] font-semibold text-2xl">
                  ${details.description}
                </h1>
                <!-- money dib -->
                <div class="grid grid-cols-3 gap-3">
                  <div class="bg-[#FFFFFF] p-3 rounded-xl text-sm">
                    <div class="text-center text-[#03A30A]">${details.pricing[0].price},</br>
                    ${details.pricing[0].plan}</div>
                  </div>
                  <div class="bg-[#FFFFFF] p-3 rounded-xl">
                    <div class="text-center text-[#F28927]">${details.pricing[1].price},</br>
                    ${details.pricing[1].plan} </div>
                  </div>
                  <div class="bg-[#FFFFFF] p-3 rounded-xl">
                    <div class="text-center text-[#EB5757]">${details.pricing[2].price},</br>
                    ${details.pricing[2].plan}</div>
                  </div>
                </div>
                <!-- features and integration -->
                <div class="flex justify-between gap-8">
                  <!-- features -->
                  <div>
                    <h3 class="text-black font-medium text-xl">Features</h3>
                    <ul>
                      <li>${details.features[1]?.feature_name}</li>
                      <li>${details.features[2]?.feature_name} </li>
                      <li>${details.features[3]?.feature_name} </li>
                    </ul>
                  </div>
                  <!-- integration -->
                  <div>
                    <h3 class="text-black font-medium text-xl">Integrations</h3>
                    <ul>
                      <li>${details.integrations[0]}</li>
                      <li>${details.integrations[1]}</li>
                      <li>${details.integrations[2]} </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <!-- second dib -->
            <div
              class="bg-[#E7E7E7FF] p-4 w-[487px] border border-white rounded-xl"
            >
              <div class="flex justify-center">
                <div  class="static ...">
               <div class="relative">
               <div class='absolute right-0 top-0' > <p class='text-white bg-[#EB5757] p-2 w-32 rounded-xl '>${details.accuracy.score} accuracy</p></div>
               
               </div>
               <div class="static ...">
               <img
                    class="w-[437px] rounded-xl"
                    src="${details.image_link[0]}"
                    alt=""
                    srcset=""
                  />
               </div>

                  
                </div>
              </div>
              <h2 class="text-center text-[#111111] font-semibold text-2xl">
                ${details.input_output_examples[0].input}
              </h2>
              <p class="text-center text-sm text-[#585858]">
              ${details.input_output_examples[0].output}
                </p>
              </p>
            </div>
          </div>
  
  `
  

}
// call the data 
bring_data()
