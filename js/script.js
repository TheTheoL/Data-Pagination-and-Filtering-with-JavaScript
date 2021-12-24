/*
showPage function. This function loops through the student list array and if the condition is true will create new elements that shows the picture and info of each student.
*/
function showPage(list, page) {


  const startIndex = (page * 9) - 9;
  const endIndex = page * 9;

  const studentList = document.querySelector('.student-list');

  studentList.innerHTML = '';

  for (let i = 0; i < list.length; i++) {
    if (i >= startIndex && i < endIndex) {
      var studentItem = `
       <li class="student-item cf">
       <div class="student-details">
       <img class="avatar" src="${list[i].picture.medium}" alt="Profile Picture">
       <h3>${list[i].name.first} ${list[i].name.last}</h3>
       <span class="email">${list[i].email}</span>
    </div>
      <div class="joined-details">
      <span class="date">Joined ${list[i].registered.date}</span>
   </div>
 </li>
       `;

      studentList.insertAdjacentHTML('beforeend', studentItem);

    }
  }
}

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination(list) {

  let numOfPages = Math.ceil(list.length / 9);
  const linkList = document.querySelector('.link-list');
  linkList.innerHTML = '';

  for (let i = 1; i <= numOfPages; i++) {
    let button = `
    <li>
          <button type="button">${i}</button>
    </li>
    `;

    linkList.insertAdjacentHTML('beforeend', button);

  }

  document.querySelector('.link-list li button').className = 'active';

  // this adds an event listener to the linkList variable and makes it so our pagination buttons will work when the user clicks them.
  linkList.addEventListener('click', (e) => {
    if (e.target.type === 'button') {
      document.querySelector('.active').className = '';
      e.target.className = 'active';
      showPage(list, e.target.textContent);
    }
  });


}


// Functions to be called.
showPage(data, 1);
addPagination(data);
