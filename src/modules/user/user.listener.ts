import { Injectable } from '@nestjs/common';

import { AuthHelpers } from '../../shared/helpers/auth.helpers';

@Injectable()
export class UserListener {
  static async onCreated(params, next) {
    // Check incoming query type
    if (params.model == 'User') {
      if (params.action === 'create' || params.action === 'update') {
        const senha = params.args['data'].senha;

        const encryptedPass = await AuthHelpers.hash(senha);

        params.args['data'] = {
          ...params.args['data'],
          senha: encryptedPass,
        };
      }
    }

    return next(params);
  }
}
