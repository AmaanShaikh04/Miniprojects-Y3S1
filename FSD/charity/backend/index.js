
const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');
const JWT_SECRET = "mit132334#@$$$";

const {donors,NGO,ADMIN,child,parent} = require('./models/User');
// const Sequelize = require('sequelize');
const express = require('express');
const bodyParser = require('body-parser');

const { body, validationResult } = require('express-validator');
//const mysql = require('mysql');

const cors = require('cors');

  const app = express();
  app.use(bodyParser.json());
  app.use(cors());
  const bcrypt = require('bcryptjs');

// signup actaul student
app.post('/donorspost', [
  // Validate the name field
  body('name').notEmpty().isLength({ max: 255 }),

  // Validate the email field
  body('email').notEmpty().isEmail(),

  // Validate the password field
  body('cpassword').notEmpty().isLength({ min: 6 }),

  // Validate the confirm password field
  body('confirmPassword').custom((value, { req }) => {
    if (value !== req.body.cpassword) {
      throw new Error('Password confirmation does not match password');
    }
    return true;
  }),
], async  (req, res) => {
  var success=false;
  // Check if there are any validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({success, errors: errors.array() });
  }

 // Hash the password
 const salt = await bcrypt.genSalt(10);
 const hashedPassword = await bcrypt.hash(req.body.cpassword, salt);


  // Insert the user data into the MySQL database
  const { name, email, cpassword  ,confirmPassword } = req.body;
 
  donors.create({ name, email, cpassword : hashedPassword ,confirmPassword })
  .then((donor) => {
    const payload = { id: donor.id };
    const token = jwt.sign(payload, JWT_SECRET);
    console.log(token);
    success=true;
    res.status(201).json({success,donor,token});
  })
  .catch((error) => {
    console.log("Error :",error);
  });
 
});

// signup actaul guide
app.post('/adminpost', [
    // Validate the name field
    body('name').notEmpty().isLength({ max: 255 }),
  
    // Validate the email field
    body('email').notEmpty().isEmail(),
  
    // Validate the password field
    body('cpassword').notEmpty().isLength({ min: 6 }),
  
    // Validate the confirm password field
    body('confirmPassword').custom((value, { req }) => {
      if (value !== req.body.cpassword) {
        throw new Error('Password confirmation does not match password');
      }
      return true;
    }),
  ], async  (req, res) => {
    var success=false;
    // Check if there are any validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({success, errors: errors.array() });
    }
   // Hash the password
   const salt = await bcrypt.genSalt(10);
   const hashedPassword = await bcrypt.hash(req.body.cpassword, salt);
    // Insert the user data into the MySQL database
    const { name, email, cpassword  ,confirmPassword } = req.body;
   
    ADMIN.create({ name, email,cpassword : hashedPassword ,confirmPassword })
    .then((ADMIN) => {
      const payload = { id: ADMIN.id };
      const token = jwt.sign(payload, JWT_SECRET);
      console.log(token);
      success=true;
              res.status(201).json({success,ADMIN,token});
            })
            .catch((error) => {
             console.log("Error :",error);
                });
   
  });

  // signup actaul coordinator
app.post('/NGOpost', [
    // Validate the name field
    body('name').notEmpty().isLength({ max: 255 }),
  
    // Validate the email field
    body('email').notEmpty().isEmail(),
  
    // Validate the password field
    body('cpassword').notEmpty().isLength({ min: 6 }),
  
    // Validate the confirm password field
    body('confirmPassword').custom((value, { req }) => {
      if (value !== req.body.cpassword) {
        throw new Error('Password confirmation does not match password');
      }
      return true;
    }),
  ], async  (req, res) => {
    var success=false;
    // Check if there are any validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({success, errors: errors.array() });
    }
  
   // Hash the password
   const salt = await bcrypt.genSalt(10);
   const hashedPassword = await bcrypt.hash(req.body.cpassword, salt);
  
  
    // Insert the user data into the MySQL database
    const { name, email, cpassword  ,confirmPassword } = req.body;
   
    NGO.create({ name, email, cpassword : hashedPassword ,confirmPassword })
    .then((NGO) => {
      const payload = { id: NGO.id };
      const token = jwt.sign(payload, JWT_SECRET);
      console.log(token);
      success=true;
              res.status(201).json({success,NGO,token});
            })
            .catch((error) => {
             console.log("Error :",error);
                });
   
  });


