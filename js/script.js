// dummy data
// const posts = [
//     {
//         title : "this is title 1",
//         body : "this is body1",
//         id :1
//     },
//     {
//         title : "this is title 2",
//         body : "this is body2",
//         id :2
//     },
//     {
//         title : "this is title 3",
//         body : "this is body3",
//         id : 3

//     },
//     {
//         title : "this is title 4",
//         body : "this is body4",
//         id : 4
//     },
//     {
//         title : "this is title 5",
//         body : "this is body5",
//         id : 5
//     },
//     {
//         title : "this is title 6",
//         body : "this is body6",
//         id :6
//     },
//     {
//         title : "this is title 7",
//         body : "this is body7",
//         id : 7
//     },
//     {
//         title : "this is title 8",
//         body : "this is body8",
//         id:8
//     }
// ];



        //     <div class="post">
        //     <h4 class="post-title">post title 1</h4>
        //     <p class="post-body">pst description 1</p>
        // </div>

        // fetch data
        const fetchData = async (config) => {
           try{
            const res  = await axios(config);
            return  res.data;
           }catch(error){
            throw Error("data is not fetched")
           }
            
        };
       
       



// selection


const  postsElement =document.querySelector(".posts");

const loadAllData = async () => {
    const posts = await  fetchData("https://jsonplaceholder.typicode.com/posts");
    posts.map(post => {
      const postElement = document.createElement("div");
      postElement.classList.add("post");
      postElement.innerHTML = `
          <h4 class="post-title">${post.title}</h4>
          <p class="post-body">${post.body}</p>
          <p class="post-body">${post.id}</p>
      
      `;
      postsElement.appendChild(postElement);
    });
   

};
loadAllData();



