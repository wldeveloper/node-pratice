var EventEmitter = require('events').EventEmitter

var life = new EventEmitter()

life.setMaxListeners(11)

// 移除监听只能是具名函数

function water(who) {
    console.log('给 ' +who+ '倒水111')
}

// addEventListener  每一个事件只支持同时10个监听函数(可修改)
life.on('求安慰',water)

life.on('求安慰',function(who) {
    console.log('给 ' +who+ '倒水')
})
life.on('求安慰',function(who) {
    console.log('给 ' +who+ '倒水')
})
life.on('求安慰',function(who) {
    console.log('给 ' +who+ '倒水')
})
life.on('求安慰',function(who) {
    console.log('给 ' +who+ '倒水')
})
life.on('求安慰',function(who) {
    console.log('给 ' +who+ '倒水')
})
life.on('求安慰',function(who) {
    console.log('给 ' +who+ '倒水')
})
life.on('求安慰',function(who) {
    console.log('给 ' +who+ '倒水')
})
life.on('求安慰',function(who) {
    console.log('给 ' +who+ '倒水')
})
life.on('求安慰',function(who) {
    console.log('给 ' +who+ '倒水')
})
life.on('求溺爱',function(who) {
    console.log('给 ' +who+ '倒水')
})

// 单个移除
life.removeListener('求安慰',water)

// 批量移除
life.removeAllListeners('求安慰')

var hasConforListener = life.emit('求安慰','汉子')
var hasLovedListener = life.emit('求溺爱','汉子')
var hasPlayedListener = life.emit('求玩坏','汉子')

 console.log(hasConforListener)
 console.log(hasLovedListener)
 console.log(hasPlayedListener)

 // 监听函数个数
 console.log(life.listeners('求安慰').length)
 console.log(EventEmitter.listenerCount(life,'求溺爱'))