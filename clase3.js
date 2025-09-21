'use strict';

let count = 0;

function countFunction() {
  count = count + 1;
  const countElement = document.getElementById('countValue');
  countElement.textContent = count;
}

function resetButton() {
  count = 0;
  document.getElementById('countValue').textContent = count;
  document.getElementById('field1').value = null;
  document.getElementById('field2').value = null;
}

function sumFunction() {
  // const numArray = ['1', '2', '3'];
  const countElement = document.getElementById('userContainer');

  const userObject = {
    id: 'Id-1',
    name: 'luis',
    lastName: 'menendez',
    nickName: 'TurboCrack',
    roles: 'Admin',
  };

  // countElement.textContent = userObject.name + ' ' + userObject.lastName;
  // for (const [key, value] of Object.entries(userObject)) {
  //   console.log(`${key}: ${value}`);
  // }

  console.log(userObject);

  const usersArray = [
    {
      name: 'pepe',
      lastName: 'gr',
    },
    {
      name: 'luisfer',
      lastName: '123',
    },
    {
      name: 'luis',
      lastName: 'un grr',
    },
    {
      name: 'luisfer',
      lastName: '123124',
    },
  ];

  const mappepValues = usersArray.map((user) => {
    if (user.name === 'pepe') {
      const newObjectDogs = {
        color: 'black',
        name: 'azabache',
        legs: 4,
      };
      return newObjectDogs;
    }

    return user;
  });

  const filterLuis = usersArray.filter((user) => user.name === 'luisfer');

  console.log(mappepValues);
  console.log(usersArray);
  console.log(filterLuis);

  // const filterLuises = [];

  // usersArray.forEach((user) => {
  //   if (user.name == 'luisfer') {
  //     filterLuises.push(user.name);
  //   }
  // });

  // console.log(filterLuises);
  // console.log(filterLuis);

  // const numArraytwo = [1, 2, 3];
  // const numArraytree = [1, false, 3];

  // for (let i = 0; i < numArray.length; i++) {
  //   debugger;
  //   numArray[i] = numArray[i] + 2;
  //   const element = numArray[i];
  //   console.log(element);
  // }

  // numArray.forEach((element) => {
  //   // let pepe;
  //   // if (element.includes("1"))  {
  //   //   pepe = 33;
  //   // } else {
  //   //   pepe 1;
  //   // }
  //   // const pepe =  element.includes("1") ? 33 : 1;
  // });

  // console.log(numArray);
}
