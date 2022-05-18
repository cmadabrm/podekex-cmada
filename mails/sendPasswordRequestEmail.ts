const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
export async function enviarTokenEmail( email: string, token: string = '', url:string = '' ) {

    let transport = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASS
        }
      });
  
    let info = await transport.sendMail({
      from: '"Norson Apps" <no-reply@norson.net>', // sender address
      to: email, // list of receivers
      subject: "Notificaciones Norson", // Subject line
      html: htmlEmail( token, url), // html body
    });

}

const htmlEmail = ( token: string , url:string = '') => {
    const html = `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns:v="urn:schemas-microsoft-com:vml">
   <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0;" />
      <!--[if !mso]--><!-- -->
         <link href='https://fonts.googleapis.com/css?family=Work+Sans:300,400,500,600,700' rel="stylesheet">
         <link href='https://fonts.googleapis.com/css?family=Quicksand:300,400,700' rel="stylesheet">
         <!--<![endif]-->
         <title>App Norson</title>
         <style type="text/css">
         body {
         width: 100%;
         background-color: #ffffff;
         margin: 0;
         padding: 0;
         -webkit-font-smoothing: antialiased;
         mso-margin-top-alt: 0px;
         mso-margin-bottom-alt: 0px;
         mso-padding-alt: 0px 0px 0px 0px;
         }
         p,
         h1,
         h2,
         h3,
         h4 {
         margin-top: 0;
         margin-bottom: 0;
         padding-top: 0;
         padding-bottom: 0;
         }
         span.preheader {
         display: none;
         font-size: 1px;
         }
         html {
         width: 100%;
         }
         table {
         font-size: 14px;
         border: 0;
         }
         /* ----------- responsivity ----------- */
         @media only screen and (max-width: 640px) {
         /*------ top header ------ */
         .main-header {
         font-size: 20px !important;
         }
         .main-section-header {
         font-size: 28px !important;
         }
         .show {
         display: block !important;
         }
         .hide {
         display: none !important;
         }
         .align-center {
         text-align: center !important;
         }
         .no-bg {
         background: none !important;
         }
         /*----- main image -------*/
         .main-image img {
         width: 440px !important;
         height: auto !important;
         }
         /* ====== divider ====== */
         .divider img {
         width: 440px !important;
         }
         /*-------- container --------*/
         .container590 {
         width: 440px !important;
         }
         .container580 {
         width: 400px !important;
         }
         .main-button {
         width: 220px !important;
         }
         /*-------- secions ----------*/
         .section-img img {
         width: 320px !important;
         height: auto !important;
         }
         .team-img img {
         width: 100% !important;
         height: auto !important;
         }
         }
         @media only screen and (max-width: 479px) {
         /*------ top header ------ */
         .main-header {
         font-size: 18px !important;
         }
         .main-section-header {
         font-size: 26px !important;
         }
         /* ====== divider ====== */
         .divider img {
         width: 280px !important;
         }
         /*-------- container --------*/
         .container590 {
         width: 280px !important;
         }
         .container590 {
         width: 280px !important;
         }
         .container580 {
         width: 260px !important;
         }
         /*-------- secions ----------*/
         .section-img img {
         width: 280px !important;
         height: auto !important;
         }
         }
         </style>
   </head>
   <body class="respond" leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">
      <!-- header -->
      <table border="0" width="100%" cellpadding="0" cellspacing="0" bgcolor="ffffff">
         <tr>
            <td align="center">
               <table border="0" align="center" width="590" cellpadding="0" cellspacing="0" class="container590">
                  <tr>
                     <td height="25" style="font-size: 25px; line-height: 25px;">&nbsp;</td>
                  </tr>
                  <tr>
                     <td align="center">
                        <table border="0" align="center" width="590" cellpadding="0" cellspacing="0" class="container590" bgcolor="007bff">
                           <tr>
                              <td align="center" height="70" style="height:70px;">
                                 <a href="" style="display: block; border-style: none !important; border: 0 !important;"><img width="100" border="0" style="display: block; width: 110px;" src="https://norson.net/wp-content/uploads/2020/08/Logo_Norson.png" alt="" /></a>
                              </td>
                           </tr>
                        </table>
                     </td>
                  </tr>
                  <tr>
                     <td height="25" style="font-size: 25px; line-height: 25px;">&nbsp;</td>
                  </tr>
               </table>
            </td>
         </tr>
      </table>
      <!-- end header -->
      <!-- big image section -->
      <table border="0" width="100%" cellpadding="0" cellspacing="0" bgcolor="ffffff" class="bg_color">
         <tr>
            <td align="center">
               <table border="0" align="center" width="590" cellpadding="0" cellspacing="0" class="container590">
                  <tr>
                     <td align="center" style="color: #343434; font-size: 24px; font-family: Quicksand, Calibri, sans-serif; font-weight:700;letter-spacing: 3px; line-height: 35px;"
                        class="main-header">
                        <!-- section text ======-->
                        <div style="line-height: 35px">
                            Reestablecer Contraseña
                        </div>
                     </td>
                  </tr>
                  <tr>
                     <td height="10" style="font-size: 10px; line-height: 10px;">&nbsp;</td>
                  </tr>
                  <tr>
                     <td align="center">
                        <table border="0" width="40" align="center" cellpadding="0" cellspacing="0" bgcolor="eeeeee">
                           <tr>
                              <td height="2" style="font-size: 2px; line-height: 2px;">&nbsp;</td>
                           </tr>
                        </table>
                     </td>
                  </tr>
                  <tr>
                     <td height="20" style="font-size: 20px; line-height: 20px;">&nbsp;</td>
                  </tr>
                  <tr>
                     <td align="left">
                        <table border="0" width="590" align="center" cellpadding="0" cellspacing="0" class="container590">
                           <tr>
                              <td align="left" style="color: #888888; font-size: 16px; font-family: 'Work Sans', Calibri, sans-serif; line-height: 24px;">
                                 <!-- section text ======-->
                                 <p style="line-height: 24px; margin-bottom:15px;">
                                    Hola
                                 </p>
                                 <p style="line-height: 24px;margin-bottom:15px;">
                                    Recibes este E-Mail porque se solicitó un reestablecimiento de contraseña para tu cuenta...,
                                 </p>
                                 <p style="line-height: 24px; margin-bottom:20px;">
                                 Este link para reestablecer la contraseña expira en 60 minutos. Si no realizaste esta petición, puedes ignorar este correo y nada habrá cambiado.
                                 ¡Saludos!
                                 </p>
                                 <table border="0" align="center" width="180" cellpadding="0" cellspacing="0" bgcolor="007bff" style="margin-bottom:20px;">
                                    <tr>
                                       <td height="10" style="font-size: 10px; line-height: 10px;">&nbsp;</td>
                                    </tr>
                                    <tr>
                                       <td align="center" style="color: #ffffff; font-size: 14px; font-family: 'Work Sans', Calibri, sans-serif; line-height: 22px; letter-spacing: 2px;">
                                          <!-- main section button -->
                                          <div style="line-height: 22px;">
                                             <a href='${ url }${ token }' style="color: #ffffff; text-decoration: none;">REESTABLECER</a>
                                          </div>
                                       </td>
                                    </tr>
                                    <tr>
                                       <td height="10" style="font-size: 10px; line-height: 10px;">&nbsp;</td>
                                    </tr>
                                 </table>
                                 <p style="line-height: 24px">
                                    Te deseamos buen día,</br>
                                    Norson App Team
                                 </p>
                              </td>
                           </tr>
                        </table>
                     </td>
                  </tr>
               </table>
            </td>
         </tr>
         <tr>
            <td height="40" style="font-size: 40px; line-height: 40px;">&nbsp;</td>
         </tr>
      </table>
      <!-- end section -->
   </body>
</html>
`;

return html;
}