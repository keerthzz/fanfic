var db = firebase.database();
var content;


function setup() {
  db.ref("10vHPazXWrmFePNtEn6eRhRoXxfIcudashIYp4enQa_s/Form Responses 1/").on
("value",(data)=>{
  content = data.val();

})

}




function draw() {
background(255); 

  //console.log(content);
  drawSprites();
}
