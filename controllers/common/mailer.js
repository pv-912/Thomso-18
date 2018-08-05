var nodemailer = require('nodemailer');

var clientId = "36396493886-tuf1p19t65v7dd7uquh40v87cv80dgrn.apps.googleusercontent.com";
var clientSecret = "5T3VJa4gEYVzkVfJ3UI3Tzud";
var refreshToken = "1/Fom62jgBRyBZqXDLCRyKYunjs54OetXB0gZtuhfc0ZQ";

var caMailer = function(user) {
    var transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        auth: {
            type: "OAuth2",
            user: "thomso.mailer@gmail.com",
            clientId: clientId,
            clientSecret: clientSecret,
            refreshToken: refreshToken
        }
    });
    var mailOptions = {
        from: "thomso.mailer@gmail.com",
        to: "nikhilmehra998@gmail.com",
        subject: "Thomso Campus Ambassador",
        html: "<b>Congragulations. You've successfully registered as Campus Ambassador for Thomso'18.</b>"
    };
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
        } else {
            console.log(info)
        }
        transporter.close();
    });
};

var caTempMailer = function(user) {
    if (user && user.email) {
        if(!user.name) {
            user.name = 'Ambassador'
        }
    } else {
        return null
    }
    var transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        auth: {
            type: "OAuth2",
            user: "thomso.mailer@gmail.com",
            clientId: clientId,
            clientSecret: clientSecret,
            refreshToken: refreshToken
        }
    });
    var mailOptions = {
        from: "IIT Roorkee <thomso.mailer@gmail.com>",
        to: user.email,
        subject: "Thomso Campus Ambassador",
        html: `
        <html>
            <head>
                <META http-equiv="Content-Type" content="text/html; charset=utf-8">
            </head>
            <body>
                <div style="font-family:Avenir,Helvetica,sans-serif;color:#74787e;height:100%;line-height:1.4;margin:0;width:100%!important">
                <table width="100%" cellpadding="0" cellspacing="0" style="font-family:Avenir,Helvetica,sans-serif;margin:0;padding:0;width:100%">
                    <tr>
                        <td width="100%" cellpadding="0" cellspacing="0">
                            <table align="center" cellpadding="0" cellspacing="0" style="font-family:Aveni=r,Helvetica,sans-serif;background-color:#ffffff;margin:0 auto;padding:0;width:640px">
                                <tr>
                                    <td style="font-family:Avenir,Helvetica,sans-serif;padding:0px 35px">
                                        <div style="font-family:Avenir,Helvetica,sans-serif">
                                            <div style="font-family:Avenir,Helvetica,sans-serif;height:auto;margin:0 auto;display:block">
                                                <div style="font-family:Avenir,Helvetica,sans-serif;margin:0px 0;overflow:hidden">
                                                    <img src="https://thomso.in/logo.png" alt="logo" style="min-width:80px;width:10vw;height:auto">
                                                    <h5 style="font-family:Avenir,Helvetica,sans-serif;color:#222222;font-weight:600;margin-bottom:10px;font-size:14px">Dear
                                                        <span style="font-family:Avenir,Helvetica,sans-serif;color:#5288d5">`+user.name+`</span>,</h5>
                                                    <p style="font-family:Avenir,Helvetica,sans-serif;width:fit-content;text-align:justify;color:#74787e;margin-top:0;text-align:left;margin-bottom:10px;line-height:20px;font-size:13px">
                                                        Greetings from Thomso, IIT Roorkee!
                                                        <br>
                                                        <br> Congratulations, you have successfully registered as the Campus Ambassador for Thomso’18.
                                                        <br> We cordially welcome you to Thomso family as an official member.
                                                        <br> Thank you for signing up at Thomso’18.
                                                        <br>
                                                        <br> For any queries, reach out to us at <a href="mailto:thomso@yahoo.com" target="_blank">thomso@yahoo.com</a>
                                                    </p>
                                                    <br>
                                                    <p style="font-family:Avenir,Helvetica,sans-serif;color:#74787e;margin-top:0;text-align:left;margin-bottom:10px;line-height:20px;font-size:13px">Thanks
                                                        <br> Team Thomso
                                                    </p>
                                                    <br>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </div>
        </body>
    </html>`
    };
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
        } else {
            console.log(info)
        }
        transporter.close();
    });
};

exports.caMailer = caMailer;
exports.caTempMailer = caTempMailer;
