const people = [
  {
    name: 'Nathaniel Nosa',
    age: 20,
    gender: 'Male',
    occupation: 'Web developer',
    location: 'Lagos, NG',
    lookingfor: 'Money',
    image: "https://randomuser.me/api/portraits/men/32.jpg"

  },
  {
    name: 'Oluwaseun Dangote',
    age: 22,
    gender: 'Male',
    occupation: 'CAC',
    location: 'Abeokuta, NG',
    lookingfor: 'Money',
    image: "https://randomuser.me/api/portraits/men/62.jpg"

  },
  {
    name: 'Tobi Java',
    age: 22,
    gender: 'Male',
    occupation: 'Java Developer',
    location: 'Lagos, NG',
    lookingfor: 'Money',
    image: "https://randomuser.me/api/portraits/men/1.jpg"

  },
  {
    name: 'Chiamaka',
    age: 22,
    gender: 'Female',
    occupation: 'Frontend Developer',
    location: 'Lagos, NG',
    lookingfor: 'Money',
    image: "https://randomuser.me/api/portraits/women/1.jpg"

  },
  {
    name: 'Henry Adepegba',
    age: 22,
    gender: 'Male',
    occupation: 'Laravel Developer',
    location: 'Lagos, NG',
    lookingfor: 'Money',
    image: "https://randomuser.me/api/portraits/men/12.jpg"

  },
  {
    name: 'Mary Odesola',
    age: 23,
    gender: 'Female',
    occupation: 'Fashion Designer',
    location: 'Abeokuta, NG',
    lookingfor: 'Fashion Show',
    image: "https://randomuser.me/api/portraits/women/92.jpg"

  },
  {
    name: 'Nnamdi Norie',
    age: 23,
    gender: 'Male',
    occupation: 'Web Designer',
    location: 'Abeokuta, NG',
    lookingfor: 'Apple Laptop',
    image: "https://randomuser.me/api/portraits/men/92.jpg"

  },
  {
    name: 'Damilola Yakub',
    age: 23,
    gender: 'Male',
    occupation: 'App Developer',
    location: 'Abeokuta, NG',
    lookingfor: 'Money',
    image: "https://randomuser.me/api/portraits/men/22.jpg"

  }
];
const datas = profileGenerator(people);
//static profile
nextPerson();

//button event listener
document.querySelector('#nxt').addEventListener('click',nextPerson);

function nextPerson(){
  const currentPerson = datas.next().value;

  if(currentPerson !== undefined){
  document.querySelector('#displayPro').innerHTML = `
    <ul class='list-group'>
      <li class='list-group-item'>Name: ${currentPerson.name}</li>
      <li class='list-group-item'>Age: ${currentPerson.age}</li>
      <li class='list-group-item'>Gender: ${currentPerson.gender}</li>
      <li class='list-group-item'>Occupation: ${currentPerson.occupation}</li>
      <li class='list-group-item'>Location: ${currentPerson.location}</li>
      <li class='list-group-item'>Looking For: ${currentPerson.lookingfor}</li>
    </ul>
  `;

  document.querySelector('#displayImg').innerHTML = `
    <img src="${currentPerson.image}">
  `;
  }else{
    window.location.reload();
  }
}
// Generating Profiles
// function* profileGenerator(){
//   let index = 0;
//   while(true){
//     yield datas[index++];
//   }
// }
function profileGenerator(datas){
  let index = 0;
  return{
    next: function(){
      return index < datas.length ?
      {value: datas[index++], done:false} :
      {done:true}
    }
  };
}