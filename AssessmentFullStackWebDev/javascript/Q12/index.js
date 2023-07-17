const url="https://jsonplaceholder.typicode.com/posts";
function Getdata()
{
    fetch(url)
        .then((response)=>response.json())
        .then((data)=>{
            for(const post of data)
            {
                let divElement=document.createElement("div");
                divElement.id="div"+post.id;
                divElement.classList.add("w-1/4","m-3","sm:m-6","xl:m-12","bg-orange-200");
                let hElement=document.createElement("h2");
                hElement.classList.add("text-xl","font-bold","p-5","bg-orange-500");
                let pElement=document.createElement("p");
                pElement.classList.add("p-5");
                let btnDelete=document.createElement("button");
                btnDelete.classList.add("border","rounded","bg-amber-400","pl-2","pr-2","mt-5","ml-5","mb-2");
                btnDelete.addEventListener("click",()=>{deleteData(post.id)});
                btnDelete.id="btnDel"+post.id;
                divElement.appendChild(hElement);
                divElement.appendChild(pElement);
                divElement.appendChild(btnDelete);
                hElement.innerText=post.title;
                pElement.innerText=post.body;
                btnDelete.innerText="Delete";
                document.getElementById("blogposts").appendChild(divElement);
            }
        })
        .catch((error)=>console.log(error))
}
function saveData()
{
    let txtTitle=document.getElementById("txtTitle").value;
    let txtDesc=document.getElementById("txtDesc").value; 
    fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            title: txtTitle,
            body: txtDesc,
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
  .then((response) => response.json())
  .then((json) =>{ 
        console.log(json); 
        let divElement=document.createElement("div");
        divElement.id="div"+json.id;
        divElement.classList.add("w-1/4","m-3","sm:m-6","xl:m-12","bg-orange-200");
        let hElement=document.createElement("h2");
        hElement.classList.add("text-xl","font-bold","p-5","bg-orange-500");
        let pElement=document.createElement("p");
        pElement.classList.add("p-5");
        let btnDelete=document.createElement("button");
        btnDelete.classList.add("border","rounded","bg-amber-400","pl-2","pr-2","mt-5","ml-5","mb-2");
        btnDelete.addEventListener("click",()=>{deleteData(json.id)});
        btnDelete.id="btnDel"+json.id;
        divElement.appendChild(hElement);
        divElement.appendChild(pElement);
        divElement.appendChild(btnDelete);
        hElement.innerText=json.title;
        pElement.innerText=json.body;
        btnDelete.innerText="Delete";
        document.getElementById("blogposts").appendChild(divElement);
        alert("Blog post saved successfully!")});
        document.getElementById("divNewpost").classList.add("hidden");
}
function deleteData(postnum)
{    
    const consent= confirm("Are you sure you want to delete this blog post?");
    if(consent)
    {
        const delurl=url+"/"+postnum;
        const btnDel="btnDel"+postnum;
        fetch(delurl, {
            method: 'DELETE',
        });
        document.getElementById(btnDel).parentElement.remove();
    }
}
function show()
{
    document.getElementById("divNewpost").classList.remove("hidden");
}
