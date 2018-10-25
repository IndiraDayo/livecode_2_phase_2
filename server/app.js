require('dotenv').config()
const express = require('express'),
      mongoose = require('mongoose'),
      app = express(),
      cors = require('cors')
      port = process.env.PORT || 3000
      dbUri = `mongodb://${process.env.DB_NAME}:${process.env.DB_PASS}@ds043329.mlab.com:43329/livecode_2_phase_2`,

      userRouter = require('./routes/user')

mongoose.connect(dbUri, { useNewUrlParser: true })

app.use(express.urlencoded({ extended: false }))
   .use(express.json())
   .use(cors())
   
   .use('/', userRouter)

app.listen(port, () => console.log(`listening on port ${port}`))