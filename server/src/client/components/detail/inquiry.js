import { Formik } from "formik"
import { MdMail } from "react-icons/md"
import { sendEmailLead } from "../../services/NetworkRequests"
import { isServer } from "../../utils/utility"
import Button from "../common/button"
import { error, input } from "../common/input.module.scss"
import * as styles from "./inquiry.module.scss"

const InquiryForm = (props) => {
  const { emailFormBtnRef, nameInputRef, propertyId, onSuccess, ea_alert_source, url, GACallbackEvent } = props
  let href = ""
  if (!isServer()) {
    href = window.location.href
  }

  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        name: "",
        email: "",
        message: `I would like to inquire about your property ${
          url ? url : href
        }. Please contact me at your earliest convenience.`,
        phone: "",
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
        return errors
      }}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        if (GACallbackEvent) {
          GACallbackEvent()
        }

        let leadResp = await sendEmailLead({
          ...values,
          property_id: propertyId,
        })

        // TODO send specific ea_alert_source like (Desktop or listing)
        if (leadResp == "SUCCESS") {
          onSuccess(true)
          resetForm()
          // setMailModelState(false)
        }
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <>
          <form onSubmit={handleSubmit}>
            <div className={`${styles.inputWrap} u-mb24`}>
              <input
                type="name"
                name="name"
                placeholder="Enter your name"
                className={input}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                ref={nameInputRef}
              />
              <span className={styles.required} aria-required="true">
                *
              </span>
              <span className={error}>{errors.name && touched.name && errors.name}</span>
            </div>
            <div className={`${styles.inputWrap} u-mb24`}>
              <input
                type="email"
                name="email"
                placeholder="Email address"
                className={input}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <span className={styles.required} aria-required="true">
                *
              </span>
              <span className={error}>{errors.email && touched.email && errors.email}</span>
            </div>
            <div className={`${styles.inputWrap} u-mb24`}>
              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                className={input}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
              />
              <span className={styles.required} aria-required="true">
                *
              </span>
              <span className={error}>{errors.phone && touched.phone && errors.phone}</span>
            </div>
            <div className={`${styles.inputWrap} u-mb24`}>
              <textarea
                name="message"
                placeholder=""
                className={input}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
              />
              <span className={error}>{errors.message && touched.message && errors.message}</span>
            </div>
            <div className={`${styles.inputWrap} u-spbwy8`} ref={emailFormBtnRef}>
              <Button type="submit" disabled={isSubmitting} variant="secondaryGhostBtn" block>
                <MdMail /> Send Email
              </Button>
            </div>
          </form>
        </>
      )}
    </Formik>
  )
}

export default InquiryForm
