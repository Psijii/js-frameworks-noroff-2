/**
 * ContactPage component for displaying a contact form.
 *
 * @component
 * @example
 * return (
 *   <ContactPage />
 * )
 */
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";

import "./ContactPage.css";
import styles from "../components/Button.module.css";

const schema = yup.object({
  fullName: yup
    .string()
    .min(3, "Your name should be at least three (3) characters.")
    .required("Please enter your full name."),
  email: yup
    .string()
    .email("Please enter a valid e-mail address.")
    .required("Please enter a valid e-mail address."),
  subject: yup
    .string()
    .min(3, "Your subject should be at least three (3) characters.")
    .required("Please enter a subject."),
  body: yup
    .string()
    .min(3, "Your message should be at least three (3) characters.")
    .required("Please enter a message."),
});

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
      <h1>Contact us</h1>
      <span>If you have any questions, do not hesitate to contact us.</span>
      <br /><br />
      <label htmlFor="fullName">Full name</label>
      <input id="fullName" name="fullName" {...register("fullName")} />
      {errors.fullName && <p>{errors.fullName.message}</p>}
      <label htmlFor="email">E-mail address</label>
      <input id="email" name="email" {...register("email")} autoComplete="email" />
      {errors.email && <p>{errors.email.message}</p>}
      <label htmlFor="subject">Subject</label>
      <input id="subject" name="subject" {...register("subject")} />
      {errors.subject && <p>{errors.subject.message}</p>}
      <label htmlFor="body">Message</label>
      <textarea id="body" name="body" {...register("body")} />
      {errors.body && <p>{errors.body.message}</p>}
      <input type="submit" value="Send" className={styles.secondary} />
    </form>
  );
}  
