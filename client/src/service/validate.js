export const validate = (input, value) => {
  if (input === 'userName') {
    if (value.length < 3)
      return `Vartotojo pseudonimas turi būti bent keturi simboliai`;
    if (value.length > 30) return `Negali būti toks ilgas vartotojo vardas`;
  }
  if (input === 'age') {
    if (isNaN(value)) return `Tik skaičius`;
    if (value > 150) return `Nieks iki tiek negyvena`;
    if (value < 18)
      return `Tai yra suaugusiūjų platforma, turi tuėti bent 18 metų`;
  }
  if (input === 'email') {
    const emailValidationRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailValidationRegex.test(value))
      return `Neteisingas el paštas. bandykite dar kartą`;
  }
  if (input === 'password') {
    if (value.length < 7)
      return `Slaptažodis turi būti ilgesnis nei  15 simbolių`;
  }

  return '';
};
