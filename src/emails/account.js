const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        // to: 'babu.sivasurya@gmail.com',
        from: 'task-app@sivasurya.xyz',
        subject: 'Welcome to the Task App',
        text: `Welcome to the app ${name}. Let me know how you are liking the app`
    })
}

const sendByeEmail = (email, name) => {
    sgMail.send({
        to: email,
        // to: 'babu.sivasurya@gmail.com',
        from: 'task-app@sivasurya.xyz',
        subject: `Sorry to see you go ${name}`,
        text: `We noticed that you have deleted your account ${name}. Let us know how we can do better next time`
    })
}


module.exports = {
    sendWelcomeEmail,
    sendByeEmail
}