var ProductName=document.getElementById("productName");
var productcount=document.getElementById("productcount");
var productlocation=document.getElementById("productlocation");
var productDesc=document.getElementById("productDesc");

var productsContaner;
if(localStorage.getItem("drugsList") === null)
{
    productsContaner =[];
}
else
{
    productsContaner=JSON.parse(localStorage.getItem("drugsList"));
    displayProducts();
}
function addProduct()
{
        var product=
        {
            name:ProductName.value,
            count:productcount.value,
            Location:productlocation.value,
            Desc:productDesc.value
        };
        productsContaner.push(product);
        localStorage.setItem("drugsList",JSON.stringify(productsContaner));
        clearform();
        displayProducts();
   
    
}
function clearform()
{
    ProductName.value="";
    productlocation.value='';
    productcount.value='';
    productDesc.value='';
}

function displayProducts()
{
    var cartoona=``;
    for (var i=0;i<productsContaner.length;i++)
    {
        cartoona+=`<tr>
        <td>` + i + `</td>
        <td>` + productsContaner[i].name + `</td>
        <td>${productsContaner[i].count}</td>
        <td>${productsContaner[i].Location}</td>
        <td>${productsContaner[i].Desc}</td>
        <td><button onclick="updateproduct(${i})" class="btnU btnColorUpdate">Update</button></td>
        <td><button onclick="deleteProducts(${i})" class="btnD btnColorDelete">Delete</button></td>
        </tr>`
    }
    document.getElementById('tableBody').innerHTML=cartoona;
}



function chickEmpity()
{
    if(ProductName.value ==="" || productPrice.value === "" || productlocation.value === "" || productDesc.value ==="")
    {
        return true;
    }
    else
    {
        return false;
    }
}



function deleteProducts(index) {
    productsContaner.splice(index , 1);
    displayProducts();
    localStorage.setItem("drugsList", JSON.stringify(productsContaner));
  }




function searchProduct(searchTerm)
{
    var cartoona=``;
    for(var i=0 ;i<productsContaner.length;i++)
    {
        
        if(productsContaner[i].name.toLowerCase().includes(searchTerm.toLowerCase()))
        {
            cartoona+=`<tr>
        <td>` + i + `</td>
        <td>` + productsContaner[i].name + `</td>
        <td>${productsContaner[i].count}</td>
        <td>${productsContaner[i].Location}</td>
        <td>${productsContaner[i].Desc}</td>
        <td><button onclick="updateproduct(${i})" class="btnU btnColorUpdate">Update</button></td>
        <td><button onclick="deleteProducts(${i})" class="btnD btnColorDelete">Delete</button></td>
        </tr>`
        }
    }
    document.getElementById('tableBody').innerHTML=cartoona;
}


var btnA=document.getElementById("btnA");
var currentIndex=-1;
function updateproduct(index) {
    currentIndex = index; 
    ProductName.value = productsContaner[index].name;
    productcount.value = productsContaner[index].count;
    productlocation.value = productsContaner[index].Location;
    productDesc.value = productsContaner[index].Desc;
    btnA.innerHTML = "Update Product";
}

btnA.addEventListener('click', function() {
    if (currentIndex === -1) {
        addProduct();
    } else {
        saveUpdate(currentIndex);
    }
});

function saveUpdate(index)
{
    productsContaner[index].name=ProductName.value;
    productsContaner[index].count=productcount.value;
    productsContaner[index].Location=productlocation.value;
    productsContaner[index].Desc=productDesc.value;
    localStorage.setItem("drugsList", JSON.stringify(productsContaner));
    displayProducts();
    clearform();
    btnA.innerHTML = "Add Product"; 
    currentIndex = -1;
}

