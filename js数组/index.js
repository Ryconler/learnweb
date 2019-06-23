let a =[5,4,3,2,1]
console.log('sort原',a);
console.log('返回排序后的数组',a.sort(function (v1, v2) {  //正序排序的的函数，【返回新数组】,（改变原数组）
    // console.log(a);
    // console.log(v1,v2);
    return v1 - v2
})); //[ 1, 2, 3, 4, 5 ]

let b =[5,3,2,1,4]
console.log('reverse原',b);
console.log('返回反转后的数组',b.reverse());  // 简单的反转，【返回新数组】,（改变原数组）

let c=[5,4,3,2,1]
console.log('shift,unshift原',c);
console.log('shift返回第一项',c.shift());  //取出第一项，【返回第一项】，（改变原数组）
console.log('新',c);
console.log('unshift返回新数组长度',c.unshift(6));  //插入第一项，【返回新数组长度】，（改变原数组）
console.log('新',c);

let d = [5,4,3,2,1]
console.log('push,pop原',d);
console.log('push返回新数组长度',d.push(0));  //插入最后一项，【返回新数组长度】，（改变原数组）
console.log('新',d);
console.log('pop返回最后一项',d.pop());  //取出最后一项，【返回最后一项】，（改变原数组）
console.log('新',d);

let e = [5,4,3,2,1]
console.log('slice原',e);
console.log('返回索引间的值的数组',e.slice(1, 3));  //【返回索引间的值的数组，左闭右开】，（不改变原数组）
console.log('原不变',e);

let f = [5,4,3,2,1]
console.log('splice原',f);
console.log('返回切除的数组',f.splice(1, 1));  //【返回切除的数组】，（改变原数组）
console.log('新',f);

let g=[5,4,3,2,1]
console.log('concat原',g);
console.log('返回新连接的数组',g.concat(8, [9, 10]));  //连接所有参数到末尾，【返回新连接的数组】，（不改变原数组）
console.log('原不变',g);

let arr = [1,2,3,4,5]
/* 迭代方法，对数组每一项运行给定函数*/
arr.map(function (item, index, array) {return item*2});  //对数组每一项运行给定函数，最终【返回每次函数调用的结果组成的数组】,（不改变原数组）
arr.forEach(function (item, index, array) {console.log(item)}); //对数组中的每一项运行给定函数,【没有返回值】，也（不改变原数组）
arr.every(function (item, index, array) {return typeof item === 'number'});  //对数组中的每一项运行给定函数，每次给定函数都返回true，则最终【返回 true】
arr.some(function (item, index, array) {return item ===1})  //对数组中的每一项运行给定函数，只有有一次给定函数返回了true，则最终【返回 true】
arr.filter(function (item, index, array) {return item<3})  //对数组中的每一项运行给定函数，【返回给定函数会返回true的项组成的数组。】,（不改变原数组）
/*归并方法，对每一项两两运算，返回最终值 */
arr.reduce(function (prev,cur,index,array) {return prev+cur})  //对数组中的每两项运行给定函数，【返回最终值】,（不改变原数组）
arr.reduceRight(function (prev,cur,index,array) {return prev+cur})  //对数组中的反向的每两项运行给定函数，【返回最终值】,（不改变原数组）
