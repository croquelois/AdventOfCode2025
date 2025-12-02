function parse(input){
  return input.split(",").map(s => s.split("-"));
}

function extend(ranges){
  let ret = [];
  ranges.forEach(r => {
    for(let i=+r[0];i<=+r[1];i++)
      ret.push(""+i);
  });
  return ret;
}

function isSilly1(s){
  let n = s.length;
  if(n%2 != 0)
    return false;
  return s.slice(0,n/2) != s.slice(n/2);
}

function isSilly2(s){
  let n = s.length;
  for(let m=1;m<n;m++){
    if(n%m != 0)
      continue;
    let init = s.slice(0,m);
    let found = true;
    for(let p=m;p<n;p+=m)
      found = found && init == s.slice(p,p+m);
    if(found)
      return found;
  }
  return false;
}

async function processPart1(input){
  return extend(parse(input)).filter(isSilly1).reduce((p, a) => p + (+a), 0);
}

async function processPart2(input){
  return extend(parse(input)).filter(isSilly2).reduce((p, a) => p + (+a), 0);
}

$("#computePart1").click(async () => {
  $("#output").text(await processPart1($("#input").val()));
});
$("#computePart2").click(async () => {
  $("#output").text(await processPart2($("#input").val()));
});