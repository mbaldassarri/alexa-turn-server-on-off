var express = require('express');
var router = express.Router();
var wol = require('node-wol');
 
const fs = require('fs')
const path = require('path')
const {NodeSSH} = require('node-ssh')

const ssh = new NodeSSH()
 
/* GET home page. */
router.get('/turnon', function(req, res, next) {
  var check = req.query.token === 'your_very_long_random_token'
  
  if(check) {  
    wol.wake('YOUR_MAC_ADDRESS_HERE', function(error) {
      if(error) {
        res.send('There was an error sending the WOL packet');
        return;
      } else {
        res.send('WOL Packet Sent ! Turn ON Successful !')
      }
    });
  } else {
    res.send('There was an error');
  }
});

router.get('/turnoff', function(req, res, next) {
  var check = req.query.token === 'your_very_long_random_token'
  if(check) {
      ssh.connect({
        host: 'yourhost',
        username: 'yourusername',
        port: 22,
        privateKey: '/home/your-user/.ssh/id_rsa'
      })
      .then(function() {
        ssh.execCommand('sudo poweroff').then(function(result) {
          res.send('Server is going to sleep...')
        })
      })
  } else {
    res.send('Wrong Token!')
  }
});

module.exports = router;
