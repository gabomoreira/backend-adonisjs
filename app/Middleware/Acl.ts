import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Acl {
  public async handle({auth, response}: HttpContextContract, next: () => Promise<void>, allowedRoles: string[]) {
    
    const user = auth.authenticate() // pegando o usuario pela token do login

    if(!allowedRoles.includes((await user).role)) {
      return response.unauthorized({error: {message: 'access denied'}})
    }

    await next()
  }
}
