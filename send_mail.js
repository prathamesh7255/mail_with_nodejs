require('dotenv').config();
const mailer=require('nodemailer');

const send_mail=async (obj)=>{
    const {from,to,subject,html,attachments}=obj;
    try{
        let sender=mailer.createTransport({
            host:'localhost:5000',
            port:587,
            auth:{
                user:process.env.user,
                pass:process.env.pass
            }
        });
        let info=await sender.sendMail({
            from:from,
            to:to,
            subject:subject,
            html:html,
            attachments:attachments
        });
        console.log(`Message sent successfully: ${info.messageId}`)
        return `Sent: ${info.messageId}`;
    }
    catch(err){
        console.error(err);
        throw new_error(
            `Something went wrong. Error: ${err}`
        );
    }
};

module.exports=send_mail;