function add_user()
{
    player1_name= document.getElementById("Lets_chat").value;
    


    localStorage.setItem("player1_name", player1_name);
    

    window.location = "kwitter_room.html";
}
