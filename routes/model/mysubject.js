function MySubjects(array){
    var mySubjects = new Array();
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        var item = new MySubject();
        item.name = element.name;
        mySubjects.push(item);
    }
    this.mySubjects = mySubjects;
}

function MySubject(){

}

module.exports=MySubjects;