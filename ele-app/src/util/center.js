//观察者模式的实现

//多对多

const center = {};

const eventContain = {};

//监听事件
//center.$on('事件名字', 回调函数);
center.$on = function(eventName, callback){
	//按照事件名字保存下来回调函数
	if(!eventContain[eventName]){
		//这个事件还没有执行过监听
		eventContain[eventName] = [];
	}
	eventContain[eventName].push(callback);
}

//触发事件
//center.$emit('事件名字', 传递的参数);
//center.$emit = function(eventName, params){
center.$emit = function(eventName, ...rest){
	//获得事件名字相同的回调函数列表，挨个执行回调函数
	let eventList = eventContain[eventName];
	if(eventList){
		eventList.map(callback=>{
//			callback(params);
			callback(...rest);
		})
	}
}

//移除监听
//center.$off('事件名字', callback);
center.$off = function(eventName, callback){
	//清空事件名字相同的事件列表
	if(callback){
		//移除指定的事件回调
		let eventList = eventContain[eventName];
		if(eventList){
			eventContain[eventName] = eventList.filter(callbackItem=>{
				if(callback == callbackItem){//判断函数是否是同一个
					return false;//如果是需要移除的函数，从这个数组中删除了
				}
				return true;
			})
		}
	}else{
		//全部事件回调移除
		eventContain[eventName] = [];
	}
	
}


export default center;






/*

function func1(){
	alert(1);
}

function func2(){
	alert(1);
}

func1 === func2 //false

func3 = func1;

func1 === func3; //true
*/














//center.$on('event1', ()=>{
//	console.log('func1');
//});
//center.$on('event2', ()=>{
//	console.log('func2');
//});
//center.$on('event2', ()=>{
//	console.log('func3');
//});
//center.$on('event4', (val)=>{
//	console.log('func4:'+val);
//});
//center.$on('event2', ()=>{
//	console.log('func5');
//});
//center.$on('event3', ()=>{
//	console.log('func6');
//});
//center.$on('event4', (val)=>{
//	console.log('func:'+val);
//});
//center.$on('event1', ()=>{
//	console.log('func8');
//});
//
//console.log(eventContain);
//
//
//center.$emit('event4', '123456789');


/*
eventContain = {
	'event1': [func1 func8],
	'event2': [func2, func3, func5],
	'event4': [func4, func7],
	'event3': [func6]
}

$emit('event1');   func1    func8
[func1, func8]


$emit('event2');   func2    func3    func5
[func2, func3, func5]
$emit('event3');   func6 
$emit('event4');   func4    func7
*/



