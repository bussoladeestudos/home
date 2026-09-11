/* Testes do Modo Foco — rodar: node --test tests/pomodoro.test.js */
const test=require("node:test");
const assert=require("node:assert");
const {POMO_FOCO,POMO_PAUSA,POMO_PAUSA_LONGA,pomoNextPhase}=require("../js/pomodoro.js");

test("durações clássicas: 25 foco / 5 pausa / 15 pausa longa",()=>{
  assert.equal(POMO_FOCO,25*60);
  assert.equal(POMO_PAUSA,5*60);
  assert.equal(POMO_PAUSA_LONGA,15*60);
});

test("foco → pausa automática; pausa → foco aguardando o aluno",()=>{
  assert.deepEqual(pomoNextPhase("foco"),{phase:"pausa",dur:POMO_PAUSA,autoStart:true,longa:false});
  assert.deepEqual(pomoNextPhase("pausa"),{phase:"foco",dur:POMO_FOCO,autoStart:false,longa:false});
});

test("durações personalizadas são respeitadas",()=>{
  assert.deepEqual(pomoNextPhase("foco",45*60,10*60),{phase:"pausa",dur:10*60,autoStart:true,longa:false});
  assert.deepEqual(pomoNextPhase("pausa",45*60,10*60),{phase:"foco",dur:45*60,autoStart:false,longa:false});
});

test("4º ciclo dispara pausa longa de 15 min",()=>{
  assert.deepEqual(pomoNextPhase("foco",25*60,5*60,true),
    {phase:"pausa",dur:POMO_PAUSA_LONGA,autoStart:true,longa:true});
});

test("pomodoro NÃO grava dados de estudo (registro é manual)",()=>{
  const src=require("fs").readFileSync(require("path").join(__dirname,"..","js","pomodoro.js"),"utf8");
  assert.ok(!src.includes("STATE.dias"),"pomodoro.js não deve tocar em STATE.dias");
});
