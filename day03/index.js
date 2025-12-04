function parse(input){
  return input.split("\n").map(l => l.trim());
}

function foundBiggest(s,b,e){
  let max_p = b;
  for(let p=max_p+1;p<e;p++){
    if(s[p] > s[max_p])
      max_p = p;
  }
  return max_p;
}

function generic(s,k){
  let n = s.length;
  let max_p = [];
  for(let i=0;i<k;i++)
    max_p[i] = foundBiggest(s, i?max_p[i-1]+1:0, n-k+1+i);
  return +(max_p.map(p=>s[p]).join(""));
}

async function processPart1(input){
  return parse(input).map(i => generic(i, 2)).reduce((p, a) => p + a, 0);
}

async function processPart2(input){
  return parse(input).map(i => generic(i, 12)).reduce((p, a) => p + a, 0);
}

$("#computePart1").click(async () => {
  $("#output").text(await processPart1($("#input").val()));
});
$("#computePart2").click(async () => {
  $("#output").text(await processPart2($("#input").val()));
});