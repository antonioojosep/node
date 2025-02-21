import sgMail from '@sendgrid/mail';
import { listData } from './uploadController.js';
import dotenv from 'dotenv';

// Cargamos las variables de entorno
dotenv.config();

// Correo electronico
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const sendEmail = async (req, res) => {
  try {
    // Llamamos a listData y esperamos la respuesta
    const files = await listData();  // Esperamos a que se resuelva la Promise

    if (!files || files.length === 0) {
      return res.status(400).json({ message: "No se encontraron archivos." });
    }

    // Crear el mensaje
    const msg = {
      to: 'antonillocarriillo@gmail.com', // Dirección de destino
      from: 'antonillocarriillo@outlook.es',  // Dirección de origen (verificada en SendGrid)
      subject: 'Archivos adjuntos',
      text: 'Aquí tienes los archivos que solicitaste.',
      attachments : [
        {
          filename: 'data',
          content: Buffer.from(JSON.stringify(files)).toString("base64"),
          type: 'application/json',
          disposition: 'attachment'

        },
        // Añadir más attachments si existen...  (Ejemplo: { filename: files[1].name, content: await fsPromises.readFile(path.join(uploadsDir, files[1].name)), type: 'application/octet-stream' },)
      ]
    };

    // Enviar el correo
    await sgMail.send(msg);

    // Responder con éxito
    res.status(200).json({ message: "Correo enviado con archivos adjuntos." });

  } catch (error) {
    console.error("Error al enviar correo:", error);
    res.status(500).json({ message: "Error al enviar correo", error });
  }
};