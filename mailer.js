
var nodemailer = require("nodemailer");
var smtpTransport = require('nodemailer-smtp-transport');

var transporter = nodemailer.createTransport(smtpTransport({
    service: "Gmail",
    auth: {
        user: "premere.shop@gmail.com",
        pass: "Premere.98765" // Generate: https://support.google.com/accounts/answer/185833
    }
})
);

var sendUB = function(name,mobile,time,filename){

    var mailOptions={
        
                from: 'premere.shop@gmail.com',
               to : 'premere.ub@gmail.com',
                subject : `PrintOut for ${name} at ${time}`,
                text : `
                Name : ${name}
                Mobile : ${mobile}
                Time : ${time}
                Filename: ${filename}`,
                attachments: [
                    {   // utf-8 string as an attachment
                        path : `uploads/${filename}`,
                    }
                ]
            }
        
transporter.sendMail(mailOptions, function(error, info) {
        
   if (error) {
               console.log(error);
                
              } else {
               console.log(info);
              }
        });
        // close connection 
        transporter.close();
    };

    var sendABODE = function(name,mobile,time,filename){
        
            var mailOptions={
                
                        from: 'premere.shop@gmail.com',
                        to : 'premere.abode@gmail.com',
                        subject : `PrintOut for ${filename}`,
                        text : `
                        Name : ${name}
                        Mobile : ${mobile}
                        Time : ${time}
                        Filename: ${filename}`,
                        attachments: [
                            {   // utf-8 string as an attachment
                                path : `uploads/${filename}`,
                            }
                        ]
                    }
                
        transporter.sendMail(mailOptions, function(error, info) {
                
           if (error) {
                       console.log(error);
                        
                      } else {
                       console.log(info);
                      }
                });
                // close connection 
                transporter.close();
            };

            var sendESTANCIA = function(filename){
                
                    var mailOptions={
                        
                                from: 'premere.shop@gmail.com',
                                to : 'premere.abode@gmail.com',
                                subject : `PrintOut for ${filename}`,
                                text : 'Test TxT',
                                attachments: [
                                    {   // utf-8 string as an attachment
                                        path : `uploads/${filename}`,
                                    }
                                ]
                            }
                        
                transporter.sendMail(mailOptions, function(error, info) {
                        
                   if (error) {
                               console.log(error);
                                
                              } else {
                               console.log(info);
                              }
                        });
                        // close connection 
                        transporter.close();
                    };

    module.exports = {sendUB,sendABODE,sendESTANCIA}
