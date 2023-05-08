const itemsPerPage = 8;
let currentPage = 1;
function pagenum(num){
    table(num)
}
async function table(page) {
    //call for get to the url:
    let response = await fetch('http://localhost:3001/warehouse/watchItemForStatus?STATUS=IN', {
        //Get
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    //get data from backend response as json!
    let body = await response.json()

    // (C1) GET THE SOURCE & DESTINATION ELEMENTS
    var d = document.getElementById("12item");

const startIndex = (page - 1) * itemsPerPage;
const endIndex = startIndex + itemsPerPage;
const paginatedItems = body.slice(startIndex, endIndex);
console.log(itemsPerPage);
d.innerHTML = '';

paginatedItems.forEach((item) => {
  const itemHtml = `
    <div class="col-xl-3 col-sm-6">
      <div class="card">
        <div class="card-body">
          <div class="dropdown float-end">
          <a class="text-muted dropdown-toggle font-size-16" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true"><i class="bx bx-dots-horizontal-rounded"></i></a>
          <div class="dropdown-menu dropdown-menu-end"><a class="dropdown-item" href="#">עריכה</a><a class="dropdown-item" href="#">הסרה</a></div>
      </div>
      <div class="d-flex align-items-center">
          <div><img src="" alt="" class="avatar-md rounded-circle img-thumbnail" /></div>
          <div class="flex-1 ms-3">
              <h5 class="font-size-16 mb-1" id = "name-item"><a href="#" class="text-dark">${item[0]}</a></h5>
              <span class="badge badge-soft-success mb-0" id = "cat">${item[2]}</span>
          </div>
      </div>
      <div class="mt-3 pt-1">
          <p class="text-muted mb-0" id = "status"><i class=" font-size-15 align-middle pe-2 text-primary"></i>זמין</p>
          <p class="text-muted mb-0 mt-2" id = "amount"><i class=" font-size-15 align-middle pe-2 text-primary"></i> ${item[1]}</p>
          <p class="text-muted mb-0 mt-2" id = "s-num"><i class=" font-size-15 align-middle pe-2 text-primary"></i>${item[4]}</p>
          <p class="text-muted mb-0 mt-2" id = "side"><i class=" font-size-15 align-middle pe-2 text-primary"></i>${item[3]}</p>

      </div>
      <div class="d-flex gap-2 pt-4">
          <button type="button" class="btn btn-danger " id = "safe">הוראות בטיחות</button>
          <button type="button" class="btn btn-primary "> השאלה</button>
      </div>
        </div>
      </div>
    </div>`
    d.innerHTML += itemHtml;
});
}

async function nextpage(){
    //call for get to the url:
    let response = await fetch('http://localhost:3001/warehouse/watchItemForStatus?STATUS=IN', {
        //Get
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    //get data from backend response as json!
    let body = await response.json()

    document.getElementById("size").innerText = "("+body.length+")"; 
    //if I dont get a variable called data from the back, something is wrong!
    let tot = Math.ceil(body.length/itemsPerPage);
    for(let i = 0 ; i <tot ;i++){
        const pageitemjtml = `<li class="page-item" onclick = "pagenum(${i+1})"><a href="#" class="page-link">${i+1}</a></li>`
        document.getElementById("pagenum").innerHTML += pageitemjtml
    }
}
nextpage();
table(currentPage);