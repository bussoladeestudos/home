const test=require('node:test'),assert=require('node:assert/strict'),vm=require('node:vm'),fs=require('node:fs'),path=require('node:path');
const root=path.join(__dirname,'..');

function banco(){
  const c=vm.createContext({window:{}});
  vm.runInContext(fs.readFileSync(path.join(root,'conteudo/atendimentos-cpror.js'),'utf8'),c);
  return c.window.ATENDIMENTOS_CPROR;
}

test('cada bloco declara três questões: uma árvore de seis decisões e duas objetivas',()=>{
  const casos=banco();assert.equal(casos.length,5);
  for(const caso of casos){
    assert.equal(caso.decisoesArvore,6);
    assert.equal(caso.questoesSimulado,3);
    assert.equal(caso.nos.q1.tipo,'multipla');
    assert.equal(caso.nos.q2.tipo,'multipla');
  }
});

test('todos os caminhos têm seis decisões ponderadas antes das duas objetivas',()=>{
  for(const caso of banco()){
    const alcancados=new Set();
    function visitar(id,vistos,tipos){
      if(id===null){assert.deepEqual(tipos,['arvore','arvore','arvore','arvore','arvore','arvore','multipla','multipla']);return;}
      assert.ok(!vistos.includes(id),'não pode haver ciclo');
      const no=caso.nos[id];assert.ok(no);alcancados.add(id);
      assert.equal(no.opcoes.length,4);assert.equal(new Set(no.opcoes.map(o=>o.id)).size,4);
      assert.deepEqual(Array.from(no.opcoes,o=>o.peso).sort((a,b)=>a-b),no.tipo==='arvore'?[0,1,3,5]:[0,0,0,5]);
      assert.equal(no.opcoes.find(o=>o.peso===5).id,no.correta);
      for(const proximo of new Set(no.opcoes.map(o=>o.proximo)))visitar(proximo,[...vistos,id],[...tipos,no.tipo]);
    }
    visitar(caso.inicio,[],[]);
    assert.equal(alcancados.size,Object.keys(caso.nos).length);
    assert.equal(new Set(caso.nos.n1.opcoes.map(o=>o.proximo)).size,2);
  }
});

test('conteúdo do banco não contém marcação executável',()=>{
  const texto=JSON.stringify(banco());
  assert.equal(/<script|onerror\s*=|onclick\s*=/i.test(texto),false);
});
