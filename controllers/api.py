import smtplib


EMAIL_ADDRESS="arturowebemail@gmail.com"
PASSWORD="websitepage2"
subject="test123"
msg="hello world"

def send_email(subject, msg):
    try:
        server = smtplib.SMTP('smtp.gmail.com:587')
        server.ehlo()
        server.starttls()
        server.login(EMAIL_ADDRESS, PASSWORD)
        message = 'Subject: {}\n\n{}'.format(subject, msg)
        server.sendmail(EMAIL_ADDRESS, EMAIL_ADDRESS, message)
        server.quit()
        print("Success: Email sent!")
    except:
        print("Email failed to send.")

def send_msg():
    success = False
    subject = request.vars.subject
    msg = request.vars.message
    send_email(subject, msg)
    return response.json(dict(success=True))
