import { useState } from "react";
import emailjs, { send } from "emailjs-com";
import { useForm } from "react-hook-form";

const Contact = () => {

    const [successMessage, setSuccessMessage] = useState("");
    const { register, formState: { errors }, handleSubmit } = useForm();

    const serviceID = "service_ID";
    const templateID = "template_ID";
    const userID = "user_z0OYB2901L4uatLvIEd3j";

    const onSubmit = (data, r) => {
        sendEmail(
            serviceID,
            templateID,
            {
                name: data.name,
                phone: data.phone,
                email: data.email,
                subject: data.subject,
                description: data.description
            },
            userID
        )
        r.target.reset();
    }

    const sendEmail = (serviceID, templateID, variables, userID) => {
        emailjs.send(serviceID, templateID, variables, userID)
            .then(() => {
                setSuccessMessage("Form sent successfully!");
            }).catch(err => console.error(`Something went wrong ${err}`));
    }

    return (
        <div className="contact">
            <div className="text-center">
                <h1>Contact me</h1>
                <p>Please fill out the form. I will contact you as soon as possible.</p>
                <span className="success-message">{successMessage}</span>
            </div>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-md-6 col-xs-12">
                            {/* NAME INPUT */}
                            <div className="text-center">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Name"
                                    name="name"
                                    {...register("name", { required: true, maxLength: 25 })}
                                />
                                <div className="line"></div>
                                {errors.name?.type === "required" && <span className="error-message">Please provide your name</span>}
                            </div>
                            {/* PHONE INPUT */}
                            <div className="text-center">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Phone Number"
                                    name="phone"
                                />
                                <div className="line"></div>
                            </div>
                            {/* EMAIL INPUT */}
                            <div className="text-center">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    name="email"
                                    {...register("email", {
                                        required: "required",
                                        pattern: {
                                            value: /\S+@\S+\.\S+/,
                                        }
                                    })}
                                />
                                <div className="line"></div>
                                {errors.email?.type === "required" && <span className="error-message">Please provide a valid email address</span>}
                                {errors.email?.type === "pattern" && <span className="error-message">Entered value does not match email format</span>}
                            </div>
                            {/* SUBJECT INPUT */}
                            <div className="text-center">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Subject"
                                    name="subject"
                                    {...register("subject", { required: true, maxLength: 100 })}
                                />
                                <div className="line"></div>
                                {errors.subject && errors.subject.type === "required" && <span className="error-message">This is required</span>}
                                {errors.subject && errors.subject.type === "maxLength" && <span className="error-message">Subject must not be longer than 100 characters.</span>}
                            </div>
                        </div>
                        <div className="col-md-6 col-xs-12">
                            {/* DESCRIPTION INPUT */}
                            <div className="text-center">
                                <textarea
                                    type="text"
                                    className="form-control"
                                    placeholder="Please enter your message..."
                                    name="description"
                                    {...register("description", { required: true, maxLength: 500 })}
                                >
                                </textarea>
                                <div className="line"></div>
                                {errors.description && errors.subject.type === "required" && <span>This is required</span>}
                                {errors.description?.type === "maxLength" && <span className="error-message">Subject must not be longer than 500 characters.</span>}
                                <button className="btn-main-offer contact-btn" type="submit">
                                    Contact me
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;