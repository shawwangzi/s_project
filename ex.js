function Person(){
	this.name="tom";
	this.sayName=function(){return this.name;}
}
Person.prototype.age=14;
Person.prototype.sayAge=function(){return this.age;};
var p1=new Person();
Person.prototype={
	gender:"male",
	sayGender:function(){return this.gender;}

};
var p2= new Person();