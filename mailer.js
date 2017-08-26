var nodemailer = require("nodemailer");
var smtpTransport = require('nodemailer-smtp-transport');

var transporter = nodemailer.createTransport(smtpTransport({
    service: "Gmail",
    auth: {
        user: "premere.shop@gmail.com",
        pass: "Premere.98765"
    }
})
);

var sendUB = function(name,mobile,choose,print,time,comment,files){

    var attachments_arr = [];
    var path ;
        for(i=0;i<files.length;i++)
        {
            path = "uploads/" + files[i].filename;
            attachments_arr.push({ 'path' : path})

      }
      

        var mailOptions={
            
                    from: 'premere.shop@gmail.com',
                    to : 'premere.ub@gmail.com',
                
                    subject : `Xerox for ${name} at ${time}`,
                    text : `
                    Name : ${name}
                    Mobile : ${mobile}
                    Day : ${choose}
                    Print : ${print}
                    Time : ${time}
                    Comment : ${comment}`,
                    attachments: attachments_arr
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

    var sendABODE = function(name,mobile,choose,print,time,comment,files){
        
            var attachments_arr = [];
            var path ;
                for(i=0;i<files.length;i++)
                {
                    path = "uploads/" + files[i].filename;
                    attachments_arr.push({ 'path' : path})
        
              }
              
        
                var mailOptions={
                        from: 'premere.shop@gmail.com',
                        to : 'premere.abode@gmail.com',
                        
                            subject : `Xerox for ${name} at ${time}`,
                            text : `
                            Name : ${name}
                            Mobile : ${mobile}
                            Day: ${choose}
                            Print: ${print}
                            Time : ${time}
                            Comment : ${comment}`,
                            attachments: attachments_arr
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

 var sendESTANCIA = function(name,mobile,choose,print,time,comment,files){
                
          var attachments_arr = [];
                  var path ;
                   for(i=0;i<files.length;i++)
               {
                 path = "uploads/" + files[i].filename;
              attachments_arr.push({ 'path' : path})
                
               }
                      
                
           var mailOptions={
                         
                   from: 'premere.shop@gmail.com',
                                to : 'premere.estancia@gmail.com',
                                
                                    subject : `Xerox for ${name} at ${time}`,
                                    text : `
                                    Name : ${name}
                                    Mobile : ${mobile}
                                    Day : ${choose}
                                     Print: ${print}
                                       Comment : ${comment}
                                    Time : ${time}`,
                                    attachments: attachments_arr
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
