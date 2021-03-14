 // first card starts--------------------------------------------------------------------------------
 let firstcard = document.getElementById('first-card');
 let heading = document.getElementById('heading');
 let myinfo = document.getElementById('myinfo');
 firstcard.addEventListener('mouseover', function run() {
     heading.style.display = 'none';
     myinfo.style.display = 'block';
 })
 firstcard.addEventListener('mouseout', function run() {
     heading.style.display = 'block';
     myinfo.style.display = 'none';
     firstcard.style.color = 'white';
 });
 // first card ends----------------------------------------------------------------------------------
 let secondcard = document.getElementById('second-card');
 let headingtwo = document.getElementById('headingtwo');
 let myeducation = document.getElementById('myeducation');
 secondcard.addEventListener('mouseover', function run() {
     headingtwo.style.display = 'none';
     myeducation.style.display = 'block';
 })
 secondcard.addEventListener('mouseout', function run() {
     headingtwo.style.display = 'block';
     myeducation.style.display = 'none';
     secondcard.style.color = 'white';
 });
 // second card ends------------------------------------------------------------------------------
 let thirdcard = document.getElementById('third-card');
 let headingthree = document.getElementById('headingthree');
 let myachievements = document.getElementById('myachievements');
 thirdcard.addEventListener('mouseover', function run() {
     headingthree.style.display = 'none';
     myachievements.style.display = 'block';
 })
 thirdcard.addEventListener('mouseout', function run() {
     headingthree.style.display = 'block';
     myachievements.style.display = 'none';
     thirdcard.style.color = '#cc6307';
 });
 // third card ends-------------------------------------------------------------------------------
 let fourthcard = document.getElementById('fourth-card');
 let headingfourth = document.getElementById('headingfourth');
 let myinterests = document.getElementById('myinterests');
 fourthcard.addEventListener('mouseover', function run() {
     headingfourth.style.display = 'none';
     myinterests.style.display = 'block';
 })
 fourthcard.addEventListener('mouseout', function run() {
     headingfourth.style.display = 'block';
     myinterests.style.display = 'none';
     fourthcard.style.color = '#7c552f';
 });
 // fourth card ends--------------------------------------------------------------------------------

 let fifthcard = document.getElementById('fifth-card');
 let headingfifth = document.getElementById('headingfifth');
 let mygoals = document.getElementById('mygoals');
 fifthcard.addEventListener('mouseover', function run() {
     headingfifth.style.display = 'none';
     mygoals.style.display = 'block';
 })
 fifthcard.addEventListener('mouseout', function run() {
     headingfifth.style.display = 'block';
     mygoals.style.display = 'none';
     fifthcard.style.color = '#076149';
 });
 // fifth card ends--------------------------------------------------------------------------------

 let hambutton = document.getElementById('hambutton');
 let mylist = document.getElementById('mylist');
 let theme = document.getElementById('theme');
 hambutton.addEventListener('click', function run() {
     if (mylist.style.display != 'none') {
         mylist.style.display = 'none';
         theme.style.margin = '60px 30px 20px 32px';
     }
     else {
         mylist.style.display = 'block';
         theme.style.margin = '178px 20px 30px 32px';
     }
 });