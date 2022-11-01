import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'posts'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('title').nullable().unique()
      table.text('content', 'longtext')
      table.integer('author_id').unsigned().references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE') // sem limite de integer
      table.enu('level', ['basic', 'advanced'])

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
