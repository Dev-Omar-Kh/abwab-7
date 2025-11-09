import * as Yup from "yup";

export const ContactSchema = Yup.object().shape({
    name: Yup.string()
        .trim()
        .required("contactUs.form.validations.required")
        .min(2, 'contactUs.form.validations.minName'),

    phone: Yup.string()
        .trim()
        .required("contactUs.form.validations.required")
        .matches(
            /^\+?[0-9]{7,15}$/,
            'contactUs.form.validations.phoneInvalid'
        ),

    message: Yup.string()
        .trim()
        .required("contactUs.form.validations.required")
        .min(10, 'contactUs.form.validations.minMessage')
        .max(250, 'contactUs.form.validations.maxMessage'),
});
