function symmetricPoint(p, q) {
    p1=[];
  if(p.length===2 && q.length===2)
  {
    prvi=q[0]+(q[0]-p[0]);
    drugi=q[1]+(q[1]-p[1]);
    p1.push(prvi,drugi);
    console.log(p1);
  }
  else{
      return console.log("Neispunjeni uslovi")
  }
}

symmetricPoint([0,0],[1,1]);
symmetricPoint([2,6],[-2,-6]);
symmetricPoint([10,-10],[-10,10]);
symmetricPoint([1, -35], [-12, 1]);
symmetricPoint([1000, 15], [-7, -214]);
symmetricPoint([0, 0], [0, 0]);
symmetricPoint([3,2,1],[22,2])
symmetricPoint([2,2], [23,2,1])
symmetricPoint([2,2,4],[2,3,4])

