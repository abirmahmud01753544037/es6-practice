const person = { name: 'Jack william', age: 17, Job: 'facebooker', gfName:'Ema watson', address: 'kachu khet', phone: '01753544037', friends: ['Tom hanks', 'Tom yarn', 'tom yarn']}

const { phone } = person;

const complexObject = {
    name: 'abc',
    info: {
        address: 'kola bagan',
        leader: 'tiger mama',
    }
}
const {leader} = complexObject.info;
//const gfName = person.gfName;
// const phone = person.phone;

// console.log(gfName, phone, address);
// console.log(gfName, phone, address)

const friends = ['sakib khan', 'arman khan', 'amir khan', 'salman khan', 'sahrukh khan'];
const [chotoFriend, ...restFriends] = friends;
console.log(restFriends);