import axios from "axios";

export function fetchTemplateData(templateName) {
    const url = "http://localhost:3001/" + templateName;

    return axios
        .get(url)
        .then(response => response.data)
        .catch(error => {
            console.warn(error);
            return null;
        });
}
