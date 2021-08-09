export const helpers = {
  parseErrors: (errors) => {
    let errs = JSON.parse(errors);
    return errs;
  },
};
