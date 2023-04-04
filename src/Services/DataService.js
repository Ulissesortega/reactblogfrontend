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
 }

 async function GetPublishedBlogItem()
 {
   let res = await fetch('https://blogbackendcodestack.azurewebsites.net/blog/GetPublishedItems');
   let data = await res.json();
   return data;

 }




 export { createAccount, login, GetLoggedInUserData, GetPublishedBlogItem}


