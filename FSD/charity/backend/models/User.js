const Sequelize = require('sequelize');
const express = require('express');
const bodyParser = require('body-parser');


const sequelize = new Sequelize('charity2', 'root', 'pandasql', {
  host:'localhost',   // to connect mysql database
  dialect: 'mysql'
});
sequelize.authenticate()
  .then(() => {
    console.log('User Connected to MySQL server');           // to check connected or not
  })
  .catch((error) => {
    console.error('Unable to connect to MySQL server:', error);
  });

  const donors = sequelize.define('donors', {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      primaryKey: true
    },
    cpassword: {
      type: Sequelize.STRING,
      allowNull: false
    },
    confirmPassword: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });
  
  const NGO = sequelize.define('NGO', {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      primaryKey: true
    },
    cpassword: {
      type: Sequelize.STRING,
      allowNull: false
    },
    confirmPassword: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });
  
  const ADMIN = sequelize.define('ADMIN', {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      primaryKey: true
    },
    cpassword: {
      type: Sequelize.STRING,
      allowNull: false
    },
    confirmPassword: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });
  
  const project = sequelize.define('project', {
    NGOEmail: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    projectname: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    filename: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    pptData: {
      type: Sequelize.BLOB('long'),
      allowNull: false,
    },
  });
  
  const donation = sequelize.define('donations', {
    NGOEmail: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    DONOREmail: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    gender: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    Donation: {
      type: Sequelize.STRING,
      allowNull: false,
    }
  });
  
  const review_results = sequelize.define('review_results', {
    NGOEmail: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    status: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    age:{
      type: Sequelize.STRING,
      allowNull: false,
    },
    gender:{
      type: Sequelize.STRING,
      allowNull: false,
    },
    Availability:{
      type: Sequelize.STRING,
      allowNull: false,
    },
    description:{
      type: Sequelize.STRING,
      allowNull: false,
    },
    Medical_History:{
      type: Sequelize.STRING,
      allowNull: false,
    },
    Preferences:{
      type: Sequelize.STRING,
      allowNull: false,
    }
  });


  const child = sequelize.define('childs', {
    NGOEmail: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
   gender:{
    type: Sequelize.STRING,
    allowNull: false
   },
    age: {
      type: Sequelize.STRING,
      allowNull: false
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false
    },
    Medical_History:{
      type: Sequelize.STRING,
      allowNull: false
    },
    Availability:{
      type: Sequelize.STRING,
      allowNull: false
    },
    Preferences:{
      type: Sequelize.STRING,
      allowNull: false
    }
  });

  const parent = sequelize.define('parents', {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      primaryKey: true
    },
    cpassword: {
      type: Sequelize.STRING,
      allowNull: false
    },
    confirmPassword: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });

  const adoptedChilds = sequelize.define('adoptedChilds', {
    parentEmail: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    gender: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    age: {
      type: Sequelize.STRING,
      allowNull: false,
    }
  });
  
  // Add foreign key constraint to project
  project.belongsTo(NGO, { foreignKey: 'NGOEmail' });
  // Add foreign key constraint to donation
  donation.belongsTo(NGO, { foreignKey: 'NGOEmail' });
  donation.belongsTo(donors, { foreignKey: 'DONOREmail' });

  adoptedChilds.belongsTo(NGO, { foreignKey: 'NGOEmail' });
  adoptedChilds.belongsTo(parent, { foreignKey: 'parentEmail' });
  // Add foreign key constraint to review_results
  review_results.belongsTo(NGO, { foreignKey: 'NGOEmail' });
  child.belongsTo(NGO, { foreignKey: 'NGOEmail' });

  sequelize.sync()
  .then(() => {
    console.log('Schema synchronized with database');   // 
  })
  .catch((error) => {
    console.error('Unable to synchronize schema with database:',error);
  });
// module.exports =  {donors,NGO,ADMIN,review1,review1_results,Ppt,Ppt3,review2_results ,review3_results} 
module.exports =  {donors,NGO,ADMIN,project,review_results,donation,child,parent,adoptedChilds} 
