function sendOTP(){
    const email = document.getElementById("email");
    const otpVerify = document.getElementsByClassName("otpVerify")[0];
        
    let otp_value = Math.floor(Math.random() * 9000);
    let emailbody = `<h2>Your OTP is:</h2>${otp_value}`;
    Email.send({
        SecureToken : "612dab90-9e4c-4877-b027-a55bb70a7e2f",
        To : email.value,
        From : "hussainrao820@gmail.com",
        Subject : "Sending email using Js",
        Body : emailbody,
    }).then(
      message => {
        if (message === "OK") {
            alert("OTP sent successfully" + email.value);
            otpverify.style.display = "flex";
            const otp_inp = document.getElementById("otp");
            const otp_btn = document.getElementById("otp_btn");

            otp_btn.addEventListener("click", function(){
                if(otp_inp.value == otp_value){
                    alert("OTP Verified");
                }else{
                    alert("OTP not verified");
                }
            })
        }
      }
    );
}