import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export class StoreValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    email: schema.string({trim: true}),
    password: schema.string({trim: true}),
  })


  public messages: CustomMessages = {
    "required": "Este campo é obrigatório"
  }
}
