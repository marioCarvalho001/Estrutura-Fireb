const express = require('express')
const router = express.Router()
const dbConnect = require('../funcs/Datedb')
const users = dbConnect("users")

router.get("/", (req, res) => {
  users.get().then(snaps => {
    const usersdb = snaps.docs.map(snap => ({
      ...snap.data()
    }))
    res.status(200).json({UsuariosDoFirebase: usersdb})
  }).catch(error => res.status(500).json({error: error}))
})

router.get("/:id", (req, res) => {
  const user = req.params.id
  
  users.doc(user).get().then(snap => {
    res.status(200).json({RotadeParamFire: snap.data()})
  }).catch(error => res.status(500).json({error: error}))
})

router.post("/", (req, res) => {
  const userId = req.body.id
  const name = req.body.name

  if(userId){
    users.doc(userId).set({
      id: userId,
      name: name 
    }).then((dat) => res.status(200).json({UsuarioCadastrado: dat})).catch(error => res.status(500).json({error: error}))
  } else {
    res.status(500).json({error: "Error no id"})
  }

})

router.put("/:id", (req, res) => {
  const userId = req.params.id
  const name = req.body.name

  users.doc(userId).update({
    name: name
  }).then(() => res.status(200).json({
    message: "name Alterado"
  })).catch(error => res.status(500).json({error: error}))

})

router.delete("/:id", (req,res) => {
  const delId = req.params.id
  
  users.doc(delId).delete().then(() => {
    res.status(200).json({message: `User ${delId} deletado com sucesso`})
  }).catch(error => res.status(500).json({error: error}))

})

module.exports = router