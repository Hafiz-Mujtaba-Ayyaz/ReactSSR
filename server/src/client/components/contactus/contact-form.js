import { Formik } from "formik"
import React from "react"
import { MdMail } from "react-icons/md"
import { sendContactUsEmail } from "../../services/NetworkRequests"
import { CONTACT_MAIL } from "../../utils/constants"
import Button from "../common/button"
import { error, input } from "../common/input.module.scss"
import { inputWrap, required } from "../detail/inquiry.module.scss"

const ContctForm = (props) => {
  const { setStatus } = props
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        message: "",
        phone: "",
        subject: "",
      }}
      validate={(values) => {
        const errors = {}
        if (!values.email) {
          errors.email = "Email is Required"
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
          errors.email = "Invalid email address"
        }
        if (!values.name) {
          errors.name = "Name is Required"
        }
        if (!values.phone) {
          errors.phone = "Number is Required"
        } else if (!/^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/i.test(values.phone)) {
          errors.phone = "Invalid number format"
        }
        if (!values.subject) {
          errors.subject = "Subject is Required"
        }
        return errors
      }}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        let resp = await sendContactUsEmail(values, "CONTACT_MAIL")
        if (resp == "SUCCESS") {
          setStatus(true)
          resetForm()
        }
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <form onSubmit={handleSubmit}>
          <div className={`${inputWrap} u-mb24`}>
            <input
              type="name"
              name="name"
              placeholder="Enter your name"
              className={input}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            <span className={required} aria-required="true">
              *
            </span>
            <span className={error}>{errors.name && touched.name && errors.name}</span>
          </div>
          <div className={`${inputWrap} u-mb24`}>
            <input
              type="email"
              name="email"
              placeholder="Email address"
              className={input}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            <span className={required} aria-required="true">
              *
            </span>
            <span className={error}>{errors.email && touched.email && errors.email}</span>
          </div>
          <div className={`${inputWrap} u-mb24`}>
            <input
              type="tel"
              name="phone"
              placeholder="Phone number"
              className={input}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phone}
            />
            <span className={required} aria-required="true">
              *
            </span>
            <span className={error}>{errors.phone && touched.phone && errors.phone}</span>
          </div>
          <div className={`${inputWrap} u-mb24`}>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className={input}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.subject}
            />
            <span className={required} aria-required="true">
              *
            </span>
            <span className={error}>{errors.subject && touched.subject && errors.subject}</span>
          </div>
          <div className={`${inputWrap} u-mb24`}>
            <textarea
              name="message"
              placeholder="Message"
              className={input}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.message}
            />
            <span className={error}>{errors.message && touched.message && errors.message}</span>
          </div>
          <Button type="submit" variant="secondaryBtn" block>
            <MdMail />
            Send Email
          </Button>
        </form>
      )}
    </Formik>
  )
}

export default ContctForm
