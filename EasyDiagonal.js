function diagonal(n, p) {
    if(p == 0) {return n + 1}
    const arr = []
    const q = n;
    const m = p;
    let newarr = []
    newarr.length = n + p
    newarr.fill(1)

    arr.push(newarr)

    while (p !== 0){
        const z = [];
        for(let i = 0; i < newarr.length; i++){
            const x = newarr.slice(i);
            z.push(x.reduce((a,b) => a + b));
        }
        newarr = z.map(a => a);
        const r = z.reverse();
        arr.push(r)
        p--;
    }
    const result = arr[arr.length - 1].slice(0,q-(m-1))
   
    return result.reduce((a,b) => a + b)
}