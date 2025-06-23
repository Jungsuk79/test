import Vue from 'vue'

Vue.filter("number", function(value){
    try{
        let v = Intl.NumberFormat().format(value)
        if(v === 'NaN'){
            v = value
        }
        return v
    }catch(e){
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }
})

Vue.filter("time", function(num){
  try{
    const m = Math.floor(num / 60)
    const s = num % 60
    return ((m < 10) ? "0"+m : m) + ":" + ((s < 10) ? "0"+s : s)
  }catch(e){
    return "00:00"
  }
})

Vue.filter("kebabCase", function(str){
  try{
    return str.replace( /([a-z])([A-Z])/g, '$1-$2' ).toLowerCase()
  }catch(e){
    return str
  }
})

Vue.filter("parseFloat", function(str){
  try{
    return parseFloat(str)
  }catch(e){
    return str
  }
})