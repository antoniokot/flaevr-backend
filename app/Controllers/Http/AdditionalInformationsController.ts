import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Database from '@ioc:Adonis/Lucid/Database';

export default class AdditionalInformationsController {

  public async list(ctx: HttpContextContract) {
    
    const additionalInformations = await Database
      .query()
      .from('AdditionalInformation')
      .select('*');
    
    return additionalInformations;
  }

  public async index(ctx: HttpContextContract) {

    const idUser = ctx.request.params().idUser;

    const additionalInformation = await Database
      .query()
      .from('AdditionalInformation')
      .join('User', 'User.idUser', '=', 'AdditionalInformation.idUser')
      .select('AdditionalInformation.idUser as idUser')
      .select('AdditionalInformation.age as age')
      .select('AdditionalInformation.gender as gender')
      .select('AdditionalInformation.af as af')
      .select('AdditionalInformation.height as height')
      .select('AdditionalInformation.weight as weight')
      .select('AdditionalInformation.idealWeight as idealWeight')
      .where('AdditionalInformation.idUser', idUser);

    return additionalInformation;
  }

  public async store(ctx: HttpContextContract) {

    const body = ctx.request.body();

    const additionalInformation = await Database
      .table('AdditionalInformation')
      .returning(['idAdditionalInformation', 'idUser', 'age', 'gender', 'af', 'height', 'weight', 'idealWeight'])
      .insert({
        idUser: body.idUser,
        age: body.age,
        gender: body.gender,
        af: body.af,
        height: body.height,
        weight: body.weight,
        idealWeight: body.idealWeight,
      });

    return additionalInformation;
  }

  public async alter(ctx: HttpContextContract) {

    const id = ctx.request.params().id;
    const body = ctx.request.body();

    const additionalInformation = Database
      .from('AdditionalInformation')
      .where('idAdditionalInformation', id)
      .update({
        idUser: body.idUser,
        age: body.age,
        gender: body.gender,
        af: body.af,
        height: body.height,
        weight: body.weight,
        idealWeight: body.idealWeight,
      }, ['idAdditionalInformation', 'idUser', 'age', 'gender', 'af', 'height', 'weight', 'idealWeight']
    );

    return additionalInformation;
  }

  public async remove(ctx: HttpContextContract) {

    const id = ctx.request.params().id;

    const additionalInformation = Database
      .from('AdditionalInformation')
      .where('idAdditionalInformation', id)
      .delete();

    return additionalInformation;
  }
}
