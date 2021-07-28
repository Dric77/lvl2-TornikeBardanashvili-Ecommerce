export const Helpers = {
  errorHandling: (response, setErrors, actionFn, values) => {
    if (!response.ok) {
      response.text().then((error) => setErrors(JSON.parse(error)));
    } else {
      actionFn(values);
      return response;
    }
  }
};
