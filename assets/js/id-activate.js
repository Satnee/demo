window.onload = function() {
  document.getElementById("#myModal").disabled = 'false';
};
let user = firebase.auth().currentUser;
        let uid
        if(user != null){
            uid = user.uid;
}
let ref = Database.database().reference();
let usersRef = ref.child("All-Users").child("All Registered Users").child(uid);
let tokenToCompare = "1d0e-b068-432e-96b4-e0ae" //abbreviated
let query = usersRef.queryOrdered(byChild: "userPin").queryEqual(toValue: tokenToCompare)
query.observe(.value, with: { snapshot in
    if snapshot.exists() {
        //print("token exists, do not create user")
		$(document).ready(function(){
		$("#myModal").modal('hide');
		});
        return
    } else {
       // print("no existing token found, create user")
		$(document).ready(function(){
        $("#myModal").modal('show');
		});
  }
})   

    