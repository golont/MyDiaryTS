import { inputObject } from "./input";

function validateEmail(email: string): boolean {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export const validateForm = (input: inputObject[]) => {
    let isValid = true;
    for (const field of input) {
        const { value, validType } = field;
        if (value) {
            switch (validType) {
                case "email":
                    if (!validateEmail(value)) {
                        field.ref!.classList.add("input-invalid");
                        isValid = false;
                    }
                    break;
                case "text":
                    if (
                        !(
                            /^[A-Za-z0-9@\-]*$/.test(value) &&
                            value.length > 3 &&
                            value.length < 25
                        )
                    ) {
                        field.ref!.classList.add("input-invalid");
                        isValid = false;
                    }
                    break;
                case "phone":
                    if (
                        !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(
                            value
                        )
                    ) {
                        field.ref!.classList.add("input-invalid");
                        isValid = false;
                    }
                    break;
            }
        } else {
            isValid = false;
            field.ref!.classList.add("input-invalid");
        }
    }
    return isValid;
};
