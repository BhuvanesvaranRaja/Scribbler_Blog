function EditSave(){
    if(document.getElementById("Post-Content").getAttribute("contentEditable")==="false")
    {
        
        document.getElementById("Post-Content").getAttribute("contentEditable")==="true";
        document.getElementById("Post-Content").setAttribute("contentEditable","true");
        document.getElementById("postTitle").getAttribute("contentEditable")==="true";
        document.getElementById("postTitle").setAttribute("contentEditable","true");
        document.getElementById("Post-Content").style="border: 2px solid pink";
        document.getElementById("postTitle").style="border: 2px solid pink";
        document.getElementById("editPostButton").innerHTML=`Save<i class="fa-solid fa-floppy-disk"></i>`

    }
    else
    {
        document.getElementById("Post-Content").setAttribute("contentEditable","false");
        document.getElementById("postTitle").setAttribute("contentEditable","false");
        document.getElementById("Post-Content").style="border:none";
        document.getElementById("postTitle").style="border:none";
        document.getElementById("editPostButton").innerHTML=`Edit<i class="fa-solid fa-pen-to-square"></i>`
    }
}
// likes
let noOfLikes=0;
function LikeCount(){
noOfLikes+=1;
    if (noOfLikes==1) {
        document.getElementById("likesbtn").innerHTML=`<i class="fa-solid fa-thumbs-up"></i> LIKED`
        document.getElementById("likescnt").innerHTML=`1 person liked this!`
        
        }
        else{
            document.getElementById("likesbtn").innerHTML=`<i class="fa-solid fa-thumbs-up"></i> LIKED`
            document.getElementById("likescnt").innerHTML=`${noOfLikes} people liked this!`
        }
    }
    // conmment section

function AddCmnt() {
    let Comments=document.getElementById("YourCmnt").value;
    let AllComments=document.getElementById("AllCmnts")
   
    if(Comments.length==0){
        alert("Please add your comment");
    }
    else{
        
        let FormatComment=`<li class="ListInComments">${Comments}</li>`
        AllComments.innerHTML+=FormatComment;
        YourCmnt.value="";
    }
    
}

