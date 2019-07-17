let adam= new Human("Adam",true,50);
let eva=new Human("Eva",false,40);
let tao=new Apple();

eva.say("Xin chào Adam");
adam.say("xin chào Eva");
while (tao.weight>0){
    adam.eat(tao);
    eva.eat(tao);
}
console.log(adam,eva,tao);
// adam.setGender(false);
// console.log(adam.gender);
// console.log(adam,eva,tao);
// let check=tao.isEmpty();
// console.log(check);
// console.log(adam.checkApple(tao));
adam.eat(tao);

