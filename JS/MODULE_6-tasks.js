// Д-З 6-1

// Write code under this line
// const getUserNames = users => users

// const users = [
//     "Moore Hensley",
//     "Sharlene Bush",
//     "Ross Vazquez",
//     "Elma Head",
//     "Carey Barr",
//     "Blackburn Dotson",
//     "Sheree Anthony",
// ]

// const getUserNames = array => array.map(({name}) => name) ;
// console.log(getUserNames(users));

// Д-З 6-2

// const users = [
//   {
//     id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   }
// ] 
// // const getUsersWithEyeColor = (array, color) => array.filter(({eyeColor}) => eyeColor === color)

// // console.log(getUsersWithEyeColor(users, 'blue'));

// const getUsersWithEyeColor = function (array, color, sex) {
//     return array.filter(function ({ eyeColor, gender }) { return eyeColor === color && gender === sex} )
// } 
// console.log(getUsersWithEyeColor(users, 'blue', "male"));
// console.log(getUsersWithEyeColor)

// Д-З 6-3

// // Write code under this line
// const users = [
//     {
//         name: "Moore Hensley", gender: 'male'
//     } ,
    
//     {
//         name: "Ross Vazquez", gender: 'female'
//     },  
    
//     {
//         name: "Carey Barr", gender: 'male'
//     } ,  
      
//   {
//         name: "Blackburn Dotson", gender: 'female'
//     } 
// ] 
// const getUsersWithGender = (array, gender) =>
//    array.filter((sex) => sex.gender === gender)  
//     .map(({name}) => name)   
    
// console.log(getUsersWithGender(users, 'female'));


// Д-З 6-4

// const users = [
//   {
//     id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     skills: ['ipsum', 'lorem'],
//     gender: 'male',
//     age: 37,
//   },
//   {
//     id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//     gender: 'male',
//     age: 24,
//   },
//   {
//     id: '150b00fb-dd82-427d-9faf-2879ea87c695',
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: true,
//     balance: 1498,
//     skills: ['non', 'amet', 'ipsum'],
//     gender: 'male',
//     age: 38,
//   }     
// ]; 
// const getInactiveUsers = function (array) {
//     return array.filter(({ isActive }) => !isActive)
// }

// console.log(getInactiveUsers(users));

// Д-З 6-5

// const users = [{
//     id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//     gender: 'male',
//     age: 24,
// },
// {
//     id: '150b00fb-dd82-427d-9faf-2879ea87c695',
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     skills: ['non', 'amet', 'ipsum'],
//     gender: 'male',
//     age: 38,
// }];



// const getUserWithEmail = (array, mail) => array.find(({email}) => email === mail);

// console.log(getUserWithEmail(users, 'blackburndotson@furnigeer.com'));

// console.log(getUserWithEmail(users, 'rossvazquez@xinware.com'));

// Д-З 6-6

// const users =  [
//     { name: 'Ross Vazquez', email: 'rossvazquez@xinware.com', age: 15},
//     { name: 'Elma Head', email: 'elmahead@omatom.com', age: 25 },
//     { name: 'Carey Barr', email: 'careybarr@nurali.com', age: 23 }
// ] 


// const getUsersWithAge = (array, min, max) => array
//  .filter(({age}) => age > min && age < max)   
//     .map(({ name, email }) => ({ name, email }));  

//  console.log(getUsersWithAge(users, 20, 30));

// // console.log(getUsersWithAge(users, 30, 40));
// /* [
//     { name: 'Moore Hensley', email: 'moorehensley@indexia.com' },
//     { name: 'Sharlene Bush', email: 'sharlenebush@tubesys.com' },
//     { name: 'Blackburn Dotson', email: 'blackburndotson@furnigeer.com' },
//     { name: 'Sheree Anthony', email: 'shereeanthony@kog.com' }
// ] */

// // Д-З 6-7

//  const calculateTotalBalance = array => array.reduce((total, {balance}) => total + balance, 0);

// // console.log(calculateTotalBalance(users)); 
// // 20916

// // Д-З 6-8

// const users = [{ name: 'Sharlene Bush', friends: 'Briana Decker' }, { name: 'Sheree Anthony', friends: 'Briana Decker'}]

// const getUsersWithFriend = (array, friendName) => array.filter(({friends}) => friends.includes(friendName))
//     .map(({name}) => name)

// console.log(getUsersWithFriend(users, 'Briana Decker'));
// // [ 'Sharlene Bush', 'Sheree Anthony' ]

// // console.log(getUsersWithFriend(users, 'Goldie Gentry'));
// // [ 'Elma Head', 'Sheree Anthony' ]

// // Д-З 6-9


// const getNamesSortedByFriendsCount = (array) => 
//     [...array].sort((a, b) => a.friends.length - b.friends.length)
//         .map(({name}) => name);


// console.log(getNamesSortedByFriendsCount(users));

// // Д-З 6-10

// const users =  [
//     { name: 'Ross Vazquez', email: 'rossvazquez@xinware.com', skills: ['culpa', 'elit']},
//     { name: 'Elma Head', email: 'elmahead@omatom.com',skills: ['adipisicing', 'amet'] },
//     { name: 'Carey Barr', email: 'careybarr@nurali.com', skills: ['anim', 'commodo'] },
//     { name: 'Carey Barr', email: 'careybarr@nurali.com', skills: ['culpa', 'elit', 'back'] },
//     { name: 'Carey Barr', email: 'careybarr@nurali.com', skills: ['anim', 'commodo'] }
// ] 


// const getSortedUniqueSkills = (array) => array
//     .reduce((totalSkills, {skills}) => totalSkills.concat(skills),[])
//     .filter((item, i, skills) => 
//        skills.indexOf(item) === i)
//  .sort()
// ;

// // const getSortedUniqueSkills = array =>
// //   array.reduce((newArray, { skills }) => {
// //     const newSkill = skills.filter(el => !newArray.includes(el));
// //     console.log(newSkill);
// //     return [...newArray, ...newSkill];
// //   }, []).sort();

// console.log(getSortedUniqueSkills(users));
