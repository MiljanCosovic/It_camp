function digitize(n) {
    
    n=n.toString()
    var b=[]
    for(var i=0;i<n.length;i++)
    {
        
        b.unshift(n[i]);
    }
    console.log(b);
  }
  digitize(1234);






