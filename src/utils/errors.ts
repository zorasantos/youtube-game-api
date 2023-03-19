const customMessage = (field: string) => {
  return {
    'string.empty': `O campo ${field} não pode ser vazio!`,
    'any.required': `O campo ${field} é obrigatório!`
  };
};

export { customMessage };
