var ProductName=document.getElementById("productName");
var productcount=document.getElementById("productcount");
var productlocation=document.getElementById("productlocation");
var productDesc=document.getElementById("productDesc");

var productsContaner;
if(localStorage.getItem("productList") == null)
{
    productsContaner =[];
}
else
{
    productsContaner=JSON.parse(localStorage.getItem("productList"));
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
        localStorage.setItem("productList",JSON.stringify(productsContaner));
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
        <td><button class="btnU btnColorUpdate">Update</button></td>
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
    localStorage.setItem("productList", JSON.stringify(productsContaner));
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
        <td><button class="btnU btnColorUpdate">Update</button></td>
        <td><button onclick="deleteProducts(${i})" class="btnD btnColorDelete">Delete</button></td>
        </tr>`
        }
    }
    document.getElementById('tableBody').innerHTML=cartoona;
}




