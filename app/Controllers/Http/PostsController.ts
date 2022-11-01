import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Post from 'App/Models/Post'
import {StoreValidator, UpdateValidator} from 'App/Validators/Post'

export default class PostsController {
  public async index({}: HttpContextContract) {
    const posts = await Post.query().orderBy('id')

    return posts
  } // listar

  public async store({request}: HttpContextContract) {
    const data = await request.validate(StoreValidator)
    const post = await Post.create(data)

    return post
  } // armazenar no db

  public async show({params}: HttpContextContract) {
    const post = await Post.findOrFail(params.id)

    return post
  } // exibir uma especifica

  public async update({params, request}: HttpContextContract) {
    const post = await Post.findOrFail(params.id)
    const data = await request.validate(UpdateValidator)

    post.merge(data) // mesclar com os dados q ja tenho

    await post.save()

    return post

  } // atualizar

  public async destroy({params}: HttpContextContract) {
    const post = await Post.findOrFail(params.id)

    await post.delete()

  } // deletar
}
