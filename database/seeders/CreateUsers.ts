import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class extends BaseSeeder {
  // public static developmentOnly = true

  public async run () {
    await User.createMany([
      {
        'email': 'admin@gmail.com',
        'name': 'gabo',
        'password': 'admin',
        'role': 'admin'
      },
      {
        'email': 'normal@gmail.com',
        'name': 'sakuta',
        'password': 'normal',
        'role': 'normal'
      },
    ])
  }
}
