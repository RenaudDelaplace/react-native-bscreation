import { composeAsync } from "expo-mail-composer"
import * as yup from 'yup';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

let schema = yup.object().shape({
    name: yup.string().required('Vous devez entrer votre nom'),
    phone: yup.string().matches(phoneRegExp, 'Le numéro de téléphone est invalide'),
    email: yup.string().email("L'adresse email est invalide").required("Vous devez entrer une adresse mail valide"),
    body: yup.string().required("Un message est obligatoire"),
});

const Send = (option, callback) => {
    composeAsync(option).then(() => callback())
}

const Default = (name, phone, email, body, callback) => {
    return new Promise((resolve, error) => {
        schema.validate({
            name: name,
            phone: phone,
            email: email,
            body: body,
        }).then(() => {
            Send({
                subject: "[React-Native] BsCréation",
                body: body,
                recipients: ['delaplacerenaud@hotmail.com'],
                isHtml: true,
            }, callback)
            resolve("Send")
        })
        .catch((err) => {
            error(err.errors[0])
        })
    })
}

exports.Send = Send
exports.Default = Default