function parse(input){
  return input.split("\n").map(s => ({dir: s[0] == "L"?-1:1, num: +s.slice(1)}));
}

async function processPart1(input){
  let dial = 50;
  return parse(input).map(d => (dial = (dial+(d.dir * d.num)+100)%100)).filter(d => !d).length;
}

async function processPart2(input){
  let dial = 50;
  let click = 0;
  parse(input).forEach(d => {
    let newDial = dial + (d.dir * d.num);
    if(newDial <= 0)
      click += Math.floor(-newDial/100) + (dial?1:0);
    else if(newDial >= 100)
      click += Math.floor(newDial/100);
    dial = ((newDial % 100) + 100)%100;
  });
  return click;
}

$("#computePart1").click(async () => {
  $("#output").text(await processPart1($("#input").val()));
});
$("#computePart2").click(async () => {
  $("#output").text(await processPart2($("#input").val()));
});