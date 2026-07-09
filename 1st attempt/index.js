//2
/* const users = [
    {id:1, name:'john', age:20},
    {id:2, name:'jane', age:17},
    {id:3, name:'mike', age:25}
];

const adults = users.filter(user => user.age >=18);
console.log(adults); */

//3
const nums = [1,2,3,4,5];
const doublenumbers = nums.map(num=> num * 2);
console.log(doublenumbers)
//map() is specifically designed for transforming each element of an array and returning a new array with the modifiend values. Since the requirements  is to double every number, map is most suitable method.

//4

const users = [
    {id: 1, city: 'Delhi'},
    {id: 2, city: 'Mumbai'},
    {id: 3, city: 'Delhi'},
    {id: 4, city: 'Lucknow'},
    {id: 5, city: 'Mumbai'}
];

const citycount = users.reduce((acc,user)=>{
    acc[user.city] = (acc[user.city] || 0) + 1;
    return acc;
},
{});
console.log(citycount)

//5
const products = [
  { id: 1, name: 'a', price: 4, CategoryID: '1' },
  { id: 2, name: 'b', price: 5, CategoryID: '2' },
  { id: 3, name: 'c', price: 8, CategoryID: '3' },
  { id: 4, name: 'd', price: 9, CategoryID: '1' },
  { id: 5, name: 'e', price: 2, CategoryID: '2' },
  { id: 6, name: 'f', price: 9, CategoryID: '3' },
  { id: 7, name: 'g', price: 5, CategoryID: '1' },
  { id: 8, name: 'h', price: 3, CategoryID: '2' },
  { id: 9, name: 'i', price: 2, CategoryID: '3' },
  { id: 10, name: 'k', price: 4, CategoryID: '1' }
];

const categories = [
  { id: 1, name: 'shirt' },
  { id: 2, name: 'pant' },
  { id: 3, name: 'kurta' }
];

const selectedCategories = ['shirt', 'kurta'];

const selectedCategoryIds = categories
  .filter(category => selectedCategories.includes(category.name))
  .map(category => String(category.id));

const result = products.filter(product =>
  selectedCategoryIds.includes(product.CategoryID)
);

console.log(result);


