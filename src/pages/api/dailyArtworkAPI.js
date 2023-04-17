// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import math from "mathjs"

export default function handler(req, res) {
    let dia = new Date().toLocaleDateString()
    
    let id = Math.floor(Math.random() * (119590 - 10 + 1) + 10)
    
    res.status(200).json(
        { 
            dia: dia,
            id: id
        }
        )
  }
  