// signup actaul guide
app.post('/parentpost', [
  // Validate the name field
  body('name').notEmpty().isLength({ max: 255 }),

  // Validate the email field
  body('email').notEmpty().isEmail(),

  // Validate the password field
  body('cpassword').notEmpty().isLength({ min: 6 }),

  // Validate the confirm password field
  body('confirmPassword').custom((value, { req }) => {
    if (value !== req.body.cpassword) {
      throw new Error('Password confirmation does not match password');
    }
    return true;
  }),
], async  (req, res) => {
  var success=false;
  // Check if there are any validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({success, errors: errors.array() });
  }
 // Hash the password
 const salt = await bcrypt.genSalt(10);
 const hashedPassword = await bcrypt.hash(req.body.cpassword, salt);
  // Insert the user data into the MySQL database
  const { name, email, cpassword  ,confirmPassword } = req.body;
 
  parent.create({ name, email,cpassword : hashedPassword ,confirmPassword })
  .then((ADMIN) => {
    const payload = { id: ADMIN.id };
    const token = jwt.sign(payload, JWT_SECRET);
    console.log(token);
    success=true;
            res.status(201).json({success,ADMIN,token});
          })
          .catch((error) => {
           console.log("Error :",error);
              });
 
});







// login actaul // student
app.post('/donorslogin', async (req, res) => {
  var success = false ;
  const { email, cpassword } = req.body;

  // Find the user in the MySQL database
  const user = await donors.findOne({ where: { email: email } });
  if (!user) {
    return res.status(400).json({success, message: 'Invalid credentials' });
  }

  // Compare the password with the hashed password in the database
  const isValidPassword = await bcrypt.compare(cpassword, user.cpassword);
  if (!isValidPassword) {
    return res.status(400).json({success, message: 'Invalid credentials' });
  }

  // Create and send a JWT token as a response
  success=true;
  const payload = { id: user.id};
  const token = jwt.sign(payload , JWT_SECRET);
  res.json({success, token });
});

// login actaul guide
app.post('/ADMINlogin', async (req, res) => {
    var success = false ;
    const { email, cpassword } = req.body;
  
    // Find the user in the MySQL database
    const user = await ADMIN.findOne({ where: { email: email } });
    if (!user) {
      return res.status(400).json({success, message: 'Invalid credentials' });
    }
  
    // Compare the password with the hashed password in the database
    const isValidPassword = await bcrypt.compare(cpassword, user.cpassword);
    if (!isValidPassword) {
      return res.status(400).json({success, message: 'Invalid credentials' });
    }
  
    // Create and send a JWT token as a response
    success=true;
    const payload = { id: user.id};
    const token = jwt.sign(payload , JWT_SECRET);
    res.json({success, token });
  });


  // login actaul // co
app.post('/NGOlogin', async (req, res) => {
    var success = false ;
    const { email, cpassword } = req.body;
  
    // Find the user in the MySQL database
    const user = await NGO.findOne({ where: { email: email } });
    if (!user) {
      return res.status(400).json({success, message: 'Invalid credentials' });
    }
  
    // Compare the password with the hashed password in the database
    const isValidPassword = await bcrypt.compare(cpassword, user.cpassword);
    if (!isValidPassword) {
      return res.status(400).json({success, message: 'Invalid credentials' });
    }
  
    // Create and send a JWT token as a response
    success=true;
    const payload = { id: user.id};
    const token = jwt.sign(payload, JWT_SECRET);
    res.json({success, token });
  });

  app.post('/parentlogin', async (req, res) => {
    var success = false ;
    const { email, cpassword } = req.body;
  
    // Find the user in the MySQL database
    const user = await parent.findOne({ where: { email: email } });
    if (!user) {
      return res.status(400).json({success, message: 'Invalid credentials' });
    }
  
    // Compare the password with the hashed password in the database
    const isValidPassword = await bcrypt.compare(cpassword, user.cpassword);
    if (!isValidPassword) {
      return res.status(400).json({success, message: 'Invalid credentials' });
    }
  
    // Create and send a JWT token as a response
    success=true;
    const payload = { id: user.id};
    const token = jwt.sign(payload, JWT_SECRET);
    res.json({success, token });
  });




