const nomeUp = (snap, context) => {
  
  const name = snap.data().name;

  snap.ref.update({ NomeAlteradoPorFuncModule: name.toLowerCase()});

  console.log('onCreate')
  return true
}

module.exports = nomeUp