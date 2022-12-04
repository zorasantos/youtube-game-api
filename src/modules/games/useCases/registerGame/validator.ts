import { Joi, Segments } from 'celebrate';

import { customMessage } from '../../../../utils/errors';

const registerValidator = {
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required().messages(customMessage('name')),
    designer: Joi.string().required().messages(customMessage('designer')),
    genre: Joi.string().required().messages(customMessage('genre')),
    platform: Joi.string().required().messages(customMessage('platform')),
    developer: Joi.string().required().messages(customMessage('developer')),
    releaseData: Joi.string().required().messages(customMessage('releaseData')),
    mode: Joi.string().required().messages(customMessage('mode'))
  })
};

export { registerValidator };
