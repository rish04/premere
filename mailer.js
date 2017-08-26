var nodemailer = require("nodemailer");
var smtpTransport = require('nodemailer-smtp-transport');
var apiKey = "170903A3b5ymdZc51W599aa169";
var request = require("request");
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
            console.log(stringBuilder(name , time , "UB"));
            var string = "https://control.msg91.com/api/sendhttp.php?authkey="+apiKey + "&mobile="+ mobile + "&message=" + stringBuilder(name ,time, "UB") + "&sender=PREMERE&route=4&country=91";

            request.get(string)
                .on('error', function(err){
                    console.log(err);
                })
                .on('response' , function(response){
                    // console.log(response);
                });
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
                    console.log(stringBuilder(name , time , "ABODE"));
                    var string = "https://control.msg91.com/api/sendhttp.php?authkey="+apiKey + "&mobile="+ mobile + "&message=" + stringBuilder(name ,time, "UB") + "&sender=PREMERE&route=4&country=91";

                    request.get(string)
                        .on('error', function(err){
                            console.log(err);
                        })
                        .on('response' , function(response){
                            // console.log(response);
                        });
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
                            console.log(stringBuilder(name , time , "ESTANCIA"));
                            var string = "https://control.msg91.com/api/sendhttp.php?authkey="+apiKey + "&mobile="+ mobile + "&message=" + stringBuilder(name ,time, "UB") + "&sender=PREMERE&route=4&country=91";

                            request.get(string)
                                .on('error', function(err){
                                    console.log(err);
                                })
                                .on('response' , function(response){
                                    // console.log(response);
                                });
                    };

function stringBuilder(name , time, dest){
    return ( "Dear " + name + " your order will be available at " + dest + " @ " + time);
}

    module.exports = {sendUB,sendABODE,sendESTANCIA}
