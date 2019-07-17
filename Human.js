
let Human=function (name,gender,weight) {
    this.name = name;
    this.gender = "";
    this.weight = weight;
    this.txt="";
    this.isMale = function () {
        return gender;
    }
    this.setGender=function (gender) {
        this.gender=gender;
    }
    this.checkApple=function (apple) {
        return apple;
    }
    this.eat=function (apple) {
        if(apple.weight>0){
            apple.weight--;
            this.weight++;
        }else
            alert("táo đã hết rồi!!!");

    }
    this.say=function (string) {
       this.txt=string;
       return this.txt;
    }
    this.getName=function () {
        return this.name;
    }
    this.setName=function () {
        this.name=name;
    }
    this.getWeight=function () {
        return this.weight;
    }
    this.setWeight=function (weight) {
        this.weight=weight;
    }
}