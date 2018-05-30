import Vue from 'vue'
Vue.filter('fiexd', function (value, type) {
    if (typeof value == 'number') {
        return value.toFixed(type);
    } else {
        return '';
    }
})
Vue.filter('capitalize', function (value) {
    if (!value) return ''
    // 时间戳转为普通时间格式2017-10-10，精确到天
    value = new Date(value*1000).toJSON().slice(0,10)
    return value
})
Vue.filter('notNull',function(value){
    if(value==null){
      return 0
    }else{
      return value;
    }
  })
Vue.filter('date',function(value){
        var inputTime = value*1000;
        var date = new Date(inputTime);  
        var y = date.getFullYear();    
        var m = date.getMonth() + 1;    
        m = m < 10 ? ('0' + m) : m;    
        var d = date.getDate();    
        d = d < 10 ? ('0' + d) : d;    
        var h = date.getHours();  
        h = h < 10 ? ('0' + h) : h;  
        var minute = date.getMinutes();  
        var second = date.getSeconds();  
        minute = minute < 10 ? ('0' + minute) : minute;    
        second = second < 10 ? ('0' + second) : second;   
        return y + '-' + m + '-' + d+' '+h+':'+minute+':'+second;    
})