const Animator = class{
    #si = 0
    #time = 0
    #intv = 30
    #from = 0
    #to = 0
    #dif = 0
    #dur = 0
    #val = 0
    #cb

    start(from, to, duration, callback){
        const me = this
        me.stop()

        me.#time = 0
        me.#from = from
        me.#to = to
        me.#dif = to - from
        me.#dur = duration
        me.#cb = callback

        me.#si = setInterval(function(){
            me.#tick()
        }, me.#intv)
    }

    stop(){
        const me = this
        clearInterval(me.#si)
    }

    #tick(){
        const me = this
        if(me.#time > me.#dur){
            me.stop()
            me.#val = me.#to
        }else{
            me.#val = me.#easeOutQuad(me.#time, me.#from, me.#dif, me.#dur)
        }
        me.#time += me.#intv
        
        if(typeof(me.#cb) === "function"){
            me.#cb(me.#val)
        }
    }

    #easeOutQuad(t, b, c, d){
        t /= d
        return -c * t*(t-2) + b
    }
}

export default Animator;