let Apple=function () {
    this.weight=10;
    this.decrease=function () {
        if(this.weight>0){
            this.weight--;
        }
    }
    this.isEmpty=function () {
        if(this.weight>0){
            return true;
        }else
            return false;
    }
    this.getWeight=function () {
        return this.weight;
    }
}