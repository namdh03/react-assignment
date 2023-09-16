import { useState } from "react";
import Input from "./Input";
import Header from "@/components/Header";

const initialFormState = {
    name: "",
    email: "",
    code: "",
    phone: "",
};

const Form = () => {
    const [form, setForm] = useState(initialFormState);
    const [errors, setErrors] = useState(initialFormState);

    const validateField = (name, value) => {
        switch (name) {
            case "name": {
                if (value.trim().length < 2) {
                    setErrors((prevErrors) => ({
                        ...prevErrors,
                        name: "Name must be at least 2 characters",
                    }));
                } else {
                    clearError(name);
                }
                break;
            }

            case "email": {
                const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
                if (!regex.test(value.trim())) {
                    setErrors((prevErrors) => ({
                        ...prevErrors,
                        email: "Invalid email",
                    }));
                } else {
                    clearError(name);
                }
                break;
            }

            case "code": {
                // Không làm dụng quá regex nên code chạy đoạn logic bên dưới :)
                const regex = /^[0-9]{6}$/;
                const _value = value.trim().toUpperCase();
                const majorId = _value.slice(0, 2);
                const stuId = _value.slice(2, _value.length);

                const words = ["SE", "SA", "SS"].some((word) =>
                    majorId.startsWith(word)
                );

                if (!words || !regex.test(stuId)) {
                    setErrors((prevErrors) => ({
                        ...prevErrors,
                        code: "Invalid student ID",
                    }));
                } else {
                    clearError(name);
                }
                break;
            }

            case "phone": {
                const regex = /^(0|\+?84)(3|5|7|8|9)[0-9]{8}$/;
                if (!regex.test(value.trim())) {
                    setErrors((prevErrors) => ({
                        ...prevErrors,
                        phone: "Invalid phone number",
                    }));
                } else {
                    clearError(name);
                }
                break;
            }

            default:
                break;
        }
    };

    const clearError = (errorName) => {
        setErrors((prevErrors) => ({ ...prevErrors, [errorName]: "" }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        validateField(name, value);

        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        validateField(name, value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let hasErrors = false;

        for (let key in form) {
            validateField(key, form[key]);

            if (errors[key]) {
                hasErrors = true;
            }
        }

        const isFormEmpty = Object.values(form).some(
            (value) => value.trim() === ""
        );

        if (hasErrors || isFormEmpty) {
            alert("Invalid form");
        } else {
            alert(JSON.stringify(form));
        }
    };

    return (
        <>
            <Header />
            <div className="flex flex-col items-center mt-[118px]">
                <h1 className="mb-10 text-[#101920] text-4xl font-bold leading-[0.91667]">
                    K18 Recruitment
                </h1>

                <form
                    action=""
                    method="POST"
                    id="form"
                    className="flex flex-col gap-y-4"
                    onSubmit={handleSubmit}
                >
                    <Input
                        label="Student Name"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        value={form.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        errorMsg={errors.name}
                    />

                    <Input
                        email
                        label="Email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        value={form.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        errorMsg={errors.email}
                    />

                    <Input
                        label="Student ID"
                        id="code"
                        name="code"
                        placeholder="Enter your student ID"
                        value={form.code}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        errorMsg={errors.code}
                    />

                    <Input
                        label="Phone number"
                        id="phone"
                        name="phone"
                        placeholder="Enter your phone number"
                        value={form.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        errorMsg={errors.phone}
                    />

                    <button
                        className="mt-3 w-full h-[46px] leading-[46px] text-white rounded-lg bg-[#0F62FE]
                    hover:opacity-90"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
};

export default Form;
