var nodemailer=require('nodemailer');
module.exports={
    sendEmail: (to,subject,message) => {
    var mailOption ={
        from:'sih.dipp@gmail.com',
        to: to,
        subject : subject,
        text: message
    };
    var transport=nodemailer.createTransport({
        service:'gmail',
        auth: {
            user: "sih.dipp@gmail.com",
            pass: "sih@2019"
        }
    });
    transport.sendMail(mailOption,function (err,info){
        if(err){
            console.log(err);
        }else{
            console.log('Email sent:'+info.response);
        }
    });
}
}