//   // ***************************** Review ***********************

//   const {review1,review1_results,Ppt,review2_results,review3_results,Ppt3,project} = require('./models/User');
const {project,review_results,donation,adoptedChilds} = require('./models/User');




//chatgpt
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'pandasql',
  database: 'charity2',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

  //sendppt review 2
// configure multerconst storage = multer.diskStorage({
  const multer = require('multer');
const fs = require('fs');
const path = require('path');
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'C:\\Users\\Acer\\Desktop\\charity\\backend\\uploads');
    },
    filename: (req, file, cb) => {
      const fileName = `${Date.now()}-${file.originalname}`;
      cb(null, fileName);
    }
  });

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === 'application/vnd.ms-powerpoint' ||
      file.mimetype === 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
    ) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only ppt and pptx files are allowed.'));
    }
  }
}).single('ppt');

// review 2
app.post('/sendppt', (req, res) => {

    // File is uploaded successfully
   const  NGOEmail =  req.body.NGOEmail
    const name = req.body.name;
    const gender = req.body.gender;
    const age = req.body.age;
    const description = req.body.description;
    const Availability = req.body.Availability;
    const Medical_History = req.body.Medical_History;
    const Preferences = req.body.Preferences;

    child.create({NGOEmail, name,gender,age, description,Availability,Medical_History,Preferences })
    .then((result) => {
      success=true;
              res.status(201).json({success,result});
            })
            .catch((error) => {
             console.log("error hai : ",error)
                });

});


app.post('/getppt', async (req, res) => {
  try {

  const { NGOEmail } = req.body;
    const [rows, fields] = await pool.execute(`SELECT * FROM childs`);
    const result = JSON.parse(JSON.stringify(rows));
    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send('Error retrieving data from database');
  }
});

//post result 2
app.post('/entermarks', async  (req, res) => {
  var success=false;

  // Insert the user data into the MySQL database
  const { NGOEmail,name,status,age,gender,Availability,description,Medical_History,Preferences} = req.body;
 
  review_results.create({ NGOEmail,name,status,age,gender,Availability,description,Medical_History,Preferences})
  .then((result_2) => {
    success=true;
            res.status(201).json({success,result_2});
          })
          .catch((error) => {
           console.log("error hai : ",error)
              });
 
});

 // get result 2
 app.post('/getresult2', async (req, res) => {
  const NGOEmail = req.body.NGOEmail;
  try {
    const [result] = await pool.execute(`SELECT * FROM review_results WHERE NGOEmail='${NGOEmail}'`);
    const t = JSON.parse(JSON.stringify(result)); // JSON must be capital
    res.send(t);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
});

app.post('/getresults', async (req, res) => {
  try {
    const [result] = await pool.execute(`SELECT * FROM review_results WHERE Availability = 'Yes'`);
    const t = JSON.parse(JSON.stringify(result));
    res.send(t);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
});

app.post('/donation', async  (req, res) => {
  var success=false;

  // Insert the user data into the MySQL database
  const { NGOEmail ,DONOREmail,name,gender,Donation } = req.body;
 
  donation.create({ NGOEmail,DONOREmail,name,gender,Donation})
  .then((result_2) => {
    success=true;
            res.status(201).json({success,result_2});
          })
          .catch((error) => {
           console.log("error hai : ",error)
              });
 
});

app.post('/adoption', async (req, res) => {
  var success = false;

  // Insert the user data into the MySQL database
  const { NGOEmail, parentEmail, name, gender, age } = req.body;

  // Update the availability of the child in the child table
  child.update(
    { Availability: 'not available' },
    {
      where: {
        name: name
      }
    }
  )
    .then(() => {
      // Create the adoptedChilds record
      adoptedChilds.create({ parentEmail, name, gender, age })
        .then((result_2) => {
          success = true;
          res.status(201).json({ success, result_2 });
        })
        .catch((error) => {
          console.log("Error: ", error);
          res.status(500).json({ success: false, error: "Failed to create adoptedChilds record." });
        });
    })
    .catch((error) => {
      console.log("Error: ", error);
      res.status(500).json({ success: false, error: "Failed to update child availability." });
    });
});




app.listen(5000, () => {
    console.log(`Server started on port 5000`);
  });