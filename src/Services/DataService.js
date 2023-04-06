let userData = {};

async function createAccount(createdUser){
    const res = await fetch('https://blogbackendcodestack.azurewebsites.net/User/AddUser',{
     method:"POST",
     headers:{
       'Content-Type':"application/json"
     },
     body:JSON.stringify(createdUser)
    });
    if(!res.ok){
     const message = `An error has Occured ${res.status}`;
     throw new Error(message);
    }
    let data = await res.json();
    console.log(data);
 }



 async function login(loginUser){
  const res = await fetch('https://blogbackendcodestack.azurewebsites.net/User/Login',{
     method:"POST",
     headers:{
       'Content-Type':"application/json"
     },
     body:JSON.stringify(loginUser)
    });
    if(!res.ok){
     const message = `An error has Occured ${res.status}`;
     throw new Error(message);
    }
    let data = await res.json();
    console.log(data);
    return data;
 }


 async function GetLoggedInUserData(username){
    let res = await fetch(`https://blogbackendcodestack.azurewebsites.net/User/userbyusername/${username}`);
    let data =  await res.json();
    userData = data;
    console.log(userData)
    return userData;
 }

 async function GetPublishedBlogItem()
 {
   let res = await fetch('https://blogbackendcodestack.azurewebsites.net/blog/GetPublishedItems');
   let data = await res.json();
   return data;

 }

 function CheckToken(){
    let result = false;
    let lsData = localStorage.getItem('Token');
    if(lsData != null){
      result = true;
    }
    return result;
 } 

 function LoggedInData(){
  return userData;
 }

 async function addBlogItem(BlogItem){
  const res = await fetch('https://blogbackendcodestack.azurewebsites.net/blog/addblogitem',{
     method:"POST",
     headers:{
       'Content-Type':"application/json"
     },
     body:JSON.stringify(BlogItem)
    });
    if(!res.ok){
     const message = `An error has Occured ${res.status}`;
     throw new Error(message);
    }
    let data = await res.json();
    console.log(data);
    return data;
 }

 async function getBlogItemsByUserId(userId){
  let res = await fetch(`https://blogbackendcodestack.azurewebsites.net/blog/GetItemsByUserId/${userId}`);
  let data =  await res.json();
  userData = data;
  return data;
 }


 async function updateBlogItem(blogItem){
  const res = await fetch('https://blogbackendcodestack.azurewebsites.net/blog/UpdateBlogItem',{
     method:"POST",
     headers:{
       'Content-Type':"application/json"
     },
     body:JSON.stringify(blogItem)
    });
    if(!res.ok){
     const message = `An error has Occured ${res.status}`;
     throw new Error(message);
    }
    let data = await res.json();
    console.log(data);
    return data;
 }


 export { createAccount, login, GetLoggedInUserData, GetPublishedBlogItem, CheckToken, LoggedInData, addBlogItem, getBlogItemsByUserId, updateBlogItem}


