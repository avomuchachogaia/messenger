function gettime() {
    let now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`
}
class Message {
    constructor(username, time, text){
      this.username= username;
      this.time = time;
      this.text = text;
    }
    toString(){
    let str;
    return str = `${this.time} ${this.username}: ${this.text}`;
    }
}
class Messenger extends Message{
    constructor(){
        super();
        this.history=[];
    }
    send(name,text){
    this.time = gettime();
    this.username = name;
    this.text = text;
    let str1 = this.toString()
    this.history.push(str1);
    }
    show_history(){
    this.history.forEach((item)=>{
    console.log(item);
    });
    }
}
let time = gettime();
let n1 = new Messenger();
n1.send('Artem',"ksbbakaslkfd");
n1.send('Farman', "Я из зеленых")
n1.show_